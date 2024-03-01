// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import cardsData from "../data/Product.json";

// function Testing() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSlideIndex((prevIndex) =>
//         prevIndex + 1 >= Math.ceil(cardsData.length / 4) ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, []); // Run effect only once on component mount

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) =>
//       prevIndex + 1 >= Math.ceil(cardsData.length / 4) ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) =>
//       prevIndex === 0 ? Math.ceil(cardsData.length / 4) - 1 : prevIndex - 1
//     );
//   };

//   // Calculate the start and end indices of the cards to display
//   const startIndex = slideIndex * 4;
//   const endIndex = startIndex + 4;

//   // Slice the cardsData array to get only the cards to display
//   const displayedCards = cardsData.slice(startIndex, endIndex);

//   return (
//     <div class="container mx-auto p-14">
//       <div class="md:flex md:grid-cols-2">
//         <div class="title mb-40 p-[4rem]">
//           <h1 class="text-[20px]  font-bold md:m-[30px]">HOT DEAL</h1>
//           <p className="text-[#999999] text-[10px] mt-10">
//             [UP TO 34% OFF] HAPPY HOUR
//           </p>
//           <div className="mt-10 gap-10 flex">
//             {/* Conditionally render arrow buttons based on screen size */}
//             <button
//               className="cursor-pointer hidden lg:flex"
//               onClick={nextSlide}
//             >
//               &lt;
//             </button>
//             <button
//               className="cursor-pointer hidden lg:flex"
//               onClick={prevSlide}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {displayedCards.map((card) => (
//             <div class="card p-6" key={card.id}>
//               <div className="text-start m-8">
//                 <a href={card.url}>
//                   <Image
//                     className="w-[120px] h-[120px] m-4"
//                     src={card.url}
//                     alt={card.name}
//                     width={100}
//                     height={100}
//                   />
//                 </a>
//                 <h1 className="w-[9rem] text-[15px]">{card.name}</h1>
//                 <p>${card.price}</p>
//                 <p>{card.rate}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testing;
