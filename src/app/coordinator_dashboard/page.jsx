"use server";

import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

async function page() {
  const cookieStore = cookies();
  const coordinatorToken = cookieStore.get('token_coordinator');
  if (coordinatorToken) {
    redirect("/coordinator_dashboard/dashboard");
  } else {
    redirect("/coordinator_login");
  }
}

export default page;
