import { Component, OnInit } from '@angular/core';
import { Tank } from '../models/tank';
import { TankService } from '../tank.service';
@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css']
})
export class TankComponent implements OnInit {
  title = 'Moneys Per Gallon';
  tanks = [
    // new Tank(1, 1.5, 1, 1),
    // new Tank(1, 1.5, 1, 1),
    // new Tank(1, 1.5, 1, 1),
    // new Tank(1, 1.5, 1, 1),
  ];
  selected = null;
  tank = new Tank();
  editTank = null;
  warnUser() {
    const num = this.getNumTanks();
    if (num >= 10) {
      return 'red';
    } else if (num >= 5 && num < 10) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
  getNumTanks = function() {
    return this.tanks.length;
  };
  // functions to display
  displayTable() {
    this.selected = null;
  }
  hideEditView = function() {
    this.editTank = null;
  };
  // EDIT
  setEditTodo(selected) {
    this.editTank = Object.assign({}, this.selected);
    console.log(this.editTank);
  }
  cancelEdit() {
    this.editTank = null;
  }
  updateTodo(editTank) {
    console.log(editTank);
    this.tankService.update(editTank).subscribe(
      data => {
        this.reload();
        this.editTank = null;
        this.selected = null;
      },
      err => console.log(err)
    );

  }
  // ADD
  addTank() {
    // const t: Tank = new Tank();
    // t.price = this.tank.price;
    // t.gallons = this.tank.gallons;
    // t.distance = this.tank.distance;
    this.tankService.create(this.tank).subscribe(
      data => {
        this.reload();
      },
      err => console.log(err)
    );
    this.tank = new Tank();
  }
  reload() {
    this.tankService.index().subscribe(
      data => this.tanks = data,
      error => console.log(error)
    );
  }
  // DELETE
  deleteTank(id) {
    console.log('clicked into component deletetodo()');
    this.tankService.destroy(id).subscribe(
      data => this.reload(),
      error => console.log(error)
    );
  }
  constructor(private tankService: TankService) { }

  ngOnInit() {
    this.reload();
  }

}
