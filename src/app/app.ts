import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Navbar } from './component/navbar/navbar';
import { Toast } from './component/toast/toast';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('myProfile');
}
