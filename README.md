# City Diner (Server)

Here is the repository for the City Diner's back end.

## Heroku URL for Database

### URL

https://powerful-tor-85817.herokuapp.com/

### Client Code

https://github.com/shmccoy/city-diner-client.git

## Live Client:

[City Diner](https://city-diner-client.vercel.app/ "City Diner title")

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
