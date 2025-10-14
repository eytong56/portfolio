import Contacts from "@/app/ui/contacts";

export default function Footer() {
  return (
    <footer className="w-full h-fit pt-16 pb-20 sm:text-sm flex sm:flex-row sm:justify-between sm:items-end flex-col items-start gap-2">
      <div className="flex flex-col">
        <div>2025</div>
        <div>designed in figma</div>
        <div>developed with next.js + ts</div>
      </div>
      <Contacts />
    </footer>
  );
}
