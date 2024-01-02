/*
What is bcrypt?
Bcrypt is a password hashing algorithm designed by Niels Provos and David Mazières based on the Blowfish cipher. 
The name “bcrypt” is made of two parts: b and crypt, where b stands for Blowfish and crypt is the name of the hashing function used by the Unix password system.

Bcrypt was created as a result of the failure of Crypt to adapt to technology and hardware advancement. 
Bcrypt is designed to be a slow algorithm, which is a good thing when it comes to password hashing. 
Therefore, bcrypt is perfect for password hashing because it reduces brute-force attacks.

How does bcrypt work?
Now, let’s dive into how bcrypt works. On the surface, bcrypt takes a user-submitted plain password and converts it into a hash. 
The hash is what is stored in the database. This prevents attackers from accessing users’ plain passwords in the event of a data breach. 
Unlike some other password-hashing algorithms that just hash the plain password, bcrypt uses the concept of salt.

This unique randomly generated string provides an additional level of security for a generated hash. 
Before the plain password is hashed, a salt is generated. Then, it is appended to the plain password, and everything is hashed (the plain password and salt). 
This help protects against rainbow table attacks because attackers can randomly guess users’ passwords, but they can’t guess the salt.

Bcrypt also uses a cost factor (or work factor) to determine how long it takes to generate a hash. 
This cost factor can be increased to make it slower as hardware power increases. 
The higher the cost factor, the more secure the hash and the slower the process. 
Therefore, you need to find the right balance between security and speed.
*/
