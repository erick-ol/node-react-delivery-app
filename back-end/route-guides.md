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