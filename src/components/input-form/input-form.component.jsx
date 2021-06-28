import React, {useMemo} from 'react';
import './input-form.style.scss';


const InputForm = props => {
    const label = useMemo(()=>{
        if (props.label) 
        {
            return (
                <label
                    className={`${props.value.length ? 'shrink' : ""} input-label-form`}
                > 
                    {props.label}
                </label>
            )
        }
        else
        {
            return null;
        }
    }, [props.label, props.value]);

    return (
        <div className='group'>
            <input
                className='form-input'
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                name={props.name}>
            </input>
            {label}
        </div>
    )
}

export default InputForm;