// functions/create-payment-intent.js

export async function onRequestPost(context) {
  try {
    // Read Stripe secret key from Cloudflare environment variables
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY;

    if (!STRIPE_SECRET_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing STRIPE_SECRET_KEY in environment." }),
        { status: 500 }
      );
    }

    // Stripe must be imported dynamically for Cloudflare compatibility
    const { Stripe } = await import("stripe");
    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    });

    // Parse JSON body
    const body = await context.request.json();
    const amount = body.amount;

    if (!amount || typeof amount !== "number") {
      return new Response(
        JSON.stringify({ error: "Invalid or missing amount." }),
        { status: 400 }
      );
    }

    // Create the Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message || "Unknown server error.",
      }),
      { status: 500 }
    );
  }
}
