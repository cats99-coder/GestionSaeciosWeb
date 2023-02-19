import { useNavigate } from "react-router-dom";

const NavItem = ({ text, url }) => {
  const router = useNavigate();
  const goTo = () => {
    router(url);
  };
  return (
    <li
      onClick={goTo}
      className="px-2 py-1 cursor-pointer hover:bg-white rounded-lg hover:text-blue"
    >
      {text}
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-blue text-white shadow-lg px-2 py-1 flex justify-between items-center">
      <img
        onClick={() => navigate("/")}
        width={125}
        height={50}
        src="/logo.png"
        alt="logo"
      />
      <nav>
        <ul className="flex space-x-2">
          <NavItem text={"Saecios"} url={"/saecios"} />
          <NavItem text={"Gestión Suministros"} url={"/gestion-suministros"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
