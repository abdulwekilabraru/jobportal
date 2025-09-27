import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import KIOT from "../assets/KIOT.JPG";
// Using Ionicons v5 variant; previous IoIosNotifications (Ionicons v4) caused resolution error with react-icons v5
// Inline bell icon (removed react-icons import due to resolution issues in build env)
const BellIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className || "w-8 h-8"}
  >
    <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z" />
    <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2Z" />
  </svg>
);
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { title: "HOME", path: "/" },
    { title: "JOBS", path: "/jobs" },
    { title: "ABOUT US", path: "#about" },
    { title: "CONTACT US", path: "#contact" },
    { title: "REVIEW", path: "#review" },
  ];

  const handleSectionNavigation = (hash) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      {/* Marquee animation style (scoped) */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { 
          display: inline-block; 
          white-space: nowrap; 
          animation: marqueeScroll 18s linear infinite; 
        }
      `}</style>
      {/* Header Section with Marquee and Wollo University Logo */}
      <header className="bg-blue-900 text-white p-2 flex items-center justify-center">
        <img
          src='https://landportal.org/sites/default/files/2024-03/Wollo-University.jpg'
          alt="Wollo University Logo"
          className="h-12 rounded-full mr-4"
        />
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee text-lg font-bold inline-block">
            Wollo University Kombolcha Institute of Technology (KIOT JOBS PORTAL)
          </div>
        </div>
      </header>
      {/* Existing Navbar */}
      <nav className="bg-white shadow-lg w-full border-b md:border-0 md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex rounded-full items-center justify-between py-3 md:py-5 md:block">
            <a className="rounded-full" href="/">
              <img src={KIOT} width={50} className="rounded-full" height={20} alt="Logo" />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  {item.path.startsWith("#") ? (
                    <button
                      onClick={() => handleSectionNavigation(item.path)}
                      className="hover:text-indigo-600"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <a href={item.path}>{item.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Sidebar */}
          {isAuthenticated && user?.role !== "job_seeker" && (
            <div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
              >
                Admin Options
              </button>

              {sidebarOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10">
                  <div className="absolute top-0 right-0 bg-white w-64 h-full shadow-lg p-6">
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="text-gray-600 bg-transparent border-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <ul className="space-y-4 mt-6">
                      <li>
                        <a
                          href="/admin/jobs"
                          className="block text-gray-700 hover:bg-indigo-100 py-2 px-4"
                        >
                          Job List
                        </a>
                      </li>
                      {isAuthenticated && user?.role !== "faculity" && (
                        <div>
                          <li>
                            <a
                              href="/admin/applications"
                              className="block text-gray-700 hover:bg-indigo-100 py-2 px-4"
                            >
                              Applications
                            </a>
                          </li>
                          <li>
                            <a
                              href="/applicants"
                              className="block text-gray-700 hover:bg-indigo-100 py-2 px-4"
                            >
                              Applicants
                            </a>
                          </li>
                        </div>
                      )}
                      {isAuthenticated && user?.role === "admin" && (
                        <li>
                          <a
                            href="/admin/users"
                            className="block text-gray-700 hover:bg-indigo-100 py-2 px-4"
                          >
                            Manage Users
                          </a>
                        </li>
                      )}
                      <button
                        onClick={logout}
                        className="py-3 px-4 text-red-500 bg-white"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="hidden md:inline-block">
            {isAuthenticated ? (
              user?.role === "job_seeker" ? (
                <div className="flex">
                  <div className="text-blue-700 px-6 text-4xl">
                    <a href="/anouncement" aria-label="Notifications">
                      <BellIcon className="w-8 h-8" />
                    </a>
                  </div>
                  <button
                    onClick={logout}
                    className="py-3 px-4 text-white bg-red-600 hover:bg-red-700 rounded-md shadow"
                  >
                    Logout
                  </button>
                </div>
              ) : null
            ) : (
              <div>
                <a
                  href="/login"
                  className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
                >
                  Get Started
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;