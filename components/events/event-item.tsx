import React from 'react';
import { Event } from '../../event';
import Link from 'next/link';

const EventItem = (props: Event) => {
  const { title, description, image, location, isFeatured, date, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/event/${id}`;

  return (
    <li>
      <div>
        <img src={"/" + image} alt={title} />
        <div><h2>{title}</h2></div>
        <div><time suppressHydrationWarning>{humanReadableDate}</time></div>
        <div><address>{formatAddress}</address></div>
      </div>
      <div><Link href={exploreLink}>Explore event</Link></div>
    </li>
  );
};

export default EventItem;