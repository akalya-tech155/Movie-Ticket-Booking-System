/*


Scenario

Movie selected

↓

Choose Date

↓

Choose Time

↓

Choose Seats

↓

Verify Selected Seats

Example

Seat A1

Seat A2

Seat A3

Assertions

expect(selectedSeats).toContain("A1")

expect(selectedSeats).toContain("A2")

Methods

chooseDate()

chooseTime()

selectSeat()

verifySeat()

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