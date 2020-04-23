import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedAreaChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Antall meldte per i dag alle Nordmenn",
      },
      axisY: {
        title: "Antall Nordmenn",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "stackedArea",
          name: "Norge",
          showInLegend: true,
          xValueFormatString: "YYYY",
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
        {
          type: "stackedArea",
          name: "Utlandet",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(2020, 4, 20), y: 0 },
            { x: new Date(2020, 4, 19), y: 0 },
            { x: new Date(2020, 4, 18), y: 0 },
            { x: new Date(2020, 4, 17), y: 0 },
            { x: new Date(2020, 4, 16), y: 0 },
            { x: new Date(2020, 4, 15), y: 0 },
            { x: new Date(2020, 4, 14), y: 0 },
            { x: new Date(2020, 4, 13), y: 0 },
            { x: new Date(2020, 4, 12), y: 1 },
            { x: new Date(2020, 4, 11), y: 3 },
            { x: new Date(2020, 4, 10), y: 1 },
            { x: new Date(2020, 4, 9), y: 0 },
            { x: new Date(2020, 4, 8), y: 0 },
            { x: new Date(2020, 4, 7), y: 2 },
            { x: new Date(2020, 4, 6), y: 4 },
            { x: new Date(2020, 4, 5), y: 0 },
            { x: new Date(2020, 4, 4), y: 6 },
            { x: new Date(2020, 4, 3), y: 14 },
            { x: new Date(2020, 4, 2), y: 19 },
            { x: new Date(2020, 4, 1), y: 14 },
            { x: new Date(2020, 3, 31), y: 23 },
            { x: new Date(2020, 3, 30), y: 43 },
            { x: new Date(2020, 3, 29), y: 17 },
            { x: new Date(2020, 3, 28), y: 36 },
            { x: new Date(2020, 3, 27), y: 56 },
            { x: new Date(2020, 3, 26), y: 57 },
            { x: new Date(2020, 3, 25), y: 71 },
            { x: new Date(2020, 3, 24), y: 81 },
            { x: new Date(2020, 3, 23), y: 55 },
            { x: new Date(2020, 3, 22), y: 40 },
            { x: new Date(2020, 3, 21), y: 42 },
            { x: new Date(2020, 3, 20), y: 47 },
            { x: new Date(2020, 3, 19), y: 37 },
            { x: new Date(2020, 3, 18), y: 44 },
            { x: new Date(2020, 3, 17), y: 37 },
            { x: new Date(2020, 3, 16), y: 28 },
            { x: new Date(2020, 3, 15), y: 17 },
            { x: new Date(2020, 3, 14), y: 18 },
            { x: new Date(2020, 3, 13), y: 52 },
            { x: new Date(2020, 3, 12), y: 94 },
            { x: new Date(2020, 3, 11), y: 100 },
            { x: new Date(2020, 3, 10), y: 181 },
            { x: new Date(2020, 3, 9), y: 205 },
            { x: new Date(2020, 3, 8), y: 41 },
            { x: new Date(2020, 3, 7), y: 14 },
            { x: new Date(2020, 3, 6), y: 16 },
            { x: new Date(2020, 3, 5), y: 15 },
            { x: new Date(2020, 3, 4), y: 27 },
            { x: new Date(2020, 3, 3), y: 26 },
            { x: new Date(2020, 3, 2), y: 10 },
            { x: new Date(2020, 3, 1), y: 10 },
            { x: new Date(2020, 2, 29), y: 3 },
            { x: new Date(2020, 2, 28), y: 3 },
            { x: new Date(2020, 2, 27), y: 2 },
            { x: new Date(2020, 2, 26), y: 2 },
            { x: new Date(2020, 2, 21), y: 1 },
          ],
        },
        {
          type: "stackedArea",
          name: "Ukjent",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(2020, 4, 20), y: 17 },
            { x: new Date(2020, 4, 19), y: 34 },
            { x: new Date(2020, 4, 18), y: 49 },
            { x: new Date(2020, 4, 17), y: 93 },
            { x: new Date(2020, 4, 16), y: 74 },
            { x: new Date(2020, 4, 15), y: 100 },
            { x: new Date(2020, 4, 14), y: 105 },
            { x: new Date(2020, 4, 13), y: 66 },
            { x: new Date(2020, 4, 12), y: 59 },
            { x: new Date(2020, 4, 11), y: 72 },
            { x: new Date(2020, 4, 10), y: 50 },
            { x: new Date(2020, 4, 9), y: 80 },
            { x: new Date(2020, 4, 8), y: 74 },
            { x: new Date(2020, 4, 7), y: 95 },
            { x: new Date(2020, 4, 6), y: 99 },
            { x: new Date(2020, 4, 5), y: 37 },
            { x: new Date(2020, 4, 4), y: 48 },
            { x: new Date(2020, 4, 3), y: 46 },
            { x: new Date(2020, 4, 2), y: 72 },
            { x: new Date(2020, 4, 1), y: 78 },
            { x: new Date(2020, 3, 31), y: 56 },
            { x: new Date(2020, 3, 30), y: 46 },
            { x: new Date(2020, 3, 29), y: 29 },
            { x: new Date(2020, 3, 28), y: 44 },
            { x: new Date(2020, 3, 27), y: 34 },
            { x: new Date(2020, 3, 26), y: 56 },
            { x: new Date(2020, 3, 25), y: 42 },
            { x: new Date(2020, 3, 24), y: 48 },
            { x: new Date(2020, 3, 23), y: 29 },
            { x: new Date(2020, 3, 22), y: 8 },
            { x: new Date(2020, 3, 21), y: 9 },
            { x: new Date(2020, 3, 20), y: 20 },
            { x: new Date(2020, 3, 19), y: 28 },
            { x: new Date(2020, 3, 18), y: 9 },
            { x: new Date(2020, 3, 17), y: 11 },
            { x: new Date(2020, 3, 16), y: 8 },
            { x: new Date(2020, 3, 15), y: 5 },
            { x: new Date(2020, 3, 14), y: 4 },
            { x: new Date(2020, 3, 13), y: 13 },
            { x: new Date(2020, 3, 12), y: 6 },
            { x: new Date(2020, 3, 11), y: 11 },
            { x: new Date(2020, 3, 10), y: 8 },
            { x: new Date(2020, 3, 9), y: 9 },
            { x: new Date(2020, 3, 8), y: 3 },
            { x: new Date(2020, 3, 7), y: 1 },
            { x: new Date(2020, 3, 6), y: 1 },
            { x: new Date(2020, 3, 5), y: 0 },
            { x: new Date(2020, 3, 4), y: 0 },
            { x: new Date(2020, 3, 3), y: 1 },
            { x: new Date(2020, 3, 2), y: 0 },
            { x: new Date(2020, 3, 1), y: 0 },
            { x: new Date(2020, 2, 29), y: 0 },
            { x: new Date(2020, 2, 28), y: 0 },
            { x: new Date(2020, 2, 27), y: 0 },
            { x: new Date(2020, 2, 26), y: 0 },
            { x: new Date(2020, 2, 21), y: 0 },
          ],
        },
        {
          type: "stackedArea",
          name: "Totalt",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(2020, 4, 20), y: 17 },
            { x: new Date(2020, 4, 19), y: 34 },
            { x: new Date(2020, 4, 18), y: 49 },
            { x: new Date(2020, 4, 17), y: 93 },
            { x: new Date(2020, 4, 16), y: 74 },
            { x: new Date(2020, 4, 15), y: 102 },
            { x: new Date(2020, 4, 14), y: 121 },
            { x: new Date(2020, 4, 13), y: 77 },
            { x: new Date(2020, 4, 12), y: 76 },
            { x: new Date(2020, 4, 11), y: 108 },
            { x: new Date(2020, 4, 10), y: 67 },
            { x: new Date(2020, 4, 9), y: 103 },
            { x: new Date(2020, 4, 8), y: 106 },
            { x: new Date(2020, 4, 7), y: 135 },
            { x: new Date(2020, 4, 6), y: 158 },
            { x: new Date(2020, 4, 5), y: 71 },
            { x: new Date(2020, 4, 4), y: 87 },
            { x: new Date(2020, 4, 3), y: 165 },
            { x: new Date(2020, 4, 2), y: 199 },
            { x: new Date(2020, 4, 1), y: 200 },
            { x: new Date(2020, 3, 31), y: 209 },
            { x: new Date(2020, 3, 30), y: 264 },
            { x: new Date(2020, 3, 29), y: 107 },
            { x: new Date(2020, 3, 28), y: 180 },
            { x: new Date(2020, 3, 27), y: 262 },
            { x: new Date(2020, 3, 26), y: 297 },
            { x: new Date(2020, 3, 25), y: 292 },
            { x: new Date(2020, 3, 24), y: 312 },
            { x: new Date(2020, 3, 23), y: 298 },
            { x: new Date(2020, 3, 22), y: 149 },
            { x: new Date(2020, 3, 21), y: 174 },
            { x: new Date(2020, 3, 20), y: 309 },
            { x: new Date(2020, 3, 19), y: 240 },
            { x: new Date(2020, 3, 18), y: 213 },
            { x: new Date(2020, 3, 17), y: 174 },
            { x: new Date(2020, 3, 16), y: 178 },
            { x: new Date(2020, 3, 15), y: 101 },
            { x: new Date(2020, 3, 14), y: 100 },
            { x: new Date(2020, 3, 13), y: 147 },
            { x: new Date(2020, 3, 12), y: 208 },
            { x: new Date(2020, 3, 11), y: 175 },
            { x: new Date(2020, 3, 10), y: 242 },
            { x: new Date(2020, 3, 9), y: 245 },
            { x: new Date(2020, 3, 8), y: 64 },
            { x: new Date(2020, 3, 7), y: 20 },
            { x: new Date(2020, 3, 6), y: 25 },
            { x: new Date(2020, 3, 5), y: 33 },
            { x: new Date(2020, 3, 4), y: 32 },
            { x: new Date(2020, 3, 3), y: 31 },
            { x: new Date(2020, 3, 2), y: 12 },
            { x: new Date(2020, 3, 1), y: 10 },
            { x: new Date(2020, 2, 29), y: 6 },
            { x: new Date(2020, 2, 28), y: 9 },
            { x: new Date(2020, 2, 27), y: 2 },
            { x: new Date(2020, 2, 26), y: 3 },
            { x: new Date(2020, 2, 21), y: 1 },
          ],
        },
      ],
    };

    return (
      <div>
        <p>Oppdatert 21. April</p>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default StackedAreaChart;
