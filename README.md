# URL Shortener

A simple and efficient URL Shortener application designed to take long URLs and turn them into shorter, more manageable links. This project leverages modern web technologies for seamless functionality and scalability.

## Features

- **Shorten Long URLs**: Convert lengthy URLs into short and easy-to-share links.
- **Custom Aliases**: Create personalized short links for better branding (optional).
- **Analytics**: Track click statistics and performance of shortened URLs.
- **Secure**: Validates user input and ensures safe link generation.

## Tech Stack

- **Frontend**: [React.js/Next.js] for an interactive user interface.
- **Backend**: [Node.js/Express] for API management.
- **Database**: [MongoDB/PostgreSQL] for storing URLs and analytics.
- **Hosting**: [Vercel/Heroku/AWS] for deployment.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/erwingsolorzano/url-shorten.git
   cd url-shorten
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   DATABASE_URL=<your-database-url>
   BASE_URL=<your-app-base-url>
   PORT=3000
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```

5. **Access the App:**
   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Base URL: `/api`

- **POST /shorten**
  - **Description:** Shortens a long URL.
  - **Request Body:**
    ```json
    {
      "longUrl": "https://example.com",
      "customAlias": "optional-alias"
    }
    ```
  - **Response:**
    ```json
    {
      "shortUrl": "http://short.ly/abc123"
    }
    ```

- **GET /:alias**
  - **Description:** Redirects to the original URL based on the alias.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please reach out:

- **Author**: Erwing Solorzano
- **GitHub**: [@erwingsolorzano](https://github.com/erwingsolorzano)
