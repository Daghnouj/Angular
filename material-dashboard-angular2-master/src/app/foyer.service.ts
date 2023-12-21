import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Observable,catchError } from 'rxjs';
import { Foyer } from './foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  private baseURL="http://localhost:8089/spring/foyer/get-all-foyers";
  private baseURL1="http://localhost:8089/spring/foyer/remove-foyer";
  private baseURL2="http://localhost:8089/spring/foyer/modify-foyer";
  private baseURL3="http://localhost:8089/spring/foyer/get-foyer";
  private baseURL4="http://localhost:8089/spring/foyer/add-foyer";

  constructor(private httpClient: HttpClient) { }
 
  //fonction get all
  getFoyerList(): Observable<Foyer[]> {
    return this.httpClient.get<Foyer[]>(this.baseURL).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching foyer:', error);
        throw error;
      })
    );
  }
  //fonction delete
  deleteFoyer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${id}`);
  }
  //fonction update
  modifyFoyer(id: number, foyer: Foyer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL2}/${id}`, foyer);
  }
  //get byId
  getbyidFoyer(id: number): Observable<Foyer> {
    const url = `${this.baseURL3}/${id}`;
    return this.httpClient.get<Foyer>(url);
  }
  //creer foyer
  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.httpClient.post<Foyer>(`${this.baseURL4}`, foyer);
  }


}