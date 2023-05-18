# Task-Manager App
This is a full stack application developed with Mongo, Express, React and Nodejs stack. This app provides easy way to manager tasks.

![2023-05-18 (1)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/821297e7-d324-4f03-b9ee-74e72d4618a5)![2023-05-18 (3)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/9aaf50b2-0580-4c07-ab46-0203e905737a)

![Uploading 2023-05-1![2023-05-18 (4)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/79e65dd5-c612-4946-9e71-ce1d80052897)
![2023-05-18 (4)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/90297bd9-9cdc-4c09-bb76-a8366edbada9)![2023-05![2023-05-18](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/7b0bdd6c-cf76-4d0b-9097-100fda428817)
-18 (5)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/439bb890-a490-![2023-05-![2023-05-18 (6)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/daa78b6b-9dfc-4f19-b84f-efed20f0dda7)
18 (5)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/f9b0af06-c576-4264-9715-cdde92b53e2b)
4809-81ca-39e2f6435850)
![2023-05-18 (5)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/15e10321-68de-4b9c-819c-22a8d3d10ed8)
![2023-05-18 (6)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/d949615e-afcd-446b-a91e-4efd9bc0abeb)
![2023-05-18](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/d6e72577-82c8-4bb9-8f2d-d0f9c78c9a48)
![2023-05-18 (1)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/c3cf9a91-0d6b-4371-843a-f0813784688d)

8 (3).png…]()

## Handling Mongo URI and SECRET![2023-05-18 (2)](https://github.com/vermakhushbu723/Task-Manager-Ascend-Assessment/assets/116518735/68a13c75-a822-42f1-a355-3c6e38a45aa0)

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
