import { Injectable, signal } from "@angular/core";
import { Property, Room} from "../models/property.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyStore {
  propertySignal = signal<Property | null>(null);
  selectedRoomSignal = signal<Room | null>(null);

  setProperty(property: Property) {
    this.propertySignal.set(property);
  }

  setSelectedRoom(room: Room) {
    this.selectedRoomSignal.set(room);
  }
}
