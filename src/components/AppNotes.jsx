// eslint-disable-next-line no-unused-vars
import React from "react";
import { getInitialData } from "../utils/data";
import ListNotes from "./ListNotes";

function AppNotes() {
  const notes = getInitialData();

  return (
    <div className="app-notes">
      <h1>Notes</h1>
      <ListNotes notes={notes} />
    </div>
  );
}

export default AppNotes;
