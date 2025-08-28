// import React, { useState } from "react";

// function ClassSchedule() {
//   // Dummy Data (this can later come from DB or API)
//   const [schedules] = useState([
//     {
//       id: 1,
//       subject: "Data Structures",
//       course: "B.Tech CSE",
//       year: "2nd Year",
//       department: "Computer Science",
//       academicBlock: "Block A",
//       lectureTime: "10:00 AM - 11:00 AM",
//       roomNumber: "A-205",
//       topic: "Linked Lists",
//     },
//     {
//       id: 2,
//       subject: "Operating Systems",
//       course: "B.Tech CSE",
//       year: "3rd Year",
//       department: "Computer Science",
//       academicBlock: "Block B",
//       lectureTime: "11:15 AM - 12:15 PM",
//       roomNumber: "B-101",
//       topic: "Process Scheduling",
//     },
//     {
//       id: 3,
//       subject: "Database Management System",
//       course: "B.Tech IT",
//       year: "2nd Year",
//       department: "Information Technology",
//       academicBlock: "Block C",
//       lectureTime: "2:00 PM - 3:00 PM",
//       roomNumber: "C-303",
//       topic: "SQL Joins",
//     },
//   ]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         📘 Teacher's Class Schedule
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {schedules.map((schedule) => (
//           <div
//             key={schedule.id}
//             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
//           >
//             <h2 className="text-xl font-semibold text-blue-700 mb-2">
//               {schedule.subject}
//             </h2>
//             <p className="text-gray-600">
//               <span className="font-medium">Course:</span> {schedule.course}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Year:</span> {schedule.year}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Department:</span>{" "}
//               {schedule.department}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Block:</span> {schedule.academicBlock}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Lecture Time:</span>{" "}
//               {schedule.lectureTime}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Room:</span> {schedule.roomNumber}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Topic:</span> {schedule.topic}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ClassSchedule;

import React from "react";
import { useAuth } from "@/components/AuthContext"; // ✅ global state

function ClassSchedule() {
  const { classes } = useAuth(); // ✅ get all scheduled classes

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📘 Teacher's Class Schedule
      </h1>

      {classes.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No classes scheduled yet. Please schedule a class first.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {schedule.subject}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">Course:</span> {schedule.course}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Year:</span> {schedule.year}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Department:</span>{" "}
                {schedule.department}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Block:</span> {schedule.academicBlock}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Lecture Time:</span> {schedule.lectureTime}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Room:</span> {schedule.roomNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Topic:</span> {schedule.topic}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassSchedule;

