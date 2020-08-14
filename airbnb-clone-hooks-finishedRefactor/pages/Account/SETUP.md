SET UP:
Path to /account in App.js
Add a link to the path in the navbar with <Link>
Setup a class based component called Account 
1. Put it in it's own folder with Account.css
2. give it access to redux, specifically state.auth
3. Include axios, moment, and { Route }
4. initialize 2 pieces of state: 
    - pastBookings: []
    - upcomingBookings: []
5. initialize componentDidMount and render sanity check

Setup these functional components in the Account folder 
with a sanity check for each, and import them into Account
- Bookings
- AccountSideBar
- ChangePassword