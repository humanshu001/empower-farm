import { Avatar, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import SoldCards from "./SoldCards";

export default function Profile() {
  return (
    <>
      <div className="container lg:py-5 px-2">
        <Card className="flex lg:flex-row md:flex-col xl:flex-row flex-col p-2">
          <Card className="lg:w-[30%] xl:w-[30%] m-2 p-3 py-4 bg-secondary">
            <div className="flex justify-center">
              <Avatar className="w-[100px] h-[100px]">
                <AvatarImage className="object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/030/361/147/small/a-man-in-a-turban-standing-in-a-field-ai-generated-free-photo.jpg" />
              </Avatar>
            </div>
            <h1 className="text-2xl font-extrabold text-center">
              Ramkishan
            </h1>
            <h3 className="text-md text-center">
              Panipat, Haryana
            </h3>
            <h4 className="text-center my-3 text-xl font-medium">
              Farm Score: <span className="font-extrabold ">230</span>
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

            <SoldCards name="Wheat" description="Freshly harvested wheat from my farm" imageUrl="https://picsum.photos/1600/900" price={2000} />
            <SoldCards name="Rice" description="Freshly harvested rice from my farm" imageUrl="https://picsum.photos/1600/900" price={3000} />
            <SoldCards name="Barley" description="Freshly harvested barley from my farm" imageUrl="https://picsum.photos/1600/900" price={2500} />
            <SoldCards name="Corn" description="Freshly harvested corn from my farm" imageUrl="https://picsum.photos/1600/900" price={1500} />
            <SoldCards name="Fertilizer" description="Organic fertilizer for your farm" imageUrl="https://picsum.photos/1600/900" price={500} />
            </div>
          </Card>
        </Card>
      </div>
    </>
  )
}
