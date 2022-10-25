import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/annonces.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  annonce: any;
  userEmail: string;
  constructor(
    private annoncesService: AnnoncesService,
    private router: Router
  ) {}
// on doit récuperer l'id du user pour l'ajouter
  // a l'annonce id du user pour que chaque annonce appartient a un user
  // l'id du user est stocké dans le local storageapres l'authentification du user
  ngOnInit() {
    this.userEmail = window.localStorage.getItem('email');
  }
  addAnnonce(formValue: any) {
    //ajouter l'id du user et les champs récuperer par le formulaire
    // a la variable annonce puis on le l'enregistre.

    this.annonce = { createdBy: this.userEmail, ...formValue };
    return this.annoncesService.addAnnonce(this.annonce).subscribe({
      next: (data) => {
        console.log('data', data);
        this.router.navigate(['annonces']).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
