import React from 'react';
import styles from "./About.module.css";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import style from "../../../common/FormControls/FormControls.module.css";

export function ProfileInfoForm({handleSubmit, profile, error}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.nameWrapper}>
                <span className={styles.name}>
                    <b>
                    Full name:
                </b>
                    {createField("fullName", [], Input, "", "")}
                </span>
            </div>
            
            <div>
                <p>About me:</p>
                {createField("aboutMe", [], Textarea, "", '')}
            </div>
            {/*<ul className={styles.about}>*/}
            {/*    {contactsArr}*/}
            {/*</ul>*/}
            {/*<hr/>*/}
            {/*<div>*/}
            
            Looking for a job?: {createField("lookingForAJob", [], Input, "", {type: 'checkbox'})}
            
            {/*</div>*/}
            
            <div>
                <p>My professional skills:</p>
                {createField("lookingForAJobDescription", [], Textarea, "", '', "")}
            </div>
            <br/>
            <div>
                Contacts:
                <br/>
                {Object.keys(profile.contacts).map(el => <label
                    className={styles.contactItem} key={el}>{el}:
                    {createField('contacts.' + el, [], Input, "", "")}
                </label>)}
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
    
            <button
                className={styles.edit}
            >
                Save
            </button>
        </form>
    );
};