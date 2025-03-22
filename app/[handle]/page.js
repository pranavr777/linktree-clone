import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    //If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({handle})
    if(!item){
      return notFound()
    }

    const item2 = {
        "_id": {
          "$oid": "676e86dd2772325663ee20b2"
        },
        "links": [
          {
            "link": "https://www.instagram.com/cristiano/",
            "linktext": "Instagram"
          },
          {
            "link": "https://www.facebook.com/Cristiano/",
            "linktext": "Facebook"
          },
          {
            "link": "https://x.com/Cristiano",
            "linktext": "X"
          }
        ],
        "handle": "CR7",
        "pic": "https://content.imageresizer.com/images/memes/Cristiano-Ronaldo-Ballon-dor-meme-5.jpg"
      }
    return <div className="flex bg-purple-400 justify-center items-start min-h-screen py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img className="rounded-full h-28 w-28" src={item.pic} alt="profilepic" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links"> 
                {item.links.map((item, index)=>{
                    return <Link key={index} href={item.link}>
                        <div className="flex justify-center py-4 px-2 shadow-2xl font-semibold bg-opacity-60 min-w-96 bg-blend-color-dodge bg-white rounded-md my-3" >{item.linktext}</div></Link>                        
                })}
            </div>
        </div>}

    </div>
  }