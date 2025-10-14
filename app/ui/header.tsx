export default function Header() {
  return <header className="w-full h-fit px-12 pt-10 flex justify-between items-end gap-12">
    <div className="flex-1 text-2xl">emma tong</div>
    <nav className="w-full flex justify-center">
      <ul className="flex gap-10">
        <li>development</li>
        <li>design</li>
        <li>about</li>
      </ul>
    </nav>
    <div className="flex-1">
      <ul>
        <li>email</li>
        <li>linkedin</li>
        <li>github</li>
      </ul>
    </div>
  </header>;
}
