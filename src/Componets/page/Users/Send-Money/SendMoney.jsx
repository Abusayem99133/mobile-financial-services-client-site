import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const token = localStorage.getItem("token"); // Assume token is stored in localStorage after login
      const response = await axios.post(
        "http://localhost:5000/send-money",
        {
          mobileNumber,
          amount: parseFloat(amount),
          pin,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.error || "Transaction failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Send Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">PIN</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full btn btn-primary">
            Send Money
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default SendMoney;
