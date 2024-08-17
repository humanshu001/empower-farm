import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { FaWhatsapp } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export function BuyCard({title, description, imageUrl, price, mobile,whatsapp}:{title:string, description:string, imageUrl:string, price:number, mobile:number,whatsapp:number}) {
  return (
    <Card className="w-[300px] m-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img src={imageUrl} alt=""  className="rounded-md object-cover" />
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-black">Rs. {price}</div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="font-bold">Buy Now</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-[#27272a]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-extrabold text-3xl text-center pt-2 pb-6">Contact the seller now!</AlertDialogTitle>
          <AlertDialogDescription>
            <span className="py-2 text-lg font-bold text-center flex justify-between lg:px-5"><span>Mobile Number:</span><span className="flex items-center">{mobile} <FaCopy className="ml-3" style={{cursor:'pointer',fill:'yellow'}} onClick={()=>{navigator.clipboard.writeText(mobile.toString());toast("Number Copied to your Clipboard")}}/></span></span>
            <span className="py-2 text-lg font-bold text-center flex justify-between lg:px-5"><span>WhatsApp Number:</span><a href={"https://wa.me/+91" + whatsapp} target="_blank" className="flex items-center">{whatsapp} <FaWhatsapp className="ml-3" style={{fill:'lightgreen'}} /></a></span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="font-bold text-md mt-5">Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </CardFooter>
    </Card>
  )
}
