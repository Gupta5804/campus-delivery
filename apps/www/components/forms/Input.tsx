import React from "react"
import { ChangeEvent } from "react";

interface Props {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value:string;
    children: React.ReactNode;
    required?: boolean;
}

export default function Input({ labelId, type, onChange, value, children, required = false }: Props) {
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
              
            </label>
        </div>
    )
}