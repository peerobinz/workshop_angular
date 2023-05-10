import { Component } from '@angular/core';
import { movies } from '../movie';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.scss']
})
export class Movie1Component {
  search!: string;
  movies!: any;

  constructor(
    private MovieService: MovieService,
    private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.movies = this.formBuilder.group({
        NameMovie: [{value: '',type: String, disabled: false}],
        TypeMovie: [{value: '',type: String, disabled: false}],
        MoviePrice: [{value: '',type: Number, disabled: false}],
        Movieid: [{value: '',type: Number,disabled: false}]
      }); 
    }
  
    getMovie(): void {
      if (!this.search) {
        alert('Please enter a movie ID');
        return;
      }
      this.MovieService.getMovie(Number(this.search)).subscribe(
        res => {
          console.log(res);
          this.movies = res;
        },
        err => console.error(err)
      );
    }
    
  
}


