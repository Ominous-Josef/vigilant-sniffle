"use client";
import { Button } from "@/components/ui/button";
import { useLazyGetRandomUserQuery } from "@/redux/api/random-users";
import { useEffect, useMemo } from "react";
import { RandomUserDetails } from "./components/random-user-details";
import { RandomUserSkeleton } from "./components/skeleton";

export default function RandomUserPage() {
  const [fetchRandomUser, { data: randomUserData, isFetching, isLoading }] =
    useLazyGetRandomUserQuery();

  const randomUser = useMemo(() => {
    if (!randomUserData) return null;
    return randomUserData.results[0];
  }, [randomUserData]);

  useEffect(() => {
    fetchRandomUser();
  }, [fetchRandomUser]);

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-xl font-bold mb-4">Random User Page</h1>
        <Button
          onClick={() => fetchRandomUser()}
          disabled={isLoading || isFetching}
        >
          Generate random user
        </Button>
      </div>

      <div className="max-w-3xl mt-6">
        {isLoading || isFetching ? (
          <RandomUserSkeleton />
        ) : (
          randomUser && <RandomUserDetails user={randomUser} />
        )}
      </div>
    </div>
  );
}
