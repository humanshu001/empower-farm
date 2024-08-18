import RetroGrid from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <>
        <RetroGrid />
        <div className="container">
            <h1 className="font-black lg:text-7xl text-5xl  text-center py-10">Welcome to Empower Farm</h1>
            <h3 className="text-center font-extrabold lg:text-5xl text-2xl py-8">
            Empowering Farmers, Preserving the Planet
            </h3>
            <h1 className="font-black text-5xl text-center py-10">Categories which you will Found</h1>
        </div>
    </>
  )
}
