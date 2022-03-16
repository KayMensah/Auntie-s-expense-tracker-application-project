import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import Expense from "./Expense";
import "./ExpenseNote.css";
import { v4 as uuid } from "uuid";
import Expense from "./Expense";

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
    if (
      Expenses.item &&
      Expenses.date &&
      Expenses.amount &&
      Expenses.category
    ) {
      console.log(Expenses);

      dispatch({ type: "addExpense", payload: expense });
    }
    setExpense({ item: "", date: "", amount: "", category: "" });
  };
  return (
    <div>
      <form onSubmit={submit} className="form-style">
        <h1 className="style1">Auntie's Expense Application Tracker</h1>
        <div className="input1">
          <label>Item</label>
          <br />
          <input
            onChange={handleChange}
            type={"text"}
            name="item"
            placeholder={"Enter item"}
          />
        </div>
        <div className="input1">
          <label>Date</label>
          <br />
          <input
            onChange={handleChange}
            type={"date"}
            name="date"
            placeholder={"Date"}
          />
        </div>
        <div className="input1">
          <label>Amount</label>
          <br />
          <input
            onChange={handleChange}
            type={"number"}
            name="amount"
            placeholder={"Amount"}
          />
        </div>
        <div className="selection">
          <label>Category</label>
          <br />
          <select name="category" onChange={handleChange}>
            <option>Food and Drink</option>
            <option>Accommodation</option>
            <option>Transportation</option>
            <option>Housing and Rent</option>
            <option>Miscellaneous</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseNote;
