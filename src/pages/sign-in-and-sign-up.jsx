import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

function SignInAndSignUp() {
  return (
    <div className="flex-auto mx-3.5">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
