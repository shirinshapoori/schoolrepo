import React from "react";

function Navbar() {
  const navbarText = "تخصیص دانش آموز به کلاس";
  return (
    <>
      <div className="navbar">
        <img src="./home.png" alt="ax" style={{ width: "7%" }} />
        <label style={{ marginLeft: "8%" }}>{navbarText}</label>
        <div></div>
      </div>
    </>
  );
}
export default Navbar;
