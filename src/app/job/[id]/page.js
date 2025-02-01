import Link from 'next/link';
import prisma from '@/lib/prisma';
import { updateJobEntry } from '@/actions';

export default async function Job({ params }) {
  const job = await prisma.job.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!job) {
    return <div>Job not found</div>;
  }

  let convertedStart = new Date(job.start).toLocaleDateString();
  let convertedEnd = new Date(job.end).toLocaleDateString();

  return (
    <div>
      <h1><b>Additional Job Information</b></h1>
      <br />
      <h3><b>Title:</b> {job.title}</h3>
      <h3><b>Company:</b> {job.company}</h3>
      <h3><b>Start Date:</b> {convertedStart}</h3>
      <h3><b>End Date:</b> {convertedEnd}</h3>
      <h3><b>Description:</b> {job.description}</h3>
      <br />
      <h3><Link href="/"><b>Home</b></Link></h3>

      <h3><b>Edit Job</b></h3>
      <form action={updateJobEntry}>
        <input type="hidden" name="id" value={job.id} />
        <label>Title</label>
        <input type="text" name="title" defaultValue={job.title} />
        <br />
        <label>Company</label>
        <input type="text" name="company" defaultValue={job.company} />
        <br />
        <label>Start Date</label>
        <input type="date" name="start" defaultValue={job.start.toISOString().split('T')[0]} />
        <br />
        <label>End Date</label>
        <input type="date" name="end" defaultValue={job.end.toISOString().split('T')[0]} />
        <br />
        <label>Description</label>
        <textarea name="description" defaultValue={job.description}></textarea>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}