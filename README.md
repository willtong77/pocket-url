# homework-1-willtong77
homework-1-willtong77 created by GitHub Classroom

I used the MERN stack to create the URL shortening web application. The deployed version can be found at
https://pocket--url.herokuapp.com/
I use the free version of heroku, so logging into the website will require some time because it has to wake up the frontend and backend.

I deployed the backend separately (I had some issues with deploying both of them on heroku with the same repository), and the URI is
https://po-url.herokuapp.com/
This is also the URL given for the shortened URL, with the id tagged onto at the end for redirection.

The respective Github repositories are below (frontend, backend):
https://github.com/willtong77/pocket-url
https://github.com/willtong77/pocket-url-api

The backend is relatively simple and is written entirely in the server.js file. It supports POST requests for adding a new URL object which contains a longUrl field
(string) and a shortId field (string). There are two GET routes, one to check if the shortId already exists in the database, and another to get the Url object
associated with a shortId for redirecting.

The frontend is built with React. It's a pretty simple page with a textbox to insert a long Url and an optional textbox to add a custom alias. If the user does
not add their own alias, then the program will automatically generate an id. Ids are generated with the package nanoid (https://github.com/ai/nanoid#readme).
After an Url is generated, the user can see the long Url they used (but cannot edit it) and there are buttons that redirect them immediately in a new tab,
and to copy the link to their clipboard. They also have a button to generate another Url, which takes them back to the original forms.
