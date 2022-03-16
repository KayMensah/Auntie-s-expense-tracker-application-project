import React, { useState } from "react";
import "./ExpenseList.css";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Expense from "./Expense";
export const ExpenseList = () => {
  const dispatch = useDispatch();
  const Expenses = useSelector((state) => state);
  const [show, setshow] = useState(false);
  const [modal, setmodal] = useState({
    item: "",
    date: "",
    amount: "",
    category: "",
  });
  const edit = (e) => {
    const newExpense = { ...modal };
    dispatch({ type: "edit", payload: newExpense });
    console.log(newExpense);
    setshow(false);
  };
  return (
    <div className="expense-lists">
      <h2>Expenses</h2>
      {Expenses.length > 0 ? (
        <>
          {" "}
          <table>
            <thead>
              <tr>
                <th>Expenses</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {Expenses.map((expense) => {
                return (
                  <Expense
                    key={expense}
                    expense={expense}
                    show={setshow}
                    modal={setmodal}
                  />
                );
              })}
            </tbody>
          </table>
          <Modal
            show={show}
            className="modal"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <ModalBody>
              <label htmlFor="">item</label>
              <div>
                {" "}
                <input
                  type="text"
                  value={modal.item}
                  onChange={(e) =>
                    setmodal({
                      ...modal,
                      item: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <label htmlFor="">date</label>
              <div>
                <input
                  type="text"
                  value={modal.date}
                  onChange={(e) =>
                    setmodal({
                      ...modal,
                      date: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <label htmlFor="">amount</label>
              <div>
                <input
                  type="text"
                  value={modal.amount}
                  onChange={(e) =>
                    setmodal({
                      ...modal,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <label htmlFor="">category</label>
              <div>
                <input
                  type="text"
                  value={modal.category}
                  onChange={(e) =>
                    setmodal({
                      ...modal,
                      category: e.target.value,
                    })
                  }
                />
              </div>
            </ModalBody>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setshow(false)}>
                close
              </Button>
              <Button variant="primary" onClick={edit}>
                save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>enter notes to display here!</p>
      )}
    </div>
  );
};
