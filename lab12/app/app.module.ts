import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component.component';
import { MyVisibilityDirective } from './my-visibility.directive';
import { MyNewColorDirective } from './my-new-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    MyVisibilityDirective,
    MyNewColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
