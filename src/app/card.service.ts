import { Injectable } from '@angular/core';
import {  cardDetails, operators, QueryData } from './interface/queryData';
import { variables } from '../app/constants/common';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  ArrayList: cardDetails[] = [{
    addIcon: variables.ENABLE,
    buttonToggle: variables.DISABLE,
    closeBrace: variables.ENABLE,
    inputHide: variables.DISABLE,
    hideVaribale: variables.ENABLE,
    removeIcon: variables.ENABLE,
    closeIcon: variables.ENABLE,
    input: variables.VARIABLE+'0',
    alert: variables.DISABLE,
    selected: ''
  }]

  operator: operators[] = [{
    buttonHide: variables.DISABLE,
    Query: { QueryName: variables.AND, setQuery: variables.ENABLE }
  }]

  addCondition: Function = () => {
    this.setEnable.isEnable = variables.DISABLE
  }

  newCondition: Function = () => {
    this.ArrayList.push({
      addIcon: variables.ENABLE,
      buttonToggle: variables.DISABLE,
      closeBrace: variables.ENABLE,
      inputHide: variables.DISABLE,
      hideVaribale: variables.ENABLE,
      removeIcon: variables.ENABLE,
      closeIcon: variables.ENABLE,
      input: `${variables.VARIABLE}${this.ArrayList.length}`,
      alert: variables.DISABLE,
      selected: ''
    })
    this.operator.push({
      buttonHide: variables.ENABLE,
      Query: { QueryName: variables.AND, setQuery: variables.ENABLE },
    })
  }

  setEnable: QueryData = {
    isEnable: variables.ENABLE,
    EnableIcon: variables.DISABLE,
    setPosition: variables.ENABLE,
    newCondition: this.newCondition,
    addCondition: this.addCondition,
  }
}
