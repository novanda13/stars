# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "edel.kind",
  "password": "rahasia",
  "name": "Sigit Wijonarko"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "edel.kind",
    "name": "Sigit Wijonarko"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already taken"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "edel.kind",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Sigit Wijonarko IF02", //opsional
  "password": "new password" //opsional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "edel.kind",
    "name": "Sigit Wijonarko IF02"
  }
}
```

Response Body Error :

```json
{
  "errors": "Nama tidak boleh mengandung simbol"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": {
    "username": "edel.kind",
    "name": "Sigit Wijonarko"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Headers :

- Authorization : token

Endpoint : DELETE /api/users/logout

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
