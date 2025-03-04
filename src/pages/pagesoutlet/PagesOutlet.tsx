import React from "react";
import Nav from "../../components/navbar/Nav";
import { Outlet } from "react-router";

function PagesOutlet() {
  return (
    <div className=" flex flex-row ">
      <Nav />
      <Outlet></Outlet>
    </div>
  );
}

export default PagesOutlet;
