
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
    {
        path:'',
        component: ProjectComponent
    },
    {
        path:'projectdetail',
        component: ProjectDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);