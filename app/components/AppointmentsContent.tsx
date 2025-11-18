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

export default function AppointmentsContent() {
  const [patients] = useState(['John Doe', 'Jane Smith', 'Mike Johnson']);
  const [staff] = useState(['Dr. Sarah Wilson', 'Dr. Michael Brown', 'Dr. Emily Davis']);
  const [branches] = useState(['Boston', 'Cambridge', 'london']);

  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah Wilson', branch: 'Boston', date: '2024-11-18', time: '10:00', status: 'scheduled' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Michael Brown', branch: 'Cambridge', date: '2024-11-18', time: '11:30', status: 'scheduled' },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ patient: '', doctor: '', branch: '', date: '', time: '' });

  const handleAddAppointment = () => {
    if (newAppointment.patient && newAppointment.doctor && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment, status: 'scheduled' }]);
      setNewAppointment({ patient: '', doctor: '', branch: '', date: '', time: '' });
      setOpenDialog(false);
    }
  };

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Appointments</CardTitle>
            <CardDescription>Schedule and manage appointments</CardDescription>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" />New Appointment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule Appointment</DialogTitle>
                <DialogDescription>Create a new appointment</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Patient</Label>
                  <Select value={newAppointment.patient} onValueChange={(v) => setNewAppointment({...newAppointment, patient: v})}>
                    <SelectTrigger><SelectValue placeholder="Select Patient" /></SelectTrigger>
                    <SelectContent>
                      {patients.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Doctor</Label>
                  <Select value={newAppointment.doctor} onValueChange={(v) => setNewAppointment({...newAppointment, doctor: v})}>
                    <SelectTrigger><SelectValue placeholder="Select Doctor" /></SelectTrigger>
                    <SelectContent>
                      {staff.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Branch</Label>
                  <Select value={newAppointment.branch} onValueChange={(v) => setNewAppointment({...newAppointment, branch: v})}>
                    <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
                    <SelectContent>
                      {branches.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Date</Label>
                    <Input type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Time</Label>
                    <Input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})} />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={handleAddAppointment}>Schedule</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-medium">Patient</th>
                  <th className="p-3 text-left font-medium">Doctor</th>
                  <th className="p-3 text-left font-medium">Branch</th>
                  <th className="p-3 text-left font-medium">Date</th>
                  <th className="p-3 text-left font-medium">Time</th>
                  <th className="p-3 text-left font-medium">Status</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{a.patient}</td>
                    <td className="p-3">{a.doctor}</td>
                    <td className="p-3"><Badge variant="outline">{a.branch}</Badge></td>
                    <td className="p-3">{a.date}</td>
                    <td className="p-3">{a.time}</td>
                    <td className="p-3"><Badge variant={a.status === 'scheduled' ? 'secondary' : 'default'}>{a.status}</Badge></td>
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
