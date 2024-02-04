export default function Page(){
    return (<>
    <div>
      <h2 className="text-2xl font-bold mb-4">Order List</h2>

      <table className="min-w-full border border-gray-300">
        {/* Table content goes here */}
      </table>
    </div>
        <div className="overflow-x-auto sm:space-y-4 md:space-y-10 lg:space-y-10 xl:space-y-30">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Order Id</th> 
        <th>Image</th> 
        <th>Date</th> 
        <th>Customer Name</th> 
        <th>Amount</th> 
        <th>Location</th> 
        <th>Status</th> 
        <th>Action</th>
        <th>Invoice</th>
      </tr>
    </thead> 
    <tbody>
    <tr>
      <td>1</td>
      <td>
      <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/premium-photo/fun-asian-teenager_183364-23197.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
      </td>
      <td>2024-02-01</td>
      <td>Rajesh Kumar</td>
      <td>₹500.00</td>
      <td>Kanhar G-101</td>
      <td>Shipped</td>
      <td><div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div></td>
<td><button className="btn btn-xs">View Invoice</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
</td>
      <td>2024-02-02</td>
      <td>Priya Patel</td>
      <td>₹300.50</td>
      <td>Indravati A-111</td>
      <td>Processing</td>
      <td>
      <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
      </td>
      <td><button className="btn btn-xs">View Invoice</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
      <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
</td>
      <td>2024-02-03</td>
      <td>Suresh Singh</td>
      <td>₹752.20</td>
      <td>Kanhar H-111</td>
      <td>Delivered</td>
      <td>
      <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
      </td>
      <td><button className="btn btn-xs">View Invoice</button></td>
    </tr>
    <tr>
      <td>4</td>
      <td>
      <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character-woman_183364-80070.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
</td>
      <td>2024-02-04</td>
      <td>Anita Verma</td>
      <td>₹1,200.00</td>
      <td>Indravati B-112</td>
      <td>Pending</td>
      <td>
      <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
      </td>
      <td><button className="btn btn-xs">View Invoice</button></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
      <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
</td>
      <td>2024-02-05</td>
      <td>Vikram Sharma</td>
      <td>₹907.50</td>
      <td>Kanhar A-191</td>
      <td>Processing</td>
      <td>
      <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
      </td>
      <td><button className="btn btn-xs">View Invoice</button></td>
    </tr>
    <tr>
  <td>6</td>
  <td> <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character-woman_183364-80070.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div></td>
  <td>2024-02-06</td>
  <td>Kanhar B-105</td>
  <td>₹420.75</td>
  <td>Indravati C-111</td>
  <td>Shipped</td>
  <td>
  <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
  </td>
  <td><button className="btn btn-xs">View Invoice</button></td>
</tr>
<tr>
  <td>7</td>
  <td>
  <div className="avatar">
  <div className="w-11 rounded-full">
    <img src="https://img.freepik.com/premium-photo/portrait-casual-caucasian-man-3d-cartoon-style-generative-ai_601748-45739.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
  </div>
</div>
  </td>
  <td>2024-02-08</td>
  <td>Arjun Singh</td>
  <td>₹150.50</td>
  <td>Kanhar G-110</td>
  <td>Pending</td>
  <td>
  <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className=" btn btn-xs">Edit</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Pending</a></li>
    <li><a>Processing</a></li>
    <li><a>Complete</a></li>
    <li><a>Canceled</a></li>
  </ul>
</div>
  </td>
  <td><button className="btn btn-xs">View Invoice</button></td>
</tr>
<tr></tr>
    </tbody> 
    
  </table>
</div>
<div className="join">
  <button className="join-item btn">«</button>
  <button className="join-item btn">Page 1</button>
  <button className="join-item btn">»</button>
</div>
     </>
    );
}