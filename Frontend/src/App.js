import React from "react";
import { Routes, Route } from "react-router-dom";
import MiniDrawer from "./sidebar/MiniDrawer";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveDashboard from "./pages/LeaveDashboard";
import LeaveSummary from "./components/LeaveSummary";
import Calender from "./components/Calender";
const empID = localStorage.getItem("employee_id");
const clientID = localStorage.getItem("clientid");
const branchID = localStorage.getItem("branchid");

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<MiniDrawer />}>
          <Route index element={<Home />} />
          <Route path="calender" element={<Calender />} />
          <Route path="leavedashboard" element={<LeaveDashboard />} />
          <Route
            path="applyleave"
            element={
              <ApplyLeave
                empID={empID}
                branchID={branchID}
                clientID={clientID}
              />
            }
          />
          <Route path="history" element={<LeaveSummary />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
