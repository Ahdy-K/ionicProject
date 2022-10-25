import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
 
  
  // recuperer tout les annonces
  getAllAnnonces(): Observable<any> {
    
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json'
    );
  }
  // ajouter un annonce
  addAnnonce(annonce: any): Observable<any> {
    return this.httpClient.post(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json',
      annonce
    );
  }
  // Get Annonce By ID
  getAnnonceById(id: any): Observable<any> {
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }
  // Delete annonce:
  deleteAnnonceById(id: any): Observable<any> {
    return this.httpClient.delete(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }
  // Update annonce:
  updateAnnonce(annonce: any): Observable<any> {
    return this.httpClient.put(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        annonce.id +
        '.json',
      annonce
    );
  }
  constructor(private httpClient: HttpClient) {}
}
