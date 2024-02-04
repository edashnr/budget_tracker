import { useState, useEffect } from 'react';

export const useTodayDate = () => {
    const [todayDate, setTodayDate] = useState(
        new Date().toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTodayDate(
                new Date().toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })
            );
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return todayDate;
};
