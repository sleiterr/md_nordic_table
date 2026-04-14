import React from "react";
import clsx from "clsx";

const SummaryTableCell = ({ align = "left", children }) => {
  return (
    <td
      className={clsx(
        "text-zinc-600 py-2 px-5 border-gray-100 border-r first-of-type:border-1",
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
};

export default SummaryTableCell;
