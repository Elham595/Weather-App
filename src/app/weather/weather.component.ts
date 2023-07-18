import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
import { WeatherDataService } from '../weather-data.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentDateTime:any;
  data :any;
  cityname:string ='Cairo';
  weatherdata?:Weather;
  constructor(public _DatePipe:DatePipe,public _WeatherDataService:WeatherDataService) { }

  ngOnInit(): void {
    this.currentDateTime =this._DatePipe.transform((new Date), 'd MMMM EEEE');
    this.displaydata(this.cityname);
  }
  displaydata(cityname: string){
    this._WeatherDataService.getData(cityname).subscribe(
      (response)=>{this.weatherdata = response;console.log(response)}
    )


  }

}
