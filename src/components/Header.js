import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
    const data = useSelector((state) => state);
    console.log(data);
    useEffect(() => {
        let displayBalance = document.querySelector("h5 span");
        let incomeEl = document.querySelector(" .income");
        let expenseEl = document.querySelector(".expensedata");

        let balance = 0;
        let displayIncome = 0;
        let displayExpense = 0;
        let total = data.map((data) => (balance += parseInt(data.amount)));
        displayBalance.textContent = balance.toLocaleString();

        let expense = data.map((data) =>
            data.amount.includes("-")
                ? (displayExpense += parseInt(data.amount))
                : 0
        );
        let income = data.map((data) =>
            data.amount.includes("+") || data.amount > 0
                ? (displayIncome += parseInt(data.amount))
                : 0
        );
        if (income) {
            incomeEl.textContent = displayIncome.toLocaleString();
        }
        if (expense) {
            expenseEl.textContent = Math.abs(displayExpense).toLocaleString();
        }

        console.log(displayExpense, displayIncome);
    }, [data]);

    return (
        <div className="header">
            <h3>expense tracker</h3>
            <h5>
                your balance <br />
                <i>&#8373;</i>
                <span>gh 000</span>
            </h5>
            <section className="expense">
                <p>
                    income <br />
                    <i>&#8373;</i>
                    <span className="income"> 00</span>
                </p>
                <p>
                    expense <br />
                    <i>&#8373;</i>
                    <span className="expensedata"> 00</span>
                </p>
            </section>
        </div>
    );
};

export default Header;
