import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  // annonces = [
  //   {
  //     id: 1,
  //     title: 'Annonce 1',
  //     createdBy: 'Ahdy Kefi',
  //     description:
  //       "Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1",
  //     image: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 2,
  //     title: 'Annonce 2',
  //     description:
  //       "Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1",
  //     image: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 3,
  //     title: 'Annonce 3',
  //     userId: 1,
  //     description:
  //       "Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1",

  //     image: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 4,
  //     title: 'Annonce 4',
  //     description:
  //       "Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1 Description de l'annonce 1",
  //     image: 'https://picsum.photos/200/300',
  //   },
  // ];
  
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
    //this.annonces.push(annonce);
    return this.httpClient.put(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        annonce.id +
        '.json',
      annonce
    );
  }
  constructor(private httpClient: HttpClient) {}
}
