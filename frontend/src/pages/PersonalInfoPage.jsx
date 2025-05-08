// src/pages/PersonalInfoPage.jsx

import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import avatar from "../assets/avatar.png";

export default function PersonalInfoPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {/* Topbar inside container */}
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <Topbar />
        </div>

        {/* Page content also inside that container */}
        <main className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="space-y-4 lg:col-span-2">
              {/* Personal Info Card */}
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Personal Info</h2>
                  <button className="text-gray-500 hover:text-gray-700">
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact"
                      className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                </form>
              </div>

              {/* Professional & Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">
                      Professional Info
                    </h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-medium">Degree:</span> Bachelor’s
                    </li>
                    <li>
                      <span className="font-medium">Branch:</span> Computer
                      Science
                    </li>
                    <li>
                      <span className="font-medium">Semester:</span> 2
                    </li>
                    <li>
                      <span className="font-medium">Roll No.:</span> 23CS1239
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">
                      Additional Info
                    </h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <label className="font-medium">Resume</label>
                      <input
                        type="url"
                        placeholder="Enter resume link"
                        className="mt-1 w-full px-2 py-1 rounded border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Additional Links</label>
                      <input
                        type="url"
                        placeholder="GitHub / LinkedIn"
                        className="mt-1 w-full px-2 py-1 rounded border border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Areas of Interest */}
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">
                      Areas of Interest
                    </h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Badminton</li>
                    <li>Competitive Programming</li>
                    <li>Web Development</li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">Projects</h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <input
                    type="url"
                    placeholder="Upload GitHub link"
                    className="mt-1 w-full px-2 py-1 rounded border border-gray-300 text-sm"
                  />
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">
                      Achievements
                    </h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <input type="file" className="mt-1 w-full text-sm" />
                </div>

                {/* Internship */}
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-700">Internship</h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Nothing to show here right now...
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Card */}
            <div>
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <img
                      src={avatar}
                      alt="profile"
                      className="w-24 h-24 rounded-full"
                    />
                    <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full">
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold">EMEKA A. MODA</h3>
                  <span className="text-sm text-gray-500">Student</span>

                  <div className="w-full text-sm space-y-2">
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">
                        Lyceum of Alabang, Tunasan, Muntinlupa City
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">About Me</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Productive</li>
                        <li>Critical Thinking</li>
                        <li>Attention to Detail</li>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem-solving</li>
                        <li>Time management</li>
                        <li>Adaptability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
