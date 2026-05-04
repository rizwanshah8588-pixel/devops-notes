# DevOps Notes App

A full-stack notes application built to demonstrate DevOps practices.

## Tech Stack

- React + Vite
- Node.js + Express
- Docker
- Docker Compose
- GitHub Actions CI/CD

## Architecture

User → React Frontend → Node Backend → Docker Compose

## DevOps Features

- Containerized frontend and backend
- Multi-container setup using Docker Compose
- CI pipeline using GitHub Actions
- Automated Docker image build on every push

## Run Locally

```bash
docker-compose up --build

---
Frontend:

http://localhost:3000

Backend:

http://localhost:5000/notes 