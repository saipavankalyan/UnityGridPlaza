import React, { useState, useEffect } from "react";
import "../css/Event.css";
import EventsAPI from "../services/EventsAPI";

const Event = (props) => {
  const [event, setEvent] = useState([]);
  // const [time, setTime] = useState([])
  const [remainingTime, setremainingTime] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getEventById(props.id);
        setEvent(eventData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <article className="event-information">
      <img src={event.img_url} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.name}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}{" "}
            <br /> {event.time}
          </p>
          <p id={`remainingTime-${event.id}`}>{remainingTime}</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
