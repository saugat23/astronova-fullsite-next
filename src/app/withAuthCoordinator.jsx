"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token_coordinator");

      if (!token) {
        router.push("/coordinator_login");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
