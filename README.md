# ReelTwin Concierge MVP

This is the first public-facing step for the AI business-owner video idea.
It is a static landing page that can be launched without a backend.

## What it does

- Explains the offer: one topic becomes three AI video drafts.
- Shows simple pricing packages.
- Includes a topic-to-video-angle demo.
- Routes business owners to checkout and the intake/upload form.
- Points users to an upload form and payment links you can replace.

## Configure before sharing

Open `script.js` and replace:

- `uploadLink` if you change your Google Form later
- each Paddle, Lemon Squeezy, or Razorpay International `paymentLinks` URL

For a zero-cost setup, create:

- A Google Form for media uploads and business-owner intake.
- Paddle or Lemon Squeezy checkout links for global customers.
- A simple business email inbox.

## Payment options from India

For this MVP, use payment links instead of a full payment gateway integration.

- Lemon Squeezy: good first choice for global digital services because it acts as Merchant of Record.
- Paddle: strong Merchant of Record option for SaaS and AI tools.
- Razorpay International: useful if you want to keep an India-first payment stack and get international payments enabled.

Create one link per package and paste the URLs into `script.js`.

## Open locally

Open `index.html` in your browser.

No install step is required.
