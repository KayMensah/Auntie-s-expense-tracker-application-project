import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import Expense from "./Expense";
import "./ExpenseNote.css";
import { v4 as uuid } from "uuid";

const ExpenseNote = () => {
  const dispatch = useDispatch();
  const [Expenses, setExpense] = useState({
    item: "",
    date: "",
    amount: "",
    category: "",
  });
  const handleChange = (e) => {
    setExpense((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submit = (e) => {
    const expense = {
      ...Expenses,
      id: uuid(),
      date: new Date().toDateString(),
    };
    e.preventDefault();
    if (Expenses.item && Expenses.date) {
      dispatch({ type: "addExpenses", payload: expense });
    }
    setExpense({ item: "", date: "" });
  };
  return (
    <div>
      <form className="form-style">
        <h1 className="style1">Auntie's Expense Application Tracker</h1>
        <div className="input1">
          <label>Item</label>
          <br />
          <input type={"text"} name="Item" placeholder={"Enter item"} />
        </div>
        <div className="input1">
          <label>Date</label>
          <br />
          <input type={"date"} name="date" placeholder={"Date"} />
        </div>
        <div className="input1">
          <label>Amount</label>
          <br />
          <input type={"number"} name="Amount" placeholder={"Amount"} />
        </div>
        <div className="selection">
          <label>Category</label>
          <br />
          <select>
            <option>Food and Drink</option>
            <option>Accommodation</option>
            <option>Transportation</option>
            <option>Housing and Rent</option>
            <option>Miscellaneous</option>
          </select>
        </div>
        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseNote;
