"use client";

import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

interface Branch {
  id: number;
  name: string;
}

interface HeaderProps {
  branches: Branch[];
}

const Header: React.FC<HeaderProps> = ({ branches }) => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-3">
          <Building2 className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ClinicCare</h1>
            <p className="text-sm text-gray-500">Multi-Branch Management System</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              {branches.map((branch) => (
                <SelectItem key={branch.id} value={branch.id.toString()}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline">Admin</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
