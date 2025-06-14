'use client';

import { useEffect, useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ArcElement);

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

    // Thêm dữ liệu cho biểu đồ donut
    const riskDonutData = {
        labels: ['Thấp', 'Trung bình', 'Cao', 'Rất cao'],
        datasets: [
            {
                data: [60, 25, 12, 3],
                backgroundColor: ['#22c55e', '#facc15', '#fb923c', '#ef4444'],
                borderWidth: 0,
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
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen text-gray-800">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-slate-800">Quản lý Demo</h1>
                    <p className="text-sm text-gray-500">Quản lý chương trình</p>
                </div>
                <div className="flex gap-3 items-center">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-sm rounded">Manager</span>
                    <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-sm">Đăng xuất</button>
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
                    <h2 className="text-lg font-semibold mb-2 text-slate-700">📈 Xu hướng tăng trưởng</h2>
                    <Line data={chartData} />
                </div>

                <div className="space-y-6">
                    {/* Thao tác nhanh */}
                    <div className="bg-white p-4 rounded-xl shadow space-y-3">
                        <h2 className="text-lg font-semibold text-slate-700">⚡ Thao tác nhanh</h2>
                        <div className="space-y-2">
                            <button className="w-full bg-slate-100 hover:bg-slate-200 py-2 rounded">
                                Tạo chương trình mới
                            </button>
                            <button className="w-full bg-slate-100 hover:bg-slate-200 py-2 rounded">
                                Tạo nội dung blog
                            </button>
                            <button className="w-full bg-slate-100 hover:bg-slate-200 py-2 rounded">
                                Quản lý Consultant
                            </button>
                            <button className="w-full bg-slate-100 hover:bg-slate-200 py-2 rounded">
                                Cài đặt khảo sát
                            </button>
                        </div>
                    </div>

                    {/* Phân bố nguy cơ */}
                    <div className="bg-white p-4 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-2 text-slate-700">Phân bố nguy cơ</h2>
                        <p className="text-sm mb-2 text-gray-500">Tháng này</p>
                        <div className="flex items-center justify-center h-40">
                            <Doughnut
                                data={riskDonutData}
                                options={{
                                    cutout: '70%',
                                    plugins: {
                                        legend: { display: false }
                                    }
                                }}
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span> Thấp: 60%
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span> Trung bình: 25%
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="inline-block w-3 h-3 rounded-full bg-orange-400"></span> Cao: 12%
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span> Rất cao: 3%
                            </div>
                        </div>
                    </div>

                    {/* Quản lý nội dung */}
                    <div className="bg-white p-4 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-2 text-slate-700">Quản lý nội dung</h2>
                        <ul className="mb-3 text-sm space-y-1">
                            <li>Bài blog đã đăng <span className="float-right font-semibold">45</span></li>
                            <li>Video hướng dẫn <span className="float-right font-semibold">12</span></li>
                            <li>Tài liệu PDF <span className="float-right font-semibold">28</span></li>
                            <li>Chờ duyệt <span className="float-right font-semibold text-red-600">5</span></li>
                        </ul>
                        <button className="w-full bg-slate-900 text-white py-2 rounded">Quản lý tất cả</button>
                    </div>
                </div>
            </div>

            {/* Quản lý chương trình */}
            <section className="bg-white p-4 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-slate-700">🧠 Quản lý chương trình</h2>
                {programs.map((p, i) => (
                    <div key={i} className="border rounded-xl p-4 mb-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-slate-800">{p.name}</p>
                                <p className="text-sm text-gray-600">Người tham gia: {p.users} - Hoàn thành: {p.progress}%</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{p.status}</span>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">
                                Chỉnh sửa
                            </button>
                            <button className="border border-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-50">
                                Xem báo cáo
                            </button>
                            <button className="border border-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-50">
                                Thiết lập
                            </button>
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
