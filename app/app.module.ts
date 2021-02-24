import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

import { AppComponent } from "./app.component";
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactInputComponent } from "./contact-input/contact-input.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ContactInputComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule {}
