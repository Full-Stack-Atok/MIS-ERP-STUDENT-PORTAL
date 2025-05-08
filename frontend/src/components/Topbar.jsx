// src/components/Topbar.jsx

import React from "react";
import { Search, Bell, Settings } from "lucide-react";
import dayjs from "dayjs";
import avatar from "../assets/avatar.png";

export default function Topbar() {
  const date = dayjs().format("D MMM, YYYY");

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow">
      {/* ← Left: Search */}
      <div className="flex-1 max-w-xs">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-gray-100 border border-transparent focus:border-gray-300 focus:outline-none transition"
          />
        </div>
      </div>

      {/* ← Right: date, avatar+name, icons */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">{date}</span>

        <div className="flex items-center space-x-2">
          <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="text-right leading-tight">
            <div className="font-medium text-gray-800 text-sm">Emeka Moda</div>
            <div className="text-xs text-gray-500">4th Year, Bachelor, CS</div>
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
    </header>
  );
}
