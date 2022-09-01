import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { PropertyApiService } from '../property-api.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  
  propertyList$!:Observable<any[]>;

  constructor(private service:PropertyApiService) { }

  ngOnInit(): void {
    this.propertyList$ = this.service.getPropertyList();
  }
}
