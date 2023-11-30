import type { NextPage } from 'next';
import {useRouter} from 'next/router';
import { getAllEvents } from '../../data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

const Events: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: number, month:number) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  
  return (
    <div>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  )
}

export default Events;