Thank you for taking a look to my project. This is a simple node application that can be used on a server to send data from a contact-me form, straight to your email inbox.

To try it out in dev mode:
1. Create an account on sendgrid.com to recieve an API-key and register an email to use as a sender
2. Create a folder in the root called config and a file called .config
3. Write the following in the .config file:
    SENDGRID_API_KEY="REPLACE THIS WITH YOUR SENDGRID API-KEY"
    SENDGRID_CONTACT_TO="REPLACE THIS WITH THE EMAIL YOU WANT TO RECIEVE THE MESSAGE TO"
    SENDGRID_CONTACT_FROM="REPLACE THIS WITH THE EMAIL YOU REGISTRED ON SENDGRID"
4. Install the dependencies using npm install
5. Start the express server using npm run dev
6. Using postman, send a post request to http://localhost:3000/send containing the following raw json:
{
    "name": "Test name",
    "email": "test@test.com",
    "message": "Test message",
}
7. Watch it arrive in your inbox
