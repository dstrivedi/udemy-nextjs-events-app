import React from 'react';

type EventContentProps = {
  description: string
}

const EventContent: React.FC<EventContentProps> = (props) => {
  return (
    <section>
      <p>{props.description}</p>
    </section>
  );
};

export default EventContent;