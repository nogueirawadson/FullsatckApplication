import { Routes } from '@angular/router';


import { CreateComponent } from '../components/create/create.component';
import { FinalizadosComponent } from '../components/finalizados/finalizados.component';
import { UpdateComponent } from '../components/update/update.component';
import { HomeComponent } from '../home/home.component';


export const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
    path: 'finalizados',
    component: FinalizadosComponent,
},
{
    path: 'create',
    component: CreateComponent
},
{
    path: 'update/:id',
    component: UpdateComponent
}
];
