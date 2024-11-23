import { Input } from "../components/Input"
import Button from "../components/Button"
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen gap-10 px-20">
      <div className="w-1/2">
        <h2 className="font-semibold text-blue-600 text-9xl ">Streamly <span className="text-white">is</span></h2>
        <h2 className="text-4xl leading-relaxed">ready for you !</h2>
      </div>
      <form  className='flex flex-col items-center w-1/2 p-20 bg-transparent max-md:p-6'>
        <h2 className='mb-2 text-3xl font-bold text-center max-md:text-2xl max-md:mb-1'>Login</h2>
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
        <Button className='w-full h-12 py-3 mt-3 rounded-lg dark:bg-blue-600 dark:text-white'>Log In</Button>
        <p className='my-4 text-center text-gray-600 dark:text-gray-500'>Don't have an account? <Link to='/signup'><span className='font-semibold text-gray-300 decoration-solid'>Signup</span></Link></p>
      </form>
    </div>
  )
}
