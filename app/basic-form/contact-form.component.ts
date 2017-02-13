import {Component} from '@angular/core'

@Component({
    selector: "contact-form",
    templateUrl: './app/basic-form/contact-form.component.html'
})
export class TemplateDrivenForm {

    user: Object = {};

    onSubmitTemplateBased() {
        console.log("submit");
    }

}