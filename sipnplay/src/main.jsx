import React from "react";
import ReactDOM from "react-dom/client";
import CalendarComponent from "./EditableCalendar";
import "./calendar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CalendarComponent />
    </React.StrictMode>
);