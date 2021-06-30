# BogusFlights

This project allows you to buy a mock airplane ticket. After making a new account, you can chose one of many destinations, than proceed to select a seat and other additional preferences. Final screen presents you with the summary of costs and a ticket.
If you do not wish to make an account use this credentials instead

> **Email: admin1@email.com**\
> **Password: admin1**

## Project's scope

- Main screen, allowing the user to choose flight destination, number of tickets, date.
- Login/Register popup.
- Weather forecast using user's location.
- Flight details such as: seating, luggage, additional preferences.
- Summary screen, showing the price of tickets and current weather for user's destination.
- The app is responsive and aesthetically pleasing.

## Used techologies

- [Angular 12.0.1](https://angular.io/)
- [Angular Material 12.0.2](https://material.angular.io/)
- [Cypress 7.5.0](https://www.cypress.io/)


## Used APIs

- [ExchangeRate-api](https://www.exchangerate-api.com/)\
- [OpenWeather](https://openweathermap.org/api)

## End-to-end tests

Run `ng e2e` to execute the end-to-end tests via a Cypress. Project includes two tests. Buying a ticket by an already registered user and buying a ticket after making a new account.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
