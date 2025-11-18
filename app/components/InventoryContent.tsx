"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function InventoryContent() {
  const [branches] = useState(['Main Branch', 'North Branch', 'East Branch']);
  const [inventory, setInventory] = useState([
    { id: 1, item: 'Paracetamol', quantity: 500, branch: 'Main Branch', minStock: 100, price: 0.5 },
    { id: 2, item: 'Ibuprofen', quantity: 50, branch: 'North Branch', minStock: 100, price: 0.75 },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newItem, setNewItem] = useState({ item: '', branch: '', quantity: '', minStock: '', price: '' });

  const handleAddItem = () => {
    if (newItem.item && newItem.branch && newItem.quantity && newItem.minStock && newItem.price) {
      setInventory([...inventory, {
        id: inventory.length + 1,
        item: newItem.item,
        branch: newItem.branch,
        quantity: parseInt(newItem.quantity),
        minStock: parseInt(newItem.minStock),
        price: parseFloat(newItem.price),
      }]);
      setNewItem({ item: '', branch: '', quantity: '', minStock: '', price: '' });
      setOpenDialog(false);
    }
  };

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>Track medicines and supplies</CardDescription>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" />Add Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Inventory Item</DialogTitle>
                <DialogDescription>Enter item details</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Item</Label>
                  <Input value={newItem.item} onChange={(e) => setNewItem({ ...newItem, item: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label>Branch</Label>
                  <select className="border rounded p-2" value={newItem.branch} onChange={(e) => setNewItem({ ...newItem, branch: e.target.value })}>
                    <option value="">Select Branch</option>
                    {branches.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label>Quantity</Label>
                    <Input type="number" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Min Stock</Label>
                    <Input type="number" value={newItem.minStock} onChange={(e) => setNewItem({ ...newItem, minStock: e.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Price</Label>
                    <Input type="number" step="0.01" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={handleAddItem}>Add Item</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-medium">Item</th>
                  <th className="p-3 text-left font-medium">Branch</th>
                  <th className="p-3 text-left font-medium">Quantity</th>
                  <th className="p-3 text-left font-medium">Min Stock</th>
                  <th className="p-3 text-left font-medium">Price</th>
                  <th className="p-3 text-left font-medium">Status</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.item}</td>
                    <td className="p-3"><Badge variant="outline">{item.branch}</Badge></td>
                    <td className="p-3">{item.quantity}</td>
                    <td className="p-3">{item.minStock}</td>
                    <td className="p-3">${item.price.toFixed(2)}</td>
                    <td className="p-3">
                      <Badge variant={item.quantity > item.minStock ? 'default' : 'destructive'}>
                        {item.quantity > item.minStock ? 'In Stock' : 'Low Stock'}
                      </Badge>
                    </td>
                    <td className="p-3 flex space-x-2">
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
