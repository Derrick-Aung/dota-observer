import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class Graph extends Component {
    
    constructor(props){
        super(props)
        this.data = {
            labels: this.props.labels,
            datasets: [{
                label: 'Networth',
                data: this.props.gold_adv_values,
                backgroundColor: 'rgba(232, 193, 0)',
                borderColor: 'rgba(232, 193, 0)',
                fill: false,
            },
            {
                label: 'Experience',
                data: this.props.xp_adv_values,
                backgroundColor: 'rgba(92, 195, 255)',
                borderColor: 'rgba(92, 195, 255)',
                fill: false,
            }],
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    }

    render() {
        return (
            <Line
                data={this.data}
                options={{ maintainAspectRatio: true }}
            />
        )
    }
}

export default Graph
