"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  User,
  Stethoscope,
  MapPin,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ----------------------
// TYPES
// ----------------------
type AppointmentStatus = "scheduled" | "completed" | "cancelled";

type Appointment = {
  id: number;
  patient: string;
  doctor: string;
  branch: string;
  date: string;
  time: string;
  status: AppointmentStatus;
};

type NewAppointment = {
  patient: string;
  doctor: string;
  branch: string;
  date: string;
  time: string;
};

// ----------------------

export default function AppointmentsContent() {
  const [patients] = useState<string[]>([
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
  ]);

  const [staff] = useState<string[]>([
    "Dr. Sarah Wilson",
    "Dr. Michael Brown",
    "Dr. Emily Davis",
  ]);

  const [branches] = useState<string[]>(["Boston", "Cambridge", "London"]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Sarah Wilson",
      branch: "Boston",
      date: "2024-11-18",
      time: "10:00",
      status: "scheduled",
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. Michael Brown",
      branch: "Cambridge",
      date: "2024-11-18",
      time: "11:30",
      status: "scheduled",
    },
  ]);

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [newAppointment, setNewAppointment] = useState<NewAppointment>({
    patient: "",
    doctor: "",
    branch: "",
    date: "",
    time: "",
  });

  // ----------------------
  // HANDLERS
  // ----------------------

  const handleAddAppointment = (): void => {
    if (
      newAppointment.patient &&
      newAppointment.doctor &&
      newAppointment.date &&
      newAppointment.time
    ) {
      const newApt: Appointment = {
        id: appointments.length + 1,
        ...newAppointment,
        status: "scheduled",
      };

      setAppointments((prev) => [...prev, newApt]);

      setNewAppointment({
        patient: "",
        doctor: "",
        branch: "",
        date: "",
        time: "",
      });

      setOpenDialog(false);
    }
  };

  const handleDeleteAppointment = (id: number): void => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  // ----------------------

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold">Appointments</CardTitle>
              <CardDescription>
                Schedule and manage your appointments
              </CardDescription>
            </div>

            {/* Add Appointment Dialog */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  New Appointment
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new appointment
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  {/* Patient */}
                  <div className="grid gap-2">
                    <Label htmlFor="patient">Patient</Label>
                    <Select
                      value={newAppointment.patient}
                      onValueChange={(v) =>
                        setNewAppointment({ ...newAppointment, patient: v })
                      }
                    >
                      <SelectTrigger id="patient">
                        <SelectValue placeholder="Select patient" />
                      </SelectTrigger>
                      <SelectContent>
                        {patients.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Doctor */}
                  <div className="grid gap-2">
                    <Label htmlFor="doctor">Doctor</Label>
                    <Select
                      value={newAppointment.doctor}
                      onValueChange={(v) =>
                        setNewAppointment({ ...newAppointment, doctor: v })
                      }
                    >
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {staff.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Branch */}
                  <div className="grid gap-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Select
                      value={newAppointment.branch}
                      onValueChange={(v) =>
                        setNewAppointment({ ...newAppointment, branch: v })
                      }
                    >
                      <SelectTrigger id="branch">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branches.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newAppointment.date}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            date: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={newAppointment.time}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            time: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <DialogFooter className="gap-2 sm:gap-0">
                  <Button variant="outline" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddAppointment}>
                    Schedule Appointment
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        {/* ------------------ */}
        {/* Desktop Table View */}
        {/* ------------------ */}
        <CardContent>
          <div className="hidden lg:block">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Patient
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Doctor
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Branch
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Time
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {appointments.map((a) => (
                      <tr
                        key={a.id}
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <td className="p-4 align-middle font-medium">
                          {a.patient}
                        </td>
                        <td className="p-4 align-middle">{a.doctor}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline">{a.branch}</Badge>
                        </td>
                        <td className="p-4 align-middle">{a.date}</td>
                        <td className="p-4 align-middle">{a.time}</td>
                        <td className="p-4 align-middle">
                          <Badge
                            variant={
                              a.status === "scheduled" ? "secondary" : "default"
                            }
                          >
                            {a.status}
                          </Badge>
                        </td>

                        <td className="p-4 align-middle text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteAppointment(a.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ----------------------- */}
          {/* Mobile / Tablet Cards */}
          {/* ----------------------- */}
          <ScrollArea className="lg:hidden h-[calc(100vh-300px)]">
            <div className="space-y-4">
              {appointments.map((a) => (
                <Card key={a.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          {a.patient}
                        </CardTitle>

                        <CardDescription className="flex items-center gap-2 text-sm">
                          <Stethoscope className="h-3.5 w-3.5" />
                          {a.doctor}
                        </CardDescription>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => handleDeleteAppointment(a.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>

                  <Separator />

                  <CardContent className="pt-4 pb-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Branch
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {a.branch}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Date</p>
                          <p className="font-medium">{a.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Time</p>
                          <p className="font-medium">{a.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4" />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Status
                          </p>
                          <Badge
                            variant={
                              a.status === "scheduled" ? "secondary" : "default"
                            }
                            className="mt-1"
                          >
                            {a.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
