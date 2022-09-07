import { useEffect, useState } from 'react';
import { RequestState } from './enums';

const useClick = (delay: number) => {
    const [clickState, setClickState] = useState(RequestState.Default);

    useEffect(() => {
        if (clickState === RequestState.Pending) {
            setTimeout(() => {setClickState(RequestState.Success)}, delay);
        }
    }, [clickState, delay]);

    const handleClick = () => {
        setClickState(RequestState.Pending);
    }

    return {clickState, setClickState, handleClick};
}

export default useClick;