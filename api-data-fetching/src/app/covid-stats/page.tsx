"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCovidStatsQuery } from "@/redux/api/covid-stats";
import { DateTime } from "luxon";
import { useCallback, useState } from "react";
import { CovidChart } from "./components/covid-chart";

const formatDate = (dateInt: number) => {
  if (!dateInt) return "";
  const dateStr = String(dateInt);
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  const formattedDate = DateTime.fromFormat(dateStr, "yyyyMMdd");
  // Using DD/MM format for readability on the chart axis
  return formattedDate.toLocaleString(DateTime.DATE_MED);
};

export default function CovidStatsPage() {
  const [timeRange, setTimeRange] = useState<number>(120);
  const { data: covidData, isLoading, isFetching } = useGetCovidStatsQuery();

  const sortedData = useCallback(() => {
    if (Array.isArray(covidData)) {
      const statsArray = [...covidData];
      return statsArray.sort((a, b) => b.date - a.date);
    }
    return [];
  }, [covidData]);

  const limitedData = useCallback(() => {
    return sortedData().slice(0, timeRange);
  }, [sortedData, timeRange]);

  const processedData = useCallback(() => {
    return limitedData()
      .map((item) => ({
        name: formatDate(item.date),
        date: item.date.toString(),
        positive: item.positive,
        death: item.death,
        hospitalizedCurrently: item.hospitalizedCurrently,
        totalTestResults: item.totalTestResults,
        newDeaths: item.deathIncrease,
        newPositive: item.positiveIncrease,
        newHospitalized: item.hospitalizedIncrease,
        newTests: item.totalTestResultsIncrease,
      }))
      .reverse();
  }, [limitedData]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="relative space-y-2">
        <h1 className="text-xl font-bold">Covid Stats Page</h1>

        <p className="text-sm">
          Covid statistics for the selected time range (US).
        </p>

        <Select
          value={String(timeRange)}
          onValueChange={(value) => setTimeRange(Number(value))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Time Range" />
          </SelectTrigger>
          <SelectContent className="bg-gray-200">
            <SelectItem value="30">Last 30 Days</SelectItem>
            <SelectItem value="60">Last 60 Days</SelectItem>
            <SelectItem value="90">Last 90 Days</SelectItem>
            <SelectItem value="120">Last 120 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <CovidChart data={processedData()} isLoading={isLoading || isFetching} />
    </div>
  );
}
