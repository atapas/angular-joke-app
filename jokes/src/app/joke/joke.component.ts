import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { format } from 'date-fns'
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  jokes = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('initializing joke component');
    this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
			this.jokes = data['jokes'];  
		})  
  }

  getFormattedDate(input) {
    return format(new Date(input), 'yyyy-MM-dd')
  }
}
