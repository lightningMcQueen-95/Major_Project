Hostel Management System

A web-based Hostel Management System built with React + Tailwind CSS.
This project allows Students, Wardens, and Admins to manage hostel requests like room transfers, outpasses, complaints, and more.

🚀 Features

Login System (Student / Warden / Admin)

Room Allotment & Transfer

Outpass Management (with approval flow)

Complaint Management

Notification System (students get request status updates)

Role-based dashboards (Student → My Requests, Warden/Admin → Manage Requests)

👥 Users & Demo Credentials
Role	Username	Password
Student	student	123
Warden	warden	123
Admin	admin	123
🖼️ Screenshots
homepage.PNG

📊 Dashboard

🛠️ Installation & Setup
1. Clone the Repo
git clone https://github.com/<your-repo-name>.git
cd <your-repo-name>

2. Install Dependencies
npm install

3. Run the Development Server
npm start


Now open http://localhost:3000
 in your browser 🎉

⚡ Tech Stack

Frontend: React (CRA)

Styling: Tailwind CSS v3

Icons: lucide-react

📂 Folder Structure
my-app/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── OutpassTracking.js
│   │   ├── RoomManagement.js
│   │   └── ...other components
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── public/
│   └── screenshots/
│       ├── login.png
│       └── dashboard.png
├── package.json
└── README.md

🔧 Notes for Developers

Currently using Tailwind CSS v3 (because v4 is not yet supported by CRA).

If you want to use Tailwind v4, migrate project to Vite or Next.js.

All requests are currently stored in React state (no backend yet).
