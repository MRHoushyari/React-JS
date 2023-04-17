import { NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      <p>
      	<NavLink style={({isActive})=>{return {color : isActive?"red":"black"}}} to="tab1">Tab1</NavLink>
      	||<NavLink style={({isActive})=>{return {color : isActive?"red":"black"}}} to="tab2">Tab2</NavLink>
      </p>
      <Outlet />
    </>
  );
};

export default Courses;
