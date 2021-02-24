import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  template: `
    <form [formGroup]="test">
      <app-contact-input formControlName="email"></app-contact-input>
    </form>
    {{ test.value | json }}
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .k-chip {
        margin-right: 10px;
      }
      .k-block {
        min-height: 300px;
        padding: 20px;
      }
      .k-textarea {
        width: 100%;
        min-height: 145px;
      }
      .contacts {
        border-width: 0 0 1px 0;
        width: 100%;
        margin: 30px 0;
      }
      .contacts.k-state-focused {
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.03);
      }
      .pedro {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/SPLIR.jpg");
      }
      .thomas {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg");
      }
      .christina {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/BERGS.jpg");
      }
      .paula {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RATTC.jpg");
      }
      .maria {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/ALFKI.jpg");
      }
      .yang {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/CHOPS.jpg");
      }
      .anna {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/EASTC.jpg");
      }
    `
  ]
})
export class AppComponent implements OnInit {
  @ViewChild("contactslist") public list: AutoCompleteComponent;

  public test: FormGroup;

  ngOnInit(): void {
    this.test = new FormGroup({
      email: new FormControl([])
    });
  }

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

    this.list.reset();
  }

  public onRemove(e: ChipRemoveEvent): void {
    console.log("Remove event arguments: ", e);
    const index = this.selectedContacts
      .map(c => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }
}
