import React from 'react';

const Question = () => {
  return (
    <section className="w-11/12 max-w-4xl mx-auto my-16  pb-8">
      <h1 className="text-3xl   font-bold text-blue-800 text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        <div className="w-full  collapse collapse-arrow bg-white border border-blue-800 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-blue-800">
            How do I create an account?
          </div>
          <div className="collapse-content text-gray-700 text-sm sm:text-base">
            Click the <span className="font-semibold">Sign Up</span> button in the top right corner and follow the registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-blue-800 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-800">
            How do I add a new task?
          </div>
          <div className="collapse-content text-gray-700 text-sm sm:text-base">
            Click on the <span className="font-semibold">Add Task</span> button on the dashboard and fill out the task details to post a new task.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-blue-800 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-blue-800">
            How do I update my task information?
          </div>
          <div className="collapse-content text-gray-700 text-sm sm:text-base">
            Go to <span className="font-semibold">My Posted Task</span> section and select the <span className="font-semibold">Edit</span> option to make changes to your task.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
