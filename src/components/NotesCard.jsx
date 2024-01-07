// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemCard from "./ItemCard";

// eslint-disable-next-line react/prop-types
export default function NotesCard({ title, createdAt, body }) {
  return (
    <div className="notes-card">
      <ItemCard title={title} createdAt={createdAt} body={body} />
    </div>
  );
}
