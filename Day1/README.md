# Support Ticket API with PostgreSQL

A REST API for managing support tickets using Node.js, Express, Typescript and PostgreSQL

## Features

* Create support tickets
* List all tickets
* View a ticket by ID
* Update ticket 
* Delete tickets
* Store tickets in PostgreSQL database

## Tech Stack

* Node.js
* Express
* TypeScript
* PostgreSQL

## Project Structure

```text
src/
├── db/
│   └── connection.ts
├── repositories/
│   └── ticketRepository.ts
├── routes/
│   └── tickets.ts
├── app.ts
├── server.ts
├── types.ts
└── validation.js
```

## Setup

Clone the project and install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/support_ticket_db
```

Make sure PostgreSQL is running and the `support_ticket_db` database exists.

Create the `tickets` table using the `schema.sql` file:

```sql
\i schema.sql
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
