import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between w-full h-16 px-6 border-b-2 border-zinc-700'>
        <Logo/>
        <div className='flex border-2 rounded-lg h-9 border-zinc-700 '>
        <input type='text' placeholder="Type to search" className='h-full p-3 bg-transparent w-[600px] focus:outline-none'/>
        <button className="flex items-center p-3 rounded-r-md bg-zinc-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
            </svg>
        </button>
    </div>
        <div className="flex items-center gap-4">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                <path fill="#00b6ad" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM9 8l4 4h-3v4H8v-4H5zm12 .841l-4 2.8v.718l4 2.8z" />
            </svg> */}
            <p onClick={()=>navigate("/login")} className="ml-5 text-xl font-semibold">Login</p>
            <Button onClick={()=>navigate("/signup")}>Signup</Button> 
        </div>
    </div>
  )
}
