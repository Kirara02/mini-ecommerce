import { React, useState } from 'react';
import { useAuth } from '../auth/useAuth';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';


const SignInPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isValidForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const {signIn} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(username, password);
    }

    return (
        <div className="login-panel shadow-8">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>Masukan username dan password anda</p>
                <div className="mb-3">
                    <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
                </div>
                <div className="mb-3">
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false} placeholder='Password'/>
                </div>
                <div className="mb-3">
                    <Button type='submit' disabled={!isValidForm()}>SignIn</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInPage;