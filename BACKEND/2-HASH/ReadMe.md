# Hashing: Securing passwords using Salting and Hashing

## Objectives - what are we going to learn today?

1. We are going to learn the differences between Encoding, Encryption, and Hashing
2. We are going to learn the typical flow of how a user logs in and how we determine if they provided the right password.
3. Demo hashing using crypto and bcrypt.


## Encoding
- What is Encoding?
- Scrambled information? [ihsan] abc123 -> a->! b->5 c->* !5*
- Encoding maps out yoru characters to other characters. It's a 1-1 relationship

Examples:
-Changing hexidecimal values to rgb values  -> #FFFFFF -> (255,255,255)
- #FFAABB -> rgb(255, 170, 187)
- #AABBFF -> rgb(170, 187, 255)

Attachments through email gets encoded then decoded once the receiving user gets the attachment.

Question: why is this not safe?
-Not the safest way to store sensitive information because information can be easily decoded

## Encryption
- Encryption is when you take a cipher(a set of instructions, rule) to mix up the data and we can decrypt that information by using the same cipher to de-cipher it.

- A classic example would be the Caesarian cipher
    -you take a alphabet value and you shift it n times.

## Hashing
- secure way to keep information safe [Nebyou]
### How does hashing work
- When we hash something, you can input text of any length, pass that text into a hashing function (hashing algorithm), what we get in return is a fixed length hashed string.

- A hash function is intended to be a one-way function, which means that once the data is converted into a hashed value, it is not possible to transform it back to its original text.

-MD5
-SHA
-whirlpool



### From user input to database

How a user's password gets stored safely in a database
- username
- password (plaintext: "securePassword123") -> hash the password ('4dbd5e49147b5102ee2731ac03dd0db7decc3b8715c3df3c1f3ddc62dcbcf86d') -> this hashed string gets stored in the database


How to check an attemped log in:

- The attempted log in user will input username, password
- The password in plain text will get hashed. The username that is associated with the username in the database will check against the attempted password input that is now hashed with the current hashed password that is being stored in the user's account.
- If both hashed passwords match, then it is the right user.

- Just hashing is not enough, we can further secure sensitive information that originally are the same plain-text wise by implementing an additional layer of hashing called salting

## Salting 

{username: "joe123", password: "abc123"} -> 6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090 -> gxt321 -> 6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090gxt321

{username: "bob321", password: "abc123"} -> 6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090 -> dfg53 -> 
6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090dfg53

### Crypto -> hashing


### Bcrypt -> hashing algorithm + salting

