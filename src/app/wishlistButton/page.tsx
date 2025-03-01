// 'use client';

// import { useWishlist } from "../wishlist/wishlistContext";

// interface Props {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     image: string;
//     isNew: boolean
// }

// interface ProductCardProps {
//   product: Props
// }

// export default function WishlistButton({product}: ProductCardProps) {
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
//   const inWishlist = isInWishlist(product.id);

//   const handleToggleWishlist = () => {
//     if (inWishlist) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <button
//       onClick={handleToggleWishlist}
//       className={`p-2 rounded-full ${
//         inWishlist 
//           ? 'text-red-500 bg-red-100 hover:bg-red-200'
//           : 'text-gray-500 hover:bg-gray-100'
//       }`}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill={inWishlist ? 'currentColor' : 'none'}
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//         />
//       </svg>
//     </button>
//   );
// }