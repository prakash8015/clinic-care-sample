"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function StaffContent() {
  const [branches] = useState(['Boston', 'Cambridge', 'london']);
  const [staff, setStaff] = useState([
    { id: 1, name: 'Dr. Sarah Wilson', role: 'Doctor', branch: 'Boston', specialization: 'General Medicine' },
    { id: 2, name: 'Dr. John Smith', role: 'Doctor', branch:'Cambridge', specialization:'Orthopaedic '},
    { id: 3, name: 'Dr. Dr. Alice Lee', role: 'Doctor', branch:'london', specialization:'neurology'},
    { id: 4, name: 'Nurse Anna Lee', role: 'Nurse', branch: 'Boston', specialization: 'ICU' },
    { id: 5, name: 'hash_rec_bos', role: 'Reception', branch: 'Cambridge', specialization: 'Reception' },

  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: '', role: '', branch: '', specialization: '' });

  const handleAddStaff = () => {
    if (newStaff.name && newStaff.role && newStaff.branch) {
      setStaff([...staff, { id: staff.length + 1, ...newStaff }]);
      setNewStaff({ name: '', role: '', branch: '', specialization: '' });
      setOpenDialog(false);
    }
  };

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Staff Management</CardTitle>
            <CardDescription>Manage doctors, nurses, and staff</CardDescription>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" />Add Staff</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Staff</DialogTitle>
                <DialogDescription>Enter staff details below</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label>Role</Label>
                  <Select value={newStaff.role} onValueChange={(v) => setNewStaff({ ...newStaff, role: v })}>
                    <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Doctor">Doctor</SelectItem>
                      <SelectItem value="Nurse">Nurse</SelectItem>
                      <SelectItem value="Staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Branch</Label>
                  <Select value={newStaff.branch} onValueChange={(v) => setNewStaff({ ...newStaff, branch: v })}>
                    <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
                    <SelectContent>
                      {branches.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Specialization</Label>
                  <Input value={newStaff.specialization} onChange={(e) => setNewStaff({ ...newStaff, specialization: e.target.value })} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={handleAddStaff}>Add Staff</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-medium">Name</th>
                  <th className="p-3 text-left font-medium">Role</th>
                  <th className="p-3 text-left font-medium">Branch</th>
                  <th className="p-3 text-left font-medium">Specialization</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {staff.map(member => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{member.name}</td>
                    <td className="p-3"><Badge>{member.role}</Badge></td>
                    <td className="p-3"><Badge variant="outline">{member.branch}</Badge></td>
                    <td className="p-3">{member.specialization}</td>
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
