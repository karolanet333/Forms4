import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
        <basic-pipes></basic-pipes>

        <p>&nbsp;</p>
        <contact-form></contact-form>
        <p>&nbsp;</p>

        <p>&nbsp;</p>
        <zippy-unit title="Custom zippy Title">
            Zippy Body
        </zippy-unit>
        <p>&nbsp;</p>
        <p myHighlight>Highlight me!</p>
        <input type="text" autoGrow />
        <input type="text" />
        <p>&nbsp;</p>

        <bs-panel>
            <div class="heading">the heading!</div>
            <div class="body">the body!</div>
            <div class="body">Another the body!</div>
        </bs-panel>
        `
})
export class AppComponent { 


}
