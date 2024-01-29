import { ChangeEvent, FormEvent } from "react";
import { Input } from '@/components/forms';
import { Spinner } from '@/components/common';
import { link } from "fs";


interface Config {
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
        linkText: string;
        linkUrl: string;
    },
    required?: boolean;
}
interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;

}
export default function Form({ config, isLoading, btnText, onChange, onSubmit }: Props) {
    return (
        <form className="space-y-6 form-control" onSubmit = {onSubmit}>
            { config.map(input => (
                <>
                    <Input
                        key={input.labelId}
                        labelId={input.labelId}
                        type={input.type}
                        onChange={onChange}
                        value={input.value}
                        link={input.link}
                        required={input.required}
                    >
                        {input.labelText}
                    </Input>
                </>
                ))}
            
            <div className="card-actions justify-end">
                <button 
                    className="btn glass btn-accent flex w-full justify-center bg-indigo-600 shadow-lg text-white mt-5"
                    disabled={isLoading}
                    >
                    {isLoading ? <Spinner sm /> : `${ btnText }`}
                </button>
            </div>
            

        </form>
    )
}