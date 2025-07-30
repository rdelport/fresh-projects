import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() selectedRoom = new EventEmitter<Room>();

  hoveredRoom: string | null = null;
  selectedRoomId: string | null = null;

  onRoomClick(room: Room) {
    this.selectedRoomId = room.id;
    this.selectedRoom.emit(room);
  }

  getCoords(room: Room): string {
    const { x, y, width, height } = room.coordinates;
    return `${x}, ${y}, ${x + width}, ${y + height}`;
  }

  get selectedRoomName(): string | null {
    const room = this.rooms.find(r => r.id === this.selectedRoomId);
    return room ? room.name : null;
  }
}
