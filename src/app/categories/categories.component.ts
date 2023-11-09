import { Component,OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList:any[]=[];
constructor(private masterSrv:MasterService,private router:Router){

}
ngOnInit(): void {
  this.loadAllFoodCategories()
}
loadAllFoodCategories(){
  this.masterSrv.getAllFoodCategory().subscribe((res:any)=>{
    this.categoryList=res.data
  })
}
navigate(item:string){
this.router.navigate(['/restaurant-items',item])
}
}