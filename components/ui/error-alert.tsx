import styles from './error-alert.module.css';

type ErrorAlertProps = {
  children: React.ReactNode
}

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
  return (
    <div className={styles.alert}>{props.children}</div>
  )
}

export default ErrorAlert;