import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    toast.success('OTP verified successfully!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  }, []);
  return (
    <div className="text-center py-8">
      <img className="mt-10" src="/src/assets/Artboard 1.png" />
      <h1 className="pb-4 pt-8 text-gray-800 font-semibold text-2xl">
        Welcome to AdmitKard
      </h1>
      <p className="text-sm text-gray-500">
        In order to provide you with <br /> a custom experience,
      </p>
      <p className="text-gray-700 font-medium">
        we need to ask you a few questions.
      </p>
      <Link to={'/'}>
        <button className="rounded-full bg-yellow-500 py-1 px-6 mt-10 text-slate-50">
          Get Started
        </button>
      </Link>
      <p className="text-sm text-gray-500 mt-1">*This will only take 5 min.</p>
      <ToastContainer />
    </div>
  );
}
