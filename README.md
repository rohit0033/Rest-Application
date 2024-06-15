Sure! Here's the entire information in markdown format:

```markdown
# REST Client Application

A web-based REST client application similar to POSTMAN, built using React, Express, and Tailwind CSS. This application allows users to send various HTTP requests (GET, POST, PUT, DELETE) and view the responses. Additionally, it keeps track of the request history.

## Features

- Send HTTP requests (GET, POST, PUT, DELETE)
- View formatted responses
- View and manage request history
- Responsive and user-friendly UI

## Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Express
- **Database**: PostgresSQL (using Prisma ORM)

## Installation

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

### Setup

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/rest-client-app.git
   cd rest-client-app
   ```

2. Install dependencies for both the client and server

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up the database

   ```bash
   npx prisma migrate dev --name init
   ```

## Running the Application

### Start the Server

1. Navigate to the server directory

   ```bash
   cd server
   ```

2. Start the server

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.

### Start the Client

1. Navigate to the client directory

   ```bash
   cd client
   ```

2. Start the client

   ```bash
   npm run dev
   ```

   The client will start on `http://localhost:3000`.

## Project Structure

### Client

- **components**
  - `HttpRequestForm.jsx`: Form for sending HTTP requests
  - `RequestHistory.jsx`: Displays the request history
  - `TruncatedText.jsx`: Component for truncating and expanding long text
- **App.jsx**: Main application component

### Server

- **routes**
  - `requests.js`: Handles HTTP requests and responses
- **models**
  - `Request.js`: Defines the request model for Prisma ORM
- **index.js**: Entry point for the Express server

## Usage

1. **Send a Request**: Fill in the HTTP method, URL, headers, and body in the form and click "Send Request".
2. **View Response**: The response from the server will be displayed in the response section.
3. **View Request History**: The request history section will display all past requests. Click on "Read More..." to expand and view the full response.

## Example APIs for Testing

- **GET**: `https://jsonplaceholder.typicode.com/posts/1`
- **POST**: `https://jsonplaceholder.typicode.com/posts`
  - Body: `{ "title": "foo", "body": "bar", "userId": 1 }`
- **PUT**: `https://jsonplaceholder.typicode.com/posts/1`
  - Body: `{ "id": 1, "title": "foo", "body": "bar", "userId": 1 }`
- **DELETE**: `https://jsonplaceholder.typicode.com/posts/1`

## Tailwind CSS Enhancements

The application uses Tailwind CSS for styling, providing a modern and responsive UI. Key features include:

- Hover effects to enlarge cards
- Smooth transitions
- Gradient backgrounds

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.



## Acknowledgments

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Vite](https://vitejs.dev/)

## Contact

For any questions or feedback, please contact @therohitsharma2004@gmail.com.

