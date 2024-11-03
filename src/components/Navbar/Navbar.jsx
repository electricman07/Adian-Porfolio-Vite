import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="main-navbar h-12 w-screen flex justify-between items-center sticky top-0 px-5">
        <div className="left-section">
          <div className="logo-container flex justify-items-center items-center">
            <img
              src="../../../public/assets/images/Logo.png"
              className="h-10"
            />
            <h2 className="text-xl pl-10">Adrian Popowich</h2>
          </div>
        </div>
        <div className="right-section flex text-justify gap-4">
          <div className="">link</div>
          <div className="">link</div>
          <div className="">link</div>
          <div className="">link</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
