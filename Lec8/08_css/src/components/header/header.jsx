import styles from '../header/header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
      <h3>Logo.</h3>
      <button>Login</button>
    </div>
  )
}

export default header
