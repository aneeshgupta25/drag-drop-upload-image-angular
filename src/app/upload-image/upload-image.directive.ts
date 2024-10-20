import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, inject, OnInit, output } from "@angular/core";

@Directive({
    selector: '[appUploadImage]',
    standalone: true,
})
export class UploadImageDirective {

    hostElement = inject(ElementRef);
    hostElementRect: DOMRect | undefined = undefined;
    dropFile = output<{ file: File, url: string }>();
    dragOverEvent = output();
    dragLeaveEvent = output();

    @HostBinding('style.background-color') hostBackgroundColor!: string;
    @HostListener('dragover', ["$event"]) dragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.dragOverEvent.emit();

        this.hostBackgroundColor = DropColor.DURING_DROP;
    }
    @HostListener('dragleave', ["$event"]) dragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();

        this.hostElementRect = this.hostElement.nativeElement.getBoundingClientRect();

        if (event.clientX < this.hostElementRect!.left ||
            event.clientX > this.hostElementRect!.right ||
            event.clientY < this.hostElementRect!.top ||
            event.clientY > this.hostElementRect!.bottom) {

            this.dragLeaveEvent.emit();
            this.hostBackgroundColor = DropColor.BEFORE_DROP;
        }

    }
    @HostListener('drop', ["$event"]) drop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.hostBackgroundColor = DropColor.AFTER_DROP;

        const fileList = event.dataTransfer?.files;
        if (fileList === undefined) return;

        const file = fileList[0];
        const url = window.URL.createObjectURL(file);
        this.dropFile.emit({ file, url });
    }

}

enum DropColor {
    BEFORE_DROP = '#80808017',
    DURING_DROP = '#8080807d',
    AFTER_DROP = '#80808017'
}