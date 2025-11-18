// app/page.tsx
import React from "react";
import TabNavigation from "./components/TabNavigation";
import Header from "./components/Header";

export const metadata = {
  title: "ClinicCare Dashboard",
  description: "Multi-Branch Clinic Management System",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <TabNavigation />
    </main>
  );
}






// "use client";

// import Header from "@/components/Header";
// import StatsCards from "@/components/StatsCards";
// import RecentAppointments from "@/components/RecentAppointments";
// import BranchPerformance from "@/components/BranchPerformance";

// export default function HomePage() {
//   return (
//     <>
//       <Header branches={branches} />

//       <main className="container mx-auto px-4 py-6 space-y-6">
//         <StatsCards stats={stats} />
//         <div className="grid gap-4 md:grid-cols-2">
//           <RecentAppointments appointments={appointments} />
//           <BranchPerformance branches={branches} patients={patients} />
//         </div>
//       </main>
//     </>
//   );
// }


// "use client";
// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
// import { Badge } from '@/components/ui/badge';
// import { Building2, Users, Calendar, Plus, Search, Edit, Trash2, Activity } from 'lucide-react';

// const ClinicManagementApp = () => {
//   const [branches] = useState([
//     { id: 1, name: 'Main Branch', location: 'Downtown', phone: '555-0001', status: 'active' },
//     { id: 2, name: 'North Branch', location: 'North District', phone: '555-0002', status: 'active' },
//     { id: 3, name: 'East Branch', location: 'East Side', phone: '555-0003', status: 'active' },
//   ]);

//   const [patients, setPatients] = useState([
//     { id: 1, name: 'John Doe', age: 35, gender: 'Male', phone: '555-1001', branch: 'Main Branch', lastVisit: '2024-11-15' },
//     { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', phone: '555-1002', branch: 'North Branch', lastVisit: '2024-11-14' },
//     { id: 3, name: 'Mike Johnson', age: 42, gender: 'Male', phone: '555-1003', branch: 'East Branch', lastVisit: '2024-11-16' },
//   ]);

//   const [appointments, setAppointments] = useState([
//     { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah Wilson', branch: 'Main Branch', date: '2024-11-18', time: '10:00 AM', status: 'scheduled' },
//     { id: 2, patient: 'Jane Smith', doctor: 'Dr. Michael Brown', branch: 'North Branch', date: '2024-11-18', time: '11:30 AM', status: 'scheduled' },
//     { id: 3, patient: 'Mike Johnson', doctor: 'Dr. Emily Davis', branch: 'East Branch', date: '2024-11-17', time: '2:00 PM', status: 'completed' },
//   ]);

//   const [staff] = useState([
//     { id: 1, name: 'Dr. Sarah Wilson', role: 'Doctor', branch: 'Main Branch', specialization: 'General Medicine' },
//     { id: 2, name: 'Dr. Michael Brown', role: 'Doctor', branch: 'North Branch', specialization: 'Pediatrics' },
//     { id: 3, name: 'Dr. Emily Davis', role: 'Doctor', branch: 'East Branch', specialization: 'Cardiology' },
//     { id: 4, name: 'Nurse Anna Lee', role: 'Nurse', branch: 'Main Branch', specialization: 'ICU' },
//   ]);

//   const [inventory] = useState([
//     { id: 1, item: 'Paracetamol', quantity: 500, branch: 'Main Branch', minStock: 100, price: 0.50 },
//     { id: 2, item: 'Amoxicillin', quantity: 200, branch: 'North Branch', minStock: 50, price: 2.00 },
//     { id: 3, item: 'Ibuprofen', quantity: 350, branch: 'East Branch', minStock: 100, price: 0.75 },
//   ]);

//   const [openPatientDialog, setOpenPatientDialog] = useState(false);
//   const [openAppointmentDialog, setOpenAppointmentDialog] = useState(false);
//   const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '', phone: '', branch: '' });
//   const [newAppointment, setNewAppointment] = useState({ patient: '', doctor: '', branch: '', date: '', time: '' });

//   const handleAddPatient = () => {
//     if (newPatient.name && newPatient.age && newPatient.phone && newPatient.branch) {
//       setPatients([...patients, { 
//         id: patients.length + 1, 
//         ...newPatient, 
//         lastVisit: new Date().toISOString().split('T')[0] 
//       }]);
//       setNewPatient({ name: '', age: '', gender: '', phone: '', branch: '' });
//       setOpenPatientDialog(false);
//     }
//   };

//   const handleAddAppointment = () => {
//     if (newAppointment.patient && newAppointment.doctor && newAppointment.date && newAppointment.time) {
//       setAppointments([...appointments, { 
//         id: appointments.length + 1, 
//         ...newAppointment, 
//         status: 'scheduled' 
//       }]);
//       setNewAppointment({ patient: '', doctor: '', branch: '', date: '', time: '' });
//       setOpenAppointmentDialog(false);
//     }
//   };

//   const stats = [
//     { title: 'Total Branches', value: branches.length, icon: Building2, color: 'text-blue-600' },
//     { title: 'Total Patients', value: patients.length, icon: Users, color: 'text-green-600' },
//     { title: 'Appointments Today', value: appointments.filter(a => a.date === '2024-11-18').length, icon: Calendar, color: 'text-purple-600' },
//     { title: 'Total Staff', value: staff.length, icon: Activity, color: 'text-orange-600' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white border-b sticky top-0 z-10">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center space-x-3">
//               <Building2 className="h-8 w-8 text-blue-600" />
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">ClinicCare</h1>
//                 <p className="text-sm text-gray-500">Multi-Branch Management System</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Select defaultValue="main">
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Select Branch" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Branches</SelectItem>
//                   {branches.map(branch => (
//                     <SelectItem key={branch.id} value={branch.id.toString()}>{branch.name}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Button variant="outline">Admin</Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-6">
//         <Tabs defaultValue="dashboard" className="space-y-6">
//           <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
//             <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
//             <TabsTrigger value="patients">Patients</TabsTrigger>
//             <TabsTrigger value="appointments">Appointments</TabsTrigger>
//             <TabsTrigger value="staff">Staff</TabsTrigger>
//             <TabsTrigger value="inventory">Inventory</TabsTrigger>
//             <TabsTrigger value="branches">Branches</TabsTrigger>
//           </TabsList>

//           <TabsContent value="dashboard" className="space-y-6">
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <Card key={index}>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
//                     <stat.icon className={`h-4 w-4 ${stat.color}`} />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">{stat.value}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recent Appointments</CardTitle>
//                   <CardDescription>Latest scheduled appointments</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {appointments.slice(0, 3).map(apt => (
//                       <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                         <div>
//                           <p className="font-medium">{apt.patient}</p>
//                           <p className="text-sm text-gray-500">{apt.doctor} - {apt.branch}</p>
//                         </div>
//                         <Badge variant={apt.status === 'completed' ? 'default' : 'secondary'}>
//                           {apt.status}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Branch Performance</CardTitle>
//                   <CardDescription>Patient count by branch</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {branches.map(branch => {
//                       const count = patients.filter(p => p.branch === branch.name).length;
//                       return (
//                         <div key={branch.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                           <div>
//                             <p className="font-medium">{branch.name}</p>
//                             <p className="text-sm text-gray-500">{branch.location}</p>
//                           </div>
//                           <Badge>{count} patients</Badge>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsContent value="patients" className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div>
//                     <CardTitle>Patient Management</CardTitle>
//                     <CardDescription>Manage all patients across branches</CardDescription>
//                   </div>
//                   <Dialog open={openPatientDialog} onOpenChange={setOpenPatientDialog}>
//                     <DialogTrigger asChild>
//                       <Button><Plus className="mr-2 h-4 w-4" />Add Patient</Button>
//                     </DialogTrigger>
//                     <DialogContent>
//                       <DialogHeader>
//                         <DialogTitle>Add New Patient</DialogTitle>
//                         <DialogDescription>Enter patient details below</DialogDescription>
//                       </DialogHeader>
//                       <div className="grid gap-4 py-4">
//                         <div className="grid gap-2">
//                           <Label>Name</Label>
//                           <Input value={newPatient.name} onChange={(e) => setNewPatient({...newPatient, name: e.target.value})} />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="grid gap-2">
//                             <Label>Age</Label>
//                             <Input type="number" value={newPatient.age} onChange={(e) => setNewPatient({...newPatient, age: e.target.value})} />
//                           </div>
//                           <div className="grid gap-2">
//                             <Label>Gender</Label>
//                             <Select value={newPatient.gender} onValueChange={(value) => setNewPatient({...newPatient, gender: value})}>
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="Male">Male</SelectItem>
//                                 <SelectItem value="Female">Female</SelectItem>
//                                 <SelectItem value="Other">Other</SelectItem>
//                               </SelectContent>
//                             </Select>
//                           </div>
//                         </div>
//                         <div className="grid gap-2">
//                           <Label>Phone</Label>
//                           <Input value={newPatient.phone} onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})} />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label>Branch</Label>
//                           <Select value={newPatient.branch} onValueChange={(value) => setNewPatient({...newPatient, branch: value})}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select Branch" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {branches.map(branch => (
//                                 <SelectItem key={branch.id} value={branch.name}>{branch.name}</SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                       </div>
//                       <DialogFooter>
//                         <Button variant="outline" onClick={() => setOpenPatientDialog(false)}>Cancel</Button>
//                         <Button onClick={handleAddPatient}>Add Patient</Button>
//                       </DialogFooter>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="mb-4">
//                   <div className="relative">
//                     <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//                     <Input placeholder="Search patients..." className="pl-8" />
//                   </div>
//                 </div>
//                 <div className="rounded-md border overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="border-b bg-gray-50">
//                       <tr>
//                         <th className="p-3 text-left font-medium">Name</th>
//                         <th className="p-3 text-left font-medium">Age</th>
//                         <th className="p-3 text-left font-medium">Gender</th>
//                         <th className="p-3 text-left font-medium">Phone</th>
//                         <th className="p-3 text-left font-medium">Branch</th>
//                         <th className="p-3 text-left font-medium">Last Visit</th>
//                         <th className="p-3 text-left font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {patients.map(patient => (
//                         <tr key={patient.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3 font-medium">{patient.name}</td>
//                           <td className="p-3">{patient.age}</td>
//                           <td className="p-3">{patient.gender}</td>
//                           <td className="p-3">{patient.phone}</td>
//                           <td className="p-3"><Badge variant="outline">{patient.branch}</Badge></td>
//                           <td className="p-3">{patient.lastVisit}</td>
//                           <td className="p-3">
//                             <div className="flex space-x-2">
//                               <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
//                               <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="appointments" className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div>
//                     <CardTitle>Appointments</CardTitle>
//                     <CardDescription>Schedule and manage appointments</CardDescription>
//                   </div>
//                   <Dialog open={openAppointmentDialog} onOpenChange={setOpenAppointmentDialog}>
//                     <DialogTrigger asChild>
//                       <Button><Plus className="mr-2 h-4 w-4" />New Appointment</Button>
//                     </DialogTrigger>
//                     <DialogContent>
//                       <DialogHeader>
//                         <DialogTitle>Schedule Appointment</DialogTitle>
//                         <DialogDescription>Create a new appointment</DialogDescription>
//                       </DialogHeader>
//                       <div className="grid gap-4 py-4">
//                         <div className="grid gap-2">
//                           <Label>Patient</Label>
//                           <Select value={newAppointment.patient} onValueChange={(value) => setNewAppointment({...newAppointment, patient: value})}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select Patient" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {patients.map(patient => (
//                                 <SelectItem key={patient.id} value={patient.name}>{patient.name}</SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <div className="grid gap-2">
//                           <Label>Doctor</Label>
//                           <Select value={newAppointment.doctor} onValueChange={(value) => setNewAppointment({...newAppointment, doctor: value})}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select Doctor" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {staff.filter(s => s.role === 'Doctor').map(doctor => (
//                                 <SelectItem key={doctor.id} value={doctor.name}>{doctor.name}</SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <div className="grid gap-2">
//                           <Label>Branch</Label>
//                           <Select value={newAppointment.branch} onValueChange={(value) => setNewAppointment({...newAppointment, branch: value})}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select Branch" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {branches.map(branch => (
//                                 <SelectItem key={branch.id} value={branch.name}>{branch.name}</SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="grid gap-2">
//                             <Label>Date</Label>
//                             <Input type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})} />
//                           </div>
//                           <div className="grid gap-2">
//                             <Label>Time</Label>
//                             <Input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})} />
//                           </div>
//                         </div>
//                       </div>
//                       <DialogFooter>
//                         <Button variant="outline" onClick={() => setOpenAppointmentDialog(false)}>Cancel</Button>
//                         <Button onClick={handleAddAppointment}>Schedule</Button>
//                       </DialogFooter>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="rounded-md border overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="border-b bg-gray-50">
//                       <tr>
//                         <th className="p-3 text-left font-medium">Patient</th>
//                         <th className="p-3 text-left font-medium">Doctor</th>
//                         <th className="p-3 text-left font-medium">Branch</th>
//                         <th className="p-3 text-left font-medium">Date</th>
//                         <th className="p-3 text-left font-medium">Time</th>
//                         <th className="p-3 text-left font-medium">Status</th>
//                         <th className="p-3 text-left font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {appointments.map(apt => (
//                         <tr key={apt.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3 font-medium">{apt.patient}</td>
//                           <td className="p-3">{apt.doctor}</td>
//                           <td className="p-3"><Badge variant="outline">{apt.branch}</Badge></td>
//                           <td className="p-3">{apt.date}</td>
//                           <td className="p-3">{apt.time}</td>
//                           <td className="p-3">
//                             <Badge variant={apt.status === 'completed' ? 'default' : 'secondary'}>
//                               {apt.status}
//                             </Badge>
//                           </td>
//                           <td className="p-3">
//                             <div className="flex space-x-2">
//                               <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
//                               <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="staff" className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div>
//                     <CardTitle>Staff Management</CardTitle>
//                     <CardDescription>Manage doctors, nurses, and staff</CardDescription>
//                   </div>
//                   <Button><Plus className="mr-2 h-4 w-4" />Add Staff</Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="rounded-md border overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="border-b bg-gray-50">
//                       <tr>
//                         <th className="p-3 text-left font-medium">Name</th>
//                         <th className="p-3 text-left font-medium">Role</th>
//                         <th className="p-3 text-left font-medium">Branch</th>
//                         <th className="p-3 text-left font-medium">Specialization</th>
//                         <th className="p-3 text-left font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {staff.map(member => (
//                         <tr key={member.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3 font-medium">{member.name}</td>
//                           <td className="p-3"><Badge>{member.role}</Badge></td>
//                           <td className="p-3"><Badge variant="outline">{member.branch}</Badge></td>
//                           <td className="p-3">{member.specialization}</td>
//                           <td className="p-3">
//                             <div className="flex space-x-2">
//                               <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
//                               <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="inventory" className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div>
//                     <CardTitle>Inventory Management</CardTitle>
//                     <CardDescription>Track medicines and supplies</CardDescription>
//                   </div>
//                   <Button><Plus className="mr-2 h-4 w-4" />Add Item</Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="rounded-md border overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="border-b bg-gray-50">
//                       <tr>
//                         <th className="p-3 text-left font-medium">Item</th>
//                         <th className="p-3 text-left font-medium">Branch</th>
//                         <th className="p-3 text-left font-medium">Quantity</th>
//                         <th className="p-3 text-left font-medium">Min Stock</th>
//                         <th className="p-3 text-left font-medium">Price</th>
//                         <th className="p-3 text-left font-medium">Status</th>
//                         <th className="p-3 text-left font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {inventory.map(item => (
//                         <tr key={item.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3 font-medium">{item.item}</td>
//                           <td className="p-3"><Badge variant="outline">{item.branch}</Badge></td>
//                           <td className="p-3">{item.quantity}</td>
//                           <td className="p-3">{item.minStock}</td>
//                           <td className="p-3">${item.price.toFixed(2)}</td>
//                           <td className="p-3">
//                             <Badge variant={item.quantity > item.minStock ? 'default' : 'destructive'}>
//                               {item.quantity > item.minStock ? 'In Stock' : 'Low Stock'}
//                             </Badge>
//                           </td>
//                           <td className="p-3">
//                             <div className="flex space-x-2">
//                               <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
//                               <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="branches" className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div>
//                     <CardTitle>Branch Management</CardTitle>
//                     <CardDescription>Manage clinic branches</CardDescription>
//                   </div>
//                   <Button><Plus className="mr-2 h-4 w-4" />Add Branch</Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                   {branches.map(branch => (
//                     <Card key={branch.id}>
//                       <CardHeader>
//                         <div className="flex items-center justify-between">
//                           <CardTitle className="text-lg">{branch.name}</CardTitle>
//                           <Badge variant={branch.status === 'active' ? 'default' : 'secondary'}>
//                             {branch.status}
//                           </Badge>
//                         </div>
//                         <CardDescription>{branch.location}</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="space-y-2 text-sm">
//                           <p><strong>Phone:</strong> {branch.phone}</p>
//                           <p><strong>Patients:</strong> {patients.filter(p => p.branch === branch.name).length}</p>
//                           <p><strong>Staff:</strong> {staff.filter(s => s.branch === branch.name).length}</p>
//                         </div>
//                         <div className="flex space-x-2 mt-4">
//                           <Button variant="outline" size="sm" className="flex-1">Edit</Button>
//                           <Button variant="outline" size="sm" className="flex-1">View Details</Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// };

// export default ClinicManagementApp;