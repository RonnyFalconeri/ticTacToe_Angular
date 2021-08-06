import { Component, Input, OnInit } from '@angular/core';
import { TileState } from 'src/app/logic/models/TileState';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() state: TileState;
  @Input() cornerClass: string;

  public tileStateEnum = TileState;

  constructor() {}

  ngOnInit(): void {
    this.state = TileState.UNSET;
  }
}
