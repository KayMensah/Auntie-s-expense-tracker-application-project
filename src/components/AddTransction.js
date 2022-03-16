import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./addTransaction.css";
const AddTransction = () => {
    const [info, setinfo] = useState({
        item: "",
        date: new Date().toDateString(),
        amount: "",
        category: "",
    });
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setinfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const Submit = (e) => {
        e.preventDefault();
        if (info.item && info.amount) {
            dispatch({
                type: "addExpense",
                payload: { ...info, id: uuid() },
            });
        }
        setinfo({
            item: "",
            amount: "",
            category: "",
        });
    };
    return (
        <form className="transaction" onSubmit={Submit}>
            <h2>Add transaction</h2>
            <hr />
            <div>
                <label htmlFor="">items:</label>
                <br />
                <input
                    type="text"
                    name="item"
                    onChange={handleInput}
                    value={info.item}
                />
            </div>

            <div>
                <label htmlFor="">
                    Amount:
                    <br />
                    (negative-expense, positive-income)
                </label>
                <br />
                <input
                    type="text"
                    name="amount"
                    onChange={handleInput}
                    value={info.amount}
                    placeholder="example( -200)"
                />
            </div>
            {/* <div>
                <label htmlFor="">category</label>
                <br />
                <select
                    id=""
                    name="category"
                    onClick={handleInput}
                    info={info.category}
                >
                    <option value="food">food and drink</option>
                    <option value="accomodation">accomodation</option>
                    <option value="house and rent">house and rent</option>
                    <option value="salary">salary</option>
                </select>
            </div> */}
            <div>
                <button type="submit">Add transaction</button>
            </div>
        </form>
    );
};

export default AddTransction;
