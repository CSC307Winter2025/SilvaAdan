import Link from 'next/link';

export default function Job({ params }) {
  return (
    <div>
      {params.start}
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}