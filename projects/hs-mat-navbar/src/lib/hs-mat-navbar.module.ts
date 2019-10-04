import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// lib imports
import { HsMatNavbarComponent } from "./hs-mat-navbar.component";
import { HsMaterialLayoutModule } from "hs-material-layout";

@NgModule({
  declarations: [HsMatNavbarComponent],
  imports: [CommonModule, HsMaterialLayoutModule],
  exports: [HsMatNavbarComponent]
})
export class HsMatNavbarModule {}
