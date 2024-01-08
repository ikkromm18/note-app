/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import NotesCard from "./NotesCard";

export default function ListNotes({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="list-notes">
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => (
          <NotesCard
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      ) : (
        <p>Tidak Ada Catatan Yang Diarsipkan</p>
      )}
    </div>
  );
}
