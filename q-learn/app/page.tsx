import { Categories } from "@/components/categories";
import { ClientOnly } from "@/components/client-only";
import { Course } from "@/components/course";
import { Header } from "@/components/header";
import { Teachers } from "@/components/teachers";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
    <ClientOnly>
      <Header />
      <Categories />
      <Teachers />
      <Course />
      <Testimonials />
    </ClientOnly>
    </>
  )
}
