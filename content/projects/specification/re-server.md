---
title: "Re-Server での技術的仕様のまとめ"
---

## 使用するフレームワーク

### Frontend

- Nuxt.js ( Vuetify, Nuxt Content, Vue Composition API )
- Firebase Authentication
- Vercel

### Backend

- Nest.js
- Redis
- MariaDB(MySQL)
  
### その他

- docker-compose
- Vercel

## 仕様

### 認証周り

```plantuml

Actor User
User -> Web  : Check is logged in?
activate Web
Web -> Web: validate the cookie Info  
Web -> User : Redirect the login Page
deactivate Web
Web -> BFF: Send the login Data
BFF -> Firebase : Access the login



```

### Firebase
