import { Component, OnInit } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: "hs-mat-shell",
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="false"
      >
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/" (click)="drawer.close()">Home</a>
          <a mat-list-item routerLink="/login" (click)="drawer.close()"
            >Login</a
          >
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
            *ngIf="isHandset$ | async"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span class="logo" routerLink="/">🔥 Angular Firestarter</span>

          <span class="fill-space"></span>
          <div *ngIf="!(isHandset$ | async)">
            <a mat-button routerLink="/kanban">🍱 Kanban Demo</a>
            <a mat-button routerLink="/customers">⚡ SSR Demo</a>

            <a
              mat-button
              routerLink="/login"
              *ngIf="!(afAuth.authState | async)"
              >🔑 Login</a
            >
            <a
              mat-button
              routerLink="/login"
              *ngIf="afAuth.authState | async as user"
            >
              <img
                class="avatar"
                [src]="user.photoURL || 'assets/default-user.svg'"
              />
              Profile
            </a>
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
            <a
              mat-menu-item
              href="https://github.com/codediodeio/angular-firestarter"
            >
              <i>💾</i>
              <span>Code on Github</span>
            </a>
            <a mat-menu-item href="https://fireship.io/courses/angular">
              <i>🔥</i>
              <span>Full Course on Fireship</span>
            </a>

            <a
              mat-menu-item
              href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"
            >
              <i>📺</i>
              <span>Watch on the YouTube</span>
            </a>
          </mat-menu>
        </mat-toolbar>

        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    "h1 { font-weight: normal; }",
    ".sidenav-container {height: 100%; }",
    ".logo {font-size: 1.2em; cursor: pointer; outline: none;}",
    ".mat-drawer-side {border: none; box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);}",
    ".sidenav {width: 200px;font-family: sofia-pro;}",
    ".sidenav .mat-toolbar { background: inherit;}",
    ".mat-toolbar.mat-primary { position: sticky; top: 0;z-index: 1;}",
    ".fill-space {flex: 1 1 auto;}",
    "i {font-style: normal; font-size: 1.25em; margin-right: 16px;}",
    ".avatar { width: 1.75em;border-radius: 50%;margin: 0 10px 5px;}"
  ]
})
export class HsMatShellComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth
  ) {}
}
