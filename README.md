# 🛍️ HAZELSTORE - A Fashion E-commerce Platform with React + Strapi

This project is inspired by [Lama Dev](https://www.youtube.com/c/LamaDev)'s tutorial. Based on that, I’ve extended and customized it for personal practice. It is intended for **learning purposes only**, and all rights belong to the original author.

HAZELSTORE is a modern online clothing store built with **React (frontend)** and **Strapi + MySQL (backend)**. The project is currently under development and aims to be a clean, functional, and modern e-commerce website.

If you just want to preview the static UI pages, please switch to the `static-website` branch and follow the instructions under **Frontend Setup**.

---

## 🚧 Project Status

> This project is still in development. Basic functionality like product browsing and cart operations is already working.

### ✅ Feature Progress

- [x] Product Listing Page  
- [x] Product Detail Page  
- [x] Add to Cart  
- [ ] Checkout Flow  
- [ ] User Registration / Login  
- [ ] Deployment  

---

## 🧰 Tech Stack

| Layer      | Technologies                                 |
|------------|----------------------------------------------|
| Frontend   | React, Axios, React Router, REST API, Material-UI |
| Backend    | Strapi Headless CMS, REST API                |
| Database   | MySQL                                        |
| Dev Tools  | GitHub                                       |

---

## 🚀 Getting Started

> Make sure you have **Visual Studio Code**, **Node.js + npm**, and **MySQL** installed locally.

### 1. Clone the Repository

```bash
git clone https://github.com/XuechenSun/react-strapi-clothing-store.git
```

### 2. Run the React Frontend

```bash
cd client
npm install
npm run dev
```

### 3. Run the Strapi Backend

```bash
cd api
npm install
```

Create a `.env` file in the `api` directory using the `.env.example` as a reference:

```env
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=store
DATABASE_USERNAME=root
DATABASE_PASSWORD=123456

ADMIN_JWT_SECRET=someSecretKey
JWT_SECRET=anotherSecret
APP_KEYS=someRandomKey
```

Then run:

```bash
npm run develop
```

After starting Strapi for the first time, go to [http://localhost:1337/admin](http://localhost:1337/admin) to register an admin account. You can then create content types and manage your store data from the dashboard.

---

## 📄 License

This project is open-sourced under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

## 📬 Contact

- GitHub: [XuechenSun](https://github.com/XuechenSun)  
- Email: xuechen747@126.com
