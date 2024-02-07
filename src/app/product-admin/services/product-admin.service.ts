import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/products.interface';

@Injectable({providedIn: 'root'})
export class ProductAdminService {

  public urlProducts: string = 'http://localhost:3000/products'
  public urlCategories: string = 'http://localhost:3000/categories'
  constructor(private httpService: HttpClient) { }
 // Categories Part
  public getCategories(): Observable<Category[]>{
    return this.httpService.get<Category[]>(this.urlCategories).pipe(
      catchError(( error: any) =>{
      console.error('error al obtener categorias', error)
      throw new Error(error)
      }
      )
    )


  }

  public getCategoriesById(id:string): Observable<Category>{
    return this.httpService.get<Category>(`${this.urlCategories}/${id}`)
  }

  public deleteCategory(category: Category): Observable<boolean>{
    if(!category.id){
      throw new Error('Id is required')
    }

    return this.httpService.delete<boolean>(`${this.urlCategories}/${category.id}`)
    .pipe(
      catchError(() => of(false)),
      map(() => (true))
    )
  }

  public createCategory(category: Category): Observable<Category>{
    return this.httpService.post<Category>(this.urlCategories, category)
  }
  public updateCategory(id: any, category: Category): Observable<Category>{
    return this.httpService.patch<Category>(`${this.urlCategories}/${id}`, category)
  }

  //Product Part

  public getProducts(): Observable<Product[]>{
    return this.httpService.get<Product[]>(this.urlProducts)
  }

  public getProductById(id:string): Observable<Product>{
    return this.httpService.get<Product>(`${this.urlProducts}/${id}`)
  }
}
