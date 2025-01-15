# Skills Tinder API

This API facilitates the search for individuals based on their skills, enabling companies to hire specific talents for projects or hourly jobs. The platform is designed to connect businesses and professionals, managing everything from skill discovery to service confirmation and payment processing.

## Use Case Example

**Pedrito Sola**, a professional with excellent public speaking skills, creates an account on the platform, setting a rate of $30 USD per hour. Companies like **Rappi**, looking for talent for commercials, use the API to find individuals with the skills they need, such as Pedrito.

Once Rappi finds Pedrito and agrees to work together, the API manages the entire process:

1. **Quotation and Service Agreement:** Rappi requests a quote to hire Pedrito for 6 hours of work.
2. **Advance Payment:** 'Skills Tinder' requires an advance payment before Pedrito can start working.
3. **Coordination:** After the advance payment, Pedrito is notified of the date, time, and location of the job.
4. **Completion and Payment:** At the end of the service, both parties confirm the job's completion, Rappi completes the payment, and rates Pedrito's performance.

This API streamlines the hiring and payment management process for skill-based jobs.

## Features

- Search for users by skills.
- Management of quotations and payments.
- Job notifications and service coordination.
- Confirmation of job completion and performance rating.

## Technologies Used

- **Backend Framework:** Node.js
- **Database:** PostgreSQL
- **Payment Gateway:** Integration with a payment processing system (if applicable).
- **Authentication:** JWT-based user authentication.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/JoseMarioCarranza/tinder-de-habilidades
   ```

2. Navigate to the project directory:
   ```bash
   cd tinder-de-habilidades
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file with the following environment variables:
   ```env
   NODE_ENV=development
   PORT=your_port_number
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   PAYMENT_API_KEY=your_payment_api_key
   ```

5. Run the application:
   ```bash
   npm start
   ```

## API Endpoints

### User Management
- **POST** `/api/users/signup`: Register a new user.
- **POST** `/api/users/login`: Authenticate a user.
- **GET** `/api/users`: Search for users by skills.

### Job Management
- **POST** `/api/jobs/create`: Create a new job posting.
- **GET** `/api/jobs`: View all job postings.
- **PUT** `/api/jobs/:id`: Update job details.
- **DELETE** `/api/jobs/:id`: Delete a job posting.

### Company Management
- **POST** `/api/companies/create`: Register a company.
- **GET** `/api/companies`: View all registered companies.

## Deployment

The API is deployed and accessible at: [Skills Tinder API](https://github.com/JoseMarioCarranza/tinder-de-habilidades)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

- **José Mario Rivera Carranza**
  - 🌐 Website: [www.ingjosemario.com](https://www.ingjosemario.com)
  - 📧 Email: [imt_josecarranza@outlook.com](mailto:imt_josecarranza@outlook.com)
  - 💻 GitHub: [José Mario Carranza](https://github.com/JoseMarioCarranza)
