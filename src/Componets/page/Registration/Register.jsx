import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [showPin, setShowPin] = useState(false);

  const handleTogglePin = () => {
    setShowPin(!showPin);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const number = form.get("number");
    const role = form.get("role");
    const pin = form.get("pin");

    // Validate pin length
    if (pin.length !== 5) {
      Swal.fire({
        title: "Error!",
        text: "Pin must be exactly 5 digits long",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    const userRegister = {
      name,
      email,
      number,
      role,
      pin,
    };
    console.log(userRegister);

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userRegister),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Registration Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="number"
                  placeholder="mobile number"
                  className="input input-bordered"
                  name="number"
                  required
                />
              </div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Role</span>
                </div>
                <select
                  name="role"
                  className="select input-bordered w-full max-w-xs"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Role
                  </option>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
              </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">5-Digit-PIN</span>
                </label>
                <div className="relative">
                  <input
                    type={showPin ? "text" : "password"}
                    placeholder="pin"
                    className="input input-bordered w-full"
                    name="pin"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleTogglePin}
                    className="absolute right-2 top-2 btn btn-ghost"
                  >
                    {showPin ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="py-4 px-4">
              All Ready Have an Account{" "}
              <Link className="btn-link" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
