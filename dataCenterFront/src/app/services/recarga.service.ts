import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'api/crear';

  crearReacarga (datos: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(this.apiUrl, datos, httpOptions);
  }
}
