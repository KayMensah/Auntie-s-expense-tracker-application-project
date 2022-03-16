import React, { useState } from "react";
import { useSelector } from "react-redux";
import HistoryList from "./HistoryList";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const History = () => {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    const [show, setshow] = useState(false);
    const [modal, setmodal] = useState({ item: "", amount: "" });
    const edit = (e) => {
        const newNote = { ...modal };
        dispatch({ type: "edit", payload: newNote });
        console.log(newNote);
        setshow(false);
    };
    return (
        <div>
            <h4>History</h4>
            <hr />

            {data?.map((data) => (
                <HistoryList
                    key={data.id}
                    data={data}
                    show={setshow}
                    modal={setmodal}
                />
            ))}
            <Modal
                show={show}
                className="modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalBody>
                    <label htmlFor="">Item:</label>
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
                    <label htmlFor="">Amount:</label>
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
        </div>
    );
};

export default History;
