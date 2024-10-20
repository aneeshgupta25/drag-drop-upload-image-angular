import { Component, signal } from '@angular/core';
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

  file = signal<File | undefined>(undefined);
  url = signal<string>('');
  imageAdded = signal(false);

  onDragOver(event: DragEvent) {
    //handle event (eg, change background according to the values defined in directive)
  }

  onDragLeave(event: DragEvent) {
    //handle event (eg, change background according to the values defined in directive)
  }

  onDropFile(event: { file: File, url: string }) {
    this.file.set(event.file);
    this.url.set(event.url);

    this.imageAdded.set(true);
  }

  onImageUpload(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;
    this.file.set(files[0]);
    this.url.set(window.URL.createObjectURL(this.file()!));

    this.imageAdded.set(true);
  }
}
