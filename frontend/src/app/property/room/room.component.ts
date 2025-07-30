import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/property.model';

@Component({
  standalone: true,
  selector: 'app-room',
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input({ required: true }) room!: Room | null;

  currentImageIndex = signal(0);

  nextImage() {
    if (!this.room) return;
    const nextIndex = this.currentImageIndex() === this.room.photos.length - 1 ? 0 : this.currentImageIndex() + 1;
    this.currentImageIndex.set(nextIndex);
  }

  prevImage() {
    if (!this.room) return;
    const prevIndex = this.currentImageIndex() === 0 ? this.room.photos.length - 1 : this.currentImageIndex() - 1;
    this.currentImageIndex.set(prevIndex);
  }

  setImage(index: number) {
    this.currentImageIndex.set(index);
  }
}





// import { Component, input, Input } from '@angular/core';
// import { Room } from '../../models/property.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   selector: 'app-room',
//   imports: [CommonModule],
//   templateUrl: './room.component.html',
//   styleUrl: './room.component.css'
// })
// export class RoomComponent {
//   @Input({ required: true }) room!: Room;
// }
