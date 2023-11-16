import "./App.scss";
import { Login } from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/sidebar/Sidebar";
import { useState } from "react";
import Foodmenu from "./pages/FoodMenu/Foodmenu";
const Dashboard = ({ children }) => {
  const [toggle, settoggle] = useState(false)
  return (
    <>
      <Header sidebartoggle={toggle} setsidebartoggle = {settoggle}/>
      <div className={!toggle?"homecontainer d-flex justify-content-between items-center w-full":"homecontainer homeContainerToggle d-flex justify-content-between items-center w-full"}>
        <Sidebar sidebartoggle={toggle} setsidebartoggle = {settoggle}/>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Dashboard ><Home /></Dashboard>} />
        <Route path="/food-menu" exact element={<Dashboard ><Foodmenu pagesize={[0,7]}/></Dashboard>} />
        <Route path="/food-menu/page-2" exact element={<Dashboard ><Foodmenu pagesize={[7,13]}/></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
