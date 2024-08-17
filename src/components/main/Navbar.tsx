import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { PiFarmBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";


export default function Navbar() {
  
  return (
    <header className="h-20 lg:border-b-2 border-[#27272A] flex">
      <div className="flex container w-full items-center justify-between px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
            <div className="flex justify-between items-center pt-3 lg:hidden">
                <Link to="/" className="mr-6 lg:hidden" >
                    <PiFarmBold size={25} />
                    <span className="sr-only">Empower Farm</span>
                </Link>
                <Button variant="outline" size="icon" className="lg:hidden absolute right-3 border-2">
                    <IoMenu size={25} />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </div>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" >
            <PiFarmBold size={30} />
            <span className="sr-only">Empower Farm</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link to="/" className="flex w-full items-center py-2 text-lg bg-transparent font-semibold" >
              Home
            </Link>
            <Link to="/buy" className="flex w-full items-center py-2 text-lg bg-transparent font-semibold" >
              Buy
            </Link>
            <Link to="/sell" className="flex w-full items-center py-2 text-lg bg-transparent font-semibold" >
              Sell
            </Link>
            <Link to="/contact" className="flex w-full items-center py-2 text-lg bg-transparent font-semibold" >
              Contact
            </Link>
            <Link to="/profile" className="flex w-full items-center py-2 text-lg bg-transparent font-semibold" >
              Profile
            </Link>
            <Link to="/auth" className="flex w-full items-center py-2 text-lg bg-transparent justify-center font-semibold" >
              <Button className="rounded-full font-black">
                SIGN-IN / REGISTER
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="mr-6 hidden lg:flex" >
        <PiFarmBold size={40}/>
        <span className="sr-only">Empower Farm</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent font-semibold"
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/buy"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent font-semibold"
              
            >
              Buy
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/sell"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent font-semibold"
              
            >
              Sell
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent font-semibold"
              
            >
              Contact
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/profile"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent font-semibold"
              
            >
              Profile
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to='/auth'>
              <Button className="font-black rounded-full">
                SIGN-IN / REGISTER
              </Button>
            </Link>
          </NavigationMenuLink>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </header>
  )
}