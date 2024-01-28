import Link from 'next/link';
import { RegisterForm } from '@/components/forms';

export default function Page(){
  
  
  return (
        <>
        <div className="mx-auto mt-5 mb-5 md:w-7/12">
          <div className="card px-6 py-6 shadow-xl bg-gradient-to-r from-gray-200 via-slate-50 to-gray-200">
            
            <img
            className= "self-center p-3 border-2 border-white"
            src= '/image/color-logo-png.png'
            alt="Your Company"
            width='220'
            height='200'
            />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">


              <h2 className="mt-6 text-center font-light leading-9 tracking-tight text-gray-900 subpixel-antialiased">
                Sign-Up for an Account
              </h2>
            </div>

            <div className="card-body mx-auto w-full">
              <RegisterForm />
              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account ? {' '}
                <Link
                  href='/'
                  className = 'font-semibold leading-6 text-indigo-500 hover:text-indigo-200'
                  >Login Here</Link>
              </p>

            </div>
          </div>
        </div>
    </>
    );
}