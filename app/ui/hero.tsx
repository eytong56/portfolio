import { taglines } from "@/app/lib/content";

export default function Hero() {
  return (
    <div className="w-full pt-16 flex justify-between gap-24 h-80">
      <div className="flex-1 flex justify-end text-5xl">
        hi, i&apos;m <br />
        emma tong—
      </div>
      <ul className="flex-1 flex flex-col justify-end items-start gap-4">
        <li className="flex gap-2">
          <div>—</div>
          <p>
            Recent graduate of the{" "}
            <span className="font-semibold">
              Carnegie Mellon University School of Computer Science
            </span>
            .
          </p>
        </li>
        <li className="flex gap-2">
          <div>—</div>
          <p>
            Passionate about <span className="font-semibold">developing</span>{" "}
            and <span className="font-semibold">designing</span> technology for
            social good.
          </p>
        </li>
        <li className="flex gap-2">
          <div>—</div>
          <p>
            Currently seeking entry-level{" "}
            <span className="font-semibold">software engineering</span>{" "}
            positions.
          </p>
        </li>
      </ul>
    </div>
  );
}
