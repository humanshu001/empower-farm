import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Separator } from "../ui/separator"

export default function Contact() {
  return (
    <>
     <div className="container px-3">
     <h1 className="text-5xl font-black text-center my-5 mb-9">Contact Us</h1>

      <p className="text-xl font-bold mb-5">We're here to help! If you have any questions or need assistance, feel free to reach out. Just fill out the form below, and we'll get back to you as soon as possible.
      </p>
     
        <Card className="p-4 w-[500px] m-auto">
          <CardContent>
          <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center pt-3">Enter your basic details and message here!</h2>
      </div>
      <Separator />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Message</Label>
          <Textarea id="message" className="resize-none" placeholder="Enter your message" />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
          </CardContent>
        </Card>
     </div>
    </>
  )
}
