import React from 'react';
import { Event } from '../../event';
import Image from 'next/image';
import Button from '../ui/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './event-item.module.css';

const EventItem = (props: Event) => {
  const { title, description, image, location, isFeatured, date, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image className={styles.img} src={"/" + image} alt={title} width={500} height={500} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}><FontAwesomeIcon icon={faCalendar} /><time suppressHydrationWarning>{humanReadableDate}</time></div>
          <div className={styles.address}><FontAwesomeIcon icon={faLocationDot} /><address>{formatAddress}</address></div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>&nbsp;
            <span><FontAwesomeIcon icon={faArrowRight} /></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;