# Angelin_NoteTaker

## Summary

The Note Taker application is a web-based tool that allows users to write, save, and manage notes in a convenient and organized manner. The application comprises a back end built using Express.js, which interacts with a JSON file (db.json) to store and retrieve note data.The Note Taker application is useful for individuals, particularly small business owners, who need an efficient way to organize their thoughts, tasks, and important information. It provides a simple and intuitive interface to manage notes effectively.

## Link to the live deployed website (deployed to heroku):



## Features

- **View Existing Notes**: Users can view a list of existing notes, displayed in a left-hand column, to quickly access their previously saved notes.

- **Create New Notes**: Users can create new notes by entering a note title and the corresponding text in the right-hand column. This allows them to jot down their thoughts, tasks, or any important information they need to remember.

- **Save Notes**: A Save icon in the navigation bar allows users to save their newly created notes. Once saved, the note appears in the left-hand column with the existing notes. The save icon displays after both title and text for a new note is populated.

- **Delete Notes**: <span style="color: orange;">Although this functionality was a Bonus, when Delete button (red trashcan icon) next to a specific note is clicked, the note is successfully deleted from the application.</span>

## Deployment

The application can be deployed to a web server using platforms like Heroku, making it accessible to users from anywhere.
- Starter code was cloned and a new repo was created in Github
- Multiple commits were done as development was occurring
- Application was run by "node server.js" while development
- Create a new Heroku app: heroku create
- Deploy application to heroku: git push heroku main
- Open the deployed application using the provided heroku app URL
