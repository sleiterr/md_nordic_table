import React, { useState } from "react";
import AdminNav from "./AdminNav";

const Backoffice = ({ token, onLogout }) => {
  // State to hold the currently selected blog for editing
  const [editBlog, setEditBlog] = useState(null);

  // Handler to close edit form and clear state
  const handleCloseEdit = () => setEditBlog(null);

  return (
    <section className="flex flex-col w-full h-auto min-h-0 bg-slate-400">
      <AdminNav token={token} onLogout={onLogout} />
      <div className="w-full py-12 px-0 md:px-0 mx-auto md:max-w-7xl">
        <div className="flex items-center justify-start w-full mb-6">
          <h4 className="font-normal text-3xl text-zinc-800">Backoffice</h4>
        </div>
      </div>
    </section>
  );
};

export default Backoffice;
