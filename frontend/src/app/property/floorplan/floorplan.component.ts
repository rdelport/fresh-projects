import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { Room } from '../../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-floorplan',
  imports: [CommonModule],
  templateUrl: './floorplan.component.html',
  styleUrl: './floorplan.component.css'
})
export class FloorplanComponent {
  @Input({ required: true }) rooms!: Room[];
  @Input({ required: true }) imageUrl!: string;
  @Output() roomSelected = new EventEmitter<Room>();

  hoveredRoom = signal<string | null>(null);

  onClick(room: Room) {
    this.roomSelected.emit(room);
  }

  getCoords(room: Room): string {
    const { x, y, width, height } = room.coordinates;
    return `${x}, ${y}, ${x + width}, ${y + height}`;
  }
}
