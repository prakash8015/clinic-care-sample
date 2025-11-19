"use client";

import React, { useState } from "react";
import DashboardContent from "./DashboardContent";
import PatientsContent from "./PatientsContent";
import AppointmentsContent from "./AppointmentsContent";
import StaffContent from "./StaffContent";
import InventoryContent from "./InventoryContent";
import BranchesContent from "../components/BranchesContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserCog, 
  Package, 
  Building2 
} from "lucide-react";
import { cn } from "@/lib/utils";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { value: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { value: "patients", label: "Patients", icon: Users },
    { value: "appointments", label: "Appointments", icon: Calendar },
    { value: "staff", label: "Staff", icon: UserCog },
    { value: "inventory", label: "Inventory", icon: Package },
    { value: "branches", label: "Branches", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-6">
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Desktop Navigation */}
          <TabsList className="hidden lg:inline-flex w-auto">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value}
                className="flex items-center gap-2"
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="dashboard">
            <DashboardContent />
          </TabsContent>
          <TabsContent value="patients">
            <PatientsContent />
          </TabsContent>
          <TabsContent value="appointments">
            <AppointmentsContent />
          </TabsContent>
          <TabsContent value="staff">
            <StaffContent />
          </TabsContent>
          <TabsContent value="inventory">
            <InventoryContent />
          </TabsContent>
          <TabsContent value="branches">
            <BranchesContent />
          </TabsContent>
        </Tabs>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="grid grid-cols-6 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive 
                    ? "text-primary" 
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default TabNavigation;



