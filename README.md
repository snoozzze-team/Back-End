# Lambda School Sleep Tracker API

## Base URL
- https://sleep-tracker-bw.herokuapp.com

## Register a New User

HTTP Method: POST

URL: /api/auth/register

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| email | String | Yes | User's email |
| username | String | Yes | User's chosen username |
| password | String | Yes | User's chosen password |

### Example

```json
{
	"email": "taranmneeld@gmail.com",
	"username": "tarann",
	"password": "pass"
}
```

### Response

**201 (Created)**
> If successfully registered, endpoint will return HTTP response with status code and a body with a token, user's id, email address, and username

**400 (Bad Request)**
> If required information is missing, the endpoint will return an HTTP response with a status code of 400

**500 (Internal Server Error)**
> If there was a server error registering the user, a response with status code 500 will be returned.

## Log In a User

HTTP Method: POST
URL: /api/auth/login

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| email | String | Yes | User's email address |
| password | String | Yes | User's password |


### Example

```json
{
    "email": "new@user.com",
    "password": "password"
}
```

### Response

**200 (OK)**
> If successfully registered, endpoint will return HTTP response with status code and a body with a token and user's id, first & last name, role, email address, and company name.

**401 (Unauthorized)**
> If email address is not found or password is incorrect, status 401 will be returned

**500 (Internal Server Error)**
> If there was a server error logging the user in, a response with status code 500 will be returned.

## Update a User's Information

HTTP Method: PUT

URL: /api/users/:id

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String| Yes | Uses the token from login/register |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| email | String | No | User's email address |
| username | String | No | User's chosen username |
| password | String | No | User's chosen password |

### Example

```json
{
	"email": "new@user.com",
	"username": "user",
	"password": "password"
}
```

### Response

**200 (OK)**
> If successfully updated, endpoint will return HTTP response with status code and a body with user's id, first & last name, role, email address, and company name

**404 (Not Found)**
> If no user found, status code 404 will be returned

**401 (Unauthorized)**
> If token information does not match user id in URL parameters, status code 401 will be returned

**500 (Internal Server Error)**
> If there was a server error modifying the user, a response with status code 500 will be returned.

## Update a User's Information

HTTP Method: GET

URL: /api/users/:id

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Authorization | String| Yes | Uses the token from login/register |

### Example

```json
{
    "id": 1,
    "email": "new@user.com",
    "username": "user"
}
```

### Response

**200 (OK)**
> If successfully found, endpoint will return HTTP response with status code and a body similar to example above

**404 (Not Found)**
> If no user found, status code 404 will be returned

**401 (Unauthorized)**
> If token information does not match user id in URL parameters, or role is not admin, status code 401 will be returned

**500 (Internal Server Error)**
> If there was a server error registering the user, a response with status code 500 will be returned.

## Get List of All Sleep Data

HTTP Method: GET

URL: /api/users/sleepdata

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Authorization | String | Yes | Uses the token from login/register |

### Example

```json
    [
    {
        "id": 1,
        "name": "Project Name",
        "status": "Pending",
        "first_name": "Project",
        "last_name": "Creator",
        "email": "creator@email.com",
        "company": "Company Name"
    }
]
```

### Response

**200 (OK)**
> If successful, endpoint will return a JSON array in the format of the example above.

**401 (Unauthorized)**
> If the token provided does not match to an admin account or if a token is not provided, status code 401 will be returned

**500 (Internal Server Error)**
> If there was a server error retrieving the project list, a response with status code 500 will be returned.

## Get List of All Projects for Single User

HTTP Method: GET

URL: /api/projects/:id

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Uses the token from login/register |

### Example

```json
    [
    {
        "id": 1,
        "name": "Project Name",
        "status": "Pending",
        "first_name": "Project",
        "last_name": "Creator",
        "email": "creator@email.com",
        "company": "Company Name"
    }
]
```

### Response

**200 (OK)**
> If successful, endpoint will return a JSON array in the format of the example above.

**401 (Unauthorized)**
> If the token provided does not match to an admin account or the user id from the token does not match the id in the URL, or if a token is not provided, status code 401 will be returned

**500 (Internal Server Error)**
> If there was a server error retrieving the project list, a response with status code 500 will be returned.

## Get Single Project Information

HTTP Method: GET

URL: /api/projects/:id/:projectId

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Uses the token from login/register |

### Example

```json
{
    "id": 1,
    "user_id": 1,
    "name": "Project Name",
    "description": "Project Description",
    "attachment": null,
    "status": "Pending",
    "created_at": "2019-04-16T17:31:14.911Z",
    "updated_at": "2019-04-16T17:31:14.911Z",
    "user": {
        "id": 1,
        "company": "Company Name",
        "first_name": "User",
        "last_name": "Name",
        "email": "user@email.com",
        "role": "user"
    },
    "links": [
        {
            "id": 1,
            "link_type": "GitHub Repo",
            "link_href": "https://www.example.com",
            "created_at": "2019-04-16T17:31:14.926Z",
            "updated_at": "2019-04-16T17:31:14.926Z",
            "user": {
                "id": 1,
                "company": "Company Name",
                "first_name": "User",
                "last_name": "Name",
                "email": "user@email.com",
                "role": "user"
            }
        }
    ],
    "comments": [
        {
            "id": 1,
            "comment": "Look at this comment",
            "created_at": "2019-04-16T17:31:14.919Z",
            "updated_at": "2019-04-16T17:31:14.919Z",
            "user": {
                "id": 1,
                "company": "Company Name",
                "first_name": "User",
                "last_name": "Name",
                "email": "user@email.com",
                "role": "user"
            }
        }
    ]
}
```

### Response

**200 (OK)**
> If successful, endpoint will return a JSON array in the format of the example above.

**401 (Unauthorized)**
> If the token provided does not match to an admin account or the user id from the token does not match the id in the URL, or if a token is not provided, status code 401 will be returned

**500 (Internal Server Error)**
> If there was a server error retrieving the project, a response with status code 500 will be returned.

## Create a New Project

HTTP Method: POST

URL: /api/projects/:id (Where ID is user ID)

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | String | Yes | Name of project |
| description | String | Yes | Description of project |
| attachment | Binary | No | Used if attachment included with registration |
| links | Array | No | Array of links to external sites/files |

### Example

```json
{
	"name": "Project Name",
	"description": "Project Description",
	"attachment": null,
	"links": [
        {
            "link_type": "GitHub Repo",
            "link_href": "https://www.example.com"
        }
	]
}
```

### Response

**201 (Created)**
> If successfully created, endpoint will return HTTP response with status code 200 and the project id number

**406 (Not Acceptable)**
> If required information is missing, the endpoint will return an HTTP response with a status code of 400

**401 (Not Authorized)**
> If token is not provided, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the project, a response with status code 500 will be returned.

## Delete a Project

HTTP Method: DELETE

URL: /api/projects/:id/:projectId (Where ID is project creator's ID)

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Response

**200 (OK)**
> If successfully deleted, endpoint will return HTTP response with status code 200

**404 (Not Found)**
> If there is not a project with that project ID, response status 404 will be returned

**401 (Not Authorized)**
> If token is not provided or token does not match admin or id from URL, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the project, a response with status code 500 will be returned.

## Update an Existing Project

HTTP Method: PUT

URL: /api/projects/:id/:projectId (Where ID is user ID)

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | String | No | Name of project |
| description | String | No | Description of project |
| attachment | Binary | No | Used if attachment included with registration |
| status | String | No | Status of project |

### Example

```json
{
	"name": "Project Name",
	"description": "Project Description",
	"attachment": null,
	"status": "Reviewing",
}
```

### Response

**200 (Created)**
> If successfully updated, endpoint will return HTTP response with status code 200 and an object with project information

**401 (Not Authorized)**
> If token is not provided or token does not match admin or id from URL, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the project, a response with status code 500 will be returned.
