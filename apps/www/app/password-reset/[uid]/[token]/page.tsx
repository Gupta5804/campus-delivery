import { PasswordResetConfirmForm } from '@/components/forms';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'CampusConnect | Password Reset Confirm',
    description: 'Campus Connect Password reset confirm page'
}
interface Props {
	params: {
		uid: string;
		token: string;
	};
}
export default function Page({ params: { uid, token } }: Props){
    return (
        <div className="card px-6 py-6 shadow-xl bg-gradient-to-r from-gray-300 via-slate-100 to-gray-300 md:w-6/12 mx-auto">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-6 text-center font-light leading-9 tracking-tight text-gray-900 subpixel-antialiased ">
           Reset Your Password
            </h2>
        </div><div className="card-body mx-auto w-full">
                <PasswordResetConfirmForm uid={uid} token={token}/>
                

            </div>
        
        </div>
      
    );
}