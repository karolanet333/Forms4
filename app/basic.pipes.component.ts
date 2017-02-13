import {Component} from '@angular/core'

@Component({
    selector: 'basic-pipes',
    template: `
        Course Title: {{course.title | uppercase | lowercase}}
        <br/>
        Students: {{course.students | number}}
        <br/>
        Rating: {{course.rating | number}}
        <br/>
        Course Price: {{course.price | currency:'ARS':true:'2.2-2'}}
        <br/>
        Release Date: {{course.releaseDate | date:'dd/MM/yyyy'}}
        <br/>
        {{course | json}}
        <br/>
        Description: {{course.description | summary:10}}
    `
})
export class BasicPipesComponent{
    course = {
        title: "Angular2 for Begginers",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 2),
        description: "A powerful VS Code debugging feature is the ability to set conditions either based on expressions or hit counts. When you create a new breakpoint, you have the option to Add Breakpoint or a Add Conditional Breakpoint. If you add a conditional breakpoint, you have a dropdown to choose either an Expression or Hit Count condition."
    };
}