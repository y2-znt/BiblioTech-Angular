import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatTitlePipe } from '../pipes/format-title.pipe';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormatTitlePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'tp01_ANGULAR_ePsi';
}
