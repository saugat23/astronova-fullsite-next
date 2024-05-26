import Home from "../sections/Home";
import { Toaster } from "sonner";

export default function Page() {

  return (
    <>
      <Toaster richColors position="top-right" />
      <Home />
    </>
  );
}
