import type { NextPage } from 'next';
import {useRouter} from 'next/router';

const Event : NextPage = () => {
  const router = useRouter();
  return (
    <div><h1>Event {router.query.eventId}</h1></div>
  )
}

export default Event;