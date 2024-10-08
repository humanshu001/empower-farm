const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String},
  category: { type: String, required: true },
  mobile: { type: String, required: true },
  whatsapp: { type: String, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true
});

productSchema.plugin(AutoIncrement, { inc_field: 'productId' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
