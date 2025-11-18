"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function BranchesContent() {
  const [branches] = useState([
    { id: 1, name: 'Boston', location: 'Downtown', phone: '555-0001', status: 'active', patients: 10, staff: 5 },
    { id: 2, name: 'Cambridge', location: 'North states', phone: '555-0002', status: 'active', patients: 7, staff: 3 },
    { id: 3, name: 'london', location: 'South states', phone: '555-0003', status: 'active', patients: 7, staff: 3 },
  ]);

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Branch Management</CardTitle>
            <CardDescription>Manage clinic branches</CardDescription>
          </div>
          <Button><Plus className="mr-2 h-4 w-4" />Add Branch</Button>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {branches.map(branch => (
              <Card key={branch.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{branch.name}</CardTitle>
                    <Badge variant={branch.status === 'active' ? 'default' : 'secondary'}className="bg-green-800">
                      {branch.status}
                    </Badge>
                  </div>
                  <CardDescription>{branch.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> {branch.phone}</p>
                    <p><strong>Patients:</strong> {branch.patients}</p>
                    <p><strong>Staff:</strong> {branch.staff}</p>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                    <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
