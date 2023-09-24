import { ToastContainer } from 'react-toastify';

export default function Signin(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="pt-20">
        <figure className="flex justify-center items-center mt-10 mb-16">
          <img src="/src/assets/AK_logo.png" />
        </figure>
        <h2 className="text-center py-1 text-2xl">Welcome Back</h2>
        <p className="py-1 text-center text-base text-slate-500">
          Please sign in to your account
        </p>
        <fieldset className="border border-yellow-400 mt-10 px-4">
          <legend className="text-sm text-slate-500">
            Enter Contact Number
          </legend>
          <select
            className="bg-white text-gray-700 focus:outline-none"
            value={props.selectedCountryCode}
            onChange={(e) => props.setSelectedCountryCode(e.target.value)}
          >
            {props.countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} {country.code}
              </option>
            ))}
          </select>
          <input
            className="my-1 border-slate-50 focus:outline-none ml-1"
            type="text"
            placeholder=""
            value={props.mobileNumber}
            onChange={(e) => props.setMobileNumber(e.target.value)}
          />
        </fieldset>
        <p className="text-center py-6 text-xs text-slate-500">
          We will send you a one time SMS message.
          <br />
          Charges may apply.
        </p>
        <div className="text-center mt-8">
          <button
            onClick={props.sendOtp}
            className="rounded-full bg-yellow-500 py-1 px-10 text-slate-50"
          >
            Sign in with OTP
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
