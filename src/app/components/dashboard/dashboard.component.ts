import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import SampleJson  from '../../../assets/data/MOCK_DATA_AUTO.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart  = [];
  titles = [];
  data = [];


  constructor() {
  }

  ngOnInit() {

    this.getTitles();
    this.getData('Ene');
    this.chart = new Chart ('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Sales by Month'
        },
      },
      data: {
        labels: this.titles,
        datasets : [
          {
            type: 'bar',
            label: 'Ene',
            data: this.getData('Ene'),
            backgroundColor: '#27ae60',
            borderColor: '#ecf0f1',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Feb',
            data: this.getData('Feb'),
            backgroundColor: '#16a085',
            borderColor: '#ecf0f1',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Mar',
            data: this.getData('Mar'),
            backgroundColor: '#1abc9c',
            borderColor: '#ecf0f1',
            fill: false,
          },
       ]
      }
    })

    this.chart = new Chart ('pie', {
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Sales by type of car'
        },
      },
      data: {
      labels: this.titles,
      datasets: [{
        label: "Sales (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: this.getData('Mar')
      }]
    }
    })
  }

  getTitles() {
    for (var i = 0, len = SampleJson[0].sales.length; i < len; i++) {
      this.titles.push(SampleJson[0].sales[i].product);
    }
  }

  getData(month) {
    this.data = [];
    for (var i = 0, len = SampleJson.length; i < len; i++) {
        if(SampleJson[i].month === month) {
          for (var x = 0, len2 = SampleJson[i].sales.length; x < len2; x++) {
            this.data.push(SampleJson[i].sales[x].units);
          }
          break;
        }
    }
    return this.data;
  }
}
