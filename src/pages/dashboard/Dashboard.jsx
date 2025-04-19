import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication first
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
      return;
    }

    // Get current user data from either localStorage or sessionStorage
    const storedUser = localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser");
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        
        // Verify user exists in the main users array
        const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const verifiedUser = allUsers.find(u => u.id === user.id);
        
        if (verifiedUser) {
          setUserData(verifiedUser);
        } else {
          // User not found in main data - possible data corruption
          handleLogout();
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        handleLogout();
      }
    } else {
      // No user data found
      handleLogout();
    }
    
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    // Clear all authentication-related data
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Session Expired</h2>
          <p className="mt-2 text-gray-600">Please login again to continue</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar data={userData} handleLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
        
        <div className="space-y-6">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              {userData.profilePicture ? (
                <img
                  src={userData.profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xl">
                    {userData.fullName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Welcome back, {userData.fullName}!
                </h2>
                <p className="text-gray-600">
                  {userData.role === "investor" 
                    ? "Ready to explore investment opportunities?" 
                    : "Ready to grow your business?"}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Information */}
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Account Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{userData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-gray-800 capitalize">{userData.role}</p>
                </div>
                {userData.phone && (
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800">{userData.phone}</p>
                  </div>
                )}
              </div>

              {/* Role-Specific Information */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  {userData.role === "investor" 
                    ? "Investment Profile" 
                    : "Business Profile"}
                </h3>
                {userData.role === "investor" ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Capital Range</p>
                      <p className="text-gray-800">{userData.capitalRange || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Accreditation Status</p>
                      <p className="text-gray-800">{userData.accreditationStatus || "Not specified"}</p>
                    </div>
                    {userData.areasOfInterest?.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-500">Areas of Interest</p>
                        <p className="text-gray-800">{userData.areasOfInterest.join(", ")}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Business Name</p>
                      <p className="text-gray-800">{userData.businessName || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Stage</p>
                      <p className="text-gray-800">{userData.businessStage || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Industry</p>
                      <p className="text-gray-800">{userData.industrySector || "Not specified"}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/profile/edit")}
                  className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Update Profile
                </button>
                <button
                  onClick={() => navigate("/change-password")}
                  className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  Change Password
                </button>
                {userData.role === "investor" ? (
                  <button
                    onClick={() => navigate("/investments")}
                    className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Investments
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/business/pitch")}
                    className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    View Pitch Deck
                  </button>
                )}
              </div>

              {/* Professional Links */}
              {userData.professionalLinks && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Professional Links
                  </h3>
                  <div className="space-y-2">
                    {userData.professionalLinks.split(",").map((link, index) => (
                      <a
                        key={index}
                        href={link.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 block truncate"
                      >
                        {link.trim()}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}