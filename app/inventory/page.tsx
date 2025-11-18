"use client";
import { useState } from "react";
import Header from "../components/Header";
import InventoryTable from "../components/InventoryContent";

export default function InventoryPage() {
// Add branches state
  const [branches, setBranches] = useState([
    { id: "1", name: "Main Branch" },
    { id: "2", name: "North Wing" },
  ]);

  
  const [inventory, setInventory] = useState([
    { id: "1", item: 'Paracetamol', quantity: 500, branch: 'Main Branch', minStock: 100, price: 0.5 },
    { id: "2", item: 'Ibuprofen', quantity: 50, branch: 'North Branch', minStock: 100, price: 0.75 },
  ]);

  return (
    <>
      <Header branches={branches} />
      <main className="container mx-auto px-4 py-6">
        <InventoryTable  />
        {/* <InventoryTable inventory={inventory} /> */}
      </main>
    </>
  );
}
