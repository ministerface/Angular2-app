import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, Growl} from 'primeng/primeng';
import { NavbarComponent, UserbarComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [NavbarComponent, UserbarComponent, Dialog, Growl],
    exports: [CommonModule, NavbarComponent, UserbarComponent, Dialog],
    providers: [
        { provide: 'Window', useValue: window }
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
