"use client";

import React, { useState } from "react";
import Header from "./Header";
import DashboardContent from "./DashboardContent";
import PatientsContent from "./PatientsContent";
import AppointmentsContent from "./AppointmentsContent";
import StaffContent from "./StaffContent";
import InventoryContent from "./InventoryContent";
import BranchesContent from "./BranchesContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabNavigation = () => {
  const branches = [
    { id: 1, name: "Boston" },
    { id: 2, name: "Cambridge" },
    { id: 3, name: "london" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header branches={branches} />

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardContent branches={branches} />
          </TabsContent>
          <TabsContent value="patients">
            <PatientsContent branches={branches} />
          </TabsContent>
          <TabsContent value="appointments">
            <AppointmentsContent branches={branches} />
          </TabsContent>
          <TabsContent value="staff">
            <StaffContent branches={branches} />
          </TabsContent>
          <TabsContent value="inventory">
            <InventoryContent branches={branches} />
          </TabsContent>
          <TabsContent value="branches">
            <BranchesContent branches={branches} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TabNavigation;
