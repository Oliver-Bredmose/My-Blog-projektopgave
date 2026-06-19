import styles from "./Login.module.scss"

export function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Opret konto</h1>
        <form className={styles.form}>
          <input className={styles.input} name="firstname" type="text" placeholder="Fornavn"/>
          <input className={styles.input} name="lastname" type="text" placeholder="Efternavn"/>
          <input className={styles.input} name="email" type="email" placeholder="Email"/>
          <input className={styles.input} name="password" type="password" placeholder="Password"/>
          <input className={styles.input} name="passwordRepeat" type="password" placeholder="Gentag password"/>
          <button className={styles.button} type="submit">Opret konto</button>
        </form>
      </div>
    </div>
  )
}