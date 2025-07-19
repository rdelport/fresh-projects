import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { FloorplanComponent } from "./floorplan/floorplan.component";
import { RoomComponent } from "./room/room.component";
import { PropertyStore } from "../core/property.store";
import { PropertyService } from "../core/property.service";

@Component({
  selector: "app-property",
  standalone: true,
  imports: [CommonModule, CardComponent, FloorplanComponent, RoomComponent],
  templateUrl: "./property.component.html",
  styleUrls: ["./property.component.css"]
})
export class PropertyComponent {
  property$: typeof this.propertyStore.propertySignal;
  selectedRoom$: typeof this.propertyStore.selectedRoomSignal;

  constructor(
    public propertyStore: PropertyStore,
    public propertyService: PropertyService
  ) {
    this.property$ = this.propertyStore.propertySignal;
    this.selectedRoom$ = this.propertyStore.selectedRoomSignal;

    this.propertyService.getProperty().subscribe(property => {
      this.propertyStore.setProperty(property);
    });
  }

  onRoomSelect(room: any) {
    this.propertyStore.setSelectedRoom(room);
  }
}
