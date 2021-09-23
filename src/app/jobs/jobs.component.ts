import { Component, OnInit } from '@angular/core';
import { Lista_jobs } from '../lista-jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  trabalhos = Lista_jobs; 

  constructor() { }

  ngOnInit(): void {
  }

}
