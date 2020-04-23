import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AreaChart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Antall meldte per i dag Norge",
      },
      axisY: {
        title: "Antall",
        includeZero: false,
      },
      data: [
        {
          type: "area",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## Antall",
          dataPoints: [
            { x: new Date(2020, 4, 20), y: 0 },
            { x: new Date(2020, 4, 19), y: 0 },
            { x: new Date(2020, 4, 18), y: 0 },
            { x: new Date(2020, 4, 17), y: 0 },
            { x: new Date(2020, 4, 16), y: 0 },
            { x: new Date(2020, 4, 15), y: 2 },
            { x: new Date(2020, 4, 14), y: 16 },
            { x: new Date(2020, 4, 13), y: 11 },
            { x: new Date(2020, 4, 12), y: 16 },
            { x: new Date(2020, 4, 11), y: 33 },
            { x: new Date(2020, 4, 10), y: 16 },
            { x: new Date(2020, 4, 9), y: 23 },
            { x: new Date(2020, 4, 8), y: 32 },
            { x: new Date(2020, 4, 7), y: 38 },
            { x: new Date(2020, 4, 6), y: 55 },
            { x: new Date(2020, 4, 5), y: 34 },
            { x: new Date(2020, 4, 4), y: 33 },
            { x: new Date(2020, 4, 3), y: 105 },
            { x: new Date(2020, 4, 2), y: 108 },
            { x: new Date(2020, 4, 1), y: 108 },
            { x: new Date(2020, 3, 31), y: 130 },
            { x: new Date(2020, 3, 30), y: 175 },
            { x: new Date(2020, 3, 29), y: 61 },
            { x: new Date(2020, 3, 28), y: 100 },
            { x: new Date(2020, 3, 27), y: 172 },
            { x: new Date(2020, 3, 26), y: 184 },
            { x: new Date(2020, 3, 25), y: 179 },
            { x: new Date(2020, 3, 24), y: 183 },
            { x: new Date(2020, 3, 23), y: 214 },
            { x: new Date(2020, 3, 22), y: 101 },
            { x: new Date(2020, 3, 21), y: 123 },
            { x: new Date(2020, 3, 20), y: 242 },
            { x: new Date(2020, 3, 19), y: 175 },
            { x: new Date(2020, 3, 18), y: 160 },
            { x: new Date(2020, 3, 17), y: 126 },
            { x: new Date(2020, 3, 16), y: 142 },
            { x: new Date(2020, 3, 15), y: 79 },
            { x: new Date(2020, 3, 14), y: 78 },
            { x: new Date(2020, 3, 13), y: 82 },
            { x: new Date(2020, 3, 12), y: 108 },
            { x: new Date(2020, 3, 11), y: 64 },
            { x: new Date(2020, 3, 10), y: 53 },
            { x: new Date(2020, 3, 9), y: 31 },
            { x: new Date(2020, 3, 8), y: 20 },
            { x: new Date(2020, 3, 7), y: 15 },
            { x: new Date(2020, 3, 6), y: 8 },
            { x: new Date(2020, 3, 5), y: 18 },
            { x: new Date(2020, 3, 4), y: 5 },
            { x: new Date(2020, 3, 3), y: 4 },
            { x: new Date(2020, 3, 2), y: 2 },
            { x: new Date(2020, 3, 1), y: 0 },
            { x: new Date(2020, 2, 29), y: 3 },
            { x: new Date(2020, 2, 28), y: 6 },
            { x: new Date(2020, 2, 27), y: 0 },
            { x: new Date(2020, 2, 26), y: 1 },
            { x: new Date(2020, 2, 21), y: 0 },
          ],
        },
      ],
    };

    return (
      <div>
        <p>Oppdatert 21. April</p>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default AreaChart;
