import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <svg
            width="150"
            height="70"
            viewBox="0 0 370 93.67051124572754"
            class="looka-1j8o68f"
          >
            <defs id="SvgjsDefs1353"></defs>
            <g
              id="SvgjsG1354"
              featurekey="symbolFeature-0"
              transform="matrix(2.0833333333333335,0,0,2.0833333333333335,0,-3.2044867674509687)"
              fill="#ff2e63"
            >
              <title xmlns="http://www.w3.org/2000/svg">e commerce_22</title>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20,40.5a3,3,0,1,0,3,3A3,3,0,0,0,20,40.5Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,20,44.5Zm13-4a3,3,0,1,0,3,3A3,3,0,0,0,33,40.5Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,33,44.5Zm15-25a8,8,0,0,0-8-8H36.64a13,13,0,0,0-25.28,0H8a8,8,0,0,0,0,16H12l3.43,10.32a1,1,0,0,0,.95.68H35.5a1,1,0,0,0,.93-.64l4-10.38A8,8,0,0,0,48,19.5Zm-13.18,17H17.05l-4.33-13H39.87ZM41.3,25.36l1-2.5a1,1,0,0,0-.93-1.36H12.05l-1.43-4.32a1,1,0,0,0-.95-.68h-5a1,1,0,0,0,0,2H9l1.43,4.31v0l.89,2.67H8a6,6,0,0,1,0-12h4.18a1,1,0,0,0,1-.83,11,11,0,0,1,21.66,0,1,1,0,0,0,1,.83H40a6,6,0,0,1,1.3,11.86Z"
              ></path>
            </g>
            <g
              id="SvgjsG1355"
              featurekey="nameFeature-0"
              transform="matrix(1.347273026145106,0,0,1.347273026145106,118.92218035846722,15.221819645418199)"
              fill="#252a34"
            >
              <path d="M26.52 40 l0 -9.2 l-1.8 0 l0 7.6 l-11.52 0 l0 -14 l10.32 0 l0 -1.6 l-10.32 0 l0 -13.2 l11.52 0 l0 7.6 l1.8 0 l0 -9.2 l-25.72 0 l0 1.6 l3.2 0 l0 28.8 l-3.2 0 l0 1.6 l25.72 0 z M40.92 26.4 l0 1.6 l-10 0 l0 -1.6 l10 0 z M84.28 9.600000000000001 l0 28.8 l2.8 0 l0 1.6 l-16 0 l0 -1.6 l4 0 l0 -28.56 l-7.88 30.16 l-9.4 0 l-8.68 -30.32 l0 28.72 l4 0 l0 1.6 l-9 0 l0 -1.6 l3.2 0 l0 -28.8 l-3.2 0 l0 -1.6 l13.92 0 l8.2 28.64 l7.48 -28.64 l13.36 0 l0 1.6 l-2.8 0 z M123.44 38.4 l0 1.6 l-16.56 0 l0 -1.6 l4.28 0 l-3.36 -10.4 l-11.08 0 l-3.4 10.4 l4.08 0 l0 1.6 l-8.72 0 l0 -1.6 l2.72 0 l9.88 -30.4 l9.56 0 l9.88 30.4 l2.72 0 z M107.28 26.4 l-5.04 -15.44 l-5 15.44 l10.04 0 z M141.44 40 l0 -1.6 l-3.2 0 l0 -13.6 l6.52 0 l0 11.88 l3.32 3.32 l9.08 0 l0 -1.6 l-3.2 0 l0 -11.08 l-3.32 -3.32 l3.32 -3.32 l0 -8.96 l-3.72 -3.72 l-24.4 0 l0 1.6 l3.2 0 l0 28.8 l-3.2 0 l0 1.6 l15.6 0 z M138.24 9.600000000000001 l6.52 0 l0 13.6 l-6.52 0 l0 -13.6 z M160.96 17.2 l0 -7.6 l7.2 0 l0 28.8 l-3.2 0 l0 1.6 l15.6 0 l0 -1.6 l-3.2 0 l0 -28.8 l7.2 0 l0 7.6 l1.8 0 l0 -9.2 l-27.2 0 l0 9.2 l1.8 0 z"></path>
            </g>
          </svg>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
