"use client";

import { FC } from "react";

export const InformationRow: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-baseline gap-4 border-b border-dashed px-2">
      <label className="shrink-0">{label}</label>
      <p className="font-medium">{value}</p>
    </div>
  );
};
