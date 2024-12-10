import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  products = [
    { id: 1, name: 'JPL le beau', price: 1387, image: 'https://kosmenia.ma/cdn/shop/products/jean-paul-gaultier-le-beau-le-parfum-intense-f_1200x1200.jpg?v=1652918759' },
    { id: 2, name: 'Ysl libre', price: 1290, image: 'https://www.splendide-gold.tn/4873-large_default/yves-saint-laurent-libre-le-parfum.jpg' },
    { id: 3, name: 'Miss  Dior', price: 1335, image: 'https://shop-beauty.dior.ma/cdn/shop/products/Y0996347_C099600763_E01_GHC_en_INT_1200x1200.jpg?v=1675174082' },
    {id: 4, name: 'Dalina', price: 2800, image: 'https://pafory.com/wp-content/uploads/2022/10/94846_Parfums_de_Marly_Delina_Exclusif_Full_Size.webp' },
    { id: 5, name: 'DEVOTION EAU DE PARFUM', price: 932, image: 'https://beautysuccess.co/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/d/e/devotion-eau-de-parfum.jpg' },
    { id: 6, name: 'Si DEVOTION EAU DE PARFUM', price: 820, image: 'https://www.armani-beauty.ca/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-armani-master-catalog/default/dw05b4116b/products/ww-00380-arm/GA_SI-EDP_50ml_L4390403_3605521816580_RVB_3000_v2.jpg' }
 
  ];

 
  cart: any[] = [];

  
  addToCart(product: any) {
    this.cart.push(product);
  }

  
  getCart() {
    return this.cart;
  }

  
  getProducts() {
    return this.products;
  }
}
