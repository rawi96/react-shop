import { useState } from "react";
import Button from "../components/button";
import FormInput from "../components/form-input";
import { signInWithGoogle } from "../firebase/firebase.utils";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        console.log('asdf');
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" handleChange={e => setEmail(e.target.value)}></FormInput>
            <FormInput label="Password" type="password" handleChange={e => setPassword(e.target.value)}></FormInput>
            <div className="flex justify-end">
                <Button type="submit" value="Sign in"></Button>
                <Button isGoogle onClick={signInWithGoogle} value="Sign in with Google"></Button>
            </div>
        </form>
    );
}

export default SignIn;
