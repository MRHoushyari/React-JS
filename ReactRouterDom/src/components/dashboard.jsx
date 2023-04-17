import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const {state} = useLocation();
    return (
    <>
      <h1>DashBoard</h1>
      <h1>hi {state}</h1>
    </>
  );
};

export default Dashboard;
