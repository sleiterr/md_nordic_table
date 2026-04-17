import React from "react";

const DashboardCard = ({ label, children }) => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl text-gray-900 font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;

// custom card component used in the dashboard view to display different sections such as the list of dishes and the forms for adding and editing dishes. It takes a label prop for the section title and children prop for the content to be displayed within the card.
