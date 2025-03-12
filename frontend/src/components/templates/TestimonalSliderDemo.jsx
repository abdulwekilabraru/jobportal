import FancyTestimonialsSlider from "../FancyTestimonialsSlider";


export function TestimonalSliderDemo() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "wollo univirsity (KIOT) job portal",
      name: "ABDULWEKIL ABRAR",
      role: "developer",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "wollo university information system department",
      name: "Kaleb Debela ",
      role: "System designer",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "wollo university information system department .",
      name: "Girma Messay",
      role: "Data collector",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "wollo university information system department.",
      name: " Bedasa Fekadu",
      role: "Requirement analyst",
    },
  ];
  return (
    <div className="relative h-[500px] w-full overflow-hidden mb-15 rounded-lg border bg-background">
      <div className="mt-[64px] px-12 flex justify-center">

       
        <FancyTestimonialsSlider  testimonials={testimonials}/>

      </div>
    </div>
  );
}
