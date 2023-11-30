import React from 'react';

import styles from './event-logistics.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsProps> = (props) => {

  const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const addressText = props.address.replace(',', '\n');

  return (
    <section className={styles.logistics}>
      {/* Your component code here */}
      <div className={styles.image}>
        <img src={"/" + props.image} alt={props.imageAlt} />
      </div>
      <ul className={styles.list}>
        <li className={styles.date}><FontAwesomeIcon icon={faCalendar} /><time suppressHydrationWarning>{humanReadableDate}</time></li>
        <li className={styles.address}><FontAwesomeIcon icon={faLocationDot} /><address>{addressText}</address></li>
      </ul>
    </section>
  );
};

export default EventLogistics;