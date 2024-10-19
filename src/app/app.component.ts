import { Component } from '@angular/core';
import { UploadImageComponent } from "./upload-image/upload-image.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UploadImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
