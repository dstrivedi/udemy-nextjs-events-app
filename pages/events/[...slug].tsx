import type { NextPage } from 'next';
import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../data';
import EventList from '../../components/event-list/EventList';

const FilteredEventPage : NextPage = () => {
  const router = useRouter();

  const filterData= router.query.slug;

  if(!filterData) {
    return <p>Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filter. Please adjust your filter.</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month : numMonth
  });

  if(!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found....</p>
  }
  
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventPage;