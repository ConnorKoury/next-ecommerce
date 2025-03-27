# E-Commerce App

## Tech Stack
- **Next.js** – React framework
- **PostgreSQL** – Database
- **MikroORM** – ORM for PostgreSQL
- **NextUI (HeroUI)** with **TailwindCSS** – UI components

## Setup

### 1. Environment Variables

Create a `.env` file in the root directory of the project with the following content:
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

<<<<<<< HEAD
### 4. Seed Database

Seed the product table with random data using:
```seeder
npx mikro-orm seeder:run
```

### 5. Run the Development Server
=======
### 4. Run the Development Server
>>>>>>> 2967c23505fbf357ec8b1640315a780f7083d07a

Start the Next.js development server with:

```dev
npm run dev
```
Open http://localhost:3000 in your browser to view the application.
