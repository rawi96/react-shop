import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

function SignInAndSignUp() {
  return (
    <div className="flex justify-around flex-wrap">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
