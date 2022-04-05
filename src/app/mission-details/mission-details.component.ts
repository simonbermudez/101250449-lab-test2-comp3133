import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.mission = this.router.getCurrentNavigation()?.extras?.state?.['mission'];
    if (!this.mission) {
      router.navigate(['/'])
    }
  }

  ngOnInit(): void {}
  
  ngOnDestroy() {
  }

}
