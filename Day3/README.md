# Support Ticket API : Validation, Pagination and Filtering

Enhanced the Support Ticket API with validated query parameters, pagination, filtering, search and sorting

## Features

* Pagination is performed at the database level
* The API does not fetch all tickets before applying pagination
* Sort fields are whitelisted to prevent invalid sorting parameters.
* Filter by: Status, Priority, Assignee
* Search by: id, title, priority, status, assignee, createdAT
* Sort by: `asc` and `desc`

## GET /tickets

### Pagination

```
GET /tickets?page=1&pageSize=10
```

### Filter by status

```
GET /tickets?status=open
```

### Filter by priority

```
GET /tickets?priority=high
```

### Filter by assignee

```
GET /tickets?assignee=John
```

### Search

Search both title and description

```
GET /tickets?search=login
```

### Sorting

```
GET /tickets?sortField=title&sortDirection=asc
```

### Combine Parameters

```
GET /tickets?status=open&priority=high&page=1&pageSize=5&sortField=createdAt&sortDirection=desc
```

### Response

The endpoint returns the tickets along with pagination metadata:

```json
{ 
  "tickets": [], 
  "pagination": { 
    "page": 1, 
    "pageSize": 10, 
    "total": 7, 
    "totalPages": 1 
  } 
}
```

