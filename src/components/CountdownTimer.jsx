import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const targetDate = new Date('April 17, 2026 00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <div className="countdown-banner">
            <div className="container">
                <div className="countdown-wrapper">
                    <div className="countdown-label">
                        Conference Starts In:
                    </div>
                    <div className="countdown-items">
                        <div className="countdown-item">
                            <span className="count">{formatNumber(timeLeft.days)}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{formatNumber(timeLeft.hours)}</span>
                            <span className="label">Hrs</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{formatNumber(timeLeft.minutes)}</span>
                            <span className="label">Min</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{formatNumber(timeLeft.seconds)}</span>
                            <span className="label">Sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
