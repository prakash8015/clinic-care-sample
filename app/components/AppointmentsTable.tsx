// components/AppointmentsTable.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";




import { Card } from "@/components/ui/card";

type Appointment = {
  id: number;
  patientName: string;
  doctor: string;
  branch: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
};

type AppointmentsTableProps = {
  appointments: Appointment[];
};

export default function AppointmentsTable({ appointments }: AppointmentsTableProps) {
  if (appointments.length === 0) {
    return (
      <Card className="p-8 text-center text-muted-foreground">
        No appointments found.
      </Card>
    );
  }

  const getStatusVariant = (status: Appointment["status"]) => {
    switch (status) {
      case "Confirmed":
        return "default";
      case "Pending":
        return "secondary";
      case "Cancelled":
        return "destructive";
      case "Completed":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <Table>
        <TableCaption>A list of all appointments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((apt) => (
            <TableRow key={apt.id}>
              <TableCell className="font-medium">{apt.patientName}</TableCell>
              <TableCell>{apt.doctor}</TableCell>
              <TableCell>{apt.branch}</TableCell>
              <TableCell>{apt.date} {apt.time}</TableCell>
              <TableCell className="text-right">
                <Badge variant={getStatusVariant(apt.status)}>
                  {apt.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}