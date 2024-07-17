import { useAuth } from "../../Providers/AuthProvider";

function Profile() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  //   const history = useHistory(); // Initialize useHistory

  return (
    <div className="border p-4">
      <h1>Profile</h1>
      {currentUser ? (
        <>
          <p>Name: {currentUser.name}</p>
          <p>Email: {currentUser.email}</p>
          <p>Balance: {currentUser?.balance}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
