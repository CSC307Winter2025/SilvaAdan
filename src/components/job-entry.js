import Link from "next/link";

export default function JobEntry({ job }) {
    let link = "/job/" + job.id;
    let convertedStart = new Date(job.start).toLocaleDateString();
    let convertedEnd = new Date(job.end).toLocaleDateString();

    return (
        <ul>
            <li><span><Link href={link}>{job.title}</Link></span></li>
            <li><span>{convertedStart} - {convertedEnd}</span></li>
        </ul>
    )
}