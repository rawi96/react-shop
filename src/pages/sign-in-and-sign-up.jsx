import { useState } from "react";
import Button from "../components/button";
import FormInput from "../components/form-input";

function SignInAndSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    console.log('asdf');
    e.preventDefault();
  }

  return (
    <div className='flex flex-col w-1/2'>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" handleChange={e => setEmail(e.target.value)}></FormInput>
        <FormInput label="Password" type="password" handleChange={e => setPassword(e.target.value)}></FormInput>
        <Button type="submit" value="Sign in"></Button>
      </form>
    </div>
  );
}

export default SignInAndSignUp;
