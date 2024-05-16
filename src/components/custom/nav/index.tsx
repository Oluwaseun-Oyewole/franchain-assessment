import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="bg-primary w-full">
        <div className="max-w-[1300px] mx-auto">
          <p>Logo</p>
        </div>
      </div>
      <div className="bg-white w-full">
        <p>Log In</p>
      </div>
    </nav>
  );
};

export default Navigation;
