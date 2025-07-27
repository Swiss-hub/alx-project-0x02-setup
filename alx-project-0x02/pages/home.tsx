import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([
    { title: "Card One", content: "This is the content of Card One." },
    { title: "Card Two", content: <span>Another card with <b>JSX</b> content.</span> },
    { title: "Card Three", content: "You can reuse this Card component anywhere!" }
  ]);


  const handleAddCard = (data: { title: string; content: string }) => {
    setCards([...cards, { title: data.title, content: data.content }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Button
        label="Add New Card"
        onClick={() => setModalOpen(true)}
        className="mb-4"
      />
      <div className="flex flex-col gap-4 w-full max-w-md">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} content={card.content} />
        ))}
      </div>
      <PostModal
        isOpen={ModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
}