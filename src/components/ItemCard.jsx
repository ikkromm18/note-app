
// eslint-disable-next-line react/prop-types
export default function ItemCard({ title, createdAt, body }) {
  return (
    <>
      <div className="card-item">
        <h3 className="card-item__title">{title}</h3>
        <p className="card-item__createdAt">{createdAt}</p>
        <p className="card-item__body">{body}</p>
      </div>
    </>
  );
}
