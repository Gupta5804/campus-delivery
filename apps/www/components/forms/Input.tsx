import React from "react"
import { ChangeEvent } from "react";
import Link from "next/link";
interface Props {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value:string;
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    },
    required?: boolean;
}

export default function Input({ labelId, type, onChange, value, children, link, required = false }: Props) {
    return (
        <div>
            <label 
            htmlFor= { labelId }
            className="form-control w-full max-w-md mx-auto"
            >
                <div className="label block text-sm font-medium leading-6 text-gray-900">
                    <span className="label-text">
                        { children }
                    </span>
                </div>
                
                <input id={ labelId }
                    name={ labelId }
                    type={ type } 
                    onChange = {onChange}
                    value={ value }
                    className="block input input-bordered input-primary w-full shadow-lg bg-white" 
                    required= { required }
                />
                { link && (
                    <>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right pt-4">
                        <Link className='font-semibold text-indigo-600 hover:text-indigo-400 hover:underline' href={link.linkUrl}>
                            {link.linkText}
                        </Link>
                        
                        
                    </p></>
                )}
              
            </label>
        </div>
    )
}