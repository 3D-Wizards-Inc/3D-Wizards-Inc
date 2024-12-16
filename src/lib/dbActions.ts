'use server';

import { Product, Stuff, Condition, Option, Size, Color } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new item to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  let condition: Condition;

  switch (stuff.condition) {
    case 'excellent':
      condition = 'excellent';
      break;
    case 'poor':
      condition = 'poor';
      break;
    default:
      condition = 'fair';
  }

  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  redirect('/list');
}

/**
 * Edits an existing item in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editStuff(stuff: Stuff) {
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition: stuff.condition,
    },
  });
  redirect('/list');
}

/**
 * Deletes an existing item from the database.
 * @param id, the id of the item to delete.
 */
export async function deleteStuff(id: number) {
  await prisma.stuff.delete({
    where: { id },
  });
  redirect('/list');
}

/**
 * Creates new product in the database.
 * @param product, an object with the following properties: id, option, size, color, quantity, owner
 */
export async function addProduct(product: {
  option: Option;
  size: Size;
  color1: Color;
  color2: Color;
  color3: Color;
  quantity: number;
  owner: string;
}) {
  await prisma.product.create({
    data: {
      option: product.option,
      size: product.size,
      color1: product.color1,
      color2: product.color2,
      color3: product.color3,
      quantity: product.quantity,
      owner: product.owner,
    },
  });
  redirect('/auth/cart');
}

export async function editProduct(product: Product) {
  await prisma.product.update({
    where: { id: product.id },
    data: {
      option: product.option,
      size: product.size,
      quantity: product.quantity,
      owner: product.owner,
      color1: product.color1,
      color2: product.color2,
      color3: product.color3,
      checkedout: product.checkedout,
    },
  });
  redirect('/admin');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}

/**
 * Updates the 'checkedout' field to true for all products owned by the specified owner.
 * @param owner The email of the owner whose products will be checked out.
 */
export async function checkoutProducts(owner: string) {
  await prisma.product.updateMany({
    where: {
      owner,
      checkedout: false, // Only update products not already checked out
    },
    data: {
      checkedout: true,
    },
  });
  redirect('/auth/cart'); // Redirect to the cart page after checkout
}

/**
 * Creates a new custom order in the database.
 * @param order, an object with the following properties: user, description, material1, material2, material3, type
 */
export async function addCustomOrder(order: {
  user: string;
  description: string;
  material1: string;
  material2: string;
  material3: string;
  type: string;
}) {
  await prisma.custom_Orders.create({
    data: {
      user: order.user,
      description: order.description,
      material1: order.material1,
      material2: order.material2,
      material3: order.material3,
      type: order.type,
    },
  });
  redirect('/auth/account'); // Redirect to orders page after adding
}
