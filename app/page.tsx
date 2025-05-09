import Navbar from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import BGImage from "@/assets/Homepage-Model-Y-2-Desktop-US.avif";
import BG2 from "@/assets/Homepage-Model-3-Desktop-US.avif";

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen relative overflow-hidden">
        <nav className="fixed w-full z-50 text-white">
          <Navbar />
        </nav>
        <div className="h-screen w-full relative">
          <Image
            src={BGImage}
            alt="model y"
            fill
            priority
            className="object-cover -mt-25"
          />
          <div className="absolute inset-x-0 top-[10%] text-center">
            <h1 className="text-7xl mb-2 text-white font-medium font-sans">
              Model Y
            </h1>
            <p className="text-2xl text-white font-medium font-sans">
              Starting at $37,490<sup>1</sup>
            </p>
            <p className="text-[20px] mb-6 text-white font-[640] font-sans">
              After $7,500 Federal Tax Credit
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#3e6ae1] hover:bg-[#3457B1] cursor-pointer text-white px-20 py-2 rounded">
                Order Now
              </button>
              <button className="bg-[#f4f4f4] hover:bg-[#EEEEEE] cursor-pointer text-[#393c41] px-20 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="h-screen w-screen relative -mt-1">
        <div className="h-screen w-full relative">
          <Image
            src={BG2}
            alt="model 3"
            fill
            className="object-cover -mt-30"
            priority
          />
          <div className="absolute inset-x-0 top-[0px] text-center text-white">
            <h1 className="text-[56px] font-medium mb-[-10px] font-sans">
              Model 3
            </h1>
            <Link
              href="/"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              <p className="text-[24px] font-bold font-sans">
                0% APR Available
              </p>
            </Link>
            <div className="flex gap-4 justify-center absolute -bottom-160 left-[36%]">
              <button className="bg-[#3e6ae1] hover:bg-[#3457B1] cursor-pointer text-white px-20 py-2 rounded">
                Order Now
              </button>
              <button className="bg-[#f4f4f4] hover:bg-[#EEEEEE] cursor-pointer text-[#393c41] px-20 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
