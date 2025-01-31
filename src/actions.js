'use server';

import prisma from './lib/prisma';
import {redirect} from 'next/navigation';

export async function saveJobEntry(data) {
    const job = {
        title: data.get('title'),
        company: data.get('company'),
        start: data.get('start'),
        end: data.get('end'),
        description: data.get('description'),
    }
    
    await prisma.job.create({data: job});
    redirect('/');
}