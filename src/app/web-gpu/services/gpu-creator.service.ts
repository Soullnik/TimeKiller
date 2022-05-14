import {Inject, Injectable} from '@angular/core';
import {WINDOW} from "../tokens/windows.token";

@Injectable()
export class GpuCreatorService {
  private gpuAdapter: GPUAdapter | undefined;
  private gpuDevice: GPUDevice | undefined;
  private gpuQueue: GPUQueue | undefined;
  private canvasContext: GPUCanvasContext | undefined;

  constructor(@Inject(WINDOW) readonly windowRef: Window) {}


  public async initGpu(canvas: HTMLCanvasElement): Promise<any> {
    try {
      this.gpuAdapter = await this.windowRef.navigator.gpu.requestAdapter() as GPUAdapter;
      this.gpuDevice = await this.gpuAdapter.requestDevice() as GPUDevice;
      this.gpuQueue = this.gpuDevice.queue;
      const context = canvas.getContext('webgpu')

      if(context) {
        this.canvasContext = context
        const presentationFormat = context.getPreferredFormat(this.gpuAdapter);
        this.canvasContext.configure({
          device: this.devise as GPUDevice,
          format: presentationFormat
        })
      }
      return 'gpu init'
    }catch (e) {
      return 'error'
    }
  }

  get devise(): GPUDevice | null {
    if(this.gpuDevice) {
      return this.gpuDevice
    }
    return null
  }
}
