import Link from 'next/link';
import { RegisterForm } from '@/components/forms';

export default function Page(){
  
  
  return (
        <>
        <div className="flex flex-col w-6/12 px-6 py-6 lg:px-8 card bg-zinc-100 shadow-xl mx-auto mt-5 mb-5">
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
              href='/auth/login'
              className = 'font-semibold leading-6 text-indigo-500 hover:text-indigo-200'
            >Login Here</Link>
          </p>
          
        </div>
      </div>
    </>
    );
}