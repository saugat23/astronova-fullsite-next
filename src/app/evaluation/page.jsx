"use server"

import { redirect } from 'next/navigation';

async function page() {
  redirect('/evaluation/quiz1');
}

export default page;