import { Route } from "@angular/router";
import { PropertyComponent } from "./property/property.component";

export const routes: Route[] = [
  { path: '', component: PropertyComponent },
  { path: '**', redirectTo: '' }
];

