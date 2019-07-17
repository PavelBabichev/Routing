import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{
  name = 'Bob';
  constructor() { }

  ngOnInit() {
    console.log('onInit work');
  }

    ngAfterContentChecked(): void {
        console.log('afterContentChecked work');
    }

    ngAfterContentInit(): void {
        console.log('afterContentInit work');
    }

    ngAfterViewChecked(): void {
        console.log('afterViewChecked work');
    }

    ngAfterViewInit(): void {
        console.log('afterViewInit work');
    }

    ngDoCheck(): void {
        console.log('doCheck work');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('onChanges work');
    }

}
