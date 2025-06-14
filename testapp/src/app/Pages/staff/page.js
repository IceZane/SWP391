'use client';

import { useEffect, useState } from 'react';

export default function StaffDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [supportUsers, setSupportUsers] = useState([]);
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    setAppointments([
      { name: 'Nguyễn Văn A', priority: 'Cao', time: '23/06/2024 - 14:00 - 15:00' },
      { name: 'Trần Thị B', priority: 'Trung bình', time: '23/06/2024 - 15:30 - 16:30' },
      { name: 'Lê Văn C', priority: 'Thấp', time: '24/06/2024 - 09:00 - 10:00' },
    ]);

    setSupportUsers([
      { name: 'Phạm Văn D', score: '15/40', type: 'ASSIST', risk: 'Nguy cơ Cao', time: '2 giờ trước' },
      { name: 'Hoàng Thị E', score: '4/6', type: 'CRAFFT', risk: 'Nguy cơ Cao', time: '1 ngày trước' },
    ]);

    setConsultants([
      { name: 'Dr. Nguyễn Thành', status: 'Có sẵn' },
      { name: 'Th.S Trần Lan', status: 'Bận' },
      { name: 'Dr. Lê Minh', status: 'Có sẵn' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Nhân viên hỗ trợ</h1>
          <p className="text-sm text-black">Staff</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded">Staff</span>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Đăng xuất</button>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Lịch hẹn chờ xử lý" value={appointments.length} color="orange" />
        <DashboardCard title="Người dùng cần hỗ trợ" value={supportUsers.length} color="red" />
        <DashboardCard title="Đã xử lý hôm nay" value="12" color="green" />
        <DashboardCard title="Consultant có sẵn" value={consultants.filter(c => c.status === 'Có sẵn').length} color="blue" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <SectionCard title="📅 Lịch hẹn chờ xử lý">
            {appointments.map((a, i) => (
              <AppointmentCard key={i} {...a} />
            ))}
          </SectionCard>

          <SectionCard title="⚠ Người dùng cần hỗ trợ">
            {supportUsers.map((u, i) => (
              <SupportUserCard key={i} {...u} />
            ))}
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="Thao tác nhanh">
            <div className="flex flex-col gap-2">
              <button className="bg-gray-900 text-white px-3 py-2 rounded">Tạo báo cáo</button>
              <button className="bg-white border px-3 py-2 rounded">Lịch hôm nay</button>
              <button className="bg-white border px-3 py-2 rounded">Danh sách người dùng</button>
            </div>
          </SectionCard>

          <SectionCard title="Tình trạng Consultant">
            <ul className="text-sm space-y-1">
              {consultants.map((c, i) => (
                <li key={i}>{c.name} - <span className={c.status === 'Có sẵn' ? 'text-green-600' : 'text-gray-600'}>{c.status}</span></li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, color }) {
  const colorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    orange: "text-orange-500",
  };
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-sm text-black">{title}</h3>
      <p className={`text-2xl font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function AppointmentCard({ name, priority, time }) {
  return (
    <div className="bg-white p-3 rounded border mb-3">
      <div className="flex justify-between text-sm">
        <span className="font-semibold">{time}</span>
        <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-600">{priority}</span>
      </div>
      <div className="mt-1">{name}</div>
      <div className="flex gap-2 mt-2">
        <button className="bg-gray-900 text-white px-3 py-1 rounded text-sm">Phân công Consultant</button>
        <button className="bg-white border px-3 py-1 rounded text-sm">Xem chi tiết</button>
        <button className="bg-white border px-3 py-1 rounded text-sm">Đổi lịch</button>
      </div>
    </div>
  );
}

function SupportUserCard({ name, score, type, risk, time }) {
  return (
    <div className="bg-white p-3 rounded border mb-3">
      <p className="font-semibold">{name} <span className="text-xs text-red-600 ml-2">{risk}</span></p>
      <p className="text-sm text-black">{type}: {score}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Liên hệ ngay</button>
        <button className="bg-white border px-3 py-1 rounded text-sm">Xem hồ sơ</button>
        <button className="bg-white border px-3 py-1 rounded text-sm">Gửi tài liệu</button>
      </div>
    </div>
  );
}