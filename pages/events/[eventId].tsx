import React, { Fragment } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import ErrorAlert from '../../components/ui/error-alert';

import { getEventById } from '../../data.js';

const Event: NextPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found!</p>
      </ErrorAlert>
    )
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title} />
      <EventContent description={event.description} />
    </Fragment>
  )
}

export default Event;