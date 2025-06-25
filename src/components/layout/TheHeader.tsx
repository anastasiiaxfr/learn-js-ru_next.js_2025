import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthBtnGroup from "@/app/(auth)/auth-btn-group";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
        <AuthBtnGroup />
      </div>
    </header>
  );
}

export default Header;
