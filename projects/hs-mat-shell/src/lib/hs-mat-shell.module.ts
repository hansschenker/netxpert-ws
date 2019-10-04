import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import auth
import {} from "@angular/fire";
// import material
import { HsMaterialLayoutModule } from "hs-material-layout";

// mat shell
import { HsMatShellComponent } from "./hs-mat-shell.component";

@NgModule({
  declarations: [HsMatShellComponent],
  imports: [CommonModule, HsMaterialLayoutModule],
  exports: [HsMatShellComponent]
})
export class HsMatShellModule {}
