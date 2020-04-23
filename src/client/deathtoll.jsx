import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Antall dødsfall Norge",
      },
      axisX: {
        title: "Alder",
        reversed: true,
      },
      axisY: {
        title: "Antall",
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 6, label: "50-59" },
            { y: 10, label: "60-69" },
            { y: 38, label: "70-79" },
            { y: 64, label: "80-89" },
            { y: 51, label: "90+" },
            { y: 169, label: "Totalt" },
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

export default BarChart;
