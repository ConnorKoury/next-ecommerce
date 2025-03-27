# E-Commerce App

<img width="1145" alt="image" src="https://github.com/user-attachments/assets/ee3945ab-6e23-42b6-a533-af7c68cc74a7" />


## Tech Stack
- **Next.js** – React framework
- **PostgreSQL** – Database
- **MikroORM** – ORM for PostgreSQL
- **NextUI (HeroUI)** with **TailwindCSS** – UI components

## Functionality
This app stores products in a Postgres database and displays them in a grid-like fashion. Users can add/remove products in their shopping cart which is also stored in the database. There is no relation between the shopping cart and user because there is no user model. Users can also click on products to view them in a larger format alongside a list of similar products.

## Setup Steps (after cloning into repo)

### 1. Environment Variables

Create a `.env` file in the ROOT directory of the project with the following content:
```env
USER=postgres
PASSWORD=randompassword
APP=ecom-db
```

### 2. Initiate Database

Ensure Docker is installed, then in the root run:
```docker
docker compose up
```

### 3. Install Dependencies

Install the project dependencies by running:
```npm
npm install
```

### 4. Update Database Schema

We need to update the database schema using:
```npm
npx tsx .\server.ts
```

### 5. Seed Database

Seed the product table with random data using:
```seeder
npx mikro-orm seeder:run
```

### 6. Run the Development Server

Start the Next.js development server with:
```dev
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## To-Do List
- [ ] Fix error when building with "next build" (database error)
- [ ] Fix miscount on shopping cart badge when spamming add to cart
- [ ] Have the "Similar Products" show actual similar products not just all
