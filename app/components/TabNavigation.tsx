"use client";

import React, { useState } from "react";
import Header from "./Header";
import DashboardContent from "./DashboardContent";
import PatientsContent from "./PatientsContent";
import AppointmentsContent from "./AppointmentsContent";
import StaffContent from "./StaffContent";
import InventoryContent from "./InventoryContent";
import BranchesContent from "../components/BranchesContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabNavigation = () => {
  const branches = [
    { id: 1, name: "Boston" },
    { id: 2, name: "Cambridge" },
    { id: 3, name: "london" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

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
            <DashboardContent />
          </TabsContent>
          <TabsContent value="patients">
            <PatientsContent  />
          </TabsContent>
          <TabsContent value="appointments">
            <AppointmentsContent  />
          </TabsContent>
          <TabsContent value="staff">
            <StaffContent  />
          </TabsContent>
          <TabsContent value="inventory">
            <InventoryContent  />
          </TabsContent>
          <TabsContent value="branches">
            <BranchesContent  />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TabNavigation;
