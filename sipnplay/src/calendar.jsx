import React, { useState } from "react";
import Calendar from "react-calendar";
import ReactDOM from "react-dom/client";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [eventName, setEventName] = useState("");
	const [events, setEvents] = useState([]);

	const DateClick = (date) => {
		setSelectedDate(date);
	};

	const eventUpdate = (event) => {
		setEventName(event.target.value);
	};

	const createNewEvent = () => {
		if (selectedDate && eventName) {
			const newEvent = {
				id: new Date().getTime(),
				date: selectedDate,
				title: eventName,
			};
			setEvents([...events, newEvent]);
			setSelectedDate(null);
			setEventName("");
			setSelectedDate(newEvent.date);
		}
	};

	const updateEvent = (eventId, newName) => {
		const eventsUpdated = events.map((event) => {
			if (event.id === eventId) {
				return {
					...event,
					title: newName,
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
					/>{" "}
				</div>
				<div className="event-container">
					{" "}
					{selectedDate && (
						<div className="event-form">
							<h2> Create Event </h2>{" "}
							<p>
								{" "}
								Selected Date: {selectedDate.toDateString()}{" "}
							</p>{" "}
							<input
								type="text"
								placeholder="Event Name"
								value={eventName}
								onChange={eventUpdate}
							/>{" "}
							<button
								className="create-btn"
								onClick={createNewEvent}
							>
								Click Here to Add Event{" "}
							</button>{" "}
						</div>
					)}
					{events.length > 0 && selectedDate && (
						<div className="event-list">
							<h2> My Created Event List </h2>{" "}
							<div className="event-cards">
								{" "}
								{events.map((event) =>
									event.date.toDateString() ===
									selectedDate.toDateString() ? (
										<div
											key={event.id}
											className="event-card"
										>
											<div className="event-card-header">
												<span className="event-date">
													{" "}
													{event.date.toDateString()}{" "}
												</span>{" "}
												<div className="event-actions">
													<button
														className="update-btn"
														onClick={() =>
															updateEvent(
																event.id,
																prompt(
																	"ENTER NEW TITLE",
																),
															)
														}
													>
														Update Event{" "}
													</button>{" "}
													<button
														className="delete-btn"
														onClick={() =>
															deleteEvent(
																event.id,
															)
														}
													>
														Delete Event{" "}
													</button>{" "}
												</div>{" "}
											</div>{" "}
											<div className="event-card-body">
												<p className="event-title">
													{" "}
													{event.title}{" "}
												</p>{" "}
											</div>{" "}
										</div>
									) : null,
								)}{" "}
							</div>{" "}
						</div>
					)}{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};

export default CalendarComponent;
