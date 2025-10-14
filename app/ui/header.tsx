import Contacts from "@/app/ui/contacts";

export default function Header() {
  return (
    <header className="w-full h-fit pt-10 flex justify-between items-end gap-12">
      <div className="flex-1 text-2xl font-bold text-accent">
        emma tong
      </div>
      <nav className="w-full flex justify-end sm:justify-center">
        <ul className="flex flex-col items-end gap-1 sm:flex-row sm:gap-10">
          <li>
            <a
              href="#development"
              className="border-b border-current hover:text-secondary transition-colors duration-150"
            >
              development
            </a>
          </li>
          <li>
            <a
              href="#design"
              className="border-b border-current hover:text-secondary transition-colors duration-150"
            >
              design
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="border-b border-current hover:text-secondary transition-colors duration-150"
            >
              about
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:visible sm:flex-1 sm:flex sm:flex-col sm:gap-1">
        <Contacts />
      </div>
    </header>
  );
}
