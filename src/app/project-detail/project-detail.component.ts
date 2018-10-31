import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
// import { ProjectService } from '../project.service'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  // providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

  constructor(private router: Router,){}

  ngOnInit() {
  }
  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  }

}
