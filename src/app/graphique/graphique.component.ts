import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
  graphic: any;

  constructor() { }

  ngOnInit(): void {
    
    const data = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
      datasets: [{
        data: [1500, 850, 2500, 1200, 8500, 4800],
        backgroundColor: [
          'red',
          'blue',
          'green',
          'yellow',
          'orange',
          'purple'
        ]
      }]
    };

    this.graphic = new Chart('canvas', {
      type: 'pie',
      data: data
    });
    
  }
}

