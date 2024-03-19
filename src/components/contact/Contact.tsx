import React, { useState } from "react";
import img from "../../assets/images/logo.png"
import { useStoreSelector } from "../../store/hooks";
import axios from "axios";


const Contact: React.FC = () => {

  const state = useStoreSelector((state) => state.globalReducer)
  
  const [user_name, setUser_name] = useState<string>("");
  const [user_surname, setUser_surname] = useState<string>("");
  const [user_email, setUser_email] = useState<string>("");
  const [user_message, setUser_messae] = useState<string>("");
  const [user_check, setUser_check] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const DATA = {
      service_id: "service_4yfil2v",
      template_id: "template_7x1epr8",
      user_id: "z96csXSCZK5wNKmbc",
      template_params: {
        user_name,
        user_surname,
        user_email,
        user_message,
      },
    };
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", DATA);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
    finally {
      setUser_name("");
      setUser_surname("");
      setUser_email("");
      setUser_messae("");
      setUser_check(false);
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${state.darkMode ? "bg-gradient-to-t from-stone-950 to-amber-900 text-white" : "bg-gradient-to-t from-amber-500 to-amber-200 text-slate-900"}`}>
      <div className={`sm:w-[100%] 2xl:w-9/12 flex flex-col-reverse md:flex-row m-10 bg-red-500 rounded-2xl shadow-2xl ${state.darkMode ? "shadow-amber-600/100" : " shadow-amber-900/100"}`}>
        <div className="2xl:w-1/3 w-[100%] bg-gradient-to-br from-amber-900 to-amber-700 relative rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none">
          <img
            src={img}
            alt="Logo"
            className="w-[100%] h-[100%] object-cover absolute mix-blend-soft-light rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none"
          />
          <div className="px-10 py-10 sm:p-10">
            <p className="text-slate-100 text-xl text-justify font-bold tracking-wide leading-8 sm:py-[50%]">
              { state.contact.imgContent  }
            </p>
          </div>
        </div>
        <div className="2xl:w-2/3 w-[100%] bg-amber-200 rounded-t-2xl sm:rounded-r-2xl sm:rounded-l-none sm:py-20 pt-4 px-4">
          {!success && !error ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 mb-6">
                <input
                  value={user_name}
                  name="user_name"
                  onChange={(e) => setUser_name(e.target.value)}
                  placeholder={ state.contact.firstname }
                  type="text"
                  required
                  className="border border-amber-800 py-1 px-2 text-slate-900 focus:outline-none focus:border-2 focus:border-amber-600 rounded-md"
                />
                <input
                  value={user_surname}
                  name="user_surname"
                  onChange={(e) => setUser_surname(e.target.value)}
                  placeholder={ state.contact.lastname }
                  type="text"
                  required
                  className="border border-amber-800 py-1 px-2 text-slate-900 focus:outline-none focus:border-2 focus:border-amber-600 rounded-md"
                />
              </div>
              <div className="flex flex-col mt-5 gap-4 mb-6">
                <input
                  value={user_email}
                  name="user_email"
                  onChange={(e) => setUser_email(e.target.value)}
                  placeholder={ state.contact.email }
                  type="email"
                  required
                  className="w-full border border-amber-800 py-1 px-2 mb-6 text-slate-900 focus:outline-none focus:border-2 focus:border-amber-600 rounded-md"
                />
                <textarea
                  value={user_message}
                  name="user_message"
                  onChange={(e) => setUser_messae(e.target.value)}
                  placeholder={ state.contact.message }
                  required
                  maxLength={500}
                  className="py-1 px-2 h-48 border border-amber-800 resize-none text-slate-900 focus:outline-none focus:border-2 focus:border-amber-600 rounded-md"
                ></textarea>
              </div>
              <div className="mt-5 flex justify-center text-slate-900">
                <input
                  required
                  checked={user_check}
                  onChange={(e) => setUser_check(e.target.checked)}
                  type="checkbox"
                  name="check"
                  id="check"
                  className="border border-amber-800 mr-4"
                />
                <span>
                  {" "}
                  I accept the{" "}
                  <a className="text-amber-600 font-semibold" href="">
                    terms of Use
                  </a>{" "}
                  &{" "}
                  <a className="text-amber-600 font-semibold" href="">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-10 w-full flex justify-center">
                <button className="bg-amber-800 hover:bg-amber-900 w-1/2 rounded-2xl py-2 my-4 text-xl sm:text-2xl font-medium tracking-wider text-white">
                { state.contact.btn}
                </button>
              </div>
            </form>
          ) : success ? (
            <div
              onClick={() => setSuccess(false)}
              className={`my-[50%] sm:mt-10 py-4 px-2 text-center shadow-2xl ${state.darkMode ? "bg-amber-800 shadow-amber-600/100" : "bg-amber-500 shadow-amber-900/100"} font-medium tracking-wide rounded-lg text-xl sm:text-2xl cursor-pointer`}
            >
              { state.contact.success }
            </div>
          ) : (
            <div
              onClick={() => setError(false)}
              className="my-[50%] sm:mt-10 py-4 text-center bg-red-300 shadow-xl font-bold tracking-wide text-slate-600 rounded-lg text-xl sm:text-2xl cursor-pointer"
            >
              { state.contact.error }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
