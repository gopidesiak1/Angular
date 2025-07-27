import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button-component',
  templateUrl: './delete-button-component.component.html',
  styleUrls: ['./delete-button-component.component.css'],
})
export class DeleteButtonComponentComponent {
  @Output() delete = new EventEmitter<void>();

   onDelete(){
    this.delete.emit();
   }
}
