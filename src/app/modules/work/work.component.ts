import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  isPhonePortrait = false;
  isTabletPortrait = false;

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait])
      .subscribe(result => {

      this.isPhonePortrait = false; 
      this.isTabletPortrait = false;

      console.log(result.matches);

      if (result.matches) {
        this.isPhonePortrait = true;
        this.isTabletPortrait = true; 
      }

});
  }

}
