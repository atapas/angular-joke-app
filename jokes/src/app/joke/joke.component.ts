import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
			this.jokes = data;  
		})  
  }

}
