

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';


export default function useSocialAuth(authenticate: any, provider: string) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();
	const effectRan = useRef(false);
	//const { data: userInfo } = useRetrieveUserQuery();

	useEffect(() => {
		const state = searchParams.get('state');
		const code = searchParams.get('code');
		
		if (state && code && !effectRan.current) {
			authenticate({ provider, state, code })
				.unwrap()
				.then(() => {
					
					dispatch(setAuth({ user_type: 'customer' }));
					toast.success('Account Created, Enter email to set password');
					router.push('/forgot-password');
				})
				.catch(() => {
					toast.error('Failed to log in');
					router.push('/');
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [authenticate, provider]);
}
