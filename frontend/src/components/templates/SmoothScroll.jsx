import { ReactLenis } from 'lenis/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function SmoothScroll() {
  return (
    <ReactLenis root>
      <main >
        <article>
          <section className="text-white h-screen w-full bg-blue-300 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Welcome to Wollo University <br /> Job Portal! Scroll Down to Explore 👇
            </h1>
          </section>

          <section className="bg-slate-950 text-white grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Find Your Dream Job Today! <br /> Connect with Top Employers 💼
            </h1>
          </section>

          <section id='contact' className="text-black h-screen w-full bg-gray-300 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Contact Wollo University (KIOT) job <portal>portal</portal> 📞
            </h1>
            <div className="text-center mt-6 text-xl">
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" /> +251 33 111 2222
              </p>
              <p className="flex items-center justify-center gap-2 mt-2">
                <Mail className="w-5 h-5 text-blue-600" /> contact@wu.edu.et
              </p>
              <p className="flex items-center justify-center gap-2 mt-2">
                <MapPin className="w-5 h-5 text-red-600" /> Kombolcha Institute of Technology, Wollo University
              </p>
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
