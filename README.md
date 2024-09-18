# Task Scheduling System with TypeScript and Node.js

## Project Description

This project demonstrates a task scheduling system using Node.js and TypeScript. It provides a REST API to schedule tasks using cron-like expressions, monitor running tasks, and cancel scheduled tasks as needed.

## Features

- **Task Scheduling**: Schedule tasks with flexible time intervals using cron expressions.
- **Task Monitoring**: View and manage running tasks, including their schedule and status.
- **Task Cancellation**: Cancel scheduled tasks dynamically via the API.
- **Notification System**: (Future) Send notifications when tasks complete.
- **REST API**: Expose endpoints for managing and monitoring tasks.
- **Dockerized**: The entire system is containerized for easy deployment and scaling.

## Setup Instructions

### Prerequisites
- **Docker**: To run the application in containers.
- **Node.js**: Version 14 or later.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-task-scheduling-system.git
   cd typescript-task-scheduling-system
   ```

2. Build and run the Docker container:
   ```bash
   cd docker
   docker build -t ts-task-scheduler .
   docker run -p 3000:3000 ts-task-scheduler
   ```

3. The REST API will be available at [http://localhost:3000](http://localhost:3000).

## Future Enhancements

- **Task Notifications**: Implement notifications when tasks are executed.
- **Task History**: Track completed tasks and their outcomes.
- **Distributed Task Scheduling**: Extend to support distributed task execution across multiple nodes.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
