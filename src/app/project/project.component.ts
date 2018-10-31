import { Component, onInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})


export class ProjectComponent implements OnInit{

  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit(){

  }

  goToDetailPage(clickedProject: Project){
    this.router.navigate(['projects', clickedProject.id]);
  }
}
