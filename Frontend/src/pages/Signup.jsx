import { Input } from "../components/Input"
import Button from "../components/Button"
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen gap-10 px-20">
      <div className="w-1/2">
        <h2 className="text-4xl leading-relaxed">Welcome to </h2>
        <h2 className="font-semibold text-blue-600 text-9xl ">Streamly !</h2>
      </div>
      <form  className='flex flex-col items-center w-1/2 p-20 bg-transparent max-md:p-6 '>
        <h2 className='mb-4 text-3xl font-bold text-center max-md:text-2xl'>Create your account</h2>
        <Input 
        label="FullName" 
        placeholder="Enter your name" 
        type="text"
        />
        <Input 
        label="Username" 
        placeholder="Enter your username" 
        type="text"
        />
        <Input 
        label="Email" 
        placeholder="Enter your mail addresss" 
        type="email"
        />
        <Input 
        label="Password" 
        placeholder="Enter password" 
        type="password"
        />
        <Input 
        label="Avatar"  
        type="file" 
        name="avatar" 
        accept="image/*" 
        required
        className="text-gray-900 border bg-gray-50 file:bg-blue-600 file:text-white file:border-none file:mr-4 file:py-2 file:px-4 file:cursor-pointer file:rounded-md file:hover:bg-blue-700"
        />
        <Input 
        label="Cover Image" 
        type="file" 
        name="coverImage" 
        accept="image/*" 
        className="text-gray-900 border bg-gray-50 file:bg-blue-600 file:text-white file:border-none file:mr-4 file:py-2 file:px-4 file:cursor-pointer file:rounded-md file:hover:bg-blue-700"
        />
        
        <Button className='w-full h-12 py-3 mt-3 rounded-lg dark:bg-blue-600 dark:text-white'>Sign Up</Button>
        <p className='my-4 text-center text-gray-600 dark:text-gray-500'>Already have an account? <Link to='/login'><span className='font-semibold text-slate-400 decoration-solid'>Login</span></Link></p>
      </form>
    </div>
  )
}
