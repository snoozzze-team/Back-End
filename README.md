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

## Get List of All Sleep Data for Single User

HTTP Method: GET

URL: /api/users/sleepdata

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
        "userId": "1",
        "dateTimeFrom": "2019-10-22T23:00",
        "dateTimeTo": "2019-10-23T08:00",
        "feels": "4",
        "notes":"fine"
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

## Create New Sleep Data

HTTP Method: POST

URL: /api/users/sleepdata

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dateTimeFrom | String | Yes | Date and time when user falls asleep |
| dateTimeTo | String | Yes | Date and time when user wakes |
| feels | string | yes | User's mood after wakeup |
| notes | string | No | Any side notes of sleep or wakeup |

### Example

```json
{
	"dateTimeFrom": "2019-10-22T23:00",
    "dateTimeTo": "2019-10-23T08:00",
    "feels": "4",
    "notes":"fine"
}
```

### Response

**201 (Created)**
> If successfully created, endpoint will return HTTP response with status code 200 and the sleep data id number

**400 (Not Acceptable)**
> If required information is missing, the endpoint will return an HTTP response with a status code of 400

**401 (Not Authorized)**
> If token is not provided, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the sleep data, a response with status code 500 will be returned.

## Delete a Sleep Data Object

HTTP Method: DELETE

URL: /api/users/sleepdata/:id (Where ID is sleep data object ID)

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Response

**200 (OK)**
> If successfully deleted, endpoint will return HTTP response with status code 200

**401 (Not Authorized)**
> If token is not provided or token does not match admin or id from URL, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the sleep data, a response with status code 500 will be returned.

## Update an Existing Sleep Date Object

HTTP Method: PUT

URL: /api/users/sleepdata/:id (Where ID is sleep data object ID)

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | Token from registration/login |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dateTimeFrom | String | no | Date and time when user falls asleep |
| dateTimeTo | String | no | Date and time when user wakes |
| feels | string | No | User's mood after wakeup |
| notes | string | No | Any side notes of sleep or wakeup |

### Example

```json
{
	"dateTimeFrom": "2019-10-22T23:00",
    "dateTimeTo": "2019-10-23T08:00",
    "feels": "4",
    "notes":"fine"
}
```

### Response

**200 (Created)**
> If successfully updated, endpoint will return HTTP response with status code 200 and an object with sleep data information

**401 (Not Authorized)**
> If token is not provided or token does not match admin or id from URL, the endpoint will return HTTP response with status code 401

**500 (Internal Server Error)**
> If there was a server error creating the sleep data, a response with status code 500 will be returned.
