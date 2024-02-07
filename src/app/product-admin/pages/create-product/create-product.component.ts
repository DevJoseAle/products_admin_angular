import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { ProductAdminService } from '../../services/product-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public availableCategories?: Category[];
  public categoriesNames: string[] = [];
  public product?: Product;
  public toEdit: boolean = false
  public productForm = this.fb.group({
    id:(0),
    code:(0),
    title:(''),
    description:(''),
    price:(0),
    discountPercentage:(0),
    rating:(0),
    stock:(0),
    brand:(''),
    category:(this.availableCategories),
    thumbnail:(''),
    images:(''),
    isActive:(true),
  })


  constructor(
    private http:ProductAdminService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private fb: FormBuilder
  ) { }

 async ngOnInit(): Promise<void> {

  let categories =  await this.http.getCategories().subscribe((newcategory ) => {
       this.availableCategories = newcategory
       this.categoriesNames = newcategory.map(cat => cat.category)
       console.log(this.categoriesNames)


    })

    if(!this.router.url.includes('edit')){
      this.toEdit = false
      return;
    }
    this.toEdit = true
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        return this.http.getProductById(id)}),
    ).subscribe(product => {
      this.product = product
    })


  }


}
