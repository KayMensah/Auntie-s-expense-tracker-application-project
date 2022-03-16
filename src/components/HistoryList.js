import React from "react";
import "./historylist.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

const HistoryList = ({ data, show, modal }) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({ type: "delete", payload: data.id });
    };
    const handleEdit = () => {
        modal({ ...data });
        show(true);
    };
    console.log(data);
    return (
        <div className="list">
            <span className="close" onClick={handleClose}>
                <IoIosCloseCircleOutline />
            </span>
            <div onClick={handleEdit} className="box">
                <span>{data.item}</span>
                <span>{data.amount}</span>
            </div>
        </div>
    );
};

export default HistoryList;
