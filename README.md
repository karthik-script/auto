# StayAwake

This project leverages the `robotjs` library to automate mouse movement in a sine wave pattern across the screen. Additionally, the script runs until the current time (in PST/PDT) surpasses 5:15 PM by default, making it suitable for automation tasks that require time-sensitive termination.

## Features

- Moves the mouse in a smooth sine wave pattern across the screen.
- Automatically stops the script if the current time is after 5:15 PM PST/PDT.
- Simulates key taps (right shift) to prevent the computer from going to sleep during execution.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. It can be downloaded from the official website.
- **robotjs**: A library that facilitates mouse and keyboard control.
- **date-fns**: Used for working with date and time functions.
- **date-fns-tz**: Helps with time zone handling.

## Installation

1. Clone the repository

2. Navigate to the project folder

3. Install the required dependencies:
```bash
npm install
```

## Usage

1. Run the project using:
```bash
node index.js
```

2. The program will start moving the mouse in a sine wave pattern and simulate key taps every 5 seconds to prevent the system from going idle.

3. The program will automatically stop once the time is later than 5:15 PM PST/PDT.

## How It Works

- The program uses `robotjs` to move the mouse in a sine wave pattern across the screen.
- The `isTimeGreaterThan5PMPST` function checks if the current time (in PST/PDT) is greater than 5:15 PM.
- The program runs in a continuous loop, moving the mouse and sending right-shift key taps every 5 seconds.

## Customization

- To adjust the time, modify the `isTimeGreaterThan5PMPST` function.
- Alter the sine wave movement or speed by changing the logic inside the loop of the `init` function.
- Customize the key tap action (`right_shift`) to simulate different keys if required.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

