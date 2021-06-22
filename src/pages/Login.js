import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/actionCreators/user";
import logo from "../assets/logo.png";

let data = {
  username: "",
  password: "",
};

function Login({ history }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      const credentials = {
        username: formData.username,
        password: formData.password,
      };
      dispatch(signIn(history, credentials));
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className={`w-5/6 mx-auto h-screen flex items-center justify-center`}>
      <div className={`w-10/12 xl:w-10/12 flex justify-between`}>
        <section className={`w-3/6 max-w-md`}>
          <div className={`mt-10`}>
            <h1 className={`text-3xl my-5`}>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className={`flex justify-between mt-8`}>
                <div className="flex flex-col text-xs text-gray-400">
                  <p>username: achala</p>
                  <p>password: Test@1234</p>
                </div>
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className={`w-3/6 max-w-md flex items-center justify-center`}>
          <h1 className="text-4xl mr-5 font-bold">Avan</h1>
          <img src={logo} alt="avantrio_logo" className="h-10 w-10 mt-1" />
        </section>
      </div>
    </div>
  );
}

export default Login;
