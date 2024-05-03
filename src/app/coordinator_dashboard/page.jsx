"use server"

import { redirect } from 'next/navigation';

async function page() {
  redirect('/coordinator_dashboard/dashboard');
}

export default page;