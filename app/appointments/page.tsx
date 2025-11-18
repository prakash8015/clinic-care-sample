"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type Branch = {
  id: number;
  name: string;
};

export default function AppointmentsPage() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);

  useEffect(() => {
    // Replace this with API call later
    const fetchedBranches: Branch[] = [
      { id: 1, name: "Main Branch" },
      { id: 2, name: "North Wing" },
    ];
    setBranches(fetchedBranches);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Select Branch</label>
          <Select
            onValueChange={(value) => setSelectedBranch(Number(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a branch" />
            </SelectTrigger>

            <SelectContent>
              {branches.map((branch) => (
                <SelectItem key={branch.id} value={String(branch.id)}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedBranch && (
          <div className="text-sm text-gray-600">
            Selected Branch ID: {selectedBranch}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


// // app/appointments/page.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import Header, { Branch } from "../components/Header";
// import { Card } from "../../components/ui/card";
// import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";

// // Sample appointment type
// type Appointment = {
//   id: string;
//   patientName: string;
//   doctor: string;
//   date: string;
//   branchId: string;
// };

// export default function AppointmentsPage() {
//   // Sample branches data
//   const [branches, setBranches] = useState<Branch[]>([]);

//   // Sample appointments data
//   const [appointments, setAppointments] = useState<Appointment[]>([]);

//   useEffect(() => {
//     // Replace this with DB/API fetch later
//     const fetchedBranches: Branch[] = [
//       { id: "1", name: "Boston" },
//       { id: "2", name: "Cambridge" },
//       { id: "3", name: "london" },
//     ];
//     setBranches(fetchedBranches);

//     const fetchedAppointments: Appointment[] = [
//       {
//         id: "a1",
//         patientName: "John Doe",
//         doctor: "Dr. Smith",
//         date: "2025-11-18",
//         branchId: "1",
//       },
//       {
//         id: "a2",
//         patientName: "Jane Roe",
//         doctor: "Dr. Adams",
//         date: "2025-11-19",
//         branchId: "2",
//       },
//     ];
//     setAppointments(fetchedAppointments);
//   }, []);

//   return (
//     <>
     

//       <main className="container mx-auto px-4 py-6">
//         <h2 className="text-xl font-bold mb-4">Appointments</h2>

//         <Card>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Patient Name</TableHead>
//                 <TableHead>Doctor</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Branch</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {appointments.map((a) => {
//                 const branchName = branches.find((b) => b.id === a.branchId)?.name || "-";
//                 return (
//                   <TableRow key={a.id}>
//                     <TableCell>{a.patientName}</TableCell>
//                     <TableCell>{a.doctor}</TableCell>
//                     <TableCell>{a.date}</TableCell>
//                     <TableCell>{branchName}</TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </Card>
//       </main>
//     </>
//   );
// }




// // app/appointments/page.tsx
// import Header from "../components/Header";
// import AppointmentsTable from "../components/AppointmentsTable";
// import type { Appointment } from "../components/types/appointment";

// // Temporary mock data (replace later with real fetch from your DB/API)
// const branches = [
//   { id: "motorcity", name: "Motor City Branch" },
//   { id: "jumeirah", name: "Jumeirah Branch" },
//   { id: "marina", name: "Dubai Marina Branch" },
//   { id: "downtown", name: "Downtown Branch" },
// ];

// // Mock appointments data with proper typing
// const appointments: Appointment[] = [
//   {
//     id: 1,
//     patientName: "Ahmed Ali",
//     doctor: "Dr. Sarah Khan",
//     branch: "Motor City Branch",
//     date: "2025-11-20",
//     time: "10:30 AM",
//     status: "Confirmed" as const,
//   },
//   {
//     id: 2,
//     patientName: "Fatima Hassan",
//     doctor: "Dr. Omar Rahman",
//     branch: "Jumeirah Branch",
//     date: "2025-11-21",
//     time: "02:00 PM",
//     status: "Pending" as const,
//   },
// ];

// export default function AppointmentsPage() {
//   return (
//     <>
//       <Header branches={branches} />

//       <main className="container mx-auto px-4 py-6">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
//           <p className="text-gray-600 mt-2">
//             Manage and view all patient appointments across branches
//           </p>
//         </div>

//         <AppointmentsTable appointments={appointments} />
//       </main>
//     </>
//   );
// }


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