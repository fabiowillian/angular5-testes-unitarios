import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { FooterService } from './footer.service';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    providers: [FooterService]
})
export class FooterModule {

}
