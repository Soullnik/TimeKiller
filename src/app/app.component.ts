import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GpuCreatorService} from "./web-gpu/services/gpu-creator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  constructor(private gpu: GpuCreatorService, ) {}
  @ViewChild('canvas') public canvas: ElementRef | undefined;

  public ngAfterViewInit() {
    this.gpu.initGpu(this.canvas?.nativeElement).then((message) => console.log(message))
  }

}
