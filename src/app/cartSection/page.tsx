'use client';
import { Poppins } from "next/font/google";
import ServicePage from "../servicepage/page";
import FollowCursor from "../cursor/page";
import { useCart } from "../addtocart/cartContext";
// import { useCartStore } from "../addtocart/cartContext";


const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let CartSection = () => {

  const { cart, removeFromCart } = useCart();
  // const { items, removeItem } = useCartStore();

  return(
    <section className={fontPoppins.className}>
      {/* Landing Page 1 */}
      <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
        <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
          <div className="w-[112px] h-[72px]">
              <h1 className="w-[112px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Cart</h1>
          </div>
          <div className="flex flex-row gap-[8px] items-center">
            <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
            <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
            <p className="w-[41px] h-[24px] font-light text-[14px] text-[#000000]">Cart</p>
          </div>
        </div>
      </div>


      {cart.length === 0 ? (
        <div className="flex flex-row justify-center text-center">
          <p className="text-gray-600 font-medium text-4xl m-10">YOUR CART IS EMPTY</p>
        </div>
      ) : (
        <div className="p-4 border rounded-lg shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.quantity} * ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
              <p className="text-xl font-bold">
                Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </p>
            </div>
        </div>
      )}
       {/* {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">
                      Price: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-xl font-bold">
                Total: ${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </p>
            </div>
          </>
        )} */}
      

      {/* Landing Page 3*/}
      <ServicePage></ServicePage>

      <FollowCursor/>
   </section>
    )
}

export default CartSection