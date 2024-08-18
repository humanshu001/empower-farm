import { Card } from "../ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function SoldCards({name, description, imageUrl, price}:{
    name: string,
    description: string,
    imageUrl: string,
    price: number
}) {
  return (
    <>
        <Card className="m-2 p-3 w-[17rem] flex flex-col justify-between">
            <h2 className="text-xl mb-2 font-extrabold">
                {name}
            </h2>
            <p className="text-sm mb-3">
                {description}
            </p>
            <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded">
                <img src={imageUrl} alt="" className="rounded-md object-cover" />   
            </AspectRatio>
            <h3 className="text-lg text-right my-3 font-extrabold">
                Rs. {price}
            </h3>
        </Card>
    </>
  )
}
