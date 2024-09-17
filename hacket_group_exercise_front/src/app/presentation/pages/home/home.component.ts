import {Component} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {SidebarComponent} from "../../containers/sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
