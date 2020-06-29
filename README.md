# City Diner (Server)

Here is the repository for the City Diner's back end.

## Heroku URL for Database

### URL

https://powerful-tor-85817.herokuapp.com/

### Client Code

https://github.com/shmccoy/city-diner-client.git

## Live Client:

[City Diner](https://city-diner-client.vercel.app/ "City Diner title")

---

### Description

City Diner is an app for a restaurant that has a content management system for the menu data. City Diner is an actual restaurant in Richmond, Virginia that I frequent. They don't have much of a web presence so I decided to make a web app for them.

---

### Purpose behind City Diner

There would be an app that advertises the restaurant as well as inform customers what is on the menu. Also the manager will have the entire menu on the database, and can make changes as needed.

---

### Tech Stack

Client:

- React
- JavaScript
- HTML
- CSS

Server:

- Node
- Express
- PostgreSQL
- Mocha
- Chai
- bcrypt

---

### Endpoints

#### POST /api/auth/login

##### logs user in to access dashboard

#### GET api/menu/menu/:category

##### gets menu items by category

#### GET api/menu

##### gets all menu items

#### POST /api/menu

##### adds new item to menu

#### DELETE /api/menu

##### remove item from menu

#### DELETE /api/menu/:menu_id ( = product.id)

##### deletes item from menu

#### PATCH /api/menu

##### updates menu item
