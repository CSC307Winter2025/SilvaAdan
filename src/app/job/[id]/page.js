import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function Job({ params }) {
  const job = await prisma.job.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h1><b>Additional Job Information</b></h1>
      <br />
      <h3><b>Title:</b> {job.title}</h3>
      <h3><b>Company:</b> {job.company}</h3>
      <h3><b>Start Date:</b> {job.start}</h3>
      <h3><b>End Date:</b> {job.end}</h3>
      <h3><b>Description:</b> {job.description}</h3>
      <br />
      <h3><Link href="/"><b>Home</b></Link></h3>
    </div>
  );
}