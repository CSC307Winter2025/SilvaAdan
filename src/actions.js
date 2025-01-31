'use server';

import prisma from './lib/prisma';
import {redirect} from 'next/navigation';

export async function saveJobEntry(data) {
    const job = {
        title: data.get('title'),
        company: data.get('company'),
        start: new Date(data.get('start')).toISOString(),
        end: new Date(data.get('end')).toISOString(),
        description: data.get('description'),
    }
    
    await prisma.job.create({data: job});
    redirect('/');
}