
// dashboard/page.tsx
'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRetrieveUserQuery, useShopProfileQuery, useShopProductsQuery } from '@/redux/features/authApiSlice';
import { List, Spinner } from '@/components/common';

interface ShopProduct {
  id: number;
  product_name: string;
  description: string;
  price: string;
}

// Function to generate a random shop image URL
const getRandomShopImage = () => {
  const imageUrls = [
    'image/randomshop-1.webp',
    'image/randomshop-2.webp',
    'image/randomshop-3.webp',
    'image/randomshop-4.webp',
  ];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentShopId, setCurrentShopId] = useState<number | null>(null);
  const [shopProducts, setShopProducts] = useState<ShopProduct[] | undefined>(undefined);
  const [shopProductsLoading, setShopProductsLoading] = useState(false);
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  
  const shopProductsQuery = useShopProductsQuery(currentShopId || 0);
  
  const { data: shopProfiles, isLoading: shopProfilesLoading } = useShopProfileQuery();
  useEffect(() => {
    if (isDialogOpen && currentShopId !== null) {
      const fetchShopProducts = async () => {
        try {
          const result = await shopProductsQuery.refetch();
          setShopProducts(result.data);
        } catch (error) {
          console.error("Error fetching shop products:", error);
        } finally {
          setShopProductsLoading(false);
        }
      };

    fetchShopProducts();
    }
  }, [isDialogOpen, currentShopId, shopProductsQuery]);

  const handleOpenMenu = (shopId: number) => {
    setCurrentShopId(shopId);
    setShopProductsLoading(true); 
    setIsDialogOpen(true);
  };

  const handleCloseMenu = () => {
    setCurrentShopId(null);
    setIsDialogOpen(false);
  };

  const config = [
    {
      label: 'First Name',
      value: user?.first_name,
    },
    {
      label: 'Last Name',
      value: user?.last_name,
    },
    {
      label: 'Email',
      value: user?.email,
    },
  ];

  if (isLoading || isFetching || shopProfilesLoading) {
    return (
      <div className='flex justify-center my-8'>
        <Spinner lg />
      </div>
    );
  }

  return (
    <>
      <header className='bg-red-500 py-4'>
        <div className='mx-auto max-w-7xl px-4'>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            Welcome, {user?.first_name}!
          </h1>
        </div>
      </header>
      <main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
        {user?.user_type === 'customer' ? (
          // Render customer-specific content
          <>
            <h2 className='text-2xl font-semibold mb-4'>Your Information</h2>
            <List config={config} />
            <div className='mt-8'>
              <h2 className='text-2xl font-semibold mb-4'>Popular Shops</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {shopProfiles?.map((profile) => (
                  <div key={profile.id} className='bg-white p-6 rounded-lg shadow-md'>
                    <img src={getRandomShopImage()} alt='Shop' className='w-full h-40 object-cover mb-4 rounded-md' />
                    <h3 className='text-xl font-semibold mb-2'>{profile.shop_name}</h3>
                    <p className='text-gray-600'>{profile.shop_description}</p>
                    <p className='text-gray-700 mt-2'>Address: {profile.address}</p>
                    <p className='text-gray-700'>Contact Number: {profile.contact_no}</p>
                    <p className='text-gray-700'>Delivery Charges: {profile.delivery_charges}</p>
                    <button
                      onClick={() => handleOpenMenu(profile.id)}
                      className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
                    >
                      Open Menu
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : user?.user_type === 'shop' ? (
          // Render shop-specific content
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Your Shop Profiles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {shopProfiles?.map((profile) => (
                <div key={profile.id} className='bg-white p-6 rounded-lg shadow-md'>
                  <img src={getRandomShopImage()} alt='Shop' className='w-full h-40 object-cover mb-4 rounded-md' />
                  <h3 className='text-xl font-semibold mb-2'>{profile.shop_name}</h3>
                  <p className='text-gray-600'>{profile.shop_description}</p>
                  <p className='text-gray-700 mt-2'>Address: {profile.address}</p>
                  <p className='text-gray-700'>Contact Number: {profile.contact_no}</p>
                  <p className='text-gray-700'>Delivery Charges: {profile.delivery_charges}</p>
                  <div className='mt-4 flex space-x-4'>
                    <button onClick={() => handleOpenMenu(profile.id)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                      Menu
                    </button>
                    <button className='bg-green-500 text-white px-4 py-2 rounded-md'>Manage</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      {/* Dialog for displaying shop menu */}
      <Transition.Root show={isDialogOpen} as={Fragment}>
        <Dialog onClose={handleCloseMenu} className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            {/* Background overlay */}
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* Dialog content */}
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>Shop Products</h3>
                  {shopProductsLoading ? (
                    <Spinner />
                  ) : (
                    <div className='mt-2'>
                      {/* Display the list of shop products */}
                      {shopProducts?.map((product) => (
                        <div key={product.id} className='mb-4'>
                          <h4 className='text-xl font-semibold'>{product.product_name}</h4>
                          <p className='text-gray-600'>{product.description}</p>
                          <p className='text-gray-700'>Price: {product.price}</p>
                          <hr className='my-2' />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    onClick={handleCloseMenu}
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Page;
