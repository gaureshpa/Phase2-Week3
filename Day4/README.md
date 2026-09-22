# Support Ticket API

A simple REST API for managing support tickets using **Node.js, Express, TypeScript, PostgreSQL, and Prisma**.

## Features

* Create tickets
* Get all tickets
* Get a ticket by ID
* Update tickets
* Delete tickets
* Pagination
* Filtering by status, priority, and assignee
* Search by title or description
* Sorting
* Query parameter validation
* PostgreSQL database
* Prisma ORM
* API tests with Vitest and Supertest

## Tech Stack

* Node.js
* Express
* TypeScript
* PostgreSQL
* Prisma
* Vitest
* Supertest

## Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
```

## Run the Project

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Run production build:

```bash
npm start
```

Run tests:

```bash
npm test
```

## API Endpoints

### Get Tickets

```http
GET /tickets
```

Supports:

```text
page
pageSize
status
priority
assignee
search
sortField
sortDirection
```

Example:

```http
GET /tickets?page=1&pageSize=10
```

Filtering:

```http
GET /tickets?status=open
GET /tickets?priority=high
GET /tickets?assignee=Aadith
```

Search:

```http
GET /tickets?search=login
```

Sorting:

```http
GET /tickets?sortField=title&sortDirection=asc
```

### Get Ticket

```http
GET /tickets/:id
```

### Create Ticket

```http
POST /tickets
```

Example body:

```json
{
  "title": "Login issue",
  "description": "Customer cannot log in",
  "priority": "high"
}
```

### Update Ticket

```http
PATCH /tickets/:id/update
```

### Delete Ticket

```http
DELETE /tickets/:id
```

## Pagination Response

The ticket list includes pagination metadata:

```json
{
  "tickets": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

## Testing

Run the test suite with:

```bash
npm test
```

Tests cover:

* Creating tickets
* Getting tickets
* Getting a ticket by ID
* Updating tickets
* Deleting tickets
* Pagination
* Status filtering
* Priority filtering
* Assignee filtering
* Search
* Sorting
* Invalid query parameters
* Page size validation
