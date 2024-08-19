const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(express.json());

const Product = require('./models/Product');
const User = require('./models/User');

const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });



app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

app.get('/api/user-products', async (req, res) => {
  const email = req.query.email;
  try {
    const products = await Product.find({ email: email });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    console.log(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
});


// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, 
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image'); 

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// File upload endpoint
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: 'No file selected!' });
      } else {
        res.status(200).json(req.file.filename);
      }
    }
  });
});

// endpoint to serve all images
app.use('/images', express.static('images'));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (user && user.password === password) {
        const token = jwt.sign({ user }, "secretKey");
        res.status(200).json({ token });
      } else {
        res.status(401).json("Wrong Credentials");
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, mobile, whatsapp, password, address } = req.body;
  const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      whatsapp,
      password,
      address
  });
  newUser.save()
  .then(user=>{
      // const token = jwt.sign(user, "secretKey");	
      res.status(200).json({ user });
  })
  .catch(err=>{
    res.status(500).json(err)
  })
})

app.get("/check-email", async (req, res) => {
  const email = req.query.email;
  User.findOne({ email: email })
    .then(user => {
      if (user) {
        res.status(200).json(true);
      } else {
        res.status(200).json(false);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
