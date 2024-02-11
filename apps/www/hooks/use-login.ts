import { useRouter } from "next/navigation";
import { useLoginMutation , useRetrieveUserQuery} from "@/redux/features/authApiSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';

export default function useLogin() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    const [login, { isLoading }] = useLoginMutation();
  
    const [formData, setFormData] = useState({
      email:'',
      password:'',
    });
    const {email, password} = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
    const { data: userInfo } = useRetrieveUserQuery();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      login({ email, password })
      .unwrap()
      .then(() =>{
        dispatch(setAuth({ user_type: userInfo?.user_type || '' }));
        toast.info('Logged In');
        router.push('/dashboard');
         setTimeout(function() {
           window.location.reload();
         }, 3000); 
        
      })
      .catch(() => {
        toast.error('Error Logging in.');
      });
    };
    return {
        email, 
        password,
        isLoading,
        onChange,
        onSubmit,
    }
}