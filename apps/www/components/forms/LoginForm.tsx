'use client'; 

import { Form } from "@/components/forms";
import { useLogin } from "@/hooks";

export default function LoginForm() {
    const { email, password, onChange, onSubmit, isLoading } = useLogin();
    const config = [
        {
          
          labelText: 'E-mail Address',
          labelId: 'email',
          type: 'email',
          value: email,
          required: true,
        },
        {
          
          labelText: 'Password',
          labelId: 'password',
          type: 'password',
          value: password,
          required: true,
        },
      
      ];

    return(
        <Form 
          config = {config}
          isLoading = {isLoading}
          btnText="Sign in"
          onChange={onChange}
          onSubmit={onSubmit}
        />
    );
}