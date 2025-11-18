// app/appointments/page.tsx
import Header from "../components/Header";
import AppointmentsTable from "../components/AppointmentsTable";
import type { Appointment } from "../components/types/appointment";

// Temporary mock data (replace later with real fetch from your DB/API)
const branches = [
  { id: "motorcity", name: "Motor City Branch" },
  { id: "jumeirah", name: "Jumeirah Branch" },
  { id: "marina", name: "Dubai Marina Branch" },
  { id: "downtown", name: "Downtown Branch" },
];

// Mock appointments data with proper typing
const appointments: Appointment[] = [
  {
    id: 1,
    patientName: "Ahmed Ali",
    doctor: "Dr. Sarah Khan",
    branch: "Motor City Branch",
    date: "2025-11-20",
    time: "10:30 AM",
    status: "Confirmed" as const,
  },
  {
    id: 2,
    patientName: "Fatima Hassan",
    doctor: "Dr. Omar Rahman",
    branch: "Jumeirah Branch",
    date: "2025-11-21",
    time: "02:00 PM",
    status: "Pending" as const,
  },
];

export default function AppointmentsPage() {
  return (
    <>
      <Header branches={branches} />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-2">
            Manage and view all patient appointments across branches
          </p>
        </div>

        <AppointmentsTable appointments={appointments} />
      </main>
    </>
  );
}


// // app/appointments/page.tsx
// import Header from "../components/Header";
// import AppointmentsContent from "../components/AppointmentsContent";
// import AppointmentsTable from "../components/AppointmentsTable";
// import type { Appointment } from "../components/types/appointment";

// // Temporary mock data (replace later with real fetch from your DB/API)
// const branches = [
//   { id: "motorcity", name: "Motor City Branch" },
//   { id: "jumeirah", name: "Jumeirah Branch" },
//   { id: "marina", name: "Dubai Marina Branch" },
//   { id: "downtown", name: "Downtown Branch" },
// ];

// // Mock appointments data (you’ll replace this with real data later)
// const appointments = [
//   {
//     id: 1,
//     patientName: "Ahmed Ali",
//     doctor: "Dr. Sarah Khan",
//     branch: "Motor City Branch",
//     date: "2025-11-20",
//     time: "10:30 AM",
//     status: "Confirmed",
//   },
//   {
//     id: 2,
//     patientName: "Fatima Hassan",
//     doctor: "Dr. Omar Rahman",
//     branch: "Jumeirah Branch",
//     date: "2025-11-21",
//     time: "02:00 PM",
//     status: "Pending",
//   },
//   // Add more as needed
// ];


// export default function AppointmentsPage() {
//   return (
//     <>
//       {/* Header with branches passed correctly */}
//       <Header branches={branches} />

//       <main className="container mx-auto px-4 py-6">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
//           <p className="text-gray-600 mt-2">
//             Manage and view all patient appointments across branches
//           </p>
//         </div>

//         {/* Appointments Table */}
//         <AppointmentsTable appointments={appointments} />
//       </main>
//     </>
//   );
// }