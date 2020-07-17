## Routes used for first version:
### Base API URL - https://airbnb-api.robertbunch.dev
- /cities/recommended
- /cities/:feature
    - Available features:
        - beach
        - europe
        - asia
        - us
        - exotic
- /city/:cityId

- /venues/recommended
- /venues/superHost
- /venue/:venueId

- /activities/today
- /activities/:feature
    - scenery
    - baking
    - diving
    - animals
- /activity/:id

- /seach/:searchTerm

- /points/get

- /users/signup
    -- expects: email,password
    -- errors: {msg:invalidData} or {msg: "userExists"}
    -- success: {
                    msg: "userAdded",
                    token,
                    email,
                }
- /users/login
    -- expects: email, password
    -- errors: {msg: "badPass"} or {msg: "noEmail"}
        -- badPass = valid username, but wrong passwrod
        -- noEmail = email is not registered
    -- success: {
                    msg: "loggedIn",
                    token,
                    email,
                }

- /users/token-check
    -- expects: token
    -- errors: {msg: "invalidToken"}
    -- success: validatedToken

- /venues/city/:cityName
    -- expects: cityName
    -- success: [venues]