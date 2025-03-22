"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")
  const createTree = () =>{
    router.push(`/generate?handle=${text}`)    
  }
  return (
    <main>
      <section className="bg-green-800 min-h-[100vh] grid grid-cols-2">
        <div className=" flex items-center justify-center flex-col mx-[5vw] gap-4">
          <p className="text-lime-400 text-6xl font-extrabold">Everything you are. In one, simple link in bio.</p>
          <p className="text-lime-400 text-md">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex gap-2 w-full">
          <input value={text} onChange={(e)=> setText(e.target.value)} className="p-2 focus:outline-lime-500" type="text" placeholder="bitt.ree/yourhandle"/>
          <button onClick={()=>createTree()} className="bg-red-200 rounded-full p-4 font-semibold">Claim your Bittree</button>
          </div>
            
          
          </div>

        <div className=" flex items-center justify-center flex-col mx-[5vw]">
          <img className="mt-[24vh]" src="/home.png" alt="home image"></img></div>

      </section>
      <section className="bg-red-600 min-h-[100vh]"></section>
    </main>
  );
}
