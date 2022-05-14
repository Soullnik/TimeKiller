import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GpuCreatorService} from "./services/gpu-creator.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [GpuCreatorService],
})
export class WebGPUModule { }
