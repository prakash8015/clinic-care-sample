"use client";

import Header from "../components/Header";
import PatientsTable from "../components/PatientsContent";

export default function PatientsPage() {
  return (
    <>
      <Header branches={branches} />
      <main className="container mx-auto px-4 py-6">
        <PatientsTable patients={patients} branches={branches} />
      </main>
    </>
  );
}
