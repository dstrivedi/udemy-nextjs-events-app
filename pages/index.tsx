import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from '../data'
import EventList from '../components/events/event-list';

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Home;
