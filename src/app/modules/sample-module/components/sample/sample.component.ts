import { Component, inject } from '@angular/core';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export default class SampleComponent {
  sampleService: SampleService = inject(SampleService)


}
