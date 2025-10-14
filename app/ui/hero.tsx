import { AsteriskIcon } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <div className="w-full pt-16 grid grid-cols-2 auto-rows-auto gap-16 sm:gap-0">
      <div className="col-span-2 sm:col-span-1 justify-start text-4xl sm:text-5xl text-accent inline-block">
        hi, i&apos;m <br />
        <span className="font-bold">emma tong—</span>
      </div>
      <ul className="row-start-2 col-start-1 col-span-2 sm:col-start-2 flex flex-col justify-end items-start gap-4">
        <li className="flex gap-2">
          <AsteriskIcon size="20px" />{" "}
          <p className="flex-1">
            Recent graduate of the{" "}
            <span className="font-semibold">
              Carnegie Mellon University School of Computer Science
            </span>
            .
          </p>
        </li>
        <li className="flex gap-2">
          <AsteriskIcon size="20px" />{" "}
          <p className="flex-1">
            Passionate about <span className="font-semibold">developing</span>{" "}
            and <span className="font-semibold">designing</span> technology for
            social good.
          </p>
        </li>
        <li className="flex gap-2">
          <AsteriskIcon size="20px" />{" "}
          <p className="flex-1">
            Currently seeking entry-level{" "}
            <span className="font-semibold">software engineering</span>{" "}
            positions.
          </p>
        </li>
      </ul>
    </div>
  );
}

// export default function Hero() {
//   return (
//     <div className="w-full pt-16 flex justify-between gap-24 h-80">
//       <div className="flex-1 flex justify-end text-5xl">
//         hi, i&apos;m <br />
//         emma tong—
//       </div>
//       <ul className="flex-1 flex flex-col justify-end items-start gap-4">
//         <li className="flex gap-2">
//           <div>—</div>
//           <p>
//             Recent graduate of the{" "}
//             <span className="font-semibold">
//               Carnegie Mellon University School of Computer Science
//             </span>
//             .
//           </p>
//         </li>
//         <li className="flex gap-2">
//           <div>—</div>
//           <p>
//             Passionate about <span className="font-semibold">developing</span>{" "}
//             and <span className="font-semibold">designing</span> technology for
//             social good.
//           </p>
//         </li>
//         <li className="flex gap-2">
//           <div>—</div>
//           <p>
//             Currently seeking entry-level{" "}
//             <span className="font-semibold">software engineering</span>{" "}
//             positions.
//           </p>
//         </li>
//       </ul>
//     </div>
//   );
// }
