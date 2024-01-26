'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from 'react-toastify';
import Spinner from "@/components/common/Spinner";
import colorLogo from "../../../public/image/color-logo-png.png"
export default function Page(){
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    re_password:'',
  });
  const {first_name, last_name, email, password, re_password } = formData;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register({ first_name, last_name, email, password, re_password })
    .unwrap()
    .then(() =>{
      toast.success('Please Check E-mail to Verify Account');
      router.push('/auth/login');
    })
    .catch(() => {
      toast.error('Failed to register Account');
    })
  }
    return (
        <>
        <div className="flex flex-col w-6/12 px-6 py-6 lg:px-8 card bg-zinc-100 shadow-xl mx-auto mt-5 mb-5">
            <Image
            className= "self-center p-3 border-2 border-white"
            src= { colorLogo }
            alt="Your Company"
            width={220}
            height={200}
            />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">


            <h2 className="mt-6 text-center font-light leading-9 tracking-tight text-gray-900 subpixel-antialiased">
              Sign-Up for an Account
            </h2>
          </div>

        <div className="card-body mx-auto w-full">
          <form className="space-y-6 form-control" onSubmit = {onSubmit}>
            <div>
              <label htmlFor="first_name" className="form-control w-full max-w-md mx-auto">
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                  <span className="label-text">First Name</span>
                </div>
                <input id="first_name"
                  name="first_name"
                  type="text" 
                  onChange = {onChange}
                  value={first_name}
                  className="block input input-bordered input-primary w-full shadow-lg bg-white" required/>
                
              </label>
              
            </div>
            <div>
            <label htmlFor="last_name" className="form-control w-full max-w-md mx-auto">
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                  <span className="label-text">Last Name</span>
                </div>
                <input id="last_name"
                  name="last_name"
                  type="text" 
                  onChange = {onChange}
                  value={last_name}
                  className="block input input-bordered input-primary w-full shadow-lg bg-white" required/>
                
              </label>
              
            </div>
            <div>
            <label htmlFor="email" className="form-control w-full max-w-md mx-auto">
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                  <span className="label-text">Email address</span>
                </div>
                <input id="email"
                  name="email"
                  type="email" 
                  onChange = {onChange}
                  value={email}
                  className="block input input-bordered input-primary w-full shadow-lg bg-white" required/>
                
              </label>
            </div>
            <div>
              <label htmlFor="password" className="form-control w-full max-w-md mx-auto">
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                  <span className="label-text">Password</span>
                </div>
                <input id="password"
                  name="password"
                  type="password"
                  onChange = {onChange}
                  value={password}
                  className="block input input-bordered input-primary w-full shadow-lg bg-white" required/>
                
              </label>
            </div>
            <div>
            <label htmlFor="re_password" className="form-control w-full max-w-md mx-auto">
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                  <span className="label-text">Confirm Password</span>
                </div>
                <input id="re_password"
                  name="re_password"
                  type="password"
                  onChange = {onChange}
                  value={re_password}
                  className="block input input-bordered input-primary w-full shadow-lg bg-white" required/>
                
              </label>
            </div>

            

            <div className="card-actions justify-end">
              <button className="btn glass btn-accent flex w-full justify-center bg-indigo-600 shadow-lg text-white mt-5">
                
                {isLoading ? <Spinner sm/> : 'Sign Up' }
              </button>
              
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account {' '}
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