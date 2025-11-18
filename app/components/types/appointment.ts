// types/appointment.ts

/**
 * Appointment Status
 * Use this union type everywhere to ensure only valid statuses are used
 */
export type AppointmentStatus =
  | "Confirmed"
  | "Pending"
  | "Cancelled"
  | "Completed";

/**
 * Main Appointment type
 * Used across the app: table, forms, API responses, etc.
 */
export type Appointment = {
  id: number;
  patientName: string;
  doctor: string;
  branch: string;
  date: string;        // ISO format recommended: "2025-11-20"
  time: string;        // e.g. "10:30 AM"
  status: AppointmentStatus;
};

/**
 * Optional: If you ever need to create or update an appointment
 * (id and status might be optional when creating a new one)
 */
export type CreateAppointment = Omit<Appointment, "id" | "status"> & {
  status?: AppointmentStatus;
};

export type UpdateAppointment = Partial<Appointment> & { id: number };