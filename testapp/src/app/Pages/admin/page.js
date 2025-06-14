'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AdminDashboard() {
    const [tab, setTab] = useState('overview'); // Thêm state tab

    // Dữ liệu cho biểu đồ cột
    const barData = {
        labels: ['Users', 'Courses', 'Consultations', 'Assessments'],
        datasets: [
            {
                label: 'Tổng quan',
                data: [1285, 50, 120, 400],
                backgroundColor: '#3B82F6',
                borderRadius: 6,
                barThickness: 40,
            },
        ],
    };

    const barOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, ticks: { stepSize: 350 } },
            x: { grid: { display: false } },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    // Dữ liệu trạng thái hệ thống
    const systemStatus = [
        { label: 'Database', status: 'Tốt', color: 'green' },
        { label: 'API Services', status: 'Tốt', color: 'green' },
        { label: 'File Storage', status: 'Cảnh báo', color: 'yellow' },
        { label: 'Email Service', status: 'Tốt', color: 'green' },
    ];

    // Dữ liệu nhật ký hệ thống
    const logs = [
        { time: '10:30', desc: 'Người dùng mới đăng ký', user: 'nguyenvana@email.com', type: 'red' },
        { time: '09:15', desc: 'Báo cáo khẩn nạp được tạo', user: 'System', type: 'red' },
        { time: '08:45', desc: 'Backup dữ liệu hoàn thành', user: 'Auto', type: 'green' },
        { time: '07:30', desc: 'Đăng nhập trái tại', user: 'unknown@email.com', type: 'red' },
    ];

    // Dữ liệu cho bảng người dùng
    const users = [
        {
            name: 'Nguyễn Văn An',
            email: 'nguyenvana@email.com',
            role: 'Member',
            status: 'Hoạt động',
            statusColor: 'bg-green-600',
            joined: '2024-01-15',
            lastActive: '2024-05-20',
        },
        {
            name: 'Dr. Trần Thị Bình',
            email: 'drtranbinh@email.com',
            role: 'Consultant',
            status: 'Hoạt động',
            statusColor: 'bg-green-600',
            joined: '2023-08-20',
            lastActive: '2024-06-19',
        },
        {
            name: 'Lê Văn Cường',
            email: 'levancuong@email.com',
            role: 'Staff',
            status: 'Tạm khóa',
            statusColor: 'bg-red-500',
            joined: '2024-03-10',
            lastActive: '2024-05-10',
        },
        {
            name: 'Phạm Thị Dung',
            email: 'phamdung@email.com',
            role: 'Manager',
            status: 'Hoạt động',
            statusColor: 'bg-green-600',
            joined: '2023-05-05',
            lastActive: '2024-05-20',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 text-gray-800">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <span className="inline-block text-blue-600">
                            <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="10" stroke="#3B82F6" strokeWidth="2" /></svg>
                        </span>
                        Admin Demo
                    </h1>
                    <p className="text-sm text-gray-500">Quản trị viên hệ thống</p>
                </div>
                <div className="flex-1 flex justify-center mb-4 md:mb-0">
                    <div className="flex gap-2">
                        <button
                            className={`px-4 py-2 rounded ${tab === 'overview' ? 'bg-gray-900 text-white' : 'bg-white border'}`}
                            onClick={() => setTab('overview')}
                        >
                            Tổng quan
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${tab === 'users' ? 'bg-gray-900 text-white' : 'bg-white border'}`}
                            onClick={() => setTab('users')}
                        >
                            Người dùng
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${tab === 'system' ? 'bg-gray-900 text-white' : 'bg-white border'}`}
                            onClick={() => setTab('system')}
                        >
                            Hệ thống
                        </button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold self-center">Admin</span>
                    <button className="bg-white border px-4 py-2 rounded">Đăng xuất</button>
                </div>
            </header>

            {/* Nội dung theo tab */}
            {tab === 'overview' && (
                <>
                    {/* Thống kê tổng quan */}
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <SummaryCard
                            title="Tổng người dùng"
                            value="1,285"
                            subtitle="+5 người dùng mới trên ngày"
                            color="blue"
                        />
                        <SummaryCard
                            title="Hoạt động hệ thống"
                            value="98.5%"
                            subtitle="Uptime trong tháng"
                            color="green"
                        />
                        <SummaryCard
                            title="Lưu trữ đã dùng"
                            value="145GB"
                            subtitle="75% tổng dung lượng"
                            color="purple"
                        />
                        <SummaryCard
                            title="Báo cáo chờ duyệt"
                            value="8"
                            subtitle="3 báo cáo tình cấp"
                            color="red"
                        />
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Cột trái: Biểu đồ + Nhật ký */}
                        <div className="md:col-span-2 flex flex-col gap-6">
                            {/* Biểu đồ thống kê */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <h2 className="text-lg font-semibold mb-2">Thống kê hệ thống</h2>
                                <p className="text-sm text-gray-500 mb-2">Tổng quan các thành phần chính</p>
                                <div className="h-56">
                                    <Bar data={barData} options={barOptions} />
                                </div>
                            </div>
                            {/* Nhật ký hệ thống */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                    <span role="img" aria-label="log">🔒</span> Nhật ký hệ thống
                                </h2>
                                <p className="text-sm text-gray-500 mb-2">Các hoạt động gần đây</p>
                                <ul>
                                    {logs.map((log, idx) => (
                                        <li key={idx} className="flex items-center gap-2 py-1 text-sm border-b last:border-b-0">
                                            <span className="w-14 text-gray-500">{log.time}</span>
                                            <span className={`w-2 h-2 rounded-full ${log.type === 'red' ? 'bg-red-500' : 'bg-green-500'}`}></span>
                                            <span className="flex-1">{log.desc}</span>
                                            <span className="text-gray-400">{log.user}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Cột phải */}
                        <div className="flex flex-col gap-6">
                            {/* Thao tác quản trị */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <h2 className="text-lg font-semibold mb-3">Thao tác quản trị</h2>
                                <button
                                    className="w-full bg-gray-900 text-white py-2 rounded mb-2"
                                    onClick={() => setTab('users')}
                                >
                                    Quản lý người dùng
                                </button>
                                <button className="w-full bg-white border py-2 rounded mb-2 flex items-center gap-2 justify-center">
                                    <span role="img" aria-label="setting">⚙️</span> Cấu hình hệ thống
                                </button>
                                <button className="w-full bg-white border py-2 rounded mb-2 flex items-center gap-2 justify-center">
                                    <span role="img" aria-label="backup">💾</span> Sao lưu dữ liệu
                                </button>
                                <button className="w-full bg-white border py-2 rounded flex items-center gap-2 justify-center">
                                    <span role="img" aria-label="export">⬇️</span> Xuất báo cáo
                                </button>
                            </div>
                            {/* Tình trạng hệ thống */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <h2 className="text-lg font-semibold mb-3">Tình trạng hệ thống</h2>
                                <ul className="space-y-2 text-sm">
                                    {systemStatus.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-center">
                                            <span>{item.label}</span>
                                            <span className={`px-2 py-0.5 rounded text-white text-xs font-semibold ${item.color === 'green' ? 'bg-green-500' : item.color === 'yellow' ? 'bg-yellow-400 text-black' : 'bg-red-500'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Cảnh báo bảo mật */}
                            <div className="bg-white rounded-xl shadow p-4 border border-red-300">
                                <h2 className="text-lg font-semibold mb-2 text-red-600">Cảnh báo bảo mật</h2>
                                <p className="text-sm mb-1">3 đăng nhập trái tại từ IP: <span className="font-mono">192.168.1.100</span></p>
                                <p className="text-sm mb-2">Tài khoản bị khóa<br /><span className="font-mono text-red-600">user@suspicious.com</span></p>
                                <button className="w-full bg-red-600 text-white py-2 rounded">Xem chi tiết</button>
                            </div>
                            {/* Báo cáo nhanh */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <h2 className="text-lg font-semibold mb-3">Báo cáo nhanh</h2>
                                <button className="w-full bg-white border py-2 rounded mb-2">Báo cáo người dùng</button>
                                <button className="w-full bg-white border py-2 rounded mb-2">Báo cáo hoạt động</button>
                                <button className="w-full bg-white border py-2 rounded">Báo cáo bảo mật</button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {tab === 'users' && (
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow p-6 mb-6">
                        <h2 className="text-lg font-semibold flex items-center gap-2 mb-1">
                            <span role="img" aria-label="user">👥</span> Quản lý người dùng
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">Quản lý thông tin và phân quyền người dùng trong hệ thống</p>
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <input className="border rounded px-3 py-2 flex-1" placeholder="Tìm kiếm theo tên hoặc email..." />
                            <select className="border rounded px-3 py-2">
                                <option>Tất cả vai trò</option>
                                <option>Member</option>
                                <option>Consultant</option>
                                <option>Staff</option>
                                <option>Manager</option>
                            </select>
                            <select className="border rounded px-3 py-2">
                                <option>Tất cả trạng thái</option>
                                <option>Hoạt động</option>
                                <option>Tạm khóa</option>
                            </select>
                            <button className="bg-gray-900 text-white px-4 py-2 rounded flex items-center gap-1">
                                <span>+</span> Thêm người dùng
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="py-2 px-4 text-left">NGƯỜI DÙNG</th>
                                        <th className="py-2 px-4 text-left">VAI TRÒ</th>
                                        <th className="py-2 px-4 text-left">TRẠNG THÁI</th>
                                        <th className="py-2 px-4 text-left">NGÀY THAM GIA</th>
                                        <th className="py-2 px-4 text-left">HOẠT ĐỘNG CUỐI</th>
                                        <th className="py-2 px-4 text-left">THAO TÁC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u, idx) => (
                                        <tr key={idx} className="border-b last:border-b-0">
                                            <td className="py-2 px-4">
                                                <div className="font-semibold">{u.name}</div>
                                                <div className="text-xs text-gray-500">{u.email}</div>
                                            </td>
                                            <td className="py-2 px-4">{u.role}</td>
                                            <td className="py-2 px-4">
                                                <span className={`px-2 py-1 rounded text-white text-xs font-semibold ${u.statusColor}`}>
                                                    {u.status}
                                                </span>
                                            </td>
                                            <td className="py-2 px-4">{u.joined}</td>
                                            <td className="py-2 px-4">{u.lastActive}</td>
                                            <td className="py-2 px-4 flex gap-2">
                                                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200" title="Sửa"><span>✏️</span></button>
                                                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200" title="Đổi mật khẩu"><span>🔑</span></button>
                                                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200" title="Xóa"><span>🗑️</span></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'system' && (
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold mb-6">Cấu hình hệ thống</h2>
                    <div className="bg-white rounded-xl shadow p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-2">Cài đặt email</h3>
                        <p className="text-sm text-gray-500 mb-4">Cấu hình SMTP và email template</p>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded">Cấu hình email</button>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-2">Backup &amp; Restore</h3>
                        <p className="text-sm text-gray-500 mb-4">Quản lý sao lưu và khôi phục dữ liệu</p>
                        <div className="flex gap-2">
                            <button className="bg-gray-900 text-white px-4 py-2 rounded">Tạo backup</button>
                            <button className="bg-white border px-4 py-2 rounded">Khôi phục</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function SummaryCard({ title, value, subtitle, color }) {
    const colorMap = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
        purple: 'text-purple-600',
    };
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <div className="text-xs font-semibold text-gray-500 mb-1">{title}</div>
            <div className={`text-2xl font-bold ${colorMap[color]}`}>{value}</div>
            <div className="text-xs text-gray-400 mt-1">{subtitle}</div>
        </div>
    );
}