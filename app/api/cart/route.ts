import { NextResponse } from 'next/server';
import { getORM } from '@/database/orm';
import Product from '@/database/module/product.entity';
import Cart from '@/database/module/cart.entity';

// Get the current cart quantity for a product
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  if (!productId) {
    return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
  }

  const orm = await getORM();
  const em = orm.em.fork();

  // Find cart item for this product
  const cartItem = await em.findOne(Cart, { product: parseInt(productId) });
  // Return quantity if found or 0
  return NextResponse.json({ quantity: cartItem ? cartItem.quantity : 0 });
}

// Create a new cart item if it doesn't exist or add quantity if it does
export async function POST(request: Request) {
  const { productId, quantity } = await request.json();
  if (!productId) {
    return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
  }
  if (quantity === undefined) {
    return NextResponse.json({ error: 'Missing quantity' }, { status: 400 });
  }

  const orm = await getORM();
  const em = orm.em.fork();

  // Find product by its ID
  const product = await em.findOne(Product, productId);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  // Check if a cart item for the product already exists
  let cartItem = await em.findOne(Cart, { product: productId });
  if (!cartItem) {
    // Create new cart item if not
    cartItem = em.create(Cart, { product, quantity });
  } else {
    // Otherwise update the existing cart item
    cartItem.quantity += quantity;
  }
  await em.persistAndFlush(cartItem);
  return NextResponse.json({ quantity: cartItem.quantity });
}

// Update the quantity by adding a direction value
export async function PATCH(request: Request) {
  const { productId, direction } = await request.json();
  if (!productId) {
    return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
  }
  if (direction === undefined) {
    return NextResponse.json({ error: 'Missing direction' }, { status: 400 });
  }

  const orm = await getORM();
  const em = orm.em.fork();

  // Find the existing cart item
  let cartItem = await em.findOne(Cart, { product: productId });
  if (!cartItem) {
    return NextResponse.json({ error: 'Cart item not found' }, { status: 404 });
  }

  cartItem.quantity += direction;

  // If the quantity falls to 0 or below, remove the item
  if (cartItem.quantity <= 0) {
    await em.removeAndFlush(cartItem);
    return NextResponse.json({ message: 'Cart item removed because quantity is zero or less' });
  }

  await em.persistAndFlush(cartItem);
  return NextResponse.json({ quantity: cartItem.quantity });
}
