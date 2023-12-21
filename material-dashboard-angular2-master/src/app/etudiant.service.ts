import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from 'app/etudiant';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseURL = "http://localhost:8089/spring/etudiant";

  constructor(private httpClient: HttpClient) { }

  // getEtudiant(): Observable<Etudiant[]> {
  //   return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
  // }


  
  getEtudiant(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}/get-all-etudiants`);
  }
 
  // CreateEtudiant(etudiant: Etudiant): Observable<Object> {
  //   return this.httpClient.post(`${this.baseURL}/add-etudiant`, etudiant);
  // }
  // CreateEtudiant(data:any): Observable<Object> {
    

  //   return this.httpClient.post(`${this.baseURL}/add-etudiant`,data);
  // }
  
  
  CreateEtudiant(formData: FormData, httpOptions?: any): Observable<any> {
    const url = `${this.baseURL}/add-etudiant`;
    return this.httpClient.post(url, formData, httpOptions);
  }
  
  /*deleteEtudiant(idEtudiant: number): Observable<Object> {
    return this.httpClient.delete('http://localhost:8089/etudiant/etudiant/delete/'+idEtudiant);
  }*/

  deleteEtudiant(idEtudiant: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/remove-etudiant/${idEtudiant}`);
  }
  getEtudiantById(idEtudiant: number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/get-etudiant/${idEtudiant}`);
  }

  updateEtudiant(idEtudiant: number, formData: FormData): Observable<Object> {
    const headers = new HttpHeaders();  // Créez un objet HttpHeaders vide
    headers.append('Content-Type', 'multipart/form-data'); // Ajoutez l'en-tête Content-Type
  
    // Utilisez les options pour définir les en-têtes
    const options = { headers: headers };
  
    return this.httpClient.put(`${this.baseURL}/modify-etudiant/${idEtudiant}`, formData, options);
  }
  
  

  getByNomEt(nomEt: string) {
    return this.httpClient.get<any[]>(`${this.baseURL}/get-by-nom/${nomEt}`);
}



}
