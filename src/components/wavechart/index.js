import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { AreaChart, LineChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from 'd3-shape';

export default class WaveChart extends Component {
    render() {

        const data = [ 1945, 1960, 1980, 2010, 1995, 2024]
        return (
            <LineChart
            style={{ height:50 }}
            data={data}
            svg={{ stroke: '#D250FF' }}
            // contentInset={{ top: 20, bottom: 20 }}
            hasShadow={false}
            isBezier={false}
        >
            <Grid />
        </LineChart>
        )
    }
}
