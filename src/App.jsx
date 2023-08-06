import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/blogs/About";
import Login from "./pages/Login/Login";
import Verify from "./pages/Login/Verify";
import List from "./pages/List/List";
import "./index.css"
import Single from "./pages/Single/Single";
import Contact from "./pages/blogs/Contact";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register/Register"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PersistLogin from "./auth/PersistLogin";
import RemarksList from "./pages/RemarksList";
import UserRemarks from "./pages/Remarks"

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
        cacheTime: 30 * 60 * 1000, // 30 minutes in milliseconds
      },
    },
  });
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="Login" element={<Login />} />  
              <Route path="phone/verify" element={<Verify />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />

              {/* Protected Routes */}
              <Route element={<PersistLogin />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/remarks/:id" element={<UserRemarks />} />
              <Route path="/dashboard/remarkslist" element={<RemarksList />} />
              <Route path="/dashboard/alameia" element={<List />} />
              <Route path="/dashboard/single/:emp_no" element={<Single />} />
            </Route>
            </Route>{/* End Dash */}
          </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
