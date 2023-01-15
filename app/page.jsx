import Bottom from "@/components/Bottom";
import Center from "@/components/Center";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start gap-10'>
        <Header />
        <Center />
        <Bottom />
    </div>
  )
}
