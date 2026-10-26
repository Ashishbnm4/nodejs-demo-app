# Node.js CI/CD Pipeline with Docker and GitHub Actions

A simple Node.js REST API demonstrating automated testing, Docker containerization, and Continuous Integration (CI) using GitHub Actions.

## 📌 Project Overview

The purpose of this project is to build and test a Node.js application, package it into a Docker image, and automate the testing and build process using GitHub Actions.

Whenever code is pushed to the `main` branch or a pull request is created, the CI pipeline automatically installs dependencies, runs automated tests, and builds the Docker image.

## 🎯 Objectives

* Develop a REST API using Node.js and Express.js.
* Implement automated testing using Jest and Supertest.
* Containerize the application using Docker.
* Configure a CI pipeline using GitHub Actions.
* Verify application health through a dedicated endpoint.
* Maintain project source code on GitHub.

## 🛠️ Technologies Used

| Technology         | Purpose                                 |
| ------------------ | --------------------------------------- |
| Node.js            | JavaScript runtime                      |
| Express.js         | REST API framework                      |
| Jest               | Automated testing                       |
| Supertest          | HTTP endpoint testing                   |
| Docker             | Application containerization            |
| Git & GitHub       | Version control and source code hosting |
| GitHub Actions     | Continuous Integration automation       |
| Linux (WSL Ubuntu) | Development environment                 |

## 📂 Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Prerequisites

Ensure the following tools are installed:

* Node.js
* npm
* Git
* Docker
* A GitHub account

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ashishbnm4/nodejs-demo-app.git
cd nodejs-demo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

The application runs on port `3000` by default.

Open the following address in your browser:

http://localhost:3000

**Note:** The `npm start` command requires a `start` script in `package.json`.

## 🔗 API Endpoints

### 1. Home Endpoint

**Method:** `GET`

**Endpoint:** `/`

**URL:** `http://localhost:3000/`

**Expected Response:**

```json
{
  "message": "Node.js CI/CD Pipeline is running!",
  "status": "success"
}
```

### 2. Health Check Endpoint

**Method:** `GET`

**Endpoint:** `/health`

**URL:** `http://localhost:3000/health`

**Expected Response:**

```json
{
  "status": "healthy"
}
```

The health endpoint can be used to verify that the application is responding correctly.

## 🧪 Automated Testing

This project uses Jest and Supertest to test the REST API endpoints.

Run the tests using:

```bash
npm test
```

The automated tests verify:

* The home endpoint returns HTTP status code `200`.
* The home endpoint returns the expected success message.
* The health endpoint returns HTTP status code `200`.
* The health endpoint returns a healthy status.

**Test Results:** Both automated tests passed successfully during local testing.

## 🐳 Docker Configuration

Docker is used to package the application and its runtime dependencies into a container image.

### 1. Build the Docker Image

```bash
docker build -t nodejs-demo-app:latest .
```

### 2. Run the Docker Container

```bash
docker run -d --name nodejs-demo -p 3000:3000 nodejs-demo-app:latest
```

### 3. Verify the Running Container

```bash
docker ps
```

### 4. Test the Application

Test the home endpoint:

```bash
curl http://localhost:3000/
```

Test the health endpoint:

```bash
curl http://localhost:3000/health
```

### 5. Stop the Container

```bash
docker stop nodejs-demo
```

To remove the stopped container:

```bash
docker rm nodejs-demo
```

## ⚡ GitHub Actions CI Pipeline

The workflow configuration is located at:

```text
.github/workflows/ci.yml
```

The pipeline is triggered by pushes to the `main` branch and pull requests targeting `main`.

### Pipeline Steps

1. **Checkout Code:** Retrieves the repository source code.
2. **Setup Node.js:** Configures the Node.js 22 environment.
3. **Install Dependencies:** Installs dependencies using `npm ci`.
4. **Run Automated Tests:** Executes the Jest test suite using `npm test`.
5. **Build Docker Image:** Builds the Docker image using the Dockerfile.

### Workflow Verification

The GitHub Actions workflow was executed successfully, and the repository displayed a green checkmark indicating that the pipeline passed.

The pipeline automates testing and Docker image building. It does not currently publish the image to a container registry or deploy the application to a cloud server.

## 📈 Results

The project successfully demonstrates the following:

* A working Node.js REST API.
* A health-check endpoint.
* Automated API tests with Jest and Supertest.
* Successful Docker image creation.
* Successful execution of the application inside a Docker container.
* A working GitHub Actions CI workflow.
* Source code hosted in a public GitHub repository.

## 🔮 Future Improvements

* Push Docker images to Docker Hub automatically.
* Implement Continuous Deployment (CD).
* Deploy the application to AWS.
* Add application logging and monitoring.
* Integrate security and dependency scanning.
* Add additional API endpoints and automated tests.

## 👨‍💻 Author

**Ashish Mishra**

GitHub: https://github.com/Ashishbnm4

## 📄 License

This project is intended for educational and demonstration purposes.
