import React from 'react'

export default function Support() {
  return (
    <div className='flex flex-col gap-5 p-20'>
      <h2 className='text-6xl'>Contact Us</h2>
      <p className='text-xl text-gray-300'>
        We’re here to help! If you need assistance, have any questions, or have discovered a bug <br/> on our website, please don’t hesitate to reach out to us. You can connect with us through any of the <br/> channels below:
      </p>
      <div className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold text-gray-200">GitHub</h2>
                <p className="text-gray-400">
                    Report issues or contribute to our project directly on GitHub.  
                </p>
                <a href="https://github.com/shivam-thedev" target="_blank" 
                  className="text-blue-500 underline hover:text-blue-700">
                    github.com/shivam-thedev
                </a>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-200">LinkedIn</h2>
                <p className="text-gray-400">
                    For professional inquiries or networking, feel free to connect with us on LinkedIn.
                </p>
                <a href="https://linkedin.com/in/shivam-coder/" target="_blank" 
                  className="text-blue-500 underline hover:text-blue-700">
                    linkedin.com/in/shivam-coder/
                </a>
            </div>
        </div>
    </div>
  )
}
