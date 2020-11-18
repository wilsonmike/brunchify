import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  getSearchTerm = (form: NgForm): void => {
    this.submitEvent.emit(form.value);
    // this.submitEvent.emit(form.value.calories);
    console.log(form.value);
  };
}
