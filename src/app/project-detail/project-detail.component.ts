import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private albumService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });

    this.projectToDisplay = this.albumService.getProjectById(this.projectId);
  }

  donate(donation: string){
    console.log(donation);
    console.log(this.projectToDisplay);
    this.projectToDisplay.moneyRaised += parseInt(donation);
    console.log(this.projectToDisplay.moneyRaised);
  }
}
