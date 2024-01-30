import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CampusConnect | Home',
  description: 'CampusConnect Home Page',

};


export default function Page(){
  return (
        <>
        
        <div className="flex">
        <div className="hidden md:block w-6/12 p-3 mt-3 mb-3">
        <div className="carousel md:w-full h-full shadow-xl ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://www.iitbhilai.ac.in/index.php?pid=img_glimpses_pc_g1" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://www.iitbhilai.ac.in/index.php?pid=img_glimpses_pc_g3" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/1272/cached.offlinehbpl.hbpl.co.uk/galleries/NAW/G2_159.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://media.licdn.com/dms/image/sync/D4D27AQFSFLXAQSm5Ag/articleshare-shrink_800/0/1705436015966?e=2147483647&v=beta&t=KWahHfb1xMf5b__Duz4lgTaPTno3jdrjxLxR1TlTmQ0" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div></div>
        <div className="divider md:divider-horizontal md:w-2/12"></div>

        <div className="relative mx-auto">
          
          <div className="card px-6 py-6 shadow-xl bg-gradient-to-r from-gray-300 via-slate-100 to-gray-300">
           {/*<img
            className= "self-center p-3 border-2 border-white bg-gradient-to-r from-gray-200 via-slate-50 to-gray-200"
            src= '/image/color-logo-png.png'
            alt="Your Company"
            width='220'
            height='200'
  /> */}
            
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
        </div>
    </>
    );
}