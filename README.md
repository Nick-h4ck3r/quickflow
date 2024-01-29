# Quickflow: A Better & Open-Source Alternative to Notion

![Image of the app here](image.png)

This repository is dedicated to Quickflow, an open-source alternative to Notion that aims to provide a superior user experience.

## Technologies used to build

- [Next.js 13](https://nextjs.org/blog/next-13): A powerful React framework for building modern web applications.
- [Shadcn](https://ui.shadcn.com/): Beautifully designed components that you can copy and paste into your apps.
- [Clerk](https://clerk.com/): Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.
- [Convex](https://www.convex.dev/): Convex is a Backend Application Platform that keeps you focused on building your product. Convex Functions, Database, File Storage, Scheduling, and Search fit together cohesively
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for streamlined web application styling.

## Key Features

- Real-time database 🔗
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡️🔀⬅️
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsable sidebar ↕️
- Landing page 🛬
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

## Setting Up the Project in Local

### Prerequisites

Ensure that you have *Node version 18.x.x* or a higher version installed.

### Cloning the repository

```shell
git clone https://github.com/Nick-h4ck3r/quickflow.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev
```

### Start the app

```shell
npm run dev
```

## Credits

Special thanks to Antonio for his invaluable tutorial, which served as the foundation for building this app. You can find the tutorial [here](https://youtu.be/0OaDyjB9Ib8?si=D38xIsi46hG7M2sC).
