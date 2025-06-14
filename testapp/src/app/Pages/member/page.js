'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ManagerDashboard() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        setPrograms([
            { name: 'Phòng ngừa ma túy cho học sinh THPT', users: 150, progress: 78, status: 'Đang chạy' },
            { name: 'Tư vấn gia đình', users: 85, progress: 92, status: 'Sắp kết thúc' },
            { name: 'Kỹ năng sống cho sinh viên', users: 200, progress: 45, status: 'Đang chạy' },
            { name: 'Workshop cho giáo viên', users: 30, progress: 15, status: 'Mới bắt đầu' },
        ]);
    }, []);

    const chartData = {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        datasets: [
            {
                label: 'Người tham gia',
                data: [40, 100, 160, 220, 280, 320],
                fill: false,
                borderColor: '#3B82F6',
                tension: 0.4,
            },
            {
                label: 'Buổi tư vấn',
                data: [20, 45, 90, 110, 140, 180],
                fill: false,
                borderColor: '#10B981',
                tension: 0.4,
            },
        ],
    };

    const riskStats = [
        { label: 'Thấp', color: 'green', percent: 60 },
        { label: 'Trung bình', color: 'yellow', percent: 25 },
        { label: 'Cao', color: 'orange', percent: 12 },
        { label: 'Rất cao', color: 'red', percent: 3 },
    ];

    return (
        <div className="p-6 space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">Quản lý Demo</h1>
                    <p className="text-sm text-gray-600">Quản lý chương trình</p>
                </div>
                <div className="flex gap-3 items-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded">Manager</span>
                    <button className="bg-gray-200 px-4 py-2 rounded">Đăng xuất</button>
                </div>
            </header>

            {/* Tổng quan */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SummaryCard title="Tổng người tham gia" value="1,285" subtitle="+12% so với tháng trước" color="blue" />
                <SummaryCard title="Khóa học đang chạy" value="22" subtitle="ổn định" color="green" />
                <SummaryCard title="Buổi tư vấn tháng này" value="135" subtitle="+20% so với tháng trước" color="indigo" />
                <SummaryCard title="Hiệu quả chương trình" value="87%" subtitle="Cải thiện +5%" color="red" />
            </section>

            {/* Biểu đồ và thao tác */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-4 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-2">📈 Xu hướng tăng trưởng</h2>
                    <Line data={chartData} />
                </div>

                <div className="bg-white p-4 rounded-xl shadow space-y-3">
                    <h2 className="text-lg font-semibold">⚡ Thao tác nhanh</h2>
                    <div className="space-y-2">
                        <button className="w-full bg-slate-100 py-2 rounded">Tạo chương trình mới</button>
                        <button className="w-full bg-slate-100 py-2 rounded">Tạo nội dung blog</button>
                        <button className="w-full bg-slate-100 py-2 rounded">Quản lý Consultant</button>
                        <button className="w-full bg-slate-100 py-2 rounded">Cài đặt khảo sát</button>
                    </div>
                </div>
            </div>

            {/* Quản lý chương trình */}
            <section className="bg-white p-4 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4">🧠 Quản lý chương trình</h2>
                {programs.map((p, i) => (
                    <div key={i} className="border rounded-xl p-4 mb-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{p.name}</p>
                                <p className="text-sm text-gray-600">Người tham gia: {p.users} - Hoàn thành: {p.progress}%</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded bg-gray-100">{p.status}</span>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">Chỉnh sửa</button>
                            <button className="border text-sm px-3 py-1 rounded">Xem báo cáo</button>
                            <button className="border text-sm px-3 py-1 rounded">Thiết lập</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

function SummaryCard({ title, value, subtitle, color }) {
    const colorMap = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
        indigo: 'text-indigo-600',
    };
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className={`text-2xl font-bold ${colorMap[color]}`}>{value}</p>
            <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
    );
}
