import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiArrowUp,
  FiArrowDown,
  FiTrendingUp,
  FiPackage,
  FiUserPlus,
  FiActivity,
  FiBarChart2,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const MockProfile = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sep",
            "Oct",
            "Nov",
            "December",
          ],
          datasets: [
            {
              label: "Monthly Revenue",
              data: [
                6141, 6300, 6800, 7100, 7500, 8800, 8700, 8900, 8200, 8500,
                9800, 10000,
              ],
              backgroundColor: "bg-red-700",
              borderColor: "rgba(99, 102, 241, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: true,
                color: "rgba(0, 0, 0, 0.05)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full  ">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
            alt="Profile background"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            className="w-40 border-4 border-white rounded-full"
            alt="Profile"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Amanda Ross</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">Founder of TechNova Solutions</p>
          <p className="text-sm text-gray-500">New York, USA</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
              <span>Connect</span>
            </button>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link to="/dashboard/chat">Message</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Full name:</span>
                <span className="text-gray-700">Amanda S. Ross</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Birthday:</span>
                <span className="text-gray-700">24 Jul, 1991</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Joined:</span>
                <span className="text-gray-700">10 Jan 2025 </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Mobile:</span>
                <span className="text-gray-700">(123) 123-1234</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">amandaross@example.com</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Location:</span>
                <span className="text-gray-700">New York, US</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Languages:</span>
                <span className="text-gray-700">English, Spanish</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24">Elsewhere:</span>
                <a href="#" title="Facebook">
                  <svg
                    className="w-5 h-5"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 506.86 506.86"
                  >
                    <defs>
                      <style>{`.cls-1{fill:#1877f2;}.cls-2{fill:#fff;}`}</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="Twitter">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                      fill="#1da1f2"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="LinkedIn">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                      fill="#0077b5"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="Github">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Experience & Education
            </h4>
            <div className="relative px-4">
              <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

              {[
                {
                  text: "Started new position as <span class='text-blue-600 font-bold'>Founder & Senior Software Engineer</span> at TechNova Solutions.",
                  time: "Nov 2022 - Present",
                },
                {
                  text: "Started new position as <span class='text-blue-600 font-bold'>Senior Software Engineer</span> at Tailwind CSS.",
                  time: "Jan 2022 - 2022",
                },
                {
                  text: "Promoted to <span class='text-blue-600 font-bold'>Team Lead</span> at previous company.",
                  time: "Mar 2020 - Dec 2021",
                },
                {
                  text: "Completed <span class='text-blue-600 font-bold'>Advanced Cloud Certification</span> from AWS.",
                  time: "Feb 2020",
                },
                {
                  text: "Started as <span class='text-blue-600 font-bold'>Software Engineer</span> at TechSolutions Inc.",
                  time: "Aug 2017 - Feb 2020",
                },
                {
                  text: "Graduated with <span class='text-blue-600 font-bold'>Master's in Computer Science</span> from Stanford University.",
                  time: "May 2017",
                },
                {
                  text: "Completed <span class='text-blue-600 font-bold'>Bachelor's in Software Engineering</span> from MIT.",
                  time: "Jun 2015",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center w-full my-6 -ml-1.5"
                >
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              About TechNova Solutions
            </h4>
            <p className="mt-2 text-gray-700">
              TechNova Solutions is a cutting-edge SaaS platform revolutionizing
              how small businesses manage their operations. Founded in 2022 by a
              team of ex-FAANG engineers, we're on a mission to democratize
              enterprise-grade tools for businesses of all sizes.
            </p>

            <h5 className="text-lg text-gray-800 font-semibold mt-4">
              The Problem We Solve
            </h5>
            <p className="mt-1 text-gray-700">
              Small businesses waste countless hours juggling between
              disconnected tools for CRM, project management, and accounting.
              This fragmentation leads to inefficiencies, data silos, and missed
              growth opportunities. Current solutions are either too complex or
              lack critical integrations.
            </p>

            <h5 className="text-lg text-gray-800 font-semibold mt-4">
              Our Solution
            </h5>
            <p className="mt-1 text-gray-700">
              TechNova offers an all-in-one business operating system featuring:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>Unified dashboard for all business operations</li>
                <li>AI-powered analytics and recommendations</li>
                <li>Seamless third-party integrations</li>
                <li>Mobile-first design for on-the-go management</li>
                <li>Affordable pricing with no hidden fees</li>
              </ul>
            </p>

            <p className="mt-4 text-gray-700">
              Since our beta launch, we've helped over 500 businesses streamline
              their operations, saving them an average of 15 hours per week. Our
              vision is to become the operating system for the next generation
              of small businesses.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              {/* Revenue Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiDollarSign className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Revenue
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        $24,850
                      </span>
                      <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                        <FiArrowUp className="h-4 w-4 mr-0.5" />
                        12.5%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Last 3 Months</p>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <FiTrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Orders Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiShoppingBag className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Orders
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        1,428
                      </span>
                      <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                        <FiArrowUp className="h-4 w-4 mr-0.5" />
                        8.3%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Last Month</p>
                  </div>
                  <div className="p-2 rounded-lg bg-green-50 text-green-600">
                    <FiPackage className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Customers Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiUsers className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Customers
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        520
                      </span>
                      <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                        <FiArrowUp className="h-4 w-4 mr-0.5" />
                        5.2%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Active this month
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <FiUserPlus className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Conversion Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiActivity className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Conversion
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        3.6%
                      </span>
                      <span className="flex items-center ml-2 text-sm font-medium text-red-500">
                        <FiArrowDown className="h-4 w-4 mr-0.5" />
                        1.2%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      From last month
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <FiBarChart2 className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 h-[414px]">
              <canvas
                ref={chartRef}
                id="verticalBarChart"
                width="828"
                height="414"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="">
          <h4 className="text-xl text-gray-900 font-bold">Our Staff Members</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
          {[
            {
              name: "Diane Aguilar",
              role: "UI/UX Design",
              img: "connection1.jpg",
            },
            {
              name: "Frances Mather",
              role: "Software Engineer",
              img: "connection2.jpg",
            },
            {
              name: "Carlos Friedrich",
              role: "Front-End Developer",
              img: "connection3.jpg",
            },
            {
              name: "Donna Serrano",
              role: "System Engineer",
              img: "connection4.jpg",
            },
            {
              name: "Randall Tabron",
              role: "Software Developer",
              img: "connection5.jpg",
            },
            {
              name: "John McCleary",
              role: "Software Engineer",
              img: "connection6.jpg",
            },
            {
              name: "Amanda Noble",
              role: "Graphic Designer",
              img: "connection7.jpg",
            },
            {
              name: "Christine Drew",
              role: "Senior Android Developer",
              img: "connection8.jpg",
            },
            {
              name: "Lucas Bell",
              role: "Creative Writer",
              img: "connection9.jpg",
            },
            {
              name: "Debra Herring",
              role: "Backend Developer",
              img: "connection10.jpg",
            },
            {
              name: "Benjamin Farrior",
              role: "Software Engineer Lead ",
              img: "connection11.jpg",
            },
            {
              name: "Maria Heal",
              role: "Linux System Administrator",
              img: "connection12.jpg",
            },
            {
              name: "Edward Ice",
              role: "Customer Support",
              img: "connection13.jpg",
            },
            {
              name: "Jeffery Silver",
              role: "Software Engineer",
              img: "connection14.jpg",
            },
            {
              name: "Jennifer Schultz",
              role: "Project Manager",
              img: "connection15.jpg",
            },
            {
              name: "Joseph Marlatt",
              role: "Team Lead",
              img: "connection16.jpg",
            },
          ].map((connection, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src={`https://vojislavd.com/ta-template-demo/assets/img/connections/${connection.img}`}
                className="w-16 rounded-full"
                alt={connection.name}
              />
              <p className="text-center font-bold text-sm mt-1">
                {connection.name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {connection.role}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockProfile;
