import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from '../../models/property.model';
@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input({ required: true }) property!: Property;
}
