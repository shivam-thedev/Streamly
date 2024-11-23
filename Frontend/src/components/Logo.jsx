
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
        <img src={logo} className='w-10'/>
        <p className='text-2xl font-bold'>Streamly</p> 
    </div>
  )
}
