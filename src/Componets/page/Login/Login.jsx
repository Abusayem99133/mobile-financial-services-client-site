import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const history = useHistory();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await login(data.identifier, data.pin);
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful!",
      });
      navigate("/profile");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: result.error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email or Phone
          </label>
          <input
            type="text"
            {...register("identifier", {
              required: "Email or phone number is required",
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">
              {errors.identifier.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">PIN</label>
          <input
            type="password"
            {...register("pin", { required: "PIN is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.pin && (
            <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
        <div className="flex justify-end">
          <Link to={"/register"}>
            <p>
              Don't have any account?
              <span className="btn-link">Register</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
