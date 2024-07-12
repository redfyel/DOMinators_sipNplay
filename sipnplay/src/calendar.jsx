// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events] = useState([
        { id: 1, date: new Date(2024, 5, 7), time: new Date(2024, 5, 7, 18, 0), title: 'Pre-Release Sale' },
        { id: 2, date: new Date(2024, 5, 8), time: new Date(2024, 5, 8, 11, 0), title: 'Pre-Release Sale' },
        { id: 3, date: new Date(2024, 5, 8), time: new Date(2024, 5, 8, 17, 0), title: 'Pre-Release Sale' },
        { id: 4, date: new Date(2024, 5, 10), time: new Date(2024, 5, 10, 18, 0), title: 'Pre-Release Sale' },
        { id: 5, date: new Date(2024, 5, 6), time: new Date(2030, 5, 6, 18, 0), title: 'Commander Night', repeat: 'weekly' },
        { id: 6, date: new Date(2024, 5, 8), time: new Date(2030, 5, 6, 19, 0), title: 'Flesh and Blood', repeat: 'weekly' }

    ]);

/*      useEffect(() => {
        repeatWeekly();
    }, []);

    const repeatWeekly = () => {
        const updatedEvents = [...events];
        events.forEach(event => {
            if (event.repeat === 'weekly') {
                const startDate = moment(event.date);
                let currentDate = new Date(startDate);
                while(currentDate < new Date(2025, 5, 30)) {
                    currentDate.setDate(currentDate.getDate() + 7); 
                    updatedEvents.push({
                      ...event,
                      id: updatedEvents.length + 1,
                      date: new Date(currentDate) 
                    });
                  }
                }
        });
        
        setEvents(updatedEvents);
    };  */
    const DateClick = (date) => {
        setSelectedDate(date);
    };

    const isSameDay = (d1, d2) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    const getEventOnDate = (date) => {
        return events.find(event => isSameDay(event.date, date));
    };
  
    return (
        <div className="app">
            <div className="container">
                <div className="calendar-container checkerboard">
                    <Calendar
                        value={selectedDate}
                        onClickDay={DateClick}
                        tileContent={({ date }) => {
                            const event = getEventOnDate(date);
                            return event ? (
                                <div className="event-marked">

                                </div>
                            ) : null;
                        }}
                        tileClassName={({ date }) =>
                            selectedDate && isSameDay(selectedDate, date)
                                ? "selected"
                                : events.some(event => isSameDay(event.date, date))
                                    ? "event-marked"
                                    : ""
                        }
                    />
                </div>
                <div className="event-container">
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2>Event(s):</h2>
                            <div className="event-cards">
                                {events.filter(event => isSameDay(event.date, selectedDate)).map((event) => (
                                    <div key={event.id} className="event-card">
                                        <div className="event-card-body">
                                            <p className="event-title">{event.title}</p>
                                        </div>
                                        <div className="event-card-header">
                                            <span className="event-date">
                                                {event.date.toDateString()}
                                            </span>{" "}
                                            <span className="event-time">
                                                {moment(event.time).format('h:mm a')}
                                            </span>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;
