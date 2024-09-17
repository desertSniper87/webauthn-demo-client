import './App.css';
import { client } from '@passwordless-id/webauthn';
import { server } from '@passwordless-id/webauthn';

function App() {
    const authenticate = () => {};
    const register = async () => {
        await client.register({
            challenge: '12345678901234567890123456789012',
            user: 'Samidhya Sarker',
        });
    };
    const verify = async () => {
        await server.verifySignature({});
    };

    return (
        <>
            <div>
                <button onClick={() => register()}>Register</button>
            </div>
            <div>
                <button onClick={() => authenticate()}>Authenticate</button>
            </div>
            <div>
                <button onClick={() => verify()}>Verify</button>
            </div>
        </>
    );
}

export default App;
