import { useEffect, useState } from 'react';

const useBreakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('/breakfastData.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data))
    }, [])
    return (
       [breakfasts]
    );
};

export default useBreakfast;