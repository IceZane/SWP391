'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const goToRegister = () => {
        router.push('/register');
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f3f4f6'
        }}>
            <form style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                minWidth: '320px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: "black" }}>Đăng nhập</h2>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: "black" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: "black" }}>Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: "black" }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" id="remember" name="remember" style={{ marginRight: '0.5rem' }} />
                    <label htmlFor="remember" style={{ color: "black" }}>Ghi nhớ mật khẩu</label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <button type="submit" style={{
                        flex: 1,
                        padding: '0.75rem',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        Đăng nhập
                    </button>

                    <button type="button" onClick={goToRegister} style={{
                        flex: 1,
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
                </div>
            </form>
        </div>
    );
}
