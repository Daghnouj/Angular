import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from './chambre/chambre.module';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseUrl = 'http://localhost:8089/spring/chambre';
 
  constructor(private http: HttpClient) { }

getAllChambres(): Observable<Chambre[]> {
  return this.http.get<Chambre[]>(`${this.baseUrl}/get-all-chambres`);
}

getChambreById(id: number): Observable<Chambre> {
  return this.http.get<Chambre>(`${this.baseUrl}/get-chambre/${id}`);
}

addChambre(chambre: Chambre): Observable<Chambre> {
  return this.http.post<Chambre>(`${this.baseUrl}/add-chambre`, chambre);
}

removeChambre(idChambre: number): Observable<Object>{
  return this.http.delete(`${this.baseUrl}/remove-chambre/${idChambre}`);
}
/*
modifyChambre(idChambre: number, chambre: Chambre): Observable<Object>{
  
  return this.http.put(`${this.baseUrl}/modify-chambre/${idChambre}`,chambre);
}*/

// ...

modifyChambre(idChambre: number, chambre: Chambre): Observable<Object>{
    
  return this.http.put(`${this.baseUrl}/modify-chambre/${idChambre}`,chambre);
}

}