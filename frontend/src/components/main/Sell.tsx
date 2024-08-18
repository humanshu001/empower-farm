"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { toast } from "sonner"


export default function Sell() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e:any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (name === '' || description === '' || price === '' || category === '' || !image) {
      toast.error('Please fill all the fields');
      return;
    }

    const fileUrl = 'http://localhost:5000/upload';
    const url = 'http://localhost:5000/api/products';
    const imageData = new FormData();
    imageData.append('image', image);

    fetch(fileUrl, {
      method: 'POST',
      body: imageData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      toast.success('File uploaded successfully!');
      const productData = {
        name: name,
        description: description,
        price: price,
        category: category,
        image: data,
        mobile: "9876543210",
        whatsapp: "9876543210",
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        toast.success('Product added successfully!');
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImage(null);
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to add product');
      });
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('Failed to upload file');
    });
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-black text-center my-5 px-3">Add your Product details</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex justify-between" id="col-600">
          <Card className="m-3 w-full">
            <CardHeader>
              <CardTitle className="font-extrabold">Product Info</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    className="min-h-32 resize-none"
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="m-3 w-full" id="width-100">
            <CardHeader>
              <CardTitle className="font-extrabold">Product Image</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent style={{ height: '70%' }} className="flex flex-col justify-center items-center">
              <Input
                style={{ width: '70%' }}
                id="imageInput"
                type="file"
                onChange={handleFileChange}
              />
              <CardDescription>
                <span>Upload an image of your product</span>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-between" id="col-600-1">
          <Card className="m-3 w-full">
            <CardHeader>
              <CardTitle>
                <span className="font-extrabold">Product Price</span>
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex">
                  <Button variant='outline' className="w-[50px] bg-background hover:bg-background cursor-default mr-0.5 text-lg">₹</Button>
                  <Input
                    id="price"
                    type="number"
                    placeholder="2000.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
              <CardDescription>
                <span className="mt-5">Enter the price of your product. Note that the price must be in INR (₹) only and should be less than ₹ 1,00,000.00.</span>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="m-3 w-full">
            <CardHeader>
              <CardTitle>
                <span className="font-extrabold">Product Category</span>
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <Input
                  id="category"
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <CardDescription>
                <span className="mt-5 list-disc px-8">
                  <li>
                    <span className="font-semibold">Fertilizers: </span> Urea, DAP, NPK, etc.
                  </li>
                  <li>
                    <span className="font-semibold">Seeds: </span> Wheat, Rice, etc.
                  </li>
                  <li>
                    <span className="font-semibold">Pesticides: </span> Insecticides, Fungicides, etc.
                  </li>
                  <li>
                    <span className="font-semibold">Machinery: </span> Tractors, Harvesters, etc.
                  </li>
                  <li>
                    <span className="font-semibold">Others: </span> Tools, Equipment, etc.
                  </li>
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end">
          <Button className="m-3 font-bold text-md" variant="outline" type="reset">
            Reset
          </Button>
          <Button className="m-3 font-bold text-md" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
