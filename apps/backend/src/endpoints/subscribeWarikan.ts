import * as functions from "firebase-functions";
import Stripe from "stripe";

/**
 * @see https://stripe.com/docs/billing/subscriptions/build-subscriptions?ui=checkout
 */
export const subscribeWarikan = functions
  .runWith({
    secrets: ["STRIPE_SECRET"],
  })
  .https.onRequest(async (request, response) => {
    functions.logger.info("Start: createSubscription", {
      structuredData: true,
    });

    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const stripeSecret: string = process.env.STRIPE_SECRET ?? "";
    const stripe = new Stripe(stripeSecret, {
      apiVersion: "2022-11-15",
    });

    const { priceId } = request.query;

    if (typeof priceId !== "string") {
      throw Error("Unexpected priceId");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      success_url:
        "https://warikan-netflix.vercel.app?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://warikan-netflix.vercel.app",
    });

    response.redirect(303, session.url as string);
  });
