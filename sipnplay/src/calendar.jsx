import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events] = useState([
        // Sample events for demonstration
        { id: 1, date: new Date(2024, 6, 12), time: new Date(2024, 6, 12, 10, 30), title: 'Event 1' },
        { id: 2, date: new Date(2024, 6, 15), time: new Date(2024, 6, 15, 12, 0), title: 'Event 2' }
    ]);

    const DateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="app">
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={DateClick}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                    (event) =>
                                        event.date.toDateString() ===
                                        date.toDateString(),
                                )
                                ? "event-marked"
                                : ""
                        }
                    />
                </div>
                <div className="event-container">
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2>Events on Selected Date</h2>
                            <div className="event-cards">
                                {events.map((event) =>
                                    event.date.toDateString() ===
                                    selectedDate.toDateString() ? (
                                        <div key={event.id} className="event-card">
                                            <div className="event-card-header">
                                                <span className="event-date">
                                                    {event.date.toDateString()}
                                                </span>{" "}
                                                <span className="event-time">
                                                    {moment(event.time).format('h:mm a')}
                                                </span>
                                            </div>
                                            <div className="event-card-body">
                                                <p className="event-title">{event.title}</p>
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;
