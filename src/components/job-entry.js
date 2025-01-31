import Link from "next/link";

export default function JobEntry({ job }) {
    let link = "/job/" + job.id;

    return (
        <ul>
            <li><span><Link href={link}>{job.title}</Link></span></li>
            <li><span>{job.start} - {job.end}</span></li>
        </ul>
    )
}