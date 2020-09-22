import React from "react"
import style from './FormControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"
import {FieldValidatorType} from "../../../helpers/validators/validators"

type FormControlsPropsType = {
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormControlsPropsType> = (
    {
        meta,
        children,
        ...props
    }
) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export const createField = (
    name: string,
    validators: Array<FieldValidatorType>,
    component: string | React.FC<WrappedFieldProps>,
    clName: string,
    props = {}
) => (
    <Field component={component}
           name={name}
           validate={[...validators]}
           className={clName} {...props}
    />
)

