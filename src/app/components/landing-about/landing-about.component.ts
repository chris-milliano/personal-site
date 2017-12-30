import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'landing-about',
    templateUrl: './landing-about.component.html',
    styleUrls: ['./landing-about.component.scss']
})
export class LandingAboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    scrollTo (toElem: string) {
        console.log(`Clicked: scrollTo(\'${toElem}\')`);

        alert("Scroll functionality is under construction. Sorry for the inconvenience.")
    }

}
