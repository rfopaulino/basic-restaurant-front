import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API } from './app.api'
 
@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }


  // Restaurante
  RestauranteGrid(nome: string): Observable<any> {
    return this.http.get(`${API}/restaurante/grid?nome=` + nome);
  }
  RestauranteGet(id): Observable<any> {
    return this.http.get(`${API}/restaurante/` + id);
  }
  RestaurantePost(dto): Observable<any> {
    return this.http.post(`${API}/restaurante`, dto);
  }
  RestaurantePut(id, dto): Observable<any> {
    return this.http.put<any>(`${API}/restaurante/` + id, dto);
  }
  RestauranteMassDelete(dto: string[]): Observable<any> {
    return this.http.post<any>(`${API}/restaurante/massdelete`, dto);
  }
  RestauranteGetAll(): Observable<any> {
    return this.http.get(`${API}/restaurante/all`);
  }

  // Prato
  PratoGrid(): Observable<any> {
    return this.http.get(`${API}/prato/grid`);
  }
  PratoGet(id): Observable<any> {
    return this.http.get(`${API}/prato/` + id);
  }
  PratoPost(dto): Observable<any> {
    return this.http.post(`${API}/prato`, dto);
  }
  PratoPut(id, dto): Observable<any> {
    return this.http.put<any>(`${API}/prato/` + id, dto);
  }
  PratoMassDelete(dto: string[]): Observable<any> {
    return this.http.post<any>(`${API}/prato/massdelete`, dto);
  }
}
