import { Component, OnInit } from '@angular/core';
import {  cardDetails, operators, QueryData } from '../interface/queryData';
import {CardService} from '../card.service'



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(public card: CardService) { }

  ngOnInit(): void {
  }

  // ArrayList: List[] = [{
  //   addIcon: true,
  //   buttonToggle: false,
  //   closeBrace: true,
  //   inputHide: false,
  //   hideVaribale: true,
  //   removeIcon: true,
  //   closeIcon: true,
  //   input: 'variable0',
  //   alert: false,
  //   selected: ''
  // }]

  // operator: ButtonList[] = [{
  //   buttonHide: false,
  //   Query: { QueryName: 'and', setQuery: true }
  // }]

  // addCondition: Function = () => {
  //   this.card.setEnable.isEnable = false
  //   console.log('hi old')
  //   //this.keyValues = Object.keys(this.query.mockData[0])
  // }

  // newCondition: Function = () => {

  //   this.card.ArrayList.push({

  //     addIcon: true,
  //     buttonToggle: false,
  //     closeBrace: true,
  //     inputHide: false,
  //     hideVaribale: true,
  //     removeIcon: true,
  //     closeIcon: true,
  //     input: `variable${this.card.ArrayList.length}`,

  //     alert: false,
  //     selected: ''
  //   })
  //   this.card.operator.push({
  //     buttonHide: true,
  //     Query: { QueryName: 'and', setQuery: true },
  //   })
  // }

  // toggleQuery = (index: number, query: boolean) => {

  //   this.operator[index].Query.QueryName = query && 'or' || 'and';
  //   this.operator[index].Query.setQuery = !query;
  // }

  // setEnable: QueryData = {
  //   isEnable: true,
  //   EnableIcon: false,
  //   setPosition: true,
  //   newCondition: this.newCondition,
  //   addCondition: this.addCondition,

  // }

}
