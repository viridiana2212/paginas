import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/contact/error.component';



const appRoutes:Routes=[
{path:'',component:AboutComponent},
{path:'sobre-mi',component:AboutComponent},
{path:'proyectos',component:AboutComponent},
{path:'crear-proyecto',component:AboutComponent},
{path:'contacto',component:AboutComponent},
{path:'**',component:AboutComponent}
];

