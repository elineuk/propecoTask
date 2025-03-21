"use client"
import Form from 'next/form'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Form action = "/search">
              <input type="text" name = "referenceNumber" placeholder= "Enter Reference Number (UPRN)" />
              <br />
              <div className={styles.submitButton}>
              <button type="submit">Submit</button>
              </div>
          </Form>
      </main>
    </div>
  );
}
