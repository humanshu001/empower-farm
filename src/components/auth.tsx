import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Login } from "./login"
import { Register } from "./register"

export default function Auth() {
    return(
      <div className="container flex flex-col items-center justify-center h-screen">
        <Tabs defaultValue="register" className="w-96">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Register />
          </TabsContent>
          <TabsContent value="login">
            <Login />
          </TabsContent>  
        </Tabs>
      </div>
    )
}