OTP Verification System

This repository contains a simple OTP (One-Time Password) verification system with a frontend and backend component. 
It allows users to enter their mobile number, receive an OTP, and verify it. 
This system can serve as a basic example of how OTP verification can be implemented in a web application.


OTP Verification System
![YOAMfvkOWxzs](https://github.com/ravikr9102/OTP-Verification/assets/97108305/ecce65a7-eb50-4430-9c95-478f02bc631c)

Table of Contents
Project Overview
Screenshots
Getting Started
Usage
Contributing
License
Acknowledgments
Project Overview
The project is organized into two main folders:

frontend: This folder contains the frontend code for the OTP verification system. It's built using React.js and includes the following components:

App.js: The main application component that handles the user interface and navigation.
Signin.js: Component for entering the mobile number and sending the OTP.
Verify.js: Component for entering and verifying the OTP.
Success.js: Component displayed upon successful OTP verification.
server: This folder contains the backend code for the OTP verification system. It's built using Express.js and includes the following endpoints:

/generate-otp: An endpoint for generating and sending OTPs (simulated, no actual SMS).
/verify-otp: An endpoint for OTP verification.
Screenshots
Here are some screenshots of the OTP Verification System in action:

![YOAMfvkOWxzs](https://github.com/ravikr9102/OTP-Verification/assets/97108305/ecce65a7-eb50-4430-9c95-478f02bc631c)
Sign-In Page

Entering Mobile Number
![Untitled design](https://github.com/ravikr9102/OTP-Verification/assets/97108305/c6c87c40-abfd-4c1d-9b1c-aeebdcf10574)

Verification Page
![Untitled design (1)](https://github.com/ravikr9102/OTP-Verification/assets/97108305/e73c2fa3-897e-4737-8b52-6931ce9cf23f)

Success Page
![Untitled design (2)](https://github.com/ravikr9102/OTP-Verification/assets/97108305/dda5936b-98b4-4a68-908f-9f97d0e53886)

Getting Started
To run this OTP verification system locally, follow these steps:

Clone the repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/otp-verification.git
Navigate to the frontend folder and install frontend dependencies.

bash
Copy code
cd frontend
npm install
Run the frontend development server.

bash
Copy code
npm start
Navigate to the server folder and install backend dependencies.

bash
Copy code
cd ../server
npm install
Start the backend server.

bash
Copy code
node server.js
Make sure to configure the backend to use the appropriate ports and URLs in your environment.

Usage
Access the frontend application in your web browser by visiting http://localhost:5173.
Enter a valid mobile number and select the country code.
Click the "Sign in with OTP" button to receive an OTP.
Enter the received OTP and click the "Verify" button.
Upon successful verification, you'll be redirected to the success page.
Contributing
Contributions to this project are welcome! If you find any issues or have ideas for improvements, please open an issue or create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
This OTP verification system is a simplified example and does not handle actual SMS sending. It serves as a starting point for building more robust OTP verification systems in real-world applications.