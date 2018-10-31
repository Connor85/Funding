
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';
import { DonateComponent } from './donate/donate.component';

const appRoutes: Routes = [
    {
        path:'',
        component: ProjectComponent
    },
    {
        path:'projects/:id',
        component: ProjectDetailComponent
    },
    {
        path:'admin',
        component: AdminComponent
    },
    {
        path:'donate',
        component: DonateComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);