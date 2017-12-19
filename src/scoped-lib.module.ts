import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HelloEweComponent } from './hello-ewe/hello-ewe.component';

@NgModule({
    declarations: [
        HelloEweComponent
    ],
    exports: [
        HelloEweComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ScopedLibModule {
    static forRoot() {
        return {
            ngModule: ScopedLibModule,
            providers: []
        };
    }
}
