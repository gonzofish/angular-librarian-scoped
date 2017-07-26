import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HelloEweComponent } from './hello-ewe/hello-ewe.component';

@NgModule({
    declarations: [
        HelloEweComponent
    ],
    exports: [
        HelloEweComponent
    ],
    imports: [
        CommonModule
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
