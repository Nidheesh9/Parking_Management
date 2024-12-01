
# Parking Management System - IIT Guwahati

This project is a centralized system developed to track parking spot availability and manage vehicle registrations efficiently at **IIT Guwahati**. The system dynamically allocates parking spots based on vehicle size and destination, aiming to optimize parking space utilization and enhance management efficiency. 

---

### Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Outcome](#outcome)
6. [Contributing](#contributing)
7. [License](#license)

---

### Project Overview

The **Parking Management System** is designed to efficiently allocate parking spaces, track availability in real time, and manage vehicle registrations for a large campus like IIT Guwahati. The platform improves space utilization, reduces congestion, and provides a seamless experience for users.

---

### Features

- **Real-time Parking Spot Tracking**: Continuously monitors and updates parking spot availability.
- **Dynamic Parking Allocation**: Automatically assigns parking spots based on vehicle size and destination.
- **Vehicle Registration**: Allows users to register their vehicle details for parking access.
- **Parking Spot Reservation**: Users can reserve parking spots in advance, ensuring availability.
- **Parking Space Utilization Reports**: Admins can view reports to optimize parking space usage.
- **User Authentication**: Secure login and registration with JWT-based authentication.
- **Responsive UI**: Built with ReactJS and Tailwind CSS for a smooth, mobile-friendly interface.

---

### Technologies Used

- **Frontend**:
  - **ReactJS**: For building the interactive user interface.
  - **Tailwind CSS**: For styling and responsive design.
  - **Axios**: For making HTTP requests to the backend.

- **Backend**:
  - **NodeJS**: For server-side JavaScript handling.
  - **ExpressJS**: To manage routes and server requests.

- **Database**:
  - **MySQL**: Relational database used for storing vehicle data, parking spot availability, and user details.

- **Authentication**:
  - **JWT (JSON Web Tokens)**: For secure user authentication and session management.

---

### Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/parking-management-system.git
   ```

2. **Install backend dependencies**:
   Navigate to the backend directory and run:
   ```bash
   npm install
   ```

3. **Install frontend dependencies**:
   Navigate to the frontend directory and run:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file and configure necessary settings (e.g., database credentials, JWT secret, etc.).

5. **Run the application**:
   - **Backend**: Start the Node.js server:
     ```bash
     npm run server
     ```
   - **Frontend**: Start the React development server:
     ```bash
     npm run start
     ```

---

### Outcome

- **Optimized Parking Utilization**: The system dynamically allocates parking spots based on vehicle size and destination, increasing space usage and reducing congestion.
- **Improved Management Efficiency**: Admins can easily track parking spot availability and manage vehicle registrations in real time.
- **Seamless User Experience**: The intuitive interface and reservation system provide users with a smooth and efficient parking experience.
- **Time-Saving**: By automating parking spot allocation and registration, the system reduces time spent on manual management, benefiting both users and administrators.

---

### Contributing

Feel free to fork the repository, make improvements, and create pull requests. Contributions are welcome!

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
