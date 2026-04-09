// /functions/create-payment-intent.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function onRequestPost(context) {
  try {
    const { priceId } = await context.request.json();

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Missing priceId' }), { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: await getAmountFromPrice(priceId),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: { priceId },
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// Simple mapping for Phase 1 – replace with your real amounts
async function getAmountFromPrice(priceId) {
  switch (priceId) {
    case 'PRICE_AI_SURFER_MONTHLY':
      return 1500; // $15.00
    case 'PRICE_AI_SURFER_ANNUAL':
      return 15000; // $150.00
    case 'PRICE_VILLAGE_PASS':
      return 500
