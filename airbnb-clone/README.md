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

- /payment/create-session
    -- expects: 
        venueData,
        totalPrice,
        diffDays,
        pricePerNight,
        checkIn,
        checkOut,
        token,
        numberOfGuest (default 2),
        currency (default: 'USD'),
    -- success: sessionVar (send it to Stripe for a checkout screen!)
    -- errors: {msg: "missingData"} 
    -- success callback path: http://localhost:3000/payment-success/:token
        -- this is where Stripe is going to send the user after payment
    -- failure callback path: http://localhost:3000/payment-canceled/:token
        -- this is where Stripe is going to send the user if payment is canceled

- /payment/success
    -- expects: stripToken (in url), token
    -- success: {
            reservationDetails: {
                checkIn,
                checkOut,
                currency,
                diffDays,
                iat,
                numberOfGuests,
                pricePerNight,
                totalPrice,
                venueData: {
                    All data about this venue!
                }      
            },
            userData
        }
    -- errors: {msg: error} (error is an object)

/users/getBookings
    - expects: token (jwt)
    - success: [bookings]
    - errors: {msg:"badJwt"}

/reservation/cancel
    - expects: token (jwt), bid
    - success: {msg: "cancelled"}
    - error: {msg: "badId"}

/users/change-password
    - expects: token (jwt), newPassword,
    - success: {msg: "passUpdated"}
    - error: {msg: "badJwt"}

/search/:searchTerm
    will respond with:
    {
        venues: [],
        cities: [],
        activities: [],
    }