import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const [showPin, setShowPin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosPublic.put("/register", data);
      console.log(response.data); // Log the response data if needed
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registration successful!",
      });
      navigate("/dashboard/profile");
    } catch (error) {
      console.error("Registration failed:", error);
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "Please try again later.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Mobile Financial | Register</title>
      </Helmet>

      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              {...register("number", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{11}$/,
                  message: "Mobile number must be exactly 11 digits",
                },
                validate: (value) =>
                  /^\d+$/.test(value) ||
                  "Mobile number must contain only numbers",
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.number.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Pin */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              5-digit PIN
            </label>
            <input
              type="text"
              {...register("pin", {
                required: "PIN is required",
                pattern: {
                  value: /^\d{5}$/,
                  message: "PIN must be a 5-digit number",
                },
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.pin && (
              <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>
            )}
          </div>
          {/* Role */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700">
              User Role
            </label>
            <div className="relative">
              <select
                {...register("role", { required: true })}
                name="role"
                type="text"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Role...</option>
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>
              {errors.role && (
                <span className="text-red-500 text-sm mt-1">
                  Please select a role
                </span>
              )}
            </div>
          </div>

          <button type="submit" className="w-full btn btn-primary">
            Register
          </button>
          <div>
            <Link to={"/login"}>
              <p>
                Already have an account?
                <span className="btn-link">Login</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
