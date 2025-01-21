import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from "../components/header/header.component";
import { ReadAllComponent } from "../components/read-all/read-all.component";


import { RouterModule } from '@angular/router';
import { CreateComponent } from "../components/create/create.component";
import { FinalizadosComponent } from '../components/finalizados/finalizados.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule, ReadAllComponent, FinalizadosComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
