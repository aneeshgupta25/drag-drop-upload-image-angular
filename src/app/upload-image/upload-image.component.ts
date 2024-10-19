import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { UploadImageDirective } from './upload-image.directive';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, FormsModule, UploadImageDirective],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {

}
