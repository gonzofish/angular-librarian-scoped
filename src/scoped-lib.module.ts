import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    exports: [

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
