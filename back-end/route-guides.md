# Endpoints /POST /register
Ex: **http://localhost:3001/register**

### Corpo da requisição
O nome precisa ter no mínimo 12 caracteres
```
body: {
  "name": "Zé Birita",
  "email": "ze_birita@skol.com",
  "password": "cachaca51secreta",
  }
```

### Response sucesso
```
  {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlM0BkZWxpdmVyeWFwcC5jb20iLCJpYXQiOjE2NTE2MTA1NTQsImV4cCI6MTY1MTY5Njk1NH0.RhA5-H9JSZ3SbaDMmNM1g3c05hyHcQdhezuGTqsh5u0"
  }
```

### Response error
Email ou senha incorretos:
```
  {
    "message": "Wrong email or password"
  }
```

# Endpoint /POST /login
### Corpo da requisição

Ex: **http://localhost:3001/login**
```
body: {
  "email": "ze_birita@skol.com",
  "password": "cachaca51secreta",
}
```

### Response sucesso
```
  {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlM0BkZWxpdmVyeWFwcC5jb20iLCJpYXQiOjE2NTE2MTA1NTQsImV4cCI6MTY1MTY5Njk1NH0.RhA5-H9JSZ3SbaDMmNM1g3c05hyHcQdhezuGTqsh5u0"
  }
```

### Response error
Email ou senha incorretos:
```
  {
    "message": "Wrong email or password"
  }
```

Quando o email não existe na base de dados:
```
  {
    "message": "User does not exist"
  }
```

# Endpoint Products

### Pegar todos os produtos
Ex: **http://localhost:3001/customer/products**
 
## Corpo de requisição

Authorization: (passar o token)

### Response sucesso

```
[
  {
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": "2.20",
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  {
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },
  ...
]
```