// eslint-disable-next-line react/prop-types
export default function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="btn-archive" onClick={() => onArchive(id)}>
      <button className="btn-archive" onClick={() => onArchive(id)}>
        {archived ? "Pindahkan" : "Archive"}
      </button>
    </button>
  );
}
