// eslint-disable-next-line react/prop-types
export default function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn-archive" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
}
