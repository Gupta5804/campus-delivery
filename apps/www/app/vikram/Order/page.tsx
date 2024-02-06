export default function Page(){
    return (<>
        <div className="flex items-center justify-between">
  <h3 className="text-black font-w mb-0 fs-22 mb-2">Order ID #5552351</h3>
  <div>
    <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Accept</button>
    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
  </div>
</div>

 
        <div className="bg-gray-200 p-4 rounded-md shadow-md mb-8">
        <ul className="timeline">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box"><a className="timeline-panel text-muted" href="/react/demo/order">
        <h4 className="mb-2 mt-0">Order Created</h4><p className="fs-14 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p></a> </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box"><a className="timeline-panel text-muted" href="/react/demo/order">
        <h4 className="mb-2 mt-0">Payment Success</h4><p className="fs-14 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p></a> </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box"><a className="timeline-panel text-muted" href="/react/demo/order">
        <h4 className="mb-2 mt-0">On Delivered</h4><p className="fs-14 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p></a> </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box"><a className="timeline-panel text-muted" href="/react/demo/order">
        <h4 className="mb-2 mt-0">Order Delivered </h4><p className="fs-14 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p></a> </div>
  </li>
     </ul>
</div>

<div className="container mx-auto">
  {/* Container for Delivery Guy Details */}
  <div className="bg-gray-200 p-4 rounded-md shadow-md mb-8">
    <h2 className="text-lg font-semibold mb-4">Delivery Guy Details</h2>
    <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-photo/front-view-male-courier-yellow-uniform-cape-with-little-delivery-food-package-his-hands-pink-background_140725-40501.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
        </td>
    {/* Delivery Guy Details Content Here */}
    <p>Name: Ravi Singh</p>
    <p>ID: DEL2024001</p>
    <p>Mobile Number: +91 9876543201</p>
  </div>

  {/* Container for Order Items */}
  <div className="bg-gray-200 p-4 rounded-md shadow-md mb-8">
    <h2 className="text-lg font-semibold mb-4">Order Items</h2>
    {/* Order Items Content Here */}
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
        <th>Items</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-photo/sandwich_1339-1114.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
  </div>
</div>
        </td>
        <td>
          Sandwich
          <br/>
        </td>
        <td>
          1x
          <br/>
        </td>
        <td>
        Rs. 60
          <br/>
        </td>
        <td>
          Rs. 60
          <br/>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
  </div>
</div>
        </td>
        <td>
        Mushroom Pizza
          <br/>
        </td>
        <td>
          2x
          <br/>
        </td>
        <td>
        Rs. 110
          <br/>
        </td>
        <td>
          Rs. 220
          <br/>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
  </div>
</div>
        </td>
        <td>
          Coca-Cola
          <br/>
        </td>
        <td>
          2x
          <br/>
        </td>
        <td>
        Rs. 60
          <br/>
        </td>
        <td>
          Rs. 120
          <br/>
        </td>
      </tr>
      {/* row 4 */}
      
      <tr>
        <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-vector/piece-sponge-cake-with-chocolate-flowing-down_1284-45586.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
  </div>
</div>
        </td>
        <td>
          Dutch Truffle
          <br/>
        </td>
        <td>
          1x
          <br/>
        </td>
        <td>
        Rs. 70
          <br/>
        </td>
        <td>
          Rs. 70
          <br/>
        </td>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      
    </tfoot>
    
  </table>
</div>
  </div>

  {/* Container for Customer Details */}
  <div className="bg-gray-200 p-4 rounded-md shadow-md">
    <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
    {/* Customer Details Content Here */}
    <td>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src="https://img.freepik.com/free-photo/3d-illustration-young-man-white-shirt-tie-with-glasses_1142-43199.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
  </div>
</div>
        </td>
    <p>Name: Vikram Abid</p>
    <p>Email: vikrama@iitbhilai.ac.in</p>
    <p>Address: H-104 Kanhar </p>
  </div>
</div>


        </>
    );
}

