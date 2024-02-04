'use client';

export default function Page(){
    return (
      <><div className="flex flex-row overflow-x-auto">
        <h1 className="basis-1/2 text-center text-2xl text-black-500 font-bold">Active Products</h1>
        <h1 className="basis-1/2 text-center text-2xl text-black-500 font-bold">Deactive Products</h1>
      </div><div className="flex flex-row ">

          <table className="table card bg-slate-200 shadow-xl">
          

            {/* head */}
            
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/free-photo/panini-sandwich-with-ham-cheese-tomato-arugula-isolated-white-background_123827-27057.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Sandwiches</div>

                    </div>
                  </div>
                </td>
                <td>
                  60 Rs
                </td>
                <th>
                  <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 2 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/free-photo/pumpking-soup-salad_23-2148115049.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Soups & salads</div>

                    </div>
                  </div>
                </td>
                <td>
                  40 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 3 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/free-photo/cup-three-layered-coffee-dark_140725-6011.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Cold Coffe</div>

                    </div>
                  </div>
                </td>
                <td>
                  80 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 4 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/free-photo/coffee-porcelain-cup-wooden-table_1220-77.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=sph" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Tea</div>

                    </div>
                  </div>
                </td>
                <td>
                  10 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
            </tbody>


          </table>
          <div className="divider-horizontal"></div>
          <table className="table card bg-slate-200 shadow-xl">
            {/* head */}
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/free-photo/noodles-prepared-with-chicken-peppers-sesame-seeds-sauce_141793-1221.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hakka Noodles</div>

                    </div>
                  </div>
                </td>
                <td>
                  100 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 2 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://image.shutterstock.com/image-photo/chinese-food-call-hakka-nuddles-260nw-2331256167.jpg" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Panner Noodles</div>

                    </div>
                  </div>
                </td>
                <td>
                  100 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 3 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://t4.ftcdn.net/jpg/05/07/14/63/240_F_507146351_qtFvN9woHXngXnJxVJnHQVaD1JEVJLKO.jpg"/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Mushroom</div>

                    </div>
                  </div>
                </td>
                <td>
                  60 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
              {/* row 4 */}
              <tr>

                <td>
                  <div className="flex items-center gap-3">
                  <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.freepik.com/premium-photo/shrimp-fried-rice_11823-875.jpg?size=626&ext=jpg&ga=GA1.1.1409423045.1706966073&semt=ais"/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Fried Rice</div>

                    </div>
                  </div>
                </td>
                <td>
                  90 Rs
                </td>
                <th>
                <input type="checkbox" className="toggle" checked />
                </th>
              </tr>
            </tbody>


          </table>
        </div></>
    );
}