import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';

import { AppComponent }  from './app.component';

import {BasicPipesComponent} from './basic.pipes.component'
import {BsPanelComponent} from './bs.panel.component'
import {ZippyUnitComponent} from './zippy/zippy.unit.component'
import {ContactFormComponent} from './basic-form/contact-form.component'

import {AutoGrowDirective} from './auto-grow.directive'
import { HighlightDirective } from './highlight.directive';

import {SummaryPipe} from './summary.pipe'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    //StartupComponent
    AppComponent,

    //Components
    BasicPipesComponent,
    BsPanelComponent,
    ZippyUnitComponent,
    ContactFormComponent,

    //Attribute Directives
    AutoGrowDirective,
    HighlightDirective,

    //Pipes
    SummaryPipe
    
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-AR" }
  ]
})
export class AppModule { }
