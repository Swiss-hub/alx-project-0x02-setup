import React from "react";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>This is the About page.</p>
    </div>
  );
}