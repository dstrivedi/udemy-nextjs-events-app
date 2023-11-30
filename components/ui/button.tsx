import Link from 'next/link';

import styles from './button.module.css';

type ButtonProps = {
  link?: string;
  onClick?: () => void;
  children: React.ReactNode
}

export default function Button(props: ButtonProps) {
  if (props.link) {
    return (
      <Link href={props.link} className={styles.btn}>
        {props.children}
      </Link>
    )
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
  )
}