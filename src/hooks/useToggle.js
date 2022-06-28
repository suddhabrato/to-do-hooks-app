import { useState } from 'react';

export default function useToggle(initialVal) {
    const [val, setVal] = useState(initialVal);
    const toggle = () => {
        setVal(!val);
    }
    return [val, toggle];
}