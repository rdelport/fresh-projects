import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

// TODO: add to environment variables
const API_URL = 'http://localhost:3000/api/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  getProperty(): Observable<Property> {
    return this.http.get<Property>(API_URL);
  }
}
