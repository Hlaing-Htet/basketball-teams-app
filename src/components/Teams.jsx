import React from "react";
import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();
  if (loading) return <Loading />;
  return (
    <div className="container two-column">
      {" "}
      <Sidebar title="Players" list={teamNames} />
      {/* SideBar here */}
      <Outlet />
    </div>
  );
};

export default Teams;
