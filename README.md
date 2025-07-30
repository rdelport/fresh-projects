# fresh-projects
## Overview

This project is a simple web app for sellers to showcase their home to potential buyers. The app is a single-page application focused on presenting a property, with a backend built using ExpressJS and MongoDB to serve data to the frontend.

## Features

- **General Information**: Displays the house's title, short description, price, address, and a main image.
- **Interactive Floorplan**: The floorplan serves as the main navigation. Clicking on a room highlights it and loads details below.
- **Room Details**: For each room, the following are shown:
    - Room name
    - Room description
    - Photos of the room
- **Responsive Design**: The page layout adapts for mobile devices.
- **Backend API**: Data is served from an ExpressJS backend connected to MongoDB.

## File Structure

```
fresh-projects/
├── README.md
├── src/
│   ├── app/
│   │   ├── floorplan/
│   │   ├── room-details/
│   │   └── ...
│   ├── assets/
│   │   ├── house-thumbnail.jpg
│   │   ├── floorplan.svg
│   │   └── rooms/
│   │       ├── kitchen/
│   │       ├── living-room/
│   │       └── bedroom/
│   ├── environments/
│   └── styles/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── ...
├── docker-compose.yml
├── angular.json
└── package.json
```

## Getting Started

1. Clone the repository.
2. Run `docker compose up -d` to start both the frontend and backend locally.
3. Run `nmp start` and go to `http://localhost:4200` in your browser.

