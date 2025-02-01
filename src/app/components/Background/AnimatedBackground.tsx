// export default function AnimatedBackground() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient"></div>
//       <div className="absolute inset-0 opacity-30">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full mix-blend-multiply filter blur-xl animate-blob"
//             style={{
//               backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.4)`,
//               width: `${Math.random() * 400 + 100}px`,
//               height: `${Math.random() * 400 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `blob ${Math.random() * 10 + 20}s linear infinite`,
//               animationDelay: `${Math.random() * -20}s`,
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
