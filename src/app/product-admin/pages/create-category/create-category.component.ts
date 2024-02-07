import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from '../../services/product-admin.service';
import { Category } from 'src/app/interfaces/category.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../../shared/services/validations.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public toEdit: boolean = false

  public category?: Category;

  public categoryForm = new FormGroup({
    name: new FormControl('',[Validators.required, this.validator.validLengthName]),
    id: new FormControl('', [Validators.required, this.validator.IDValidator]),
    createdAt: new FormControl<Date>(new Date(), [Validators.required]),
    isActive: new FormControl(true),
    description: new FormControl('',[Validators.required, this.validator.validLengthDescription]),

  })
  constructor(
    private productAdminService: ProductAdminService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private validator: ValidationsService
    ) { }

  ngOnInit(): void {
    if(!this.route.url.includes('edit')){
      this.toEdit = false
      return;
    }
    this.toEdit = true
    this.activeRoute.params.pipe(
      switchMap( ({id}) => {
        return this.productAdminService.getCategoriesById(id)}),

    ).subscribe(category => {
      this.categoryForm.reset(category)
      return this.category = category
  })

  console.log(this.toEdit)
}

  get currentCategory(): Category{
    const newCategory = this.categoryForm.value as Category
    return newCategory

  }
  public isValidField(field: string): boolean | null{
    return  this.validator.isValid(this.categoryForm, field)
  }
  public onSubmit(){

    let idToEdit;
    if(this.categoryForm.invalid){
      this.categoryForm.markAllAsTouched()
      return;
    }

     if(this.route.url.includes('edit') && this.category){
      this.productAdminService.updateCategory( this.currentCategory.id, this.currentCategory).subscribe(() => {
        this.route.navigateByUrl('/admin/category')
      })
      return this.route.navigateByUrl('/admin/category')
    }
    this.productAdminService.createCategory(this.currentCategory).subscribe(() => {
    })
    return this.route.navigateByUrl('/admin/category')
  }
}
