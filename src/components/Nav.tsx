import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/Logo7.png";

function Nav() {
  return (
    <div className="navbar bg-base-100 py-4 px-4">
      {/* Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger Button */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/team">Who We Are</Link>
            </li>
            <li>
              <a>What We Do</a>
              <ul className="p-2">
                <li>
                  <a>Financial Planning</a>
                </li>
                <li>
                  <a>Investments</a>
                </li>
                <li>
                  <a>Financial Counseling</a>
                </li>
                <li>
                  <a>Insurance</a>
                </li>
              </ul>
            </li>
            <li>
              <a>How We Do It</a>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <Image src={Logo} alt="logo" width={250} />
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link href="/team">Who We Are</Link>
          </li>
          {/* What we Do */}
          <li tabIndex={0}>
            <details>
              <summary>What We Do</summary>
              <ul className="p-2 w-56">
                <li>
                  <a>Financial Planning</a>
                </li>
                <li>
                  <a>Investments</a>
                </li>
                <li>
                  <a>Financial Counseling</a>
                </li>
                <li>
                  <a>Insurance</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>How We Do it</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
