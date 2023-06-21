import React from "react";
import "./ExpenseDate.css";
var ExpenseDate = function (props) {
    var month = props.date.toLocaleString("en-US", { month: "long" });
    var day = props.date.toLocaleString("en-US", { day: "2-digit" });
    var year = props.date.getFullYear();
    return (React.createElement("div", { className: "expense-date" },
        React.createElement("div", { className: "expense-date__month" }, month),
        React.createElement("div", { className: "expense-date__year" }, year),
        React.createElement("div", { className: "expense-date__day" }, day)));
};
export default ExpenseDate;
//# sourceMappingURL=ExpenseDate.js.map