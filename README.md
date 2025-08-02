# 🏫 School Management System (Node.js + TypeScript + Prisma + PostgreSQL)

![School Management System](https://github.com/MudassirkhanPathan/School-Management-PRISMA/blob/main/Subheading.png)

🚀 A **School Management System** built using **Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL**.  
This system includes **role-based access control** for **Students, Teachers, and Principals** with CRUD operations and authorization.

---

## 📌 Roles & Permissions

### 🎓 **Student**
- View own profile  
- Update limited profile details  
- View timetable / teacher info  

### 👨‍🏫 **Teacher**
- Manage assigned students  
- Add / update marks  
- View and manage class records  

### 🏫 **Principal**
- Full control over teachers & students  
- Manage school data  
- Approve or remove teachers  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** PostgreSQL (Managed via **PgAdmin**)  
- **ORM:** Prisma  
- **Authentication:** JWT (Role-based authorization)  
- **Tools:** Prisma CLI, PgAdmin  

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/MudassirkhanPathan/School-Management-PRISMA.git
cd School-Management-PRISMA

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create .env file and add:
# DATABASE_URL="postgresql://username:password@localhost:5432/school_management"
# JWT_SECRET="your_secret_key"
# PORT=5000

# 4️⃣ Run Prisma migrations
npx prisma migrate dev --name init

# 5️⃣ Generate Prisma client
npx prisma generate

# 6️⃣ Start the server
npm run dev   # For development
npm run build && npm start   # For production
