// import { motion } from "framer-motion";

// const RoyalScroll: React.FC = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="relative flex flex-col items-center"
//     >
//       {/* Top Stick */}
//       <motion.div 
//         initial={{ y: 50 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", damping: 12 }}
//         className="w-72 h-4 bg-amber-900 rounded-full z-20 shadow-md border-b border-amber-700"
//       />

//       {/* The Paper Body */}
//       <motion.div 
//         initial={{ height: 0 }}
//         animate={{ height: "450px" }}
//         transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//         className="w-64 bg-[#fdf6e3] shadow-inner overflow-hidden border-x-[12px] border-[#eaddc1] flex flex-col items-center px-6 py-10 text-center"
//         style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.8 }}
//           className="space-y-6"
//         >
//           <span className="text-4xl">👑</span>
//           <h1 className="font-serif text-3xl text-amber-900 font-bold border-b-2 border-amber-200 pb-2">
//             A Royal Decree
//           </h1>

//           <div className="space-y-4 font-serif italic text-lg text-slate-800">
//             <p>"In the kingdom of my heart,"</p>
//             <p className="text-2xl font-bold text-rose-700">You are the only Ruler.</p>
//             <p className="text-sm">Every moment with you is a celebration of love.</p>
//           </div>

//           <motion.div 
//             animate={{ rotate: [0, 10, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="pt-4 text-5xl"
//           >
//             💍
//           </motion.div>

//           <p className="font-serif text-xs uppercase tracking-[0.2em] text-amber-800 pt-4">
//             Valentine's Day 2026
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Bottom Stick */}
//       <motion.div 
//         initial={{ y: -450 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//         className="w-72 h-4 bg-amber-900 rounded-full z-20 shadow-xl border-t border-amber-700"
//       />
//     </motion.div>
//   );
// };

// export default RoyalScroll;


// import { motion } from "framer-motion";

// const RoyalScroll: React.FC = () => {
//   return (
//     <div className="relative flex flex-col items-center py-10">
//       {/* Top Handle */}
//       <motion.div
//         initial={{ scale: 0.8, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-30 flex items-center justify-center"
//       >
//         {/* Gold Tips */}
//         <div className="w-8 h-12 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-700 rounded-full shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//         <div className="w-[300px] h-6 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-md border-b border-black/10" />
//         <div className="w-8 h-12 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-700 rounded-full shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />

//         {/* Tassel */}
//         <div className="absolute left-10 top-6 w-1 h-12 bg-yellow-600/50">
//             <div className="absolute bottom-0 -left-2 w-5 h-10 bg-yellow-700/30 blur-[2px] rounded-full" />
//         </div>
//       </motion.div>

//       {/* The Paper Unrolling */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: "500px", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "circOut" }}
//         className="w-[280px] bg-[#fdfaf1] relative overflow-hidden shadow-2xl border-x-[1px] border-amber-200"
//         style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }}
//       >
//         {/* Content from Reference Image */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="p-6 flex flex-col items-center text-center space-y-6"
//         >
//           <div className="text-rose-500 text-3xl">♡ FUBS</div>

//           <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

//           <div className="font-serif italic text-xl text-slate-800 space-y-4 leading-relaxed tracking-wide">
//             <p>"Kare chaand taaron ko,</p>
//             <p>Mashhoor itna kyu</p>
//             <p>Kambakht inse bhi</p>
//             <p>Khoobsurat hai tu..."</p>
//           </div>

//           <p className="text-rose-600 font-bold text-lg">I love you 🫶</p>

//           <h1 className="text-2xl font-serif font-bold text-slate-900 border-t border-rose-100 pt-4">
//             Happy Valentine's Day ❤️
//           </h1>

//           <div className="text-[10px] tracking-[0.3em] text-slate-400 pt-4">
//             WWW.FUBS.IN
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Bottom Handle */}
//       <motion.div
//         initial={{ y: -500 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "circOut" }}
//         className="relative z-30 flex items-center justify-center"
//       >
//         <div className="w-8 h-12 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-700 rounded-full shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//         <div className="w-[300px] h-6 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-md" />
//         <div className="w-8 h-12 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-700 rounded-full shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//       </motion.div>
//     </div>
//   );
// };

// export default RoyalScroll;


// import { motion } from "framer-motion";

// const RoyalScroll: React.FC = () => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }} // Initial tilt
//             animate={{ opacity: 1, scale: 1, rotateZ: -2 }} // Slight 3D bend angle
//             transition={{ duration: 1 }}
//             className="relative flex flex-col items-center py-10 perspective-1000"
//         >
//             {/* Top Handle */}
//             <motion.div
//                 initial={{ y: 50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 1, ease: "circOut" }}
//                 className="relative z-30 flex items-center justify-center -mb-1"
//             >
//                 <div className="w-8 h-14 bg-gradient-to-b from-rose-700 via-rose-400 to-rose-800 rounded-full shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//                 <div className="w-[340px] h-8 bg-gradient-to-r from-rose-800 via-rose-300 to-rose-800 shadow-lg border-b border-rose-900/20" />
//                 <div className="w-8 h-14 bg-gradient-to-b from-rose-700 via-rose-400 to-rose-800 rounded-full shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//             </motion.div>

//             {/* The Paper Unrolling - Styled as an Ancient Valentine Parchment */}
//             <motion.div
//                 initial={{ height: 0, scaleX: 0.95 }}
//                 animate={{ height: "auto", scaleX: 1 }}
//                 transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
//                 className="w-[310px] bg-[#fffaf0] relative overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.2)] border-x-[3px] border-rose-200/50"
//                 style={{
//                     backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
//                     // This creates the "bent" 3D look
//                     transform: "rotateX(10deg) rotateY(-5deg)",
//                     borderRadius: "0 0 40px 40px / 0 0 10px 10px"
//                 }}
//             >
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.8, duration: 1.2 }}
//                     className="p-8 flex flex-col items-center text-center"
//                 >
//                     {/* Decorative Header */}
//                     <div className="text-rose-600 text-sm tracking-[0.4em] mb-2 font-light uppercase">
//                         For My Dearest Hrithika
//                     </div>
//                     <div className="text-rose-400 text-3xl mb-4">❦</div>

//                     {/* New Reaffirmation Points */}
//                     <div className="font-serif italic text-lg text-rose-900 space-y-6 leading-relaxed">
//                         {/* Point 1: From Presence to Peace */}
//                         <p className="drop-shadow-sm border-b border-rose-100 pb-4">
//                             "What started as a simple wish to see you every day has grown into a deep sense of peace.
//                             In your presence, the world feels calm, and my heart feels at home."
//                         </p>

//                         {/* Point 2: The Foundation of Trust */}
//                         <p className="text-base font-medium">
//                             "I cherish the honesty we share. My promise to you is simple but absolute:
//                             a foundation of unwavering trust and a heart that respects you above all else."
//                         </p>

//                         {/* Point 3: Walking Together */}
//                         <p className="text-base italic bg-rose-50/50 py-2 rounded-lg">
//                             "Beyond words and attraction, I choose to stand by you—to protect your happiness
//                             and to be your strength through every season life brings our way."
//                         </p>
//                     </div>

//                     {/* Footer Branding */}
//                     <div className="mt-8 flex flex-col items-center">
//                         <motion.div
//                             animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
//                             transition={{ repeat: Infinity, duration: 2 }}
//                             className="text-rose-500 text-4xl mb-2"
//                         >
//                             ❤️
//                         </motion.div>
//                         <p className="text-rose-800 font-bold text-xl tracking-[0.1em]">FOREVER YOURS</p>
//                         <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent mt-4" />
//                     </div>
//                 </motion.div>

//                 {/* Subtle Paper Crease Effect */}
//                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/[0.03] via-transparent to-black/[0.03]" />
//             </motion.div>

//             {/* Bottom Handle */}
//             <motion.div
//                 initial={{ y: -40 }}
//                 animate={{ y: -5 }}
//                 transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
//                 className="relative z-30 flex items-center justify-center"
//             >
//                 <div className="w-8 h-14 bg-gradient-to-b from-rose-700 via-rose-400 to-rose-800 rounded-full shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//                 <div className="w-[340px] h-9 bg-gradient-to-r from-rose-800 via-rose-300 to-rose-800 shadow-2xl" />
//                 <div className="w-8 h-14 bg-gradient-to-b from-rose-700 via-rose-400 to-rose-800 rounded-full shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
//             </motion.div>
//         </motion.div>
//     );
// };

// export default RoyalScroll;


import { motion } from "framer-motion";

const RoyalScroll: React.FC = () => {
    // This SVG mask creates the jagged "torn paper" effect for the left and right edges
    const tornEdgePath = "polygon(0% 0%, 5% 2%, 0% 5%, 5% 10%, 0% 15%, 5% 20%, 0% 25%, 5% 30%, 0% 35%, 5% 40%, 0% 45%, 5% 50%, 0% 55%, 5% 60%, 0% 65%, 5% 70%, 0% 75%, 5% 80%, 0% 85%, 5% 90%, 0% 95%, 5% 100%, 95% 100%, 100% 95%, 95% 90%, 100% 85%, 95% 80%, 100% 75%, 95% 70%, 100% 65%, 95% 60%, 100% 55%, 95% 50%, 100% 45%, 95% 40%, 100% 35%, 95% 30%, 100% 25%, 95% 20%, 100% 15%, 95% 10%, 100% 5%, 95% 0%)";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex flex-col items-center py-5"
        >
            {/* Top Handle (Wooden/Gold Style) */}
            <div className="relative z-30 flex items-center justify-center">
                <div className="w-6 h-10 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full shadow-lg" />
                <div className="w-[280px] h-6 bg-gradient-to-r from-amber-900 via-amber-200 to-amber-900 shadow-md border-b border-black/10" />
                <div className="w-6 h-10 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full shadow-lg" />
            </div>

            {/* Torn Paper Content */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                    clipPath: tornEdgePath,
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')`,
                    backgroundColor: '#fdfaf1'
                }}
                className="w-[300px] relative overflow-hidden shadow-xl -my-1"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="p-6 pt-10 pb-10 flex flex-col items-center text-center space-y-5"
                >
                    <div className="text-rose-500 font-serif text-xs tracking-[0.3em] uppercase opacity-80">
                        For My Ammuu
                    </div>

                    <div className="w-12 h-[1px] bg-rose-200" />

                    <div className="font-serif italic text-[15px] text-slate-800 leading-relaxed px-4">
                        {/* Focusing on growth and the future */}
                        {/* <p>
                            "Beyond the initial spark, I’ve found a sanctuary in our connection that I never knew existed."
                        </p> */}
                        <p className="mt-4">
                            Loving you isn’t an accident or a moment, it’s a conscious choice. A choice to stand with you, protect your light, and walk beside you wherever life takes us. <br />
                            Happy Valentine’s Day 💘✨
                        </p>
                    </div>

                    <div className="flex flex-col items-center pt-2">
                        <motion.span
                            animate={{
                                scale: [1, 1.15, 1],
                                filter: ["drop-shadow(0 0 2px #fb7185)", "drop-shadow(0 0 8px #fb7185)", "drop-shadow(0 0 2px #fb7185)"]
                            }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="text-rose-600 text-2xl mb-1"
                        >
                            ❤️
                        </motion.span>
                        <p className="text-rose-800 font-bold text-xs tracking-[0.2em] mt-1">BEYOND WORDS</p>
                        <p className="text-rose-400 text-[10px] italic mt-1 font-light">Endlessly yours</p>
                    </div>

                    <div className="text-[10px] tracking-[0.4em] text-slate-300 pt-6 uppercase">
                        Hrithika ♡ Khushi
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Handle */}
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative z-30 flex items-center justify-center"
            >
                <div className="w-6 h-10 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full shadow-lg" />
                <div className="w-[280px] h-6 bg-gradient-to-r from-amber-900 via-amber-200 to-amber-900 shadow-md" />
                <div className="w-6 h-10 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full shadow-lg" />
            </motion.div>
        </motion.div>
    );
};

export default RoyalScroll;