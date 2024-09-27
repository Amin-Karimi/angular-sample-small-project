import { Routes } from "@angular/router";

const SAMPLE: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/sample/sample.component'),
  },
]

export default SAMPLE
