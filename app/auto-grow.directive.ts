import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]'
})
export class AutoGrowDirective{

    constructor(private el: ElementRef, private renderer: Renderer){

    }

    @HostListener('mouseenter') onMouseEnter(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px')
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px')
    }


}