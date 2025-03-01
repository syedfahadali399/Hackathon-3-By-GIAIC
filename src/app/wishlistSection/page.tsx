'use client';
import Image from 'next/image';
import { useWishlist } from '../wishlist/wishlistContext';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <section>
      {/* Landing Page 1 */}
      <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
        <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
          <div className="w-[175px] h-[72px]">
            <h1 className="w-[175px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">
              Wishlist
            </h1>
          </div>
          <div className="flex flex-row gap-[8px] items-center">
            <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">
              Home
            </p>
            <Image
              className="w-[20px] h-[20px]"
              src="/shopicon/sidearrow.png"
              alt="sidearrow"
              width={20}
              height={20}
            />
            <p className="w-[41px] h-[22px] font-medium text-[14px] text-[#000000]">
              Wishlsit
            </p>
          </div>
        </div>
      </div>

    <div className="container mx-auto px-4 py-8">
      <div className='flex flex-row justify-center text-center'>
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      </div>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your Wishlist is Empty</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-2">
                 <img
                   src={product.image}
                   alt={product.title}
                   className="w-16 h-16 object-cover rounded mr-4"
                   width={64}
                   height={64}
                   title={product.title}
                 />
                 <div>
                   <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                   <p className="text-gray-600">${product.price}</p>
                 </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Product
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
}
// import { useWishlist } from "../wishlist/wishlistContext";

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   return (
//     <section className="p-4">
//       <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p className="text-gray-600">Your wishlist is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {wishlist.map((product) => (
//             <div
//               key={product.id}
//               className="flex items-center justify-between p-4 border rounded shadow-md"
//             >
//               <div className="flex items-center">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-16 h-16 object-cover rounded mr-4"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{product.title}</h2>
//                   <p className="text-gray-600">${product.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromWishlist(product.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default WishlistPage;


