"use client";

import { useGetCovidStatsQuery } from "@/redux/api/covid-stats";

export default function CovidStatsPage() {
  const { data: covidData, isLoading, isFetching } = useGetCovidStatsQuery();

  console.log({ covidData });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Covid Stats Page</h1>
    </div>
  );
}
