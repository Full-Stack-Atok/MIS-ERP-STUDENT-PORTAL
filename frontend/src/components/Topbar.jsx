// src/components/Topbar.jsx

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import defaultAvatar from "../assets/avatar.png";
import axios from "../lib/axios";

export default function Topbar() {
  const [student, setStudent] = useState(null);
  const date = dayjs().format("D MMM, YYYY");

  useEffect(() => {
    const id = localStorage.getItem("student_id");
    if (id) {
      axios
        .get(`get_student.php?id=${id}`)
        .then((res) => setStudent(res.data))
        .catch(console.error);
    }
  }, []);

  return (
    <header className="flex items-center justify-end space-x-4 px-4 py-3 bg-white rounded-lg shadow">
      {/* Date */}
      <span className="text-gray-600 text-sm">{date}</span>

      {/* Avatar & Name */}
      <div className="flex items-center space-x-2">
        <img
          src={student?.photo_url || defaultAvatar}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-right leading-tight">
          <div className="font-medium text-gray-800 text-sm">
            {student ? `${student.first_name} ${student.last_name}` : "Student"}
          </div>
          <div className="text-xs text-gray-500">
            {student ? `Year ${student.year_level}` : "Loading..."}
          </div>
        </div>
      </div>
    </header>
  );
}
