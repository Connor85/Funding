import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ngOnInit() {
  }

  projects: Project[] = [
    new Project ("Clean Water in Africa", "This project builds clean drinking water wells in rural areas", "Connor David  Meria", 4000),
    new Project ("Fly Meria and David home", "To reunite two great indviduals with their families in India and China", "Connor", 5000)
  ]
}
