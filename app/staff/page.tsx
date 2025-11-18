"use client";

import Header from "../components/Header";
import StaffTable from "../components/StaffContent";

export default function StaffPage() {
  return (
    <>
      <Header branches={branches} />
      <main className="container mx-auto px-4 py-6">
        <StaffTable staff={staff} />
      </main>
    </>
  );
}
