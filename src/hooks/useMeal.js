import { useEffect, useState } from 'react';

const useBreakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rakibemon/hot-onion-restaurent-react/main/public/breakfastsData.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data))
    }, []);
    const [lunches, setLunches] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rakibemon/hot-onion-restaurent-react/main/public/lunchesData.json')
            .then(response => response.json())
            .then(data => setLunches(data))
    }, []);
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rakibemon/hot-onion-restaurent-react/main/public/dinnersData.json')
            .then(response => response.json())
            .then(data => setDinners(data))
    }, []);
    return (
       {breakfasts,lunches,dinners}
    );
};

export default useBreakfast;