import { Component, input, Input } from '@angular/core';
import { Room } from '../../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-room',
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input({ required: true }) room!: Room;
}
