import React from "react";

const SummaryTable = ({ headers, children }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
};

export default SummaryTable;

// SummaryTable component is a reusable table component that accepts headers and children as props, providing a consistent styling for table rows with alternating background colors.

// thead - table header.
// tr - table row.
// tbody - table body.

// [&>tr:nth-child(2n)]:bg-gray-100 - applies a gray background to even rows.
// [&>tr:nth-child(2n+1)]:bg-white - applies a white background to odd rows.
