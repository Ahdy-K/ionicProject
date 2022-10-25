import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  // dans la page home on va utliser les segments et les slides pour afficher dans chaque slide
  // des differents interfaces comme tout les annonces ou bien les annonces d'utlisateur connecté 
  @ViewChild('slides', { static: true }) slider: IonSlides;
  listAnnonces = [];
  segment = 0;
  userEmail: string;
  // cette methode va capturer le changement du segment
  // pour changer le contenu
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  // cette methode va retourner tout les annonces
  allAnnonces() {
    return this.announceService.getAllAnnonces().subscribe({
      next: (data) => {
        this.listAnnonces = [];
        for (const key in data) {
          this.listAnnonces.push({ id: key, ...data[key] });
        }
        console.log('data', data);
      },
    });
  }
  ngOnInit() {
    this.userEmail = window.localStorage.getItem('email');
    console.log('AnnoncePage ngOnInit');
    this.allAnnonces();
    console.log('AnnoncePage ngOnInit', this.listAnnonces);
  }
  seeDetails(id) {
    console.log('ID/', id);
    this.router.navigate(['/annonce-details', id]);
  }

  constructor(
    private announceService: AnnoncesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
}
