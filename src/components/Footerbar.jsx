import React from "react";
import { useSelector } from "react-redux";

export default function Footerbar() {
  const amount = useSelector((state) => state.amount);
  return (
    <div className='align-items-right'>
    <nav className="navbar navbar-expand-lg bg-light align-right">
          <button disabled={true} className="btn btn-warning">
            Your Balance: {amount}
          </button>
      
    </nav>
    </div>
  );
}
