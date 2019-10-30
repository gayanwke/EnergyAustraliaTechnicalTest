import { FilterPipe } from './filterUnique.pipe';
import { Component, OnInit } from '@angular/core';
import { FestivalsService } from './services/festivals.service';
import { GroupByPipe } from './group-by.pipe';
import { OrderByPipe } from './order-by.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EnergyAustraliaCodingTestAPI';
  recordsCollection: any;
  pipes: [GroupByPipe, FilterPipe, OrderByPipe];
  labelCollection: any;
  festivCollection: any[];
  // ascending = true;

// tslint:disable-next-line: no-var-keyword
// tslint:disable-next-line: prefer-const
 records = {
    labelRecords: []
};



constructor(private festivalserviceapi: FestivalsService) {
  // this.sortedCollection = orderPipe.transform(this.records.labelRecords, 'records');
  // console.log(this.sortedCollection);
  // console.log(this.orderPipe.transform(this.records.labelRecords, 'records'));
  }
ngOnInit() {
    // this.get_festivals();
    // this.prepareLabelCollection();
    this.get_records();
  }

  get_records() {
    this.festivalserviceapi.get_API_Records()
      .subscribe
      (
        data => {
         this.labelCollection = data;
         console.log(data);
        }
      );
  }



// prepareLabelCollection() {
//   this.festivCollection = this.festivalserviceapi.get_API_Festivals();
//    // tslint:disable-next-line: prefer-for-of
//   for (let i = 0; i < this.festivCollection.length; i++) {
//       // tslint:disable-next-line: prefer-for-of
//       for ( let j = 0; j < this.festivCollection[i].bands.length; j++) {
//           this.records.labelRecords.push({
//             labelName : this.festivCollection[i].bands[j].recordLabel,
//             band: this.festivCollection[i].bands[j].name,
//             festival: this.festivCollection[i].name
//           });
//   }
// }
// // Now sort records in a tree structure
//   this.records.labelRecords.sort();
//   console.log(this.records.labelRecords);
//   return this.records.labelRecords;
//   }

}
