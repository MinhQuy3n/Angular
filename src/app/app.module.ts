import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Buoi1Component } from './buoi1/buoi1.component';
import { FooterComponent } from './buoi1/footer/footer.component';
import { HeaderComponent } from './buoi1/header/header.component';
import { ContentsComponent } from './buoi1/contents/contents.component';
import { SideBarComponent } from './buoi1/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    FooterComponent,
    HeaderComponent,
    ContentsComponent,
    SideBarComponent // Các component sử dụng ( lẫn nha) trong module này
  ],
  imports: [
    BrowserModule // Nơi để import khác vào modeul này
  ],
  providers: [],
  bootstrap: [AppComponent] // Nơi component sử dụng trong index.html
})
export class AppModule { }
