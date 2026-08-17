import { MdMenu } from "react-icons/md";

export default function Menu() {
  return (
    <div
      style={{ backgroundColor: "white", elevation: 2, zIndex: 2 }}
      className="fixed top-0 left-0 right-0 flex p-5 items-center"
    >
      <img alt="GlobalX Logo" height={40} width={100} src="/logo.png" />
      <div className="grow"></div>
      <div id="mobile-menu" className="sm:hidden">
        <MdMenu />
      </div>
      <div id="web-menu" className="hidden sm:block">
        <a
          className="text-xs px-2 hover:text-base hover:font-bold"
          href="#about"
        >
          HOME
        </a>
        <a
          className="text-xs px-2 hover:text-base hover:font-bold"
          href="#services"
        >
          SERVICES
        </a>
        <a
          className="text-xs px-2 hover:text-base hover:font-bold"
          href="#team"
        >
          TEAM
        </a>
        <a
          className="text-xs px-2 hover:text-base hover:font-bold"
          href="#contact"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
}
