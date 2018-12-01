import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

const LineChart = ({ data }) => {
    return (
        <VictoryChart
            padding={70}
            scale={{ x: 'time' }}
        >
            <VictoryAxis
                crossAxis
                standalone={false}
                style={{
                    axis: { stroke: '#756f6a', strokeWidth: 2 },
                    grid: { stroke: 'grey', strokeOpacity: 0.5 },
                    ticks: { stroke: 'grey', size: 5 },
                    tickLabels: { fontSize: 8 }
                }}
            />
            <VictoryAxis
                dependentAxis crossAxis
                standalone={false}
                style={{
                    axis: { stroke: '#756f6a', strokeWidth: 2 },
                    grid: { stroke: 'grey', strokeOpacity: 0.5 },
                    ticks: { stroke: 'grey', size: 5 },
                    tickLabels: { fontSize: 8 }
                }}
            />
            <VictoryLine
                style={{
                    data: { stroke: '#00796b', strokeWidth: '0.5' }
                }}
                data={data}
            />
        </VictoryChart>
    );
};

export default LineChart;