import { Component, OnInit } from '@angular/core';

import { HighchartService, chartModal } from "./highchart.service";
import * as Highcharts from "highcharts";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vote-chart',
  templateUrl: './vote-chart.component.html',
  styleUrls: ['./vote-chart.component.css']
})
export class VoteChartComponent implements OnInit {

  //attribut
  items$!: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  charnames: any[] = [];
  chartOptions: any;

  constructor(private highchartservice: HighchartService,
    private router: Router,
    ) {
      if (!localStorage.getItem('refresh')) { 
        localStorage.setItem('refresh', 'no reload') 
        window.location.reload();
      } else {
        localStorage.removeItem('refresh') 
      }  
  }

  ngOnInit() {
    this.highchartservice.rates$.subscribe((assets) => {
      this.chardata=[]
      this.charnames=[]
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.rate);
          this.charnames.push(element.name);
        });

        this.getChart();
      }
    });
  }

  getChart() {
    this.chartOptions = {
      series: [
        {
          data: this.chardata
        },
      ],
      chart: {
        type: "column",

      },
      title: {
        text: "Graphe de vote",
      },
      xAxis:{
        categories: this.charnames,
        }, 
        plotOptions: {
          column: {
             colorByPoint: true
          },
        },
                
    };
    
  }


}