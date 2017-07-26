import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { ScopedLibModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        ScopedLibModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
