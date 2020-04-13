import React from "react";
import style from './FormControls.module.css';

export const Textarea = ({input, meta, ...props})=> {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError? style.error: "")}>
            <textarea id="pepega" cols="30" rows="10" {...input} {...props}> </textarea>
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}