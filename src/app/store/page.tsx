"use client"
import Donut from "@/components/Dashboard/Donut";
import Graph from "@/components/Dashboard/Graph";
import Hero from "@/components/Dashboard/Hero";
import TopProduct from "@/components/Dashboard/TopProduct";
import TopUser from "@/components/Dashboard/TopUsers";
// import Image from "next/image";
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <section className="w-full flex flex-col gap-10">
      <Hero />
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl md:3xl font-semibold leading-none text-gray-800 dark:text-white">
          Statistics
        </h2>
         <div className="grid grid-cols-[40%_60%]">
            <Donut />
            <Graph />
         </div>
      </div>
       <div className="grid grid-cols-2">
        <TopProduct />
        <TopUser />
       </div>


    </section>
  )
}

