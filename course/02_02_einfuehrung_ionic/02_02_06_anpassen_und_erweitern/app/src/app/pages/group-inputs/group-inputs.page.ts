import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-group-inputs-page",
  templateUrl: "./group-inputs.page.html",
  styleUrls: ["./group-inputs.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GroupInputsPageComponent implements OnInit {
  disableInputs = false;

  radioValue = "tripe";
  selectValue = "brains";

  constructor() {}

  ngOnInit() {}
}
