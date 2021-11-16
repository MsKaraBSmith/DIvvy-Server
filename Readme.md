# Server for Divvy, a menu planning app

Divvy is an app that is intended to be used by busy adults to share in meal planning responsibilities. You can only make one menu per date so there aren't duplicate days. You can also put together a shopping list for the menu you created, so the user knows exactly what they need to make the meal for that specific date.

## Roles:

The app has three roles: Admin, creator, and user. When you sign up initially you are automatically an admin. The admin can create new accounts for people they'd like to share in the meal planning. The admin will then assign the other roles. If a user is a creator, they will have access to planning menus and creating shopping lists. as well as updating and deleting their menus. If they are a user, they will only see the menus and shopping lists that have been created by an admin or creator. The admin can update the other users if they would like to switch roles between users. They can also delete other users.

## Implementation:

The server is an MVC that utilizes PostgreSQL, Nodejs, Sequelize, and Express. It uses a JSON Web Token that is created on registration or logging in for security.

## Data:

There are three tables used for storing data via Postgres. There is a table for users, a table for storing the menus, and one for the shopping lists. The users can own many menus and shopping lists.

## Future Versions:

Divvy 2.0 would have another table added, that will be owned by users, called the Recipe Box. Opinions and alterations to recipes could be stored here. I would also think about adding a recipe API for users to look to for inspiration.

### Divvy Server Repo
[Divvy Client Repo on Github](https://github.com/MsKaraBSmith/DIvvy-Client)



### Divvy Live Deployment on Heroku
[Divvy](https://kbsdivvyclient.herokuapp.com/)
