import { Component } from '@angular/core';
import { Title } from './title/title';


@Component({
  selector: 'app-home',
  imports: [Title],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
