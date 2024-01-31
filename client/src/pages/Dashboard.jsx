import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* for sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* for dash right side */}
      {tab === "profile" && <DashProfile />}
      {/* for post */}
      {tab === "posts" && <DashPosts />}
      {/* for users */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}

export default Dashboard;
