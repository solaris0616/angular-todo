import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-append-form',
  templateUrl: './append-form.component.html',
  styleUrls: ['./append-form.component.css']
})
export class AppendFormComponent implements OnInit {
  itemForm;

  constructor(
    private dataStore: DatastoreService,
    private formBuilder: FormBuilder
  ) {
    this.itemForm = this.formBuilder.group({body: ''});
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.dataStore.addItem(data.body);
    this.itemForm.reset();
  }

}
