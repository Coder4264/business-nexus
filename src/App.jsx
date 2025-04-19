import {Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        
      </Routes>
    
  );
}

export default App;
