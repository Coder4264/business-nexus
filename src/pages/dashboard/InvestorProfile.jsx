import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
  FiDollarSign,
  FiTrendingUp,
  FiPieChart,
  FiBriefcase,
  FiArrowUp,
  FiArrowDown,
  FiUsers,
  FiActivity,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const InvestorProfile = ({ request }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Portfolio Value ($)",
              data: [
                1200000, 1250000, 1300000, 1280000, 1350000, 1400000, 1450000,
                1420000, 1500000, 1550000, 1600000, 1650000,
              ],
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderColor: "rgba(16, 185, 129, 1)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
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
              beginAtZero: false,
              grid: {
                display: true,
                color: "rgba(0, 0, 0, 0.05)",
              },
              ticks: {
                callback: function (value) {
                  return "$" + value / 1000000 + "M";
                },
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
    <div className="h-full">
      {" "}
      <div className="bg-white rounded-lg shadow-xl pb-8">
        {" "}
        <div className="w-full h-[250px]">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
            alt="Investor background"
          />{" "}
        </div>{" "}
        <div className="flex flex-col items-center -mt-20">
          {" "}
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            className="w-40 border-4 border-white rounded-full"
            alt="Investor profile"
          />{" "}
          <div className="flex items-center space-x-2 mt-2">
            {" "}
            <p className="text-2xl">Michael J. Carter</p>{" "}
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>{" "}
              </svg>{" "}
            </span>{" "}
          </div>{" "}
          <p className="text-gray-700">Partner at Venture Capital Partners</p>{" "}
          <p className="text-sm text-gray-500">San Francisco, USA</p>{" "}
        </div>{" "}
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          {" "}
          <div className="flex items-center space-x-4 mt-2">
            {" "}
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>{" "}
              </svg>{" "}
              <span>Connect</span>{" "}
            </button>{" "}
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                ></path>{" "}
              </svg>{" "}
              <Link to="/dashboard/chat">Message</Link>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      ```
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Investor Profile
            </h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Name:</span>
                <span className="text-gray-700">Michael J. Carter</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Position:</span>
                <span className="text-gray-700">Partner</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Firm:</span>
                <span className="text-gray-700">Venture Capital Partners</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Focus:</span>
                <span className="text-gray-700">Series A/B, SaaS, FinTech</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Location:</span>
                <span className="text-gray-700">San Francisco, US</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Active Since:</span>
                <span className="text-gray-700">2012</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24">Contact:</span>
                <a href="#" className="text-blue-600 text-sm">
                  mcarter@vcp.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Investment History
            </h4>
            <div className="relative px-4">
              <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

              {[
                {
                  text: "Led <span class='text-blue-600 font-bold'>$15M Series B</span> in TechNova Solutions",
                  time: "2023",
                },
                {
                  text: "Co-invested in <span class='text-blue-600 font-bold'>$8M Series A</span> for Finova Payments",
                  time: "2022",
                },
                {
                  text: "Exited <span class='text-blue-600 font-bold'>CloudScale</span> to Google (5.2x return)",
                  time: "2021",
                },
                {
                  text: "Invested in <span class='text-blue-600 font-bold'>$6M Seed</span> for DataMind AI",
                  time: "2020",
                },
                {
                  text: "Promoted to <span class='text-blue-600 font-bold'>Partner</span> at VCP",
                  time: "2019",
                },
                {
                  text: "Joined <span class='text-blue-600 font-bold'>Venture Capital Partners</span> as Principal",
                  time: "2016",
                },
                {
                  text: "MBA from <span class='text-blue-600 font-bold'>Harvard Business School</span>",
                  time: "2014",
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
              Investment Thesis
            </h4>
            <p className="mt-2 text-gray-700">
              I focus on early-growth stage B2B SaaS companies with strong
              product-market fit, capital efficient business models, and teams
              that can execute at scale. My sweet spot is $5-15M Series A/B
              rounds where I can add value beyond capital.
            </p>

            <h5 className="text-lg text-gray-800 font-semibold mt-4">
              What I Look For
            </h5>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Recurring revenue model with &gt100% net dollar retention</li>
              <li>Capital efficient growth (Rule of 40 positive)</li>
              <li>Founders with deep domain expertise</li>
              <li>Clear competitive differentiation</li>
              <li>Large and growing TAM ($1B+)</li>
            </ul>

            <h5 className="text-lg text-gray-800 font-semibold mt-4">
              Value Add
            </h5>
            <p className="mt-1 text-gray-700">
              Beyond capital, I bring:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>Extensive network of potential customers and partners</li>
                <li>Operational experience scaling SaaS companies</li>
                <li>Help with executive hiring and team building</li>
                <li>Strategic guidance on pricing and GTM</li>
              </ul>
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Portfolio Metrics
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              {/* Portfolio Value */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiTrendingUp className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Portfolio Value
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        $42M
                      </span>
                      <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                        <FiArrowUp className="h-4 w-4 mr-0.5" />
                        18.7%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Current Value</p>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <FiBriefcase className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Active Investments */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiPieChart className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Active Investments
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        14
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Current Portfolio
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-green-50 text-green-600">
                    <FiActivity className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Avg. Ownership */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiBarChart2 className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Avg. Ownership
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        12.5%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Per Investment</p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <FiDollarSign className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Top Performer */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                      <FiAward className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Top Performer
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-gray-800">
                        7.2x
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      CloudScale exit
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <FiTrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 h-[414px]">
              <canvas
                ref={chartRef}
                id="portfolioChart"
                width="828"
                height="414"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="">
          <h4 className="text-xl text-gray-900 font-bold">
            Current Portfolio Highlights
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
          {[
            {
              name: "TechNova",
              role: "SaaS Platform",
              img: "connection1.jpg",
            },
            {
              name: "Finova",
              role: "Payments",
              img: "connection2.jpg",
            },
            {
              name: "DataMind",
              role: "AI Solutions",
              img: "connection3.jpg",
            },
            {
              name: "LogiChain",
              role: "Supply Chain",
              img: "connection4.jpg",
            },
            {
              name: "HealthIQ",
              role: "MedTech",
              img: "connection5.jpg",
            },
            {
              name: "EduVantage",
              role: "EdTech",
              img: "connection6.jpg",
            },
            {
              name: "RetailAI",
              role: "Retail Tech",
              img: "connection7.jpg",
            },
            {
              name: "CloudScale",
              role: "Acquired",
              img: "connection8.jpg",
            },
          ].map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-gray-800"
            >
              <img
                src={`https://vojislavd.com/ta-template-demo/assets/img/connections/${company.img}`}
                className="w-16 rounded-full"
                alt={company.name}
              />
              <p className="text-center font-bold text-sm mt-1">
                {company.name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {company.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;
