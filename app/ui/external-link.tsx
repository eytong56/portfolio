import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ReactNode } from "react";

export default function ExternalLink({
  link_url,
  children,
  underlined,
}: {
  link_url: string;
  children: ReactNode;
  underlined: boolean;
}) {
  return (
    <span className={`cursor-pointer border-current transition-colors duration-150 ${underlined ? "border-b hover:text-secondary" : "hover:border-b group-hover:border-b"}`}>
      <a href={link_url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <span className="inline pl-[0.1em] align-baseline">
        <ArrowUpRightIcon
          size="1.25em"
          weight="thin"
          className="inline relative bottom-[0.1em]"
        />
      </span>
    </span>
  );
}
