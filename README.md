# Todo Application Backend REST server

Its an express application which contains two routes **_/add_** and **_/list_**.
The application is hosted as an heroku app. [Click here to visit](https://shielded-cliffs-84411.herokuapp.com/)

## Day Wise Progress

**Day 1 (6/9/2020):**

1.  Scaffolded an express app using express-generator.
2.  Downloaded all dependencies.
3.  Configured local test database.
4.  Connection with database established.
5.  Implemented /add route and its features.
6.  Implemented task expiry feature with the help of TTL indexing.

**Day 2 (7/9/2020):**

1.  Set up Atlas Mongodb cluster.
2.  Created a database.
3.  Whitelisted all IPs.
4.  Connection with remote database established.
5.  Tested all the features.
6.  Deployed application on heroku.
7.  Connected with GitHub.
8.  Implemented /list route and its features.

**Day 3 (8/9/2020):**

1.  Finalized documentation.
2.  Final submission after manual testing.

## Request-Response Structure

**Request Object for _/add_ route:**

_Type of request: POST_

```json
{
  "task_name": "date test",
  "task_description": "test",
  "creator": "koustav",
  "duration": "1 minutes"
}
```

**Response Object for success:**

```json
{
  "error": false,
  "message": "Task added successfully"
}
```

**Response Object for failure:**

```json
{
  "error": true,
  "message": "failure message"
}
```

**Request Object for _/list_ route:**

_Type of request: GET_

**Response Object for success:**

```json
{
  "error": false,
  "tasks": [
    {
      "_id": "5f567947b941c30017655385",
      "task name": "date test",
      "task description": "test",
      "creator": "koustav",
      "createdAt": "2020-09-07T18:17:43.545Z",
      "expireAt": "2020-09-07T18:18:43.545Z"
    }
  ]
}
```

**Response Object for failure:**

```json
{
  "error": true,
  "message": "failure message"
}
```

## Important Points

1.  Database URI is set up as environment variable.
2.  Code is first deployed to **_dev_** branch until its tested after that it is then merged with **_master_** branch.
3.  The expiry duration is assumed to be in **_minutes_**. However it can be easily configured with some changes over the existing codebase.

## License

[MIT](https://choosealicense.com/licenses/mit/)
