import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  loading: boolean = true;

  constructor(private router: Router, private api: ApiService) { 
    api.getMissions().then(missions => {
      this.missions = missions;
      this.loading = false;
    })
  }

  ngOnInit(): void {
  }

  navigateToDetails(id: number) {
    this.router.navigate(['details'], { state: { mission: this.missions[id] } });
  }

}
