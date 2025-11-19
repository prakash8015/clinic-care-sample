"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Pagination({
  page,
  totalPages,
  onPageChangeAction,
  className,
}: {
  page: number;
  totalPages: number;
  onPageChangeAction: (page: number) => void; // renamed
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-4 select-none",
        className
      )}
    >
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        disabled={page === 1}
        onClick={() => onPageChangeAction(page - 1)}
        className="h-9 w-9 rounded-lg"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Indicator */}
      <div className="px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-medium">
        Page {page} of {totalPages}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        disabled={page === totalPages}
        onClick={() => onPageChangeAction(page + 1)}
        className="h-9 w-9 rounded-lg"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
