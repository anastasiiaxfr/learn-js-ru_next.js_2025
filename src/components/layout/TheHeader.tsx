import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
