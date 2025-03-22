"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname()
  const showNavbar = ["/", "/generate"].includes(window.location.pathname)

  return (<>{showNavbar && <nav className="bg-white w-[94vw] flex justify-between top-11 right-[3vw] rounded-full px-5 py-3 fixed ">
      <div className="ml-3 logo flex gap-6 items-center">
      <Link href="/"><svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve"><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path></svg></Link>

      
      <ul className="flex gap-6">
          <Link href="/"><li>Templates</li></Link>
          <Link href="/"><li>Marketplace</li></Link>
          <Link href="/"><li>Discover</li></Link>
          <Link href="/"><li>Pricing</li></Link>
          <Link href="/"><li>Learn</li></Link>
      </ul>
      </div>
      <div className="flex gap-2">
        <button className="login bg-gray-200 px-6 py-4 text-lg font-semibold rounded-lg">Log in</button>
        <button className="signup bg-black text-white text-md font-semibold rounded-full py-4 px-6">Sign up Free</button>
      </div>
  </nav>
}
</>
      )
 
  
};

export default Navbar;
