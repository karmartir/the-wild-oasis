# 🌴 The Wild Oasis

Internal hotel management dashboard built with React.  
This application is designed for hotel staff to manage bookings, cabins, guests, and daily operations efficiently.

---

## 🚀 Overview

The Wild Oasis is an admin panel (not a customer-facing app) focused on:

- managing bookings and check-ins
- tracking hotel performance
- handling cabins and guest data

The goal of this project is to practice building a real-world React application with modern tools and clean architecture.

---

## 🔐 Demo Account

Use the following credentials:

```
Email: garen@example.com
Password: 12345678
```

---

## ✨ Features

### 🔑 Authentication & Users

- Secure login system
- Only existing users can create new accounts
- Update avatar, name, and password

### 🏠 Cabins

- View all cabins with image, capacity, price, and discount
- Create, update, and delete cabins
- Upload cabin images

### 📅 Bookings

- View bookings with guest and cabin details
- Status: `unconfirmed`, `checked-in`, `checked-out`
- Filter and sort bookings
- Includes:
  - number of guests
  - number of nights
  - breakfast option
  - total price

### ✅ Check-in / Check-out

- Confirm payment on arrival
- Add breakfast during check-in
- Check-out flow supported

### 👤 Guests

- Store guest details:
  - full name
  - email
  - national ID
  - nationality + flag

### 📊 Dashboard

- Key metrics for last 7 / 30 / 90 days
- Daily check-ins and check-outs
- Sales charts (total vs extras)
- Stay duration analytics
- Occupancy rate

### ⚙️ Settings

- Breakfast price
- Min/max nights
- Max guests per booking

### 🌙 UI

- Dark mode support
- Responsive layout

---

## 🖼️ Screenshots

![Screenshot 1](/screenshots/1.png)
![Screenshot 2](/screenshots/2.png)
![Screenshot 3](/screenshots/3.png)
![Screenshot 4](/screenshots/4.png)
![Screenshot 5](/screenshots/5.png)
![Screenshot 6](/screenshots/6.png)
![Screenshot 7](/screenshots/7.png)
![Screenshot 8](/screenshots/8.png)

---

## 🧠 Tech Stack

- **React**
- **React Router**
- **@tanstack/react-query**
- **Styled Components**
- **Supabase**
- **Vite**
- **Recharts**
- **React Hook Form**
- **date-fns**

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/your-username/the-wild-oasis.git
cd the-wild-oasis
```

Install dependencies:

```
npm install
```

Run the app:

```
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_KEY=your_key
```

---

## 🏗️ Project Structure

```
src/
 ├── features/     # business logic (bookings, cabins, auth)
 ├── services/     # API / Supabase
 ├── ui/           # reusable components
 ├── pages/        # routes
 ├── hooks/        # custom hooks
```

---

## ⚠️ Notes

- This is an **admin dashboard**
- Booking creation is not implemented (handled externally)
- Focus is on state management, data fetching, and UI patterns

---

## 📈 What I Learned

- Managing server state with React Query
- Structuring scalable React apps
- Handling async vs UI errors
- Integrating Supabase backend
- Building reusable UI systems

---

## 🔮 Future Improvements

- Booking creation flow
- Conflict validation (date overlaps)
- Testing (unit/integration)
- Accessibility improvements

---

## 🎓 Course Credit

I built this project as part of _The Ultimate React Course_ by Jonas Schmedtmann.  
The course focuses on modern React development, including state management, performance, and real-world application architecture.

I followed the core structure and concepts from the course, with some minor customizations during implementation.

---

## 📄 License

MIT
