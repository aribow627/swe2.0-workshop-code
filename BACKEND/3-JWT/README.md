# JWT

# What are we learning today
- JSON web token (JWT) to demonstrate authentication and authorization

- We are going to learn how to write routes that will authenticate a user
- We are going to learn how to write routes that will allow authorized users to access.


# JWT

- What is a JSON web token? How is it used for authentication and authorization?

Authentication and Authorization cycle

User attempts to log in with their credentials (username, password) -> this request gets recognized in the server and it will determine if the user has provided valid credentials -> If the user is found and their credentials are correct, we can attach a unique identifier (JSON web token). [authentication]

If a user has been authenticated, we can write endpoints that will grant access to all authenticated users. [authorization]

In your server, all restricted endpoints will have a condition where it will check to see if the request has a valid JSON web token. If the request has a valid token, then the rest of the request can proceed, otherwise the request will fail.



