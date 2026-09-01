# ISO 20022 Financial Message Parser & Validator — TypeScript / JavaScript Client

[![npm version](https://img.shields.io/npm/v/@noor-mkdad/iso20022-parser-client.svg)](https://www.npmjs.com/package/@noor-mkdad/iso20022-parser-client)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/57865358-8bafe64c-1441-4fe3-ba7a-2d60bdeb7dc5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![RapidAPI Listing](https://img.shields.io/badge/RapidAPI-Dedicated%20Listing-blueviolet)](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator)

Official zero-dependency, ultra-lightweight Node.js & browser client for **ISO 20022 Financial Message Parser & Validator**.

> High-speed SWIFT ISO 20022 XML-to-JSON parser and compliance engine with sub-5ms edge latency.

> 🔑 **Get your Dedicated API Key:** [Subscribe to ISO 20022 Financial Message Parser & Validator on RapidAPI](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator)

---

## 🚀 Installation

```bash
npm install @noor-mkdad/iso20022-parser-client
# or
pnpm add @noor-mkdad/iso20022-parser-client
# or
yarn add @noor-mkdad/iso20022-parser-client
```

---

## ⚡ Quickstart

```typescript
import { Iso20022ParserClient } from '@noor-mkdad/iso20022-parser-client';

// Pass your RapidAPI key for authenticated edge access
const client = new Iso20022ParserClient({
  apiKey: process.env.RAPIDAPI_KEY // Get key from https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator
});

async function run() {
  const result = await client.validate({
    // Enter validation payload
  });

  if (result.success) {
    console.log('Result:', result.data);
  } else {
    console.error('Error:', result.error);
  }
}

run();
```

---

## 📚 API Reference

### `new Iso20022ParserClient(config)`
- `config.apiKey` *(optional)*: RapidAPI Key (`x-rapidapi-key`).
- `config.baseUrl` *(optional)*: Direct edge worker override URL.

### `client.validate(payload)`
Dispatches standard validation / parse request with sub-5ms latency.

### `client.getHealth()`
Checks edge isolate health and responsiveness.

---

## 🔗 Links
- 📖 [RapidAPI Documentation & Key](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator)

## 📄 License
MIT © Noor Mkdad
