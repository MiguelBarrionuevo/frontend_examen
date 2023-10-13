import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country";
import {State} from "../../interfaces/state";
import {City} from "../../interfaces/city";
import {CountryService} from "../../services/country.service";
import {StateService} from "../../services/state.service";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  countrys : Country[];
  state: State[];
  city: City[];

  constructor(private countryService : CountryService,
              private stateService : StateService,
              private cityService : CityService) {
  }
  ngOnInit() {
    this.getCountrys()
  }
  private getCountrys(){
  }
}
