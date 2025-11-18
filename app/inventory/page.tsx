"use client";
import Header from "../components/Header";
import InventoryTable from "../components/InventoryContent";

export default function InventoryPage() {
  return (
    <>
      <Header branches={branches} />
      <main className="container mx-auto px-4 py-6">
        <InventoryTable inventory={inventory} />
      </main>
    </>
  );
}
