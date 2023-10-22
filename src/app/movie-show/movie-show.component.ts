import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent {
  title!: string;
  data: any;
  constructor(private httpClient:HttpClient) {}
  // func for search movies by api key
  Search() {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=388b6b19&t=" + this.title;
    this.httpClient.get(url).subscribe((data: any) => {
      this.data = data;
    });
  }
}
