# Task-Manager App
This is a full stack application developed with Mongo, Express, React and Nodejs stack. This app provides easy way to manager tasks.
![2023-05-18](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/59d4e838-d89f-4991-9630-0aab0e3ddc3c)
![2023-05-18 (1)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/a1b484ca-e322-4871-bc59-401e31d3d92d
![2023-05-18 (2)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/ab251bcf-edb4-4e8f-aa5a-650e6a6da067)
![Uploading 2023-05-18 (2).png…]()
![2023-05-18 (3)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/74a51dd4-e08c-4746-877b-922149bec52f)
![Uploading 2023-05-18 (4).png…]()
![Uploading 2023-05-18 (5).png…]()

![Uploading 2023-05-18 (6).png…]()



Please modify file config/config.js which will hold the mongoURI and JWT secret. Format:

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
