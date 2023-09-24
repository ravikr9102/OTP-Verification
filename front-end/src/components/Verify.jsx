import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Success from './Success';

export default function Verify(props) {
  useEffect(() => {
    toast.success(`OTP is : ${props.otp}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  }, []);
  return (
    <div className="flex justify-center items-center">
      {props.isOtpVerified ? (
        <Success />
      ) : (
        <div>
          <figure className="md:invisible flex justify-center items-center">
            <img src="/src/assets/default.png" />
          </figure>
          <div className="p-10">
            <figure className="flex justify-center items-center pb-10 pt-5">
              <img src="/src/assets/undraw_confirmed_81ex.png" />
            </figure>
            <h2 className="text-center text-gray-600 py-1 pb-8 text-2xl">
              Please verify Mobile number
            </h2>
            <p className="text-center text-base text-slate-500">
              {`An OTP is sent to ${props.selectedCountryCode} ${props.mobileNumber}`}
            </p>
            <Link
              className="text-yellow-500 flex justify-center items-center underline underline-offset-4"
              to={'/'}
            >
              Change Phone Number
            </Link>
            <div className="flex justify-center items-center">
              <input
                className="border border-yellow-400 my-9 px-10 py-1 focus:outline-none text-center"
                type="text"
                placeholder=""
                value={props.enteredOtp}
                onChange={(e) => props.setEnteredOtp(e.target.value)}
              />
            </div>
            <p className="text-center py-6 text-sm text-slate-500">
              Didn't receive the code?
              <Link to={'/'} className="ml-2 text-yellow-500">
                Resend
              </Link>
            </p>
            <div className="text-center">
              <button
                onClick={props.verifyOtp}
                className="rounded-full bg-yellow-500 py-1 px-16 text-slate-50"
              >
                Verify
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}
