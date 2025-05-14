// src/components/Sidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  Calendar as CalendarIcon,
  DollarSign,
  LogOut,
} from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

export default function Sidebar() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear persisted user
    localStorage.removeItem("user");
    useUserStore.setState({ user: null });
    navigate("/login", { replace: true });
  };

  // Determine correct student ID field
  const studentId =
    user?.student_id ?? user?.id ?? localStorage.getItem("student_id");

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    {
      to: studentId ? `/personal-info/${studentId}` : "/register",
      label: "Personal Info",
      icon: <User size={20} />,
    },
    { to: "/schedule", label: "Schedule", icon: <CalendarIcon size={20} /> },
    { to: "/finance", label: "Finance", icon: <DollarSign size={20} /> },
    { action: handleLogout, label: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <aside className="w-60 bg-white/30 backdrop-blur-lg h-screen p-6 flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
          🎓
        </div>
        <span className="text-xl font-semibold text-gray-800">MIS-ERP</span>
      </div>

      <nav className="flex-1 flex flex-col space-y-4">
        {navItems.map(({ to, action, label, icon }) =>
          action ? (
            <button
              key={label}
              type="button"
              onClick={action}
              className="w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-white/50 cursor-pointer"
            >
              {icon}
              <span>{label}</span>
            </button>
          ) : (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-white/50"
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          )
        )}
      </nav>
    </aside>
  );
}
