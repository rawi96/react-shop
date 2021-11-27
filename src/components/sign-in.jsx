import { useState } from "react";
import Button from "../components/button";
import FormInput from "../components/form-input";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
           await auth.signInWithEmailAndPassword(email, password);
           setEmail('');
           setPassword(''); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2 className="text-4xl font-bold mb-5">Sign in</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" handleChange={e => setEmail(e.target.value)}></FormInput>
                <FormInput label="Password" type="password" handleChange={e => setPassword(e.target.value)}></FormInput>
                <div className="flex justify-end">
                    <Button type="submit" value="Sign in"></Button>
                    <Button type="button" isGoogle onClick={signInWithGoogle} value="Sign in with Google"></Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
