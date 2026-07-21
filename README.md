# 🎟️ Movie Ticket Booking System - Playwright with TypeScript

## 📌 Project Overview

This project automates a Movie Ticket Booking System using **Playwright** with **TypeScript** and follows the **Page Object Model (POM)** design pattern.

The project simulates a real-world movie booking application where users can:

- Select a movie
- Select seats
- Book tickets
- Cancel bookings
- Prevent double booking of seats

The project is developed using Git feature branches to simulate a real software development workflow.

---

# 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- Visual Studio Code

---

# 📁 Project Structure

```
Movie-Ticket-Booking-System
│
├── pages
│   ├── HomePage.ts
│   ├── MoviePage.ts
│   ├── SeatPage.ts
│   ├── BookingPage.ts
│   └── CancelPage.ts
│
├── tests
│   ├── movie.spec.ts
│   ├── seat.spec.ts
│   ├── booking.spec.ts
│   └── cancel.spec.ts
│
├── utils
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🚀 Features

## 🎬 Movie Selection

- Open application
- Select city
- Choose movie
- Verify selected movie

---

## 💺 Seat Selection

- Select date
- Select show time
- Select available seats
- Verify selected seats

---

## 🎟️ Ticket Booking

- Enter customer details
- Confirm booking
- Verify booking confirmation
- Generate booking ID

---

## ❌ Ticket Cancellation

- Search booking using Booking ID
- Cancel booked ticket
- Verify cancellation message

---

## 🐞 Bug Fix

- Prevent double booking
- Display "Seat Already Booked" message
- Verify booked seats cannot be selected again

---

# 🌿 Git Branch Strategy

```
main
│
├── feature/movie-selection
├── feature/seat-selection
├── feature/booking
├── feature/cancellation
└── bugfix/double-booking
```

---

# 📋 Test Scenarios

### Movie Selection

- Verify city selection
- Verify available movies
- Verify selected movie

### Seat Selection

- Verify available seats
- Verify multiple seat selection
- Verify booked seats cannot be selected

### Booking

- Verify successful booking
- Verify booking confirmation
- Verify booking ID generation

### Cancellation

- Verify ticket cancellation
- Verify cancelled seat becomes available

### Bug Fix

- Verify same seat cannot be booked twice
- Verify proper error message is displayed

---

# ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to project folder

```bash
cd Movie-Ticket-Booking-System
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/movie.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

Generate Playwright report

```bash
npx playwright show-report
```

---

# 📚 Page Object Model (POM)

### HomePage

- openWebsite()
- selectCity()
- clickMovies()

### MoviePage

- selectMovie()
- verifyMovie()
- clickBookNow()

### SeatPage

- selectDate()
- selectTime()
- selectSeat()
- verifySeat()

### BookingPage

- enterCustomerName()
- enterMobileNumber()
- clickPay()
- verifyBooking()

### CancelPage

- searchBooking()
- cancelBooking()
- verifyCancellation()

---

# ✅ Expected Outcomes

- User can select a movie successfully.
- User can select available seats.
- User can complete ticket booking.
- User can cancel a booked ticket.
- The system prevents double booking of the same seat.

---

# 🎯 Learning Outcomes

- Playwright Automation
- TypeScript
- Page Object Model (POM)
- Test Assertions
- Dynamic Element Handling
- Form Validation
- Git Branching Strategy
- Git Merge Workflow
- Bug Fixing Process
- End-to-End Automation Testing

---

# 👩‍💻 Author

**Akalya**

Automation Testing | Playwright | TypeScript | Git | GitHub

---