// src/pages/DashboardPage.jsx

import React from "react";
import Sidebar from "../components/Sidebar";
import InfoCard from "../components/InfoCard";
import AttendanceChart from "../components/AttendanceChart";
import CourseInstructors from "../components/CourseInstructors";
import NoticeCard from "../components/NoticeCard";
import CourseCard from "../components/CourseCard";
import { Laptop, BarChart, Bell, Settings } from "lucide-react";
import dayjs from "dayjs";
import banner from "../assets/banner-person.png";
import avatar from "../assets/avatar.png";

export default function DashboardPage() {
  const date = dayjs().format("D MMM, YYYY");
  const instructors = [
    { name: "Prof. Jane Doe", avatar: "/assets/inst1.png" },
    { name: "Dr. John Smith", avatar: "/assets/inst2.png" },
    { name: "Dr. Alice Lee", avatar: "/assets/inst3.png" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <main>
          <div className="max-w-7xl mx-auto py-4 px-4 space-y-4">
            {/* Search + User in its own card */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center justify-between">
                {/* Search */}
                <div className="w-1/3 max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                  />
                </div>

                {/* Date / Avatar / Name / Icons */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm">{date}</span>
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">Emeka Moda</div>
                    <div className="text-xs text-gray-500">
                      4th Year, Bachelor, CS
                    </div>
                  </div>
                  <Bell
                    size={20}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  />
                  <Settings
                    size={20}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Welcome banner in its own card */}
            <div className="bg-white rounded-xl shadow p-4">
              <section className="bg-purple-600 text-white rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase opacity-70 mb-1">
                    25 April, 2025
                  </div>
                  <h2 className="text-base font-bold mb-1">
                    Welcome back, Emeka A. Moda!
                  </h2>
                  <p className="text-xs opacity-90">
                    Always stay updated in your portal
                  </p>
                </div>
                <img src={banner} alt="celebration" className="h-20" />
              </section>
            </div>

            {/* Stats grid (inside its own container, cards stay as-is) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoCard
                title="Basic Info"
                items={[
                  { label: "Credits", value: 40 },
                  { label: "CGPA", value: "1.38" },
                  { label: "Semester", value: 2 },
                ]}
              />
              <AttendanceChart />
              <CourseInstructors instructors={instructors} />
              <NoticeCard />
            </div>

            {/* Enrolled Courses in its own card */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-700 font-semibold text-sm">
                  Enrolled Courses
                </h3>
                <a href="#" className="text-purple-600 text-xs hover:underline">
                  See all
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CourseCard title="Object Oriented Programming" icon={Laptop} />
                <CourseCard
                  title="Fundamentals of Database Systems"
                  icon={BarChart}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
