import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CheckeredWrapper = styled.div`
    .react-calendar_tile{
        background-color: repeating-linear-gradient(
            45deg,
            #fff,
            #fff 10px,
            #ccc 10px,
            #ccc 20px
        );
        &:nth-child(even){
            background-color: repeating-linear-gradient(
                45deg,
                #ccc,
                #ccc 10px,
                #fff 10px,
                #fff 20px
            );
        }
    }
`;
     
const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    const events = [
      { date: new Date(2024, 6, 12), title: 'Event 1' },
      { date: new Date(2024, 6, 15), title: 'Event 2' },
    ];
  
    const tileContent = ({ date, view }) => {
      const event = events.find(
        (event) => date.toDateString() === event.date.toDateString()
      );
      return event ? (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
            {event.title}
          </div>
        </div>
      ) : null;
    };
  
    return (
      <CheckerboardWrapper>
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={tileContent}
        />
      </CheckerboardWrapper>
    );
  };
  
  export default CalendarComponent;