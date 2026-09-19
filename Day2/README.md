# Support Ticket API Prisma ORM Migration

Migrated the existing Support Ticket API from raw PostgreSQL to Prisma ORM.

## Tech Stack

* Node.js
* Express
* TypeScript
* PostgreSQL
* Prisma 8

## Prisma Database Commands

### Initialize Prisma

```bash
npx prisma@latest orm init --target postgres
```

### Infer the existing database schema

```bash
npx prisma@latest contract infer --output ./src/prisma/contract.prisma
```

### Generate Prisma files

```bash
npx prisma@latest contract emit
```

### Sign the database

```bash
npx prisma@latest db sign
```

### Create a migration plan

```bash
npx prisma@latest migration plan --name add-created-at
```

### Apply the migration

```bash
npx prisma@latest db migrate
```

### Run seed data

```bash
npx tsx src/prisma/seed.ts
```

## Running the API

Start the development server:

```bash
npm run dev
```

The API runs at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tickets` | Get all tickets |
| GET | `/tickets/:id` | Get a ticket by ID |
| POST | `/tickets` | Create a new ticket |
| PATCH | `/tickets/:id/update` | Update a ticket |
| DELETE | `/tickets/:id` | Delete a ticket |


## Example Request

Create Ticket:

```json
{
  "title": "Printer not working",
  "description": "The office printer is not responding to print requests",
  "priority": "high"
}
```

The ticket is created with an initial status of `open`.

## Testing

Run the tests with:

```bash
npm test
```
