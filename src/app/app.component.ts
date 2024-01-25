import { Component, OnInit } from '@angular/core';
import { BreakpointWidth } from './core/constants/screen-breakpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cnc-media';
  isCollapsed = true;

  bpWidth = BreakpointWidth;

  get screenWidth():number {
    return window.screen.width;
  }

  get siderCollapsedWidth(): boolean {
    return this.screenWidth > this.bpWidth.SM_WIDTH;
  }

  ngOnInit(): void {
    this.isCollapsed = this.siderCollapsedWidth;
  }
}
