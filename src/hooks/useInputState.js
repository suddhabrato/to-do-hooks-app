import React, { useState } from 'react';

export default function useInputState(intialVal) {
    const [val, setVal] = useState(intialVal);
    const handleChange = e => {
        setVal(e.target.value);
    }
    const reset = () => {
        setVal('');
    }
    return [val, handleChange, reset];
}