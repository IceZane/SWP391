'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }

        // Xử lý đăng ký ở đây (API, lưu state, v.v.)
        console.log('Dữ liệu đăng ký:', form);

        // Chuyển về trang đăng nhập sau khi đăng ký xong
        router.push('/login');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f3f4f6'
        }}>
            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                minWidth: '340px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: "black" }}>Đăng ký tài khoản</h2>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="username" style={{ color: "black" }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={form.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ color: "black" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ color: "black" }}>Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="confirmPassword" style={{ color: "black" }}>Xác nhận mật khẩu:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <button type="submit" style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Đăng ký
                </button>
            </form>
        </div>
    );
}
