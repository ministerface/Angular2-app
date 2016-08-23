import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportModule } from './+report/report.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent }  from './app.component';
import { AuthService } from './shared/index';

@NgModule({
    imports: [
        BrowserModule,
        ReportModule,
        SharedModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})

export class AppModule { }
