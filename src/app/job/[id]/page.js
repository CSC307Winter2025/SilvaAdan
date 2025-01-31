import Link from 'next/link';

export default function Job({ params }) {
  return (
    <div>
      {params?.id}
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}