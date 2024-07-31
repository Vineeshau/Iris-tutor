import React from 'react'

function navbar() {
  return (
     <div className="flex-1 p-10 ml-60">
      <h1 className="text-3xl font-semibold mb-5">Welcome Back!</h1>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">My Overview</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg">Courses</h3>
          <div className="flex flex-col space-y-3">
            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
              <span>Python</span>
              <span>5 assignments remaining</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
              <span>Machine Learning</span>
              <span>3 assignments remaining</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
              <span>Statistics</span>
              <span>No assignments remaining</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
              <span>UI/UX Design</span>
              <span>Start Course</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">Inbox</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Professor sent you a message</p>
          <p>Student sent you a message</p>
          <p>Professor sent you a message</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Tasks</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-3" />
            <span>Finish Prototype Assignment</span>
          </div>
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-3" />
            <span>Finish SQL Assignment</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-3" />
            <span>Start Data Science Lecture Video</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar