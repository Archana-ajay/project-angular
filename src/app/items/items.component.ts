import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../services/master.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})





export class ItemsComponent{
  items:any[]=[];
  filteredItems:any[]=[];
constructor(private activate:ActivatedRoute,private master:MasterService){
  this.activate.params.subscribe((res:any)=>{
    debugger;
    this.loadFoodItemsByCategory()
  })
}
// ngOnInit(): void {
//   this.loadFoodItemsByCategory()
// }
loadFoodItemsByCategory() {
  this.master.getItemsByRestaBYCategoryName().subscribe((res: any)=>{
   
    
    this.items = res.data;
    const categoryName = (this.activate.snapshot.params['categoryname']);
    this.filteredItems=this.items.filter(item => item.categoryName === categoryName)
    //console.log((this.filteredItems).length);
    
  })
}
}
