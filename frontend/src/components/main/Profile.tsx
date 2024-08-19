import { Avatar, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import SoldCards from "./SoldCards";
import { jwtDecode} from 'jwt-decode';
import { useEffect, useState } from "react";

export default function Profile() {
  const token : any = localStorage.getItem('token');

  // decode this jwt token to get user details
  const usertoken: any = jwtDecode(token);
  

  const user = usertoken.user;
  const [products, setProducts] = useState([]);

  const url = "https://empower-farm-backend.vercel.app/api/user-products?email=" + user.email;

  useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    setProducts(data);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
  }
  , []);

  return (
    <>
      <div className="container lg:py-5 px-2">
        <Card className="flex lg:flex-row md:flex-col xl:flex-row flex-col p-2">
          <Card className="lg:w-[30%] xl:w-[30%] m-2 p-3 py-4 bg-secondary">
            <div className="flex justify-center py-4 pb-6">
              <Avatar className="w-[100px] h-[100px]">
                <AvatarImage className="object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/004/911/389/small_2x/ear-of-wheat-icon-template-black-color-editable-free-vector.jpg" />
              </Avatar>
            </div>
            <h1 className="text-2xl font-extrabold text-center">
              {user.firstName + " " + user.lastName}
            </h1>
            <h3 className="text-md text-center">
              {user.address}
            </h3>
            <h4 className="text-center my-3 text-xl font-medium">
              Farm Score: <span className="font-extrabold ">{products.length}</span>
            </h4>
            <h4 className="text-center my-3 text-sm lg:px-16 xl:px-16 md:px-16">
              Farm Score stands for the number of products you have sold on Empower Farm.
            </h4>
          </Card>
          <Card className="lg:w-[70%] xl:[70%] m-2 p-2 bg-secondary">
            <h1 className="text-3xl mb-3 font-extrabold px-4">
              My Products
            </h1>
            <div className="flex flex-wrap justify-center">
              {
                products.map((product: any) => (
                  <SoldCards
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    imageUrl={"https://empower-farm-backend.vercel.app/images/" + product.image}
                    price={product.price}
                  />
              ))
              }
            </div>
          </Card>
        </Card>
      </div>
    </>
  )
}
