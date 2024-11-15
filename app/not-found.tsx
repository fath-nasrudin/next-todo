import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-1 grid place-content-center place-items-center">
      <div>Nothing to see here</div>
      <Link href="/" className="text-red-500 font-semibold">
        Back To Home
      </Link>
    </div>
  );
}
