import React from "react";
import { type CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border rounded-lg shadow p-4 m-2 bg-white">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;