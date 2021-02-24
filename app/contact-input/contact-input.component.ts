import { Component, forwardRef, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";

@Component({
  selector: "app-contact-input",
  templateUrl: "./contact-input.component.html",
  styleUrls: ["./contact-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactInputComponent),
      multi: true
    }
  ]
})
export class ContactInputComponent implements ControlValueAccessor {
  @ViewChild("contactslist") public list: AutoCompleteComponent;

  public contacts: Array<{ label: string; iconClass: string }> = [
    { label: "Pedro Afonso", iconClass: "k-chip-avatar pedro" },
    { label: "Maria Shore", iconClass: "k-chip-avatar maria" },
    { label: "Thomas Hardy", iconClass: "k-chip-avatar thomas" },
    { label: "Christina Berg", iconClass: "k-chip-avatar christina" },
    { label: "Paula Wilson", iconClass: "k-chip-avatar paula" }
  ];

  public selectedContacts: Array<any> = [this.contacts[1]];

  public valueChange(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactData = this.contacts.find(c => c.label === contact);

    if (!this.selectedContacts.includes(contactData)) {
      this.selectedContacts.push(contactData);
    }

    this.propagateChange(this.selectedContacts);

    this.list.reset();
  }

  public onRemove(e: ChipRemoveEvent): void {
    console.log("Remove event arguments: ", e);
    const index = this.selectedContacts
      .map(c => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }

  writeValue(value) {
    //leaving this empty
    // console.log(value);
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}


