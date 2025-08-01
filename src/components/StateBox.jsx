export default function StateBox({ boxname, boxvalue }) {
  return (
    <div className="text-xs bg-olive-4 rounded-xl py-1 px-2">
      <span className="mr-1">{boxname}</span>
      <span className="font-semibold text-iris-10">{boxvalue}</span>
    </div>
  );
}
