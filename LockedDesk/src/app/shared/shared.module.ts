import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { dropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        dropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        dropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule
    ]
})
export class SharedModule { }