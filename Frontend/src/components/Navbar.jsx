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
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21px' height='21px' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314'/%3E%3C/svg%3E"/>
        </button>
    </div>
        <div className="flex items-center gap-4">
            <p onClick={()=>navigate("/login")} className="ml-5 text-xl font-semibold">Login</p>
            <Button onClick={()=>navigate("/signup")}>Signup</Button> 
        </div>
    </div>
  )
}
