import { Component, Input } from '@angular/core';
import { Property } from '../../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) property!: Property;
}
