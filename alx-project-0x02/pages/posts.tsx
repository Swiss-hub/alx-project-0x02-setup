import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold">Posts Page</h1>
      <p>This is the Posts page.</p>
    </div>
  );
}