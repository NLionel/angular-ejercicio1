import { Component, OnInit, Input } from '@angular/core';
import { MovieDetail } from 'src/app/domain/movieDetail';

@Component({
  selector: 'app-movie-full',
  templateUrl: './movie-full.component.html',
  styleUrls: ['./movie-full.component.css']
})
export class MovieFullComponent implements OnInit {
  @Input() movie: MovieDetail;

  constructor() { }

  ngOnInit() {
  }

}
