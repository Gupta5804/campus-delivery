import { apiSlice } from "../services/apiSlice";
interface ShopProduct {
    id: number;
    category: {
      id: number;
      category_name: string;
    };
    shop: string;
    product_name: string;
    description: string;
    price: string;
    active: boolean;
  }
interface ShopProfile {
    id: number;
    shop_name: string;
    shop_description: string;
    address: string;
    about_shop: string | null;
    contact_no: string | null;
    is_open: boolean;
    delivery_charges: string;
    extra_charges: string;
    user: number;
  }
interface User {
    first_name: string;
    last_name: string;
    email: string;
    user_type: string;
}

interface SocialAuthArgs {
    provider: string;
    state: string;
    code: string;

}

interface CreateUserResponse {
    success: boolean;
    user:User;
}
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User,void>({
            query: () => '/users/me/'
        }),
        socialAuthenticate: builder.mutation<CreateUserResponse,SocialAuthArgs>({
            query: ({ provider, state, code}) => ({
                url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }),
        shopProfile: builder.query<ShopProfile[], void>({
            query: () => '/shop-profiles/'
          }),
        shopProducts: builder.query<ShopProduct[], number>({
            query: (shopProfileId) => `shop-profiles/${shopProfileId}/products/`,
          }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/jwt/create/',
                method: 'POST',
                body: { email, password}
            }),
        }),
        register: builder.mutation({
            query: ({ first_name, last_name, email, password, re_password }) => ({
                url: '/users/',
                method: 'POST',
                body: { first_name, last_name, email, password, re_password}
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/jwt/verify/',
                method: 'POST',
                
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout/',
                method: 'POST',
                
            }),
        
        }),
        activation: builder.mutation({
            query: ({ uid, token }) => ({
                url: '/users/activation/',
                method: 'POST',
                body: { uid, token },
                
            }),
        
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: '/users/reset_password/',
                method: 'POST',
                body: { email },
                
            }),
        
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, new_password, re_new_password }) => ({
                url: '/users/reset_password_confirm/',
                method: 'POST',
                body: { uid, token, new_password, re_new_password },
                
            }),
        
        }),
    }),
});

export const { 
    useRetrieveUserQuery, 
    useSocialAuthenticateMutation,
    useRegisterMutation,
    useLoginMutation ,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmMutation,
    useShopProfileQuery,
    useShopProductsQuery,
} = authApiSlice; //hooks

