import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm w-full sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto shadow-md rounded-lg overflow-hidden bg-slate-200">
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      "title": "Course Management",
      "description": "Create and publish courses with ease. Define course details, manage enrollments, and track student progress.",
      // "icon": "https://example.com/icons/course-management.png"
    },
    {
      "title": "Student Enrollment",
      "description": "Streamline the enrollment process for students. Manage student profiles, course registrations, and payments.",
      "icon": "https://example.com/icons/student-enrollment.png"
    },
    {
      "title": "Instructor Assignment",
      "description": "Assign instructors to courses based on expertise and availability. Manage instructor schedules and course assignments.",
      "icon": "https://example.com/icons/instructor-assignment.png"
    },
    {
      "title": "Communication Tools",
      "description": "Facilitate collaboration with messaging systems, discussion forums, and chat rooms. Enhance communication between users.",
      // "icon": "https://example.com/icons/communication-tools.png"
    },
    {
      "title": "Payment Processing",
      "description": "Enable secure payment processing for course fees and subscriptions. Manage financial transactions and invoices.",
      // "icon": "https://example.com/icons/payment-processing.png"
    },
    {
      "title": "Reporting and Analytics",
      "description": "Access comprehensive reporting tools to gain insights into student enrollment, course popularity, and revenue generation.",
      // "icon": "https://example.com/icons/reporting-analytics.png"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
