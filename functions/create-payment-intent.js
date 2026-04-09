import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Cloudflare Pages Function: Create Payment Intent
 * Handles POST requests from your front‑end checkout form.
 */
export async function onRequestPost({ request }) {
  try {
    const data = await request.json();

    // Validate amount
    if (!data.amount || data.amount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    // Return client secret to front‑end
    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Stripe error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
