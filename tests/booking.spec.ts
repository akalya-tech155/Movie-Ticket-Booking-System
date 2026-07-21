/*

Scenario

Movie

↓

Seat

↓

Enter Name

↓

Enter Mobile

↓

Pay

↓

Booking Success

Assertions

Booking Successful

Booking ID Generated

Payment Successful

Methods

enterName()

enterPhone()

clickPay()

verifyBooking()

Seat

A5

is already booked.

Another user tries to book

A5

again.

Expected

Seat Already Booked

Assertion

expect(errorMessage).toContain("Seat already booked");


*/