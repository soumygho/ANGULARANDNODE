import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/Students.service';

@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
  }

}
