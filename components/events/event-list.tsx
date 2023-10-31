import React from 'react';
import EventItem from './event-item';
import { Event } from '../../event';

const EventList = (props: { items: Event[] }) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => <EventItem {...item} />)}
    </ul>
  );
};

export default EventList;