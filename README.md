# 🚀 Kaira DigitalHub

> **Next-Generation Tech Academy & Enterprise Digital Engineering Studio**  
> An integrated platform delivering production-grade web systems, autonomous AI pipelines, and accredited tech cohorts inspired by modern, high-converting marketplace aesthetics.

---

## 🎨 Design System & Color Palette

Kaira DigitalHub incorporates an authentic **Udemy-style marketplace experience** enhanced by **3D perspective depth cues** and a curated modern color palette:

| Color Token | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Electric Blue** | `#30AFFF` | Primary CTA buttons, active tabs, focus borders, primary brand accents |
| **Luminous Cyan** | `#92EEFF` | Secondary highlights, "Highest Rated" pills, glowing ambient orbs |
| **Mint Green** | `#D8FFC5` | Udemy-style **"Bestseller"** badges, review highlights, success alerts |
| **Mint Pastel** | `#C4F7CA` | Technology stack tags, metric indicators, pill highlights |
| **Charcoal / Black** | `#070D18` / `#1C1D1F` | Bold headings, high-contrast text, dark billboard accents, footer |
| **Clean White** | `#FFFFFF` / `#F8FAFC` | Crisp marketplace cards, input surfaces, and light backdrop |

---

## ✨ Platform Features

### 🎓 1. Udemy-Style Academy Marketplace
- **Central Search Engine**: Wide search input in the navigation bar supporting real-time skill & course filtering via URL queries.
- **Categorized Tabs**: Quick filtering across *Web Development*, *AI & Data*, *Cloud & DevOps*, *Mobile Apps*, and *Cybersecurity*.
- **Udemy Course Cards**:
  - 16:9 visual thumbnail banner with difficulty tag and duration
  - **"Bestseller"** / **"Highest Rated"** badges in `#D8FFC5` and `#92EEFF`
  - 5-star golden rating score (`4.9 ★★★★★`) with review counts
  - Discounted pricing with original price strikethrough (`$24.99` ~~$89.99~~)
  - One-click enrollment modal.

### 🌐 2. 3D Floating Visual Showcase
- **Perspective Hero Showcase**: Layered 3D isometric tech platform with floating glass course card, floating live enrollment counter (`12,500+ Enrolled`), and floating SLA badge (`⚡ 99.9% Production SLA`).
- **Smooth Depth Animations**: Interactive hover elevations and subtle tilt micro-interactions.

### 💼 3. Enterprise Digital Services Studio
- Comprehensive service catalog covering **Full-Stack Web Engineering**, **Enterprise AI & Machine Learning**, **Cloud & DevOps**, **Mobile Apps**, **UI/UX Systems**, and **Cybersecurity**.
- 4-stage transparent agile delivery blueprint (*Discovery -> Sprint Execution -> Automated QA -> Launch*).
- Instant quote request workflow.

### 🏆 4. Community Hackathons & Live Webinars
- Interactive tech events schedule with category tags (*Hackathons*, *Webinars*, *Workshops*, *Summits*).
- Live remaining seat countdown and free RSVP pass reservation modal.

### 🚀 5. Client Projects & Case Studies
- Production systems showcase with technology stack badges and real client ROI metrics (*99.999% SLA*, *+64% Conversion*, *4x Faster Triage*).

### 📬 6. Full Contact & Admissions Suite
- Direct message and consultation form connected to the backend API.
- Global campus office details, direct phone, email, and interactive FAQ accordion.

---

## 🗂️ Project Structure

```
digitalhub/
│
├── README.md                      ← Project documentation & specifications
│
├── Frontend/                      ← React 19 + Vite + TailwindCSS v4
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Images/
│   │   │   │   └── logo.png       ← Official Hexagonal KT Brand Emblem
│   │   │   ├── hero.png           ← 3D Isometric Platform Graphic
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
│   │   ├── components/
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.jsx     ← Udemy-Style Header with Logo & Search
│   │   │   │   └── Footer.jsx     ← Clean Dark Footer with Social Links
│   │   │   │
│   │   │   ├── CourseCard.jsx     ← Udemy Course Card Component
│   │   │   ├── ServiceCard.jsx    ← Enterprise Service Card Component
│   │   │   ├── EventCard.jsx      ← Event & Hackathon Card Component
│   │   │   ├── ProjectCard.jsx    ← Portfolio Showcase Card Component
│   │   │   ├── EnquiryModal.jsx   ← Service Quotation Modal
│   │   │   └── RegistrationModal.jsx ← Course & Event RSVP Modal
│   │   │
│   │   ├── Pages/
│   │   │   ├── Home.jsx           ← Hero Billboard + 3D Showcase + Market
│   │   │   ├── Courses.jsx        ← Academy Catalog with Search & Filter
│   │   │   ├── Services.jsx       ← Enterprise Services & Delivery Model
│   │   │   ├── Events.jsx         ← Hackathons & Webinars Calendar
│   │   │   ├── Projects.jsx       ← Client Case Studies & Metrics
│   │   │   └── Contact.jsx        ← Admissions Form & FAQs
│   │   │
│   │   ├── App.jsx                ← Central Routing & Shared Modals
│   │   ├── App.css                ← 3D Perspective & Keyframe Animations
│   │   ├── index.css              ← Design Tokens & Custom Utilities
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── Backend/                       ← Node.js + Express + MongoDB Atlas
    ├── config/
    │   └── db.js                  ← MongoDB Atlas Mongoose Connection
    ├── controllers/               ← Controller Logic (Auth, Courses, etc.)
    ├── middleware/                ← JWT & Request Validation
    ├── models/                    ← Mongoose Models
    ├── routes/                    ← Express Route Handlers
    ├── .env                       ← Port & MongoDB URI Configuration
    ├── server.js                  ← Main Express App Server
    └── package.json
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, Vite, React Router v7 |
| **Styling** | TailwindCSS v4, Custom CSS3 3D Perspective & Gradients |
| **Icons & Typography** | Lucide React, Google Fonts (*Outfit* & *Plus Jakarta Sans*) |
| **Networking** | Axios HTTP Client |
| **Backend Core** | Node.js (ES Modules), Express.js 5 |
| **Database** | MongoDB Atlas with Mongoose ODM |
| **Security & Auth** | JSON Web Tokens (JWT), bcryptjs, CORS |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

---

### 2. Backend Setup
From the root directory:

```bash
cd Backend
npm install
npm run dev
```

The server will start at:
```
http://localhost:5000
```

Verify backend health check:
```json
{
  "success": true,
  "message": "Kaira DigitalHub Backend is running 🚀"
}
```

---

### 3. Frontend Setup
In a separate terminal window from the root directory:

```bash
cd Frontend
npm install
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## 📡 API Roadmap & Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Backend health check verification |
| `/api/enquiries` | `POST` | Submit consultation or service quote requests |
| `/api/enquiries` | `GET` | Fetch customer enquiries |
| `/api/registrations` | `POST` | Enroll in academy courses or reserve event seats |
| `/api/courses` | `GET` | Retrieve academy courses catalog |
| `/api/services` | `GET` | Retrieve enterprise service offerings |
| `/api/events` | `GET` | Retrieve upcoming hackathons and webinars |
| `/api/projects` | `GET` | Retrieve client case studies |

---

## 📜 License
This project is proprietary and maintained for **Kaira DigitalHub**. All rights reserved.
