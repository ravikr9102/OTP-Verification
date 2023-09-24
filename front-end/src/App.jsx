import { useState } from 'react';
import Signin from './components/Signin';
import Otp from './components/Otp';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const countryCodes = [
  { code: '+91', name: '\ud83c\uddee\ud83c\uddf3' },
  { code: '+1', name: '\uD83C\uDDE8\uD83C\uDDE6' },
  { code: '+44', name: '\uD83C\uDDFA\uD83C\uDDF8' },
];

function App() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // This is for handleSendOtp
  const sendOtp = async () => {
    console.log('sendOtp function called');
    // Basic validation for the mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error(
        'Invalid mobile number. It should be 10 digits and contain only numbers.',
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/generate-otp', {
        mobileNumber,
      });
      const generatedOtp = response.data.otp;
      setOtp(generatedOtp);
      navigate('/otp');
    } catch (error) {
      toast.error(
        `Failed to send OTP. Please check your mobile number and try again.`,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
      console.error('Error sending OTP:', error);
    }
  };

  // This is for handleVerifyOtp
  const verifyOtp = async () => {
    console.log('verifyOtp function called');
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', {
        mobileNumber,
        otp: enteredOtp,
      });
      if (response.data.isVerified) {
        setIsOtpVerified(true);
      } else {
        // Display a failure Snackbar
        toast.error('OTP verification failed. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Signin
              sendOtp={sendOtp}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
              countryCodes={countryCodes}
              selectedCountryCode={selectedCountryCode}
              setSelectedCountryCode={setSelectedCountryCode}
            />
          }
        />
        <Route
          exact
          path="/otp"
          element={
            <Otp
              verifyOtp={verifyOtp}
              enteredOtp={enteredOtp}
              setEnteredOtp={setEnteredOtp}
              mobileNumber={mobileNumber}
              selectedCountryCode={selectedCountryCode}
              isOtpVerified={isOtpVerified}
              otp={otp}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
