import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CampusConnect | Home',
  description: 'CampusConnect Home Page',

};


export default function Page(){
  return (
        <>
        <div className="mx-auto mt-5 mb-5 md:w-7/12">
          <div className="card px-6 py-6 shadow-xl bg-gradient-to-r from-gray-300 via-slate-100 to-gray-300">
            <img
            className= "self-center p-3 border-2 border-white bg-gradient-to-r from-gray-200 via-slate-50 to-gray-200"
            src= '/image/color-logo-png.png'
            alt="Your Company"
            width='220'
            height='200'
            />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">


              <h2 className="mt-6 text-center font-light leading-9 tracking-tight text-gray-900 subpixel-antialiased ">
                Sign in to your account
              </h2>
            </div>

            <div className="card-body mx-auto w-full">
              <LoginForm />
              <p className="mt-10 text-center text-sm text-gray-500">
                Don&apos;t Have an Account ? {' '}
                <Link
                  href='/auth/register'
                  className = 'font-semibold leading-6 text-indigo-500 hover:text-indigo-200'
                  >Register Here</Link>
              </p>

            </div>
          </div>
        </div>
    </>
    );
}