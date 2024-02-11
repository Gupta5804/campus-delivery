import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth,finishInitialLoad } from "@/redux/features/authSlice";
import { useVerifyMutation , useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function useVerify(){
    const [verify] = useVerifyMutation();
    const dispatch = useAppDispatch();
    const { data: userInfo } = useRetrieveUserQuery();
    useEffect(() => {
        verify(undefined)
            .unwrap()
            .then(() => {
                console.log(userInfo);
                dispatch(setAuth({ user_type: userInfo?.user_type || '' }));
                
            })
            .finally(() =>{
                dispatch(finishInitialLoad());
            });

    },[userInfo, dispatch]);
   
}