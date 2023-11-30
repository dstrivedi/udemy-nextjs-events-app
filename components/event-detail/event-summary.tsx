import React from 'react';

type EventSummaryProps = {
  title: string;
};


const EventSummary: React.FC<EventSummaryProps> = (props) => {
  return (
    <section>
      <h1>{props.title}</h1>
    </section>
  );
};

export default EventSummary;