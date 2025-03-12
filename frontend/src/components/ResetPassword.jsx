import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/auth/reset-password/${token}`, { password });
            setMessage(response.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Error resetting password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-md bg-white p-8 shadow-md rounded"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                {message && <p className="text-center text-red-500">{message}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">New Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full border rounded px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mb-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;