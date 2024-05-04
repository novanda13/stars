# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Sigit",
  "last_name": "Wijonarko",
  "email": "gitz@amikom.com",
  "phone": 0808228282828
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Sigit",
    "last_name": "Wijonarko",
    "email": "gitz@amikom.com",
    "phone": 0808228282828
  }
}
```

Response Body Error :

```json
{
  "errors": "Email invalid"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Sigit",
  "last_name": "Wijonarko IF02",
  "email": "gitz@amikom.com",
  "phone": 0808228282828
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Sigit",
    "last_name": "Wijonarko",
    "email": "gitz@amikom.com",
    "phone": 0808228282828
  }
}
```

Response Body Error :

```json
{
  "errors": "Email invalid"
}
```

## Get Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Sigit",
    "last_name": "Wijonarko",
    "email": "gitz@amikom.com",
    "phone": 0808228282828
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Query params :

- name : Search by first_name or last_name using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Sigit",
      "last_name": "Wijonarko",
      "email": "gitz@amikom.com",
      "phone": 0808228282828
    },
    {
      "id": 2,
      "first_name": "Sigit",
      "last_name": "Wijonarko",
      "email": "gitz@amikom.com",
      "phone": 0808228282828
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts

Headers :

- Authorization : token

Request Body :

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```
