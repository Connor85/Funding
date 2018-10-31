import { Component, OnInit } from '@angular/core';
import { Project } from 'app/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]

})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, details: string, postedBy: string, fundingGoal: number) {
    var newProject : Project = new Project(name, details, postedBy, fundingGoal);
    this.projectService.addProjects(newProject);
  }

}
