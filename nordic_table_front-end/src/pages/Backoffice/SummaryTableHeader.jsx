import React from "react";
import clsx from "clsx";

const SummaryTableHeader = ({ align = "left", children }) => {
  return (
    <th
      className={clsx(
        "py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm",
        `text-${align}`,
        "[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900",
        "[$:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200",
        "[$:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-cyan-500",
      )}
    >
      {children}
    </th>
  );
};

export default SummaryTableHeader;

// th - table header cell component with dynamic text alignment and styling using clsx for conditional class names, including nth-child selectors for alternating row colors.
