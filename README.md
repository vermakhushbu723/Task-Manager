# Task-Manager App
This is a full stack application developed with Mongo, Express, React and Nodejs stack. This app provides easy way to manager tasks.

#![2023-05-18](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/8bc59a14-956d-40e6-b96a-01de2507e1ab)

#![2023-05-18 (1)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/d431a2b9-b6f7-4aa9-9c60-137bb0fe2ac5)

#![2023-05-18 (2)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/c68f7d78-a5a9-4b66-b953-8b2e38a1fdf4)

#![2023-05-18 (3)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/d3d06eba-9635-4708-942d-de72d5c3cf7a)

#![2023-05-18 (4)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/6f278844-5011-450a-8b59-1ed57cf894b6)

#![2023-05-18 (5)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/ad58d596-6b2f-4ba6-8f45-dd6830a06fc3)

#![2023-05-18 (6)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/b69cad01-a7c8-40b7-83c8-0336964686a9)

#Please modify file config/config.js which will hold the mongoURI and JWT secret. Format:

```json
{
    database: 'mongodb://localhost:27017/taskmanager',
    secret: '$ecreate12345',
    enableConsoleLog: true,
    enableFileLog:false,
    tokenExpire: 36000 //10 hours
}

```

## Route Information
In this application following backend routes are implemented and all routes are private except Authenticate user API:


Auth Routes:
```text
    POST:   api/auth                (Authenticate user)               Access: PUBLIC
    GET :   api/auth/verifyToken    (Verifies Token)                  Access: PUBLIC

```

User Routes:
```text
    POST:   api/users                   (Registers a new user)
    GET :   api/users/:email            (Gets user from email)
```

Board Routes:
```text
    GET:    api/boards                  (Gets all active boards for authorized user)
    GET:    api/boards/:boardid         (Gets task lists for a board for the Authorized user)
    POST:   api/boards                  (Creates a new board)
    DELETE: api/boards/:boardid         (Deletes a board for the Authorized user (Admin))
```

TaskList Routes:
```text
    GET:    api/tasklists/:tasklistid   (Gets tasks for a tasklist for the Authorized user)
    POST:   api/tasklists               (Creates a new Task List)
```

Task Routes:
```text
    PUT:    api/tasks/:taskid           (Updates a task for the Authorized user)
    DELETE: api/boards/:taskid          (Deletes a task for the Authorized user)
    POST:   api/tasks                   (Create a new Task)
```

## Installation
After clonning the repository, following command will run both backend and frontend applications (In development mode):

```bash
npm run dev
```
