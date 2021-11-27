import { useState } from "react";
import Button from "./button";
import FormInput from "./form-input";
import { auth, createUserProfileDocument, signInWithGoogle } from "../firebase/firebase.utils";

function SignUp() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" type="text" handleChange={e => setDisplayName(e.target.value)}></FormInput>
            <FormInput label="Email" type="email" handleChange={e => setEmail(e.target.value)}></FormInput>
            <FormInput label="Password" type="password" handleChange={e => setPassword(e.target.value)}></FormInput>
            <FormInput label="Confirm Password" type="password" handleChange={e => setConfirmPassword(e.target.value)}></FormInput>
            <div className="flex justify-end">
                <Button type="submit" value="Sign up"></Button>
            </div>
        </form>
    );
}

export default SignUp;
