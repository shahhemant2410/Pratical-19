
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      course: "BCA",
      semester: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@example.com",
      course: "BBA",
      semester: 3,
    },
    {
      id: 3,
      name: "Amit Sharma",
      email: "amit@example.com",
      course: "BCA",
      semester: 4,
    },
    {
      id: 4,
      name: "Neha Patel",
      email: "neha@example.com",
      course: "MCA",
      semester: 2,
    },
  ]);

  const [message, setMessage] = useState("");

  // Delete selected student
  const handleDelete = (id) => {
    const student = students.find((item) => item.id === id);

    if (!student) return;

    setStudents((prevStudents) =>
      prevStudents.filter((item) => item.id !== id)
    );

    setMessage(`${student.name} deleted successfully.`);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Student Management
          </h1>

          <p className="mt-2 text-gray-600">
            Manage student records and remove selected students
          </p>
        </header>

        {/* Summary */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Student List
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage registered students
            </p>
          </div>

          <div className="rounded-xl bg-blue-100 px-5 py-3 text-center">
            <p className="text-sm text-blue-700">
              Total Students
            </p>
            <p className="text-2xl font-bold text-blue-800">
              {students.length}
            </p>
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div
            role="status"
            className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 font-medium text-green-700"
          >
            {message}
          </div>
        )}

        {/* Student Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Course</th>
                <th className="p-4">Semester</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-blue-50"
                >
                  <td className="p-4">{student.id}</td>

                  <td className="p-4 font-semibold text-gray-800">
                    {student.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {student.email}
                  </td>

                  <td className="p-4">{student.course}</td>

                  <td className="p-4">
                    Semester {student.semester}
                  </td>

                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                      aria-label={`Delete ${student.name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {students.length === 0 && (
            <div className="p-10 text-center">
              <h3 className="text-xl font-bold text-gray-700">
                No Students Found
              </h3>
              <p className="mt-2 text-gray-500">
                All student records have been deleted.
              </p>
            </div>
          )}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          React JS | useState() | filter() | Tailwind CSS
        </footer>

      </div>
    </div>
  );
}

export default App;
