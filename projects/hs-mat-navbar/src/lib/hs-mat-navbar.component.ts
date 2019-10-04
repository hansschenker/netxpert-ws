import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "hs-mat-navbar",
  template: `
    <mat-sidenav #drawer>
      <mat-toolbar>Menu</mat-toolbar>
      <mat-nav-list>
        <a mat-list-item routerLink="/" (click)="drawer.close()">Home</a>
        <a mat-list-item routerLink="/login" (click)="drawer.close()">Login</a>
        <a mat-list-item routerLink="/kanban" (click)="drawer.close()"
          >Kanban Demo</a
        >
        <a mat-list-item routerLink="/customers" (click)="drawer.close()"
          >SSR Demo</a
        >
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
      <mat-toolbar>
        <button
          type="button"
          aria-label="Toggle sidenav"
          mat-icon-button
          (click)="drawer.toggle()"
        >
          *ngIf="isHandset$ | async" >
          <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
        </button>
        <span class="logo" routerLink="/">🔥 Angular Firestarter</span>

        <span class="fill-space"></span>
        <div *ngIf="(isHandset$ | async) === null">
          <a mat-button routerLink="/kanban">🍱 Kanban Demo</a>
          <a mat-button routerLink="/customers">⚡ SSR Demo</a>

          <a mat-button routerLink="/login">🔑 Login</a>
        </div>

        <button
          mat-icon-button
          [matMenuTriggerFor]="menu"
          aria-label="Example icon-button with a menu"
        >
          <mat-icon>more_vert</mat-icon>
        </button>

        <mat-menu #menu="matMenu">
          <a mat-menu-item href="https://fireship.page.link/slack">
            <i>💬</i>
            <span>Chat on Slack</span>
          </a>
        </mat-menu>
      </mat-toolbar>

      <ng-content></ng-content>
    </mat-sidenav-content>
  `,
  styles: []
})
export class HsMatNavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
