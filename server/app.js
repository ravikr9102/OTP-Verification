const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

let generatedOtp;

// Endpoint for generating and sending OTP (simplified, no actual SMS)
app.post('/generate-otp', (req, res) => {
  const mobileNumber = req.body.mobileNumber;

  // Basic validation for the mobile number
  if (!/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).json({
      error:
        'Invalid mobile number. It should be 10 digits and contain only numbers.',
    });
  }
  generatedOtp = generateRandomOTP();
  res.json({ otp: generatedOtp });
});

// Endpoint for OTP verification
app.post('/verify-otp', (req, res) => {
  const { mobileNumber, otp } = req.body;
  if (otp === generatedOtp) {
    res.json({ isVerified: true });
  } else {
    res.json({ isVerified: false });
  }
});

// Generate RandomOTP
function generateRandomOTP() {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const port = 5000;
app.listen(port, function () {
  console.log('backend listen on' + port);
});
