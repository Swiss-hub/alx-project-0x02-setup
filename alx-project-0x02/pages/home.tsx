import React from "react";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Card title="Card One" content="This is the content of Card One." />
        <Card title="Card Two" content={<span>Another card with <b>JSX</b> content.</span>} />
        <Card title="Card Three" content="You can reuse this Card component anywhere!" />
      </div>
    </div>
  );
}