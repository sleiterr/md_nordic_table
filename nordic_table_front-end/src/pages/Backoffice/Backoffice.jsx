import React, { useState } from "react";
import AdminNav from "./AdminNav";
import DishFormEditor from "./DishFormEditor";
import DishFormUpdate from "./DishFormUpdate";
import DashboardView from "./DashboardView";

// token, onLogout passed as props from parent component to manage authentication state and logout functionality in the backoffice
const Backoffice = ({ token, onLogout }) => {
  // State to hold the currently selected dish for editing
  const [editDish, setEditDish] = useState(null);

  // Handler to close edit form and clear state
  const handleCloseEdit = () => setEditDish(null);

  return (
    <section className="flex flex-col w-full h-auto min-h-0 bg-slate-400">
      <AdminNav token={token} onLogout={onLogout} />
      <div className="w-full py-12 px-0 md:px-0 mx-auto md:max-w-7xl">
        <div className="flex items-center justify-start w-full mb-6">
          <h4 className="font-normal text-3xl text-zinc-800">Backoffice</h4>
        </div>
        <div className="grid grid-rows-1 gap-8">
          <DashboardView setEditDish={setEditDish} />
          <div className="grid grid-cols-2 gap-8">
            <DishFormEditor token={token} />
            <DishFormUpdate
              dish={editDish}
              onClose={handleCloseEdit}
              token={token}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backoffice;
