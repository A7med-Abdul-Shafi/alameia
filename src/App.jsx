import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/blogs/About";
import Projects from "./pages/blogs/Projects";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Listh from "./pages/List/Listh";
import Liste1 from "./pages/List/Liste1";
import Liste2 from "./pages/List/Liste2";
import Single from "./pages/Single/Single";
import Single1 from "./pages/Single/Single1";
import Single2 from "./pages/Single/Single2";
import Single3 from "./pages/Single/Single3";
import SingleSafa from "./pages/Single/SingleSafa";
import SingleSawady1 from "./pages/Single/SingleSawady1";
import SingleSawady2 from "./pages/Single/SingleSawady2";
import SingleBatawy1 from "./pages/Single/SingleBatawy1";
import SingleBatawy2 from "./pages/Single/SingleBatawy2";
import SingleWaqf from "./pages/Single/SingleWaqf";
import SingleMatrafy from "./pages/Single/SingleMatrafy";
import SingleHemyani from "./pages/Single/SingleHemyani";
import SingleRahmaneya from "./pages/Single/SingleRahmaneya";
import SingleSaqaf from "./pages/Single/SingleSaqaf";
import SingleFeda from "./pages/Single/SingleFeda";
import SingleElsalam from "./pages/Single/SingleElsalam";
import SingleElfateh from "./pages/Single/SingleElfateh";
import SingleMorgan1Naseem from "./pages/Single/SingleMorgan1Naseem";
import SingleMorgan2Bathaa from "./pages/Single/SingleMorgan2Bathaa";
import SingleParadise from "./pages/Single/SingleParadise";
import SingleNefeay from "./pages/Single/SingleNefeay";
import Contact from "./pages/blogs/Contact";
import "./style/dark.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
// import { userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/Register/Register";
import Userlist from "./pages/userlist/Userlist";
import User from "./pages/newuser/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AlameiaReport from "./pages/Reports/AlameiaReport";
import HaramainReport from "./pages/Reports/HaramainReport";
import EwaaaReport from "./pages/Reports/EwaaaReport";
import EwaabReport from "./pages/Reports/EwaabReport";
import AlameiaFood from "./pages/Food/FoodAlameia";
import Transportation from "./pages/Transportation/TransportationTab";
import BuildingsReport from "./pages/Reports/BuildingsReport"
import MaintainenceActions from "./pages/maintainence/Maintainence";

function App() {

  const { darkMode } = useContext(DarkModeContext)
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        staleTime: 0,
        cacheTime: 0,
        refetchInterval: 0,
      }
    }
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/"  >
              <Route index element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/user" element={<User />} />
              <Route path="/dashboard/users" element={<Userlist />} />
              <Route path="/dashboard/maintainence" element={<MaintainenceActions />} />
              <Route path="/dashboard/alameia" element={<List />} />
              <Route path="/dashboard/alameia/food" element={<AlameiaFood />} />
              <Route path="/dashboard/alameia/transport" element={<Transportation />} />
              <Route path="/dashboard/reportduealameia" element={<AlameiaReport />} />
              <Route path="/dashboard/reportdueharamain" element={<HaramainReport />} />
              <Route path="/dashboard/reportdueewaa" element={<EwaaaReport />} />
              <Route path="/dashboard/reportdueewaab" element={<EwaabReport />} />
              <Route path="/dashboard/buildings" element={<BuildingsReport />} />
              <Route path="/dashboard/ewaa2" element={<Liste2 />} />
              <Route path="/dashboard/haramain" element={<Listh />} />
              <Route path="/dashboard/ewaa1" element={<Liste1 />} />
              <Route path="/dashboard/single/:id" element={<Single />} />
              <Route path="/dashboard/singlesafa/:id" element={<SingleSafa />} />
              <Route path="/dashboard/singlesawady1/:id" element={<SingleSawady1 />} />
              <Route path="/dashboard/singlesawady2/:id" element={<SingleSawady2 />} />
              <Route path="/dashboard/singlebatawy1/:id" element={<SingleBatawy1 />} />
              <Route path="/dashboard/singlebatawy2/:id" element={<SingleBatawy2 />} />
              <Route path="/dashboard/singlewaqf/:id" element={<SingleWaqf />} />
              <Route path="/dashboard/singlematrafy/:id" element={<SingleMatrafy />} />
              <Route path="/dashboard/singlehemyani/:id" element={<SingleHemyani />} />
              <Route path="/dashboard/singlerahmaneya/:id" element={<SingleRahmaneya />} />
              <Route path="/dashboard/singlesaqaf/:id" element={<SingleSaqaf />} />
              <Route path="/dashboard/singlefeda/:id" element={<SingleFeda />} />
              <Route path="/dashboard/singleelsalam/:id" element={<SingleElsalam />} />
              <Route path="/dashboard/singleelfateh/:id" element={<SingleElfateh />} />
              <Route path="/dashboard/singlemorgan1naseem/:id" element={<SingleMorgan1Naseem />} />
              <Route path="/dashboard/singlemorgan2bathaa/:id" element={<SingleMorgan2Bathaa />} />
              <Route path="/dashboard/singleparadise/:id" element={<SingleParadise />} />
              <Route path="/dashboard/singlenefeay/:id" element={<SingleNefeay />} />
              <Route path="/dashboard/single1/:id" element={<Single1 />} />
              <Route path="/dashboard/single2/:id" element={<Single2 />} />
              <Route path="/dashboard/single3/:id" element={<Single3 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div >
  );
}

export default App;
