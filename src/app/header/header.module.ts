import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [HeaderService]
})
export class HeaderModule {

}
