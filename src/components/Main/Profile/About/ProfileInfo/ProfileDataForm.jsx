import React, {useState} from 'react'
import styles from "./Info.module.css";

export const ProfileDataForm = ({contacts}) => {
  let contactsArr = [];
  const [form, setForm] = useState(contacts)
  const changeFormHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  for (let key in contacts) {
    contactsArr.push(
      <>
        <label>
          {`${key}`}
          <input name={key} value={form[key]}/>
        </label>
        <br/>
      </>
    )
  }

  return (
    <form className={styles.about} onChange={changeFormHandler}>
      {contactsArr}
    </form>
  )
}