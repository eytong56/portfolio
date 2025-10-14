import { ReactNode } from "react";

export default function Section({ sectionHeader, children }: { sectionHeader: string, children: ReactNode }) {
  return (
    <section>
      <div className="w-full flex pb-12">
        <h1 className="text-5xl font-bold">{sectionHeader}</h1>
        <div className="flex-grow border-b"></div>
      </div>
      {children}
    </section>
  );
}
