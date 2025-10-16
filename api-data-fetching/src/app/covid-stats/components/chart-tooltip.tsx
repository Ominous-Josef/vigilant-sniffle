"use client";


export function CustomChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) {
  if (active && payload && payload.length) {
    const positiveData = payload.find(
      (p) => p.name === "New Positive Cases"
    );
    const deathData = payload.find((p) => p.name === "New Deaths");

    return (
      <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm">
        <p className="font-bold text-gray-700 mb-1">Date: {label}</p>
        {positiveData && (
          <p style={{ color: positiveData.color }}>
            {positiveData.name}:{" "}
            <span className="font-semibold">
              {positiveData.value.toLocaleString()}
            </span>
          </p>
        )}
        {deathData && (
          <p style={{ color: deathData.color }}>
            {deathData.name}:{" "}
            <span className="font-semibold">
              {deathData.value.toLocaleString()}
            </span>
          </p>
        )}
      </div>
    );
  }
  return null;
}
