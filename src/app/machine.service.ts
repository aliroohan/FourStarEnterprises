import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Machine {
  constructor(private http: HttpClient) {}

  loadMachineData(fileUrl: string): Observable<any> {

    return this.http.get(fileUrl, { responseType: 'text' });
  }
}