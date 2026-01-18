import TripForm from "@/components/trips/TripForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useParams } from "react-router-dom";

const EditTripPage = () => {
  const { id } = useParams();

  if (loading) return <div>loading</div>;
  const formattedDate = {
    ...data,
    starDate: startDate.split("T")[0],
    endDate: data?.endtDate.split("T")[0],
  };
  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>
            <CardDescription>Update information of your trip</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TripForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default EditTripPage;
