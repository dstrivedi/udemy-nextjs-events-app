import React from 'react';
import EventItem from './event-item';
import { Event } from '../../event';
import styles from './event-list.module.css';

const EventList = (props: { items: Event[] }) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((item) => <EventItem {...item} key={item.id} />)}
    </ul>
  );
};

export default EventList;