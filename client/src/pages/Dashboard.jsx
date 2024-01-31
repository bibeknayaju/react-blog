import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
import DashPosts from "../components/DashPosts.jsx";
import DashUsers from "../components/DashUsers.jsx";
import DashComments from "../components/DashComments.jsx";
import DashboardComp from "../components/DashboardComp.jsx";

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
      {/* for comments */}
      {tab === "comments" && <DashComments />}
      {/* for dashboard */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}

export default Dashboard;
