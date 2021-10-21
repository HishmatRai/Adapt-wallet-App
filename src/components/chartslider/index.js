import React from 'react';
import LineGraph from '@chartiful/react-native-line-graph';
import { View, StyleSheet } from 'react-native';

const config = {
  startAtZero: true,
  hasXAxisBackgroundLines: false,
  xAxisLabelStyle: {
    prefix: '$',
    offset: 0
  }
};

export default YourComponent = () => (
  <View>
    <LineGraph
      data={[10, 15, 7, 20, 14, 12, 10, 20]}
      width={300}
      height={300}
      isBezier
      hasShadow
    labels={[]}
    isBezier={false}
      baseConfig={config}
      style={styles.chart}
      labels={[]}
    />
  </View>
);

const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 300,
    backgroundColor: 'lightblue'
  },
});
