"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search } from "lucide-react";

export default function PatientsContent() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 35, gender: 'Male', phone: '555-1001', branch: 'Boston  ', lastVisit: '2024-11-15' },
    { id: 2, name: 'Bob Miller', age: 35, gender: 'Male', phone: '555-1001', branch: 'Cambridge  ', lastVisit: '2024-11-15' },
    { id: 3, name: 'Jane Smith', age: 28, gender: 'Female', phone: '555-1002', branch: 'london ', lastVisit: '2024-11-14' },
  ]);

  const [branches] = useState(['Boston', 'Cambridge', 'london']);
  const [openPatientDialog, setOpenPatientDialog] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '', phone: '', branch: '' });

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.phone && newPatient.branch) {
      setPatients([
        ...patients, 
        { 
          id: patients.length + 1, 
          name: newPatient.name,
          age: parseInt(newPatient.age), // Convert string to number
          gender: newPatient.gender,
          phone: newPatient.phone,
          branch: newPatient.branch,
          lastVisit: new Date().toISOString().split('T')[0] 
        }
      ]);
      setNewPatient({ name: '', age: '', gender: '', phone: '', branch: '' });
      setOpenPatientDialog(false);
    }
  };

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Patient Management</CardTitle>
            <CardDescription>Manage all patients across branches</CardDescription>
          </div>
          <Dialog open={openPatientDialog} onOpenChange={setOpenPatientDialog}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" />Add Patient</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>Enter patient details below</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input value={newPatient.name} onChange={(e) => setNewPatient({...newPatient, name: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Age</Label>
                    <Input type="number" value={newPatient.age} onChange={(e) => setNewPatient({...newPatient, age: e.target.value})} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Gender</Label>
                    <Select value={newPatient.gender} onValueChange={(v) => setNewPatient({...newPatient, gender: v})}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Phone</Label>
                  <Input value={newPatient.phone} onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})} />
                </div>
                <div className="grid gap-2">
                  <Label>Branch</Label>
                  <Select value={newPatient.branch} onValueChange={(v) => setNewPatient({...newPatient, branch: v})}>
                    <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
                    <SelectContent>
                      {branches.map(branch => (
                        <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenPatientDialog(false)}>Cancel</Button>
                <Button onClick={handleAddPatient}>Add Patient</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search patients..." className="pl-8" />
            </div>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-medium">Name</th>
                  <th className="p-3 text-left font-medium">Age</th>
                  <th className="p-3 text-left font-medium">Gender</th>
                  <th className="p-3 text-left font-medium">Phone</th>
                  <th className="p-3 text-left font-medium">Branch</th>
                  <th className="p-3 text-left font-medium">Last Visit</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map(p => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3">{p.age}</td>
                    <td className="p-3">{p.gender}</td>
                    <td className="p-3">{p.phone}</td>
                    <td className="p-3"><Badge variant="outline">{p.branch}</Badge></td>
                    <td className="p-3">{p.lastVisit}</td>
                    <td className="p-3 flex space-x-2">
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Plus, Edit, Trash2, Search } from "lucide-react";

// export default function PatientsContent() {
//   const [patients, setPatients] = useState([
//     { id: 1, name: 'John Doe', age: 35, gender: 'Male', phone: '555-1001', branch: 'Boston  ', lastVisit: '2024-11-15' },
//     { id: 2, name: 'Bob Miller', age: 35, gender: 'Male', phone: '555-1001', branch: 'Cambridge  ', lastVisit: '2024-11-15' },
//     { id: 3, name: 'Jane Smith', age: 28, gender: 'Female', phone: '555-1002', branch: 'london ', lastVisit: '2024-11-14' },
//   ]);

//   const [branches] = useState(['Boston', 'Cambridge', 'london']);
//   const [openPatientDialog, setOpenPatientDialog] = useState(false);
//   const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '', phone: '', branch: '' });

//   const handleAddPatient = () => {
//     if (newPatient.name && newPatient.age && newPatient.phone && newPatient.branch) {
//       setPatients([...patients, { id: patients.length + 1, ...newPatient, lastVisit: new Date().toISOString().split('T')[0] }]);
//       setNewPatient({ name: '', age: '', gender: '', phone: '', branch: '' });
//       setOpenPatientDialog(false);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <Card>
//         <CardHeader className="flex justify-between items-center">
//           <div>
//             <CardTitle>Patient Management</CardTitle>
//             <CardDescription>Manage all patients across branches</CardDescription>
//           </div>
//           <Dialog open={openPatientDialog} onOpenChange={setOpenPatientDialog}>
//             <DialogTrigger asChild>
//               <Button><Plus className="mr-2 h-4 w-4" />Add Patient</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Add New Patient</DialogTitle>
//                 <DialogDescription>Enter patient details below</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid gap-2">
//                   <Label>Name</Label>
//                   <Input value={newPatient.name} onChange={(e) => setNewPatient({...newPatient, name: e.target.value})} />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="grid gap-2">
//                     <Label>Age</Label>
//                     <Input type="number" value={newPatient.age} onChange={(e) => setNewPatient({...newPatient, age: e.target.value})} />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label>Gender</Label>
//                     <Select value={newPatient.gender} onValueChange={(v) => setNewPatient({...newPatient, gender: v})}>
//                       <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Male">Male</SelectItem>
//                         <SelectItem value="Female">Female</SelectItem>
//                         <SelectItem value="Other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label>Phone</Label>
//                   <Input value={newPatient.phone} onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})} />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label>Branch</Label>
//                   <Select value={newPatient.branch} onValueChange={(v) => setNewPatient({...newPatient, branch: v})}>
//                     <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
//                     <SelectContent>
//                       {branches.map(branch => (
//                         <SelectItem key={branch} value={branch}>{branch}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setOpenPatientDialog(false)}>Cancel</Button>
//                 <Button onClick={handleAddPatient}>Add Patient</Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </CardHeader>

//         <CardContent>
//           <div className="mb-4">
//             <div className="relative">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//               <Input placeholder="Search patients..." className="pl-8" />
//             </div>
//           </div>

//           <div className="rounded-md border overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="border-b bg-gray-50">
//                 <tr>
//                   <th className="p-3 text-left font-medium">Name</th>
//                   <th className="p-3 text-left font-medium">Age</th>
//                   <th className="p-3 text-left font-medium">Gender</th>
//                   <th className="p-3 text-left font-medium">Phone</th>
//                   <th className="p-3 text-left font-medium">Branch</th>
//                   <th className="p-3 text-left font-medium">Last Visit</th>
//                   <th className="p-3 text-left font-medium">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map(p => (
//                   <tr key={p.id} className="border-b hover:bg-gray-50">
//                     <td className="p-3 font-medium">{p.name}</td>
//                     <td className="p-3">{p.age}</td>
//                     <td className="p-3">{p.gender}</td>
//                     <td className="p-3">{p.phone}</td>
//                     <td className="p-3"><Badge variant="outline">{p.branch}</Badge></td>
//                     <td className="p-3">{p.lastVisit}</td>
//                     <td className="p-3 flex space-x-2">
//                       <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
//                       <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
