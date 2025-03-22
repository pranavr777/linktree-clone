"use client"
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from "next/navigation";

const Generate = () => {

  const searchParams = useSearchParams()
  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setLinks] = useState ([{link: "", linktext: ""}])
  const [handle, sethandle] = useState( searchParams.get('handle'))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => { 
    setLinks((initialLinks) => {
      return initialLinks.map((item, i)=>{
        if (i==index){
          return {link, linktext}
        }
        else {
          return item
        }
      })
    })
   }

   const addLink = () => {
    setLinks(links.concat([{link: "", linktext: ""}]))
   }

  const submitLinks = async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    console.log(raw)
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if(result.success){
      toast.success(result.message)
      setLinks([])
      setpic("")
      sethandle("")
    }
    else{
      toast.error(result.message)
    }


      }

  return (
    <>

    <ToastContainer/> 
      
    <div className= "h-[200vh] grid grid-cols-2">
       
      <div className="col1 flex flex-col justify-start items-center bg-[#225abf] text-gray-100">
      <div className="h-[20vh]"></div>

        <div className="flex flex-col gap-10 my-8 ">
        <h1 className="font-bold text-4xl">Create your Bittree</h1>

        <div className="item">
        <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>
            <div className="mx-4 my-2">
            <input value={handle||""} onChange={e=>{sethandle(e.target.value)}}
            className="px-4 py-2 focus:outline-blue-500 text-black rounded-full"
            type="text"
            placeholder="Choose a handle"
          />
        </div>
            </div>
          <div className="item">
          <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
          {links && links.map((item, index) => {
            return <div key={index} className="mx-4 my-2">
            <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}}
              className="px-4 py-2 focus:outline-blue-500 rounded-full text-black"
              type="text"
              placeholder="Enter link text"
            />
            <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}}
              className="px-4 py-2 mx-2 focus:outline-blue-500 rounded-full text-black"
              type="text"
              placeholder="Enter link"
            />   
          
              </div> 
          })}
 
            <button onClick={()=> addLink()} className="py-3 px-3 mx-4 text-white  font-semibold rounded-3xl bg-gray-800">+ Add Link</button> 
          </div>
          <div className="item">
          <h2 className="font-semibold text-2xl">Step 3: Add Picture and Description</h2>
          <div className="m-2">
            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}}
            className="px-4 py-2 m-2 w-full focus:outline-blue-500 rounded-full text-black"
            type="text"
            placeholder="Enter Link to your picture"
          />
          <input value={desc || ""} onChange={e=>{setdesc(e.target.value)}}
            className="px-4 py-2 m-2 w-full focus:outline-blue-500 rounded-full text-black"
            type="text"
            placeholder="Enter description"
          /> 
          </div>          
          <div className="m-4">
          <button disabled={pic == "" || handle == "" || links[0].linktext == "" || links[0].link == "" } onClick={()=>{submitLinks()}}  className="disabled:bg-slate-300 py-3 px-3 text-white  font-semibold rounded-3xl bg-violet-900">Create your Bittree</button>   
          </div>

          </div>     

        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#225abf]">
        <img
          className="h-[200vh] object-fit"
          src="/generate.png"
          alt="Generate your Links"
        />
      </div>
    </div>
    
    </>
  );
};

export default Generate;
