# SoulScribbles

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

SoulScribbles is a social networking web application designed to allow users to share thoughts, react to friends' thoughts, and create a friend list. Built with Express.js, MongoDB, and the Mongoose ODM, it exemplifies a full-stack application's foundational data-handling layer.

## Installation

To install SoulScribbles, follow these steps:

1. Clone the repository:
`git clone https://github.com/your-username/soulscribbles.git`

2. Navigate to the project directory:
`cd soulScribbles`

3. Install the required npm packages:
`npm install`

4. Start the server:
`node index.js`


## Usage

SoulScribbles provides a range of functionalities for social networking:

- **Viewing all users and thoughts**: Retrieve lists of all users and thoughts stored in the database.
- **Creating new users and thoughts**: Add new users and thoughts via POST requests.
- **Updating user and thought information**: Modify existing data using PUT requests.
- **Deleting users and thoughts**: Remove entries from the database using DELETE requests.
- **Managing friends**: Users can add or remove friends from their friend list.
- **Reacting to thoughts**: Users can post reactions to thoughts and remove them as needed.

### Example Usage

- **Adding a New User**:
- Send a POST request to `/api/users` with a JSON payload containing the username and email.
- **Creating a Thought**:
- Use a POST request to `/api/thoughts`, including the thought text and associated user information.

## Contributing

Contributions to SoulScribbles are welcome! :) Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## Video Walk-Through
[Click here to see it in use.](https://drive.google.com/file/d/1Fx6c4FiCSTgG9ksFwiaecaRTw_id_5_0/view)

