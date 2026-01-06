import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchSpendingTrends } from '../utils/api';

const TrendAnalysis = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTrends = async () => {
            const trendsData = await fetchSpendingTrends();
            setData({
                labels: trendsData.labels,
                datasets: [
                    {
                        label: 'Spending Trend',
                        data: trendsData.values,
                        fill: false,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                    },
                ],
            });
            setLoading(false);
        };

        getTrends();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Spending Trend Analysis</h2>
            <Line data={data} />
        </div>
    );
};

export default TrendAnalysis;