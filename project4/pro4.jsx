import React from 'react';

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Jane Doe",
    rating: 4.7,
    image: "/images/react-course.jpg",
    progress: 70,
  },
  {
    id: 2,
    title: "Advanced Python",
    instructor: "John Smith",
    rating: 4.9,
    image: "/images/python-course.jpg",
    progress: 45,
  },
  // Add more courses...
];

export default function CourseList() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                {'★'.repeat(Math.floor(course.rating))}<span className="ml-2 text-gray-700 text-sm">({course.rating})</span>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-1">Progress</div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-right mt-1">{course.progress}% complete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
