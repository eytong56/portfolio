import { ReactNode } from "react";

export default function Section({
  sectionHeader,
  children,
}: {
  sectionHeader: string;
  children: ReactNode;
}) {
  return (
    <section id={sectionHeader} className="w-full">
      <div className="w-full flex pb-12 items-baseline gap-3">
        <h1 className="text-4xl sm:text-5xl font-bold">{sectionHeader}</h1>
        <div className="flex-grow border-b"></div>
      </div>
      {children}
    </section>
  );
}
