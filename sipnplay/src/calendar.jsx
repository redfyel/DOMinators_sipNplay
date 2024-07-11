import React, { useState } from "react";
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './calendar.css';

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [eventName, setEventName] = useState("");
	const [eventTime, setEventTime] = useState(new Date());
	const [events, setEvents] = useState([]);

	const DateClick = (date) => {
		setSelectedDate(date);
	};

	const eventUpdate = (event) => {
		setEventName(event.target.value);
	};
	const timeUpdate = (time) => {
        setEventTime(time);
    };

	const createNewEvent = () => {
		if (selectedDate && eventName) {
			const newEvent = {
				id: new Date().getTime(),
				date: selectedDate,
				time: eventTime,
				title: eventName,
			};
			setEvents([...events, newEvent]);
			setSelectedDate(null);
			setEventName("");
			setEventTime(new Date());
			setSelectedDate(newEvent.date);
		}
	};

	const updateEvent = (eventId, newName, newTime) => {
        const eventsUpdated = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                    time: newTime, // Update event with new time
                };
            }
            return event;
        });
        setEvents(eventsUpdated);
    };

    const deleteEvent = (eventId) => {
        const eventsUpdated = events.filter((event) => event.id !== eventId);
        setEvents(eventsUpdated);
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
                    {selectedDate && (
                        <div className="event-form">
                            <h2>Create Event</h2>
                            <p>Selected Date: {selectedDate.toDateString()}</p>
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={eventUpdate}
                            />
						<div className="time-container">
                            <DatePicker
                                selected={eventTime}
                                onChange={timeUpdate}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
						</div>
                            <button className="create-btn" onClick={createNewEvent}>
                                Add Event
                            </button>
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2>Created Events</h2>
                            <div className="event-cards">
                                {events.map((event) =>
                                    event.date.toDateString() ===
                                    selectedDate.toDateString() ? (
                                        <div key={event.id} className="event-card">
                                            <div className="event-card-header">
                                                <span className="event-date">
                                                    {event.date.toDateString()}
                                                </span>
                                                <span className="event-time">
                                                    {moment(event.time).format('h:mm a')}
                                                </span>
                                                <div className="event-actions">
                                                    <button
                                                        className="update-btn"
                                                        onClick={() =>
                                                            updateEvent(
                                                                event.id,
                                                                prompt("Enter new Event Name"),
                                                                event.time // Pass current time to update
                                                            )
                                                        }
                                                    >
                                                        Update Event
                                                    </button>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() => deleteEvent(event.id)}
                                                    >
                                                        Delete Event
                                                    </button>
                                                </div>
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

