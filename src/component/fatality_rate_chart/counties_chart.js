import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'
class FatalityChartStates extends React.Component {
  constructor(props) {

    this.state = {


      total: 0 ,
      series: [],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        colors:["#D7263D","#008FFB"],
        dataLabels: {
          enabled: true
        },
