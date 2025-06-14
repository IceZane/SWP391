import React from "react";

export default function ConsultantDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Chuyên viên Demo</h1>
          <p className="text-sm text-gray-500">Chuyên viên tư vấn</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">Consultant</span>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Đăng xuất</button>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Lịch hẹn hôm nay" value="6" color="blue" />
        <DashboardCard title="Tổng ca tư vấn / Tháng này" value="45" color="green" />
        <DashboardCard title="Trường hợp nguy cơ cao" value="3" color="red" />
        <DashboardCard title="Đánh giá trung bình" value="4.8/5" color="yellow" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <SectionCard title="Lịch hẹn hôm nay">
            {[
              { name: "Nguyễn Văn A", time: "09:00 - 10:00", status: "Sắp tới", level: "Trung bình" },
              { name: "Trần Thị B", time: "10:30 - 11:30", status: "Đang diễn ra", level: "Cao" },
              { name: "Lê Văn C", time: "14:00 - 15:00", status: "Chưa bắt đầu", level: "Thấp" },
              { name: "Phạm Thị D", time: "15:30 - 16:30", status: "Chưa bắt đầu", level: "Rất cao" },
            ].map((item, idx) => (
              <AppointmentCard key={idx} {...item} />
            ))}
          </SectionCard>

          <SectionCard title="Quản lý ca bệnh">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">Nguyễn Văn E</h3>
                <p className="text-sm text-gray-500">Tiến triển điều trị - 5 buổi tư vấn</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Buổi cuối: 3 ngày trước</span>
                  <span>Đánh giá tiến triển</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="bg-gray-100 px-2 py-1 rounded text-sm">Ghi chú mới</button>
                  <button className="bg-gray-100 px-2 py-1 rounded text-sm">Xem hồ sơ</button>
                  <button className="bg-gray-100 px-2 py-1 rounded text-sm">Lên kế hoạch</button>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="Thao tác nhanh">
            <div className="flex flex-col gap-2">
              <button className="bg-gray-900 text-white px-3 py-2 rounded">Tạo phiếu tư vấn</button>
              <button className="bg-white border px-3 py-2 rounded">Xem lịch tuần</button>
              <button className="bg-white border px-3 py-2 rounded">Danh sách bệnh nhân</button>
            </div>
          </SectionCard>

          <SectionCard title="🚨 Cảnh báo nguy cơ cao" className="border-red-500 text-red-700">
            <p>Phạm Thị D</p>
            <p>Điểm ASSIST: 19/40</p>
            <p>Cần can thiệp ngay</p>
            <button className="mt-2 bg-red-600 text-white px-3 py-2 rounded w-full">Xem chi tiết</button>
          </SectionCard>

          <SectionCard title="Thống kê tuần này">
            <ul className="text-sm">
              <li>Tổng buổi tư vấn: 28</li>
              <li>Bệnh nhân mới: 5</li>
              <li>Trường hợp hoàn thành: 2</li>
              <li>Tỷ lệ cải thiện: 85%</li>
            </ul>
          </SectionCard>

          <SectionCard title="Công cụ đánh giá">
            <div className="flex flex-col gap-2">
              <button className="bg-white border px-3 py-2 rounded">ASSIST Screening</button>
              <button className="bg-white border px-3 py-2 rounded">CRAFFT Assessment</button>
              <button className="bg-white border px-3 py-2 rounded">Đánh giá tiến triển</button>
              <button className="bg-white border px-3 py-2 rounded">Mẫu ghi chú tư vấn</button>
            </div>
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
  };
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}

function SectionCard({ title, children, className = "" }) {
  return (
    <div className={`bg-white p-4 rounded shadow ${className}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function AppointmentCard({ name, time, status, level }) {
  return (
    <div className="bg-white p-3 rounded border mb-3">
      <div className="flex justify-between text-sm">
        <span className="font-semibold">{time}</span>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-200">{status}</span>
      </div>
      <div className="mt-1">{name} <span className="ml-2 text-xs text-gray-500">{level}</span></div>
      <div className="flex gap-2 mt-2">
        <button className="bg-white border px-3 py-1 rounded text-sm">Xem hồ sơ</button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Bắt đầu</button>
        <button className="bg-white border px-3 py-1 rounded text-sm">Đổi lịch</button>
      </div>
    </div>
  );
}
