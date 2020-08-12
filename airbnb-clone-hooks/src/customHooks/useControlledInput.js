import { useState } from 'react';
// handle any onChange input that needs to be controlled

export default (initValue)=>{
    const [ value, setValue ] = useState(initValue);
    return {
        value: value,
        onChange: (e)=>{
            console.log(e.target.value);
            setValue(e.target.value);
        }
    }
}