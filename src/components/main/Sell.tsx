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
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  
  const handleSubmit = () => {
    if(name === '' || description === '' || price === '' || category === '' || image === ''){
      toast.error('Please fill all the fields')
    }
  }
  return (
    <div className="container">
      <h1 className="text-4xl font-black text-center my-5 px-3">Add your Product details</h1>
      <div className="flex justify-between" id="col-600">
      <Card className="m-3 w-full ">
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
        <CardContent style={{height:'70%'}} className="flex flex-col justify-center items-center">
          <Input style={{width:'70%'}} value={image} onChange={(e) => setImage(e.target.value)} type="file"/>
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
            {/* <span className="font-bold mt-5 text-2xl mb-3">Categories</span> */}
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
                <span className="font-semibold">Others: </span> Tools, Equipments, etc.
              </li>
            </span>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <Button className="m-3 font-bold text-md" variant="outline" onClick={()=>{
          setName('')
          setDescription('')
          setPrice('')
          setCategory('')
          setImage('')
        }}>Reset</Button>
        <Button className="m-3 font-bold text-md" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}
