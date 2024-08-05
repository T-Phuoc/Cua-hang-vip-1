// @ts-ignore

import { Injectable } from '@angular/core';
import { ProductModel } from '../product.modle';

function totalMoney() {}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  total: number | undefined;
  cart: any[] = [];

  constructor() {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Mèo Ragdoll',
      price: 15000000,
      description:
        'Mèo Ragdoll là giống mèo lớn, nặng, có bộ lông mềm mại, dài và mượt mà. Mèo Ragdoll có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn. Mèo Ragdoll có bộ lông mềm mại, dài và mượt mà. Mèo Ragdoll có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/Ragdoll.jpeg',
      inStock: 10,
    },
    {
      id: 2,
      name: 'Mèo Munchkin',
      price: 20000000,
      description:
        'Mèo Munchkin là giống mèo có chiều dài chân ngắn, thân dài và đầu to. Mèo Munchkin có bộ lông mềm mại, dài và mượt mà. Mèo Munchkin có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/Munchkin.jpg',
      inStock: 5,
    },
    {
      id: 3,
      name: 'Mèo Scottish Fold',
      price: 10000000,
      description:
        'Mèo Scottish Fold là giống mèo có đặc điểm đặc trưng là đôi tai hơi gập về phía trước. Mèo Scottish Fold có bộ lông mềm mại, dài và mượt mà. Mèo Scottish Fold có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/scottishfold.jpg',
      inStock: 20,
    },
    {
      id: 4,
      name: 'Mèo Sphynx',
      price: 25000000,
      description:
        'Mèo Sphynx là giống mèo không có lông. Mèo Sphynx có bộ lông mềm mại, dài và mượt mà. Mèo Sphynx có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/sphynx.jpg',
      inStock: 50,
    },
    {
      id: 5,
      name: 'Mèo Bengal',
      price: 18000000,
      description:
        'Mèo Bengal là giống mèo có bộ lông màu vàng nâu với vằn sọc đen. Mèo Bengal có bộ lông mềm mại, dài và mượt mà. Mèo Bengal có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/bengal.jpg',
      inStock: 30,
    },
    {
      id: 6,
      name: 'Mèo Maine Coon thuần chủng',
      price: 50000000,
      description:
        'mèo Maine Coon là đến từ rừng tự nhiên ở Bắc Mỹ với khả năng săn mồi cực kỳ đáng sợ,đồng thời loài mèo này được biết đến với vẻ đẹp hoang dã khiến ai nhìn thấy cũng bị thu hút.',
      imageUrl: '../assets/Maine-Coon.jpg',
      inStock: 20,
    },
  ];

  addToCart(item: any) {
    let index: number = this.cart.findIndex((element) => element.id == item.id);
    let indexProduct = this.products.findIndex(
      (element) => element.id == item.id,
    );
    if (this.products[indexProduct].inStock == 0) {
      return;
    }
    if (index != -1) {
      this.cart[index].quantity++; // Tăng số lượng
      this.products[indexProduct].inStock--;
    } else {
      item.quantity = 1; // Khởi tạo số lượng thành 1 nếu mặt hàng mới vào giỏ hàng
      this.cart.push(item);
      this.products[indexProduct].inStock--;
    }
    // @ts-ignore
    this.totalMoney(); // hiện tổng tiền
  }

  removeFromCart(item: any) {
    let index: number = this.cart.findIndex((element) => element.id == item.id);
    let indexProduct = this.products.findIndex(
      (element) => element.id == item.id,
    );
    if (index != -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
      this.products[indexProduct].inStock++;
    }
    this.totalMoney();
  }

  clearCart() {
    this.cart = [];
    this.totalMoney();
  }

  totalMoney() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.price * item.quantity;
    }
    return this.total;
  }
}
