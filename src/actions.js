'use server';

import prisma from './lib/prisma';
import {redirect} from 'next/navigation';

export async function createJobEntry({data}) {
    const jobEntry = {
        name: data.get('name'),
        company: data.get('company'),
        start: data.get('start'),
        end: data.get('end'),
        description: data.get('description'),
    }
    
    await prisma.jobEntry.create({data: job});
    return jobEntry;
}