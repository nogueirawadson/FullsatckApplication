import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FinalizadosComponent } from "./components/finalizados/finalizados.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterModule],
 
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'todo';
}
