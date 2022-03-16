import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import "./Expense.css";

const Expense = ({ expense, modal, show }) => {
  const dispatch = useDispatch();
  const deleteExpense = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const handleEdit = () => {
    modal({
      ...expense,
    });
    show(true);
  };
  const [details, setdetails] = useState(false);

  return (
    <>
      <tr>
        <td>{expense.item}</td>
        <td>
          <FiEdit onClick={handleEdit} className="edit" />
        </td>
        <td>
          <RiDeleteBinLine
            onClick={() => deleteExpense(expense.id)}
            className="delete"
          />
        </td>
        <td>{expense.date}</td>
        <td>
          <a href="#" onClick={() => setdetails(!details)}>
            view details
          </a>{" "}
        </td>
      </tr>

      {details && (
        <tr style={{ color: "green", fontWeight: "bold" }}>
          <td colSpan={7}>* {expense.date}</td>
        </tr>
      )}
    </>
  );
};

export default Expense;
