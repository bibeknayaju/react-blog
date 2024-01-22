import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* for left */}
        <div>
          <Link
            to={"/"}
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Bibek
            </span>
            Blog
          </Link>
        </div>
        {/* for right */}
        <div></div>
      </div>
    </div>
  );
}

export default SignIn;
