import React, { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import SummaryTable from "./SummaryTable";
import SummaryTableHeader from "./SummaryTableHeader";
import SummaryTableCell from "./SummaryTableCell";
import DeleteBtn from "./DeleteBtn";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

import { useDishes } from "./FetchDisheі";
import { deleteDish } from "../../../utils/api";

//! Helper function to truncate text to a specified number of words
function truncateWords(text, maxWords) {
  // Return an empty string if the input text is falsy (e.g., null, undefined, or empty)
  if (!text) return "";
  //* use the split method to break the text into an array of words based on spacess
  const words = text.split(" ");
  // If the number of words is less than or equal to the maximum allowed, return the original text, method join retunn the truncated text by slicing the array to the maxWords length and joining it back into a string with spaces, adding "..." at the end to indicate truncation
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

const DashboardView = ({ setEditDish }) => {
  const { dishes, loading, error } = useDishes();
  // Local state to manage dish and deletion status
  const [deletingId, setDeletingId] = useState(null);
  // Local state to hold dish data for immediate UI updates after deletion
  const [localDishes, setLocalDishes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // When change in dish data, update localDishes state to reflect the latest data for rendering in the table
  useEffect(() => {
    setLocalDishes(dishes);
  }, [dishes]);

  // Function to handle dish deletion
  const handleDelete = async (id) => {
    // Delete dish from API and update localDishes state to remove the deleted dish from the table without needing to refetch all dishes
    await deleteDish(id);
    // Arrow function to filter out the deleted dish from the localDishes state by comparing each dish's ID with the deleted ID and returning a new array
    setLocalDishes((prev) => prev.filter((dish) => dish._id !== id));
  };

  if (loading)
    return (
      <p className="font-normal text-2xl text-white">
        Loading list services...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <DashboardCard label="Dishes Nordic Table">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Image</SummaryTableHeader>
            <SummaryTableHeader align="center">Title</SummaryTableHeader>
            <SummaryTableHeader align="center">Description</SummaryTableHeader>
            <SummaryTableHeader align="center">Price</SummaryTableHeader>
            <SummaryTableHeader align="center">Category</SummaryTableHeader>
            <SummaryTableHeader align="center">Actions</SummaryTableHeader>
          </>
        }
      >
        {localDishes.map((item) => (
          <tr key={item._id}>
            <SummaryTableCell>
              <img
                src={item.image}
                alt={item.title}
                className="w-65 h-35 object-cover"
              />
            </SummaryTableCell>
            <SummaryTableCell align="center">{item.title}</SummaryTableCell>
            <SummaryTableCell align="center">
              {truncateWords(item.description, 8)}
            </SummaryTableCell>
            <SummaryTableCell align="center">{item.price}</SummaryTableCell>
            <SummaryTableCell align="center">{item.category}</SummaryTableCell>
            <SummaryTableCell align="center">
              <div className="flex flex-col items-start justify-center gap-2">
                <DeleteBtn
                  onClick={() => {
                    setDeletingId(item._id);
                    setShowModal(true);
                  }}
                  disabled={deletingId === item._id}
                >
                  {deletingId === item._id ? "Deleting..." : "Delete"}
                </DeleteBtn>
                <DeleteBtn
                  onClick={() => setEditDish(item)}
                  className="bg-blue-500! hover:bg-blue-600!"
                >
                  Rediger
                </DeleteBtn>
              </div>
            </SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
      {/* Modal for confirming dish deletion */}
      {showModal && (
        <ConfirmDeleteModal
          onConfirm={() => {
            handleDelete(deletingId);
            setShowModal(false);
            setDeletingId(null);
          }}
          onClose={() => {
            setShowModal(false);
            setDeletingId(null);
          }}
        />
      )}
    </DashboardCard>
  );
};

export default DashboardView;

// <th> - table header
// <td> - table data cell
// <tr> - table row, used to group header and data cells together in a row, each row can contain multiple header and data cells, and the table is structured with rows containing cells to create a grid-like layout for displaying tabular data.
