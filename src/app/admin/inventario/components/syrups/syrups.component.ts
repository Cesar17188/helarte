import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-syrups',
  templateUrl: './syrups.component.html',
  styleUrls: ['./syrups.component.scss']
})
export class SyrupsComponent implements OnInit {

  @Input() SyrupsStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];

  constructor() { }

  ngOnInit(): void {
  }

}
