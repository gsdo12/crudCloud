import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product)=>{
      this.product =product
    })
  }

  deleteProduct() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
