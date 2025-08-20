import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComp: ChildComponent;

  ngOnInit() {
    console.log(
      'in oninit ,child message from (parent) ',
      this.childComp?.childMessage
    );
  }

  ngAfterViewInit() {
    console.log(' in ngafter view init', this.childComp?.childMessage);
  }

  callChildMethod() {
    if (this.childComp) {
      this.childComp.showMessage();
    } else {
      alert('child componet not available in view');
    }
  }
}
