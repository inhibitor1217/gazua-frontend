import React, { Component } from 'react';
import { VictoryLabel, VictoryTooltip, VictoryPie } from 'victory';

class CustomFlyout extends Component {
    render() {
        const { x, y, datum } = this.props;
        const { _y: asset, startAngle, endAngle } = datum;
        const percentage = (endAngle - startAngle) * 100 / 360.0;
        return (
            <g>
                <text x={x} y={y}>
                    <tspan x={x} y={y} textAnchor='middle'>{asset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</tspan>
                    <tspan x={x} y={y + 20} fill='gray' fontSize='10' textAnchor='middle'>{percentage.toFixed(2)}%</tspan>
                </text>
            </g>
        );
    }
}

class CustomLabel extends Component {
    render() {
        return (
            <g>
                <VictoryLabel {...this.props}/>
                <VictoryTooltip
                    {...this.props}
                    x={150} y={155}
                    flyoutComponent={<CustomFlyout />}
                    orientation='top'
                    text={`현재 가치: ${this.props.text}`}
                />
            </g>
        );
    }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const PieChart = ({ data }) => {
    return (
        <VictoryPie
            width={300}
            height={300}
            innerRadius={75}
            data={data}
            labelRadius={110}
            labelComponent={<CustomLabel />}
            colorScale="qualitative"
            style={{ labels: { fontSize: 8, fontFamily: 'NanumSquare', fontWeight: 'bold' } }}
            events={[
                {
                    target: 'data',
                    eventHandlers: {
                        onMouseOver: () => {
                            return [{
                                mutation: () => ({ radius: 105, innerRadius: 70 })
                            }, {
                                target: 'labels',
                                mutation: () => ({ active: true })
                            }];
                        },
                        onMouseOut: () => {
                            return [{
                                mutation: (props) => {
                                    return { radius: 100, innerRadius: 75 };
                                }
                            }, {
                                target: 'labels',
                                mutation: () => ({ active: false })
                            }];
                        }
                    }
                }
            ]}
        />
    );
};

export default PieChart;