"use client";

import { Card, CardContent } from "@/components/ui/card";
import { RandomUser } from "@/redux/api/random-users/interface";
import Image from "next/image";
import { FC } from "react";
import { InformationRow } from "./information-row";

export const RandomUserDetails: FC<{ user: RandomUser }> = ({
  user: randomUser,
}) => {
  return (
    <Card>
      <CardContent>
        <div className="grid justify-center gap-6">
          <div className="size-36 rounded-full overflow-hidden mx-auto">
            <Image
              src={randomUser.picture.large}
              width={300}
              height={300}
              alt={`${randomUser.name.first} ${randomUser.name.last}`}
              className="size-full object-cover"
            />
          </div>

          <p className="text-lg font-medium text-center">{`${randomUser.name.title}. ${randomUser.name.first} ${randomUser.name.last}`}</p>
        </div>

        <div
          className="grid gap-6 mt-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div className="space-y-4">
            <h2 className="border-b py-2 font-semibold">
              Personal Information
            </h2>

            <div className="space-y-3">
              <InformationRow label="Gender:" value={randomUser.gender} />
              <InformationRow
                label="Age:"
                value={randomUser.dob.age.toString()}
              />
              <InformationRow label="Phone:" value={randomUser.phone} />
              <InformationRow label="Cell:" value={randomUser.cell} />
              <InformationRow
                label="Username:"
                value={randomUser.login.username}
              />
              <InformationRow
                label="Date of Birth:"
                value={new Date(randomUser.dob.date).toLocaleDateString()}
              />
              <InformationRow
                label="Registered On:"
                value={new Date(
                  randomUser.registered.date
                ).toLocaleDateString()}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="border-b py-2 font-semibold">Address Information</h2>

            <div className="space-y-3">
              <InformationRow
                label="Street Address:"
                value={`${randomUser.location.street.number} ${randomUser.location.street.name}`}
              />
              <InformationRow label="City:" value={randomUser.location.city} />
              <InformationRow
                label="State:"
                value={randomUser.location.state}
              />
              <InformationRow
                label="Country:"
                value={randomUser.location.country}
              />
              <InformationRow
                label="Postcode:"
                value={randomUser.location.postcode.toString()}
              />
              <InformationRow
                label="Longitude:"
                value={`${randomUser.location.coordinates.longitude}`}
              />
              <InformationRow
                label="Latitude:"
                value={`${randomUser.location.coordinates.latitude}`}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
