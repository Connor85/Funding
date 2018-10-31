import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [ProjectService]
})
export class DonateComponent implements OnInit {
  constructor(private projectService: ProjectService) { }
  project: Project;
  projects: Project[] = [];
  ngOnInit() {
    this.projectService.getProjects().subscribe(articles => {
      articles.forEach(article => {
        this.projects.push(new Project(article.name, article.details, article.postedBy, article.fundingGoal, article.moneyRaised));
      })
    });
  }
  donate(donateValue: string) {
    let newProject = this.projects[2];
    newProject.moneyRaised += parseInt(donateValue);
    this.projectService.updateProject(newProject, "-LQAwoff4XQ8q_DLV1IW");
  }

}
