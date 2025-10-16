import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RandomUserSkeleton() {
  return (
    <Card>
      <CardContent>
        <div className="grid justify-center gap-6">
          {/* Profile picture skeleton */}
          <Skeleton className="size-36 rounded-full mx-auto" />

          {/* Name skeleton */}
          <Skeleton className="h-6 w-48 mx-auto" />
        </div>

        <div
          className="grid gap-6 mt-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {/* Personal Information section */}
          <div className="space-y-4">
            <h2 className="border-b py-2 font-semibold">
              Personal Information
            </h2>

            <div className="space-y-3">
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
            </div>
          </div>

          {/* Address Information section */}
          <div className="space-y-4">
            <h2 className="border-b py-2 font-semibold">Address Information</h2>

            <div className="space-y-3">
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
              <InformationRowSkeleton />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const InformationRowSkeleton = () => {
  return (
    <div className="flex items-center gap-4 border-b border-dashed px-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
};
