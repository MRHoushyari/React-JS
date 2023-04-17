// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>HOME</h1>
      <button onClick={()=>{navigate('/dashboard', {state: 'Mohammad Reza'});}}>Login</button>
      {/* <Link to="/about">About</Link> */}
    </>
  );
};

export default Home;
