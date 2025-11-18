"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Users, Calendar, Activity } from "lucide-react";

export default function DashboardContent() {
  // Example data
  const stats = [
    { title: 'Total Branches', value: 3, icon: Building2, color: 'text-blue-600' },
    { title: 'Total Patients', value: 3, icon: Users, color: 'text-green-600' },
    { title: 'Appointments Today', value: 2, icon: Calendar, color: 'text-purple-600' },
    { title: 'Total Staff', value: 4, icon: Activity, color: 'text-orange-600' },
  ];

  return (
    <div className="mt-4 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
