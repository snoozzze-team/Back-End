# Back-End
Endpoints:

    1. GET - /api/user
        - Authentication required to view user info

    2. POST - /api/auth/register
        - Data required for register:
            Email: 'example@example.com'
            Username: 'example'
            Password: 'password'

    3. POST - /api/auth/login
        - Must enter valid user credentials

    4. GET - /api/user/sleepdata
        - Displays a list of all tracked sleep data, based off of user id

    5. DELETE, PUT - /api/user/sleepdata/:id
        - Deleting and updating specific sleep data requires authentication
        - PUT returns the specified changes to the sleep data with the specified id
        - DELETE removes the sleep data with the specified id
