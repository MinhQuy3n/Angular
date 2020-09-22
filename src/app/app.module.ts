import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent // Các component sử dụng ( lẫn nha) trong module này
  ],
  imports: [
    BrowserModule // Nơi để import khác vào modeul này
  ],
  providers: [],
  bootstrap: [AppComponent] // Nơi component sử dụng trong index.html
})
export class AppModule { }
