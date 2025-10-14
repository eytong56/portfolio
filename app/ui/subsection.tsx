import { ReactNode } from "react";

export default function Subsection({
  subsectionHeader,
  children,
}: {
  subsectionHeader: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-3xl font-medium pb-8">{subsectionHeader}</h2>
      {children}
    </section>
  );
}
