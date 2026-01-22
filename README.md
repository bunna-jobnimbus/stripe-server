# Stripe Payment Server

A simple Express server for handling Stripe payments.

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Running the Server

```bash
node server.js
```

The server will start on http://localhost:4242

## API Endpoints

### POST /payment-sheet

Creates a PaymentIntent and returns the client secret for use with Stripe's Payment Sheet.

**Response:**
```json
{
  "paymentIntent": "<client_secret>",
  "publishableKey": "<publishable_key>"
}
```
