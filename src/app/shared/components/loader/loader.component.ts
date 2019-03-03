import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  public isLoading: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = loaderService.isLoading;
  }
}
