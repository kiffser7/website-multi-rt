import { Image, SekilasAcara } from "../data";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage pt-16">
      <div className="container mx-auto px-2">
        {/* Hero */}
        <div className="hero grid md:grid-cols-2 items-center grid-cols-1 lg:pt-0 pt-16">
          <div className="text-center md:text-left lg:pb-0 pb-16">
            <div className="bg-indigo-900 w-fit p-2 rounded flex items-center gap-2 mx-auto md:mx-0 mb-4">
              <img
                src={Image.HeroImage}
                alt="Hero Image"
                className="lg:w-10 w-7"
              />
              <q className="text-white lg:text-base text-xs">
                Membangun Masa Depan Digital, Bersama.
              </q>
            </div>
            <h1 className="xl:text-8xl/tight font-semibold mb-2 lg:text-7xl/tight text-6xl/tight">
              Teknologi <br /> untuk kita.
            </h1>
            <p className="xl:text-base/loose opacity-75 text-sm/loose">
              teknologi adalah proses kreatif yang mengubah cara kita hidup,
              bekerja, dan berinteraksi. Ia terus berkembang, mendorong
              terobosan baru, dan membuka peluang tanpa batas bagi masa depan.
            </p>
            <div className="mt-6">
              <a
                href="#jadwal-homepage"
                className="bg-stone-950 w-fit text-white p-3 rounded text-lg hover:bg-stone-900"
              >
                Lihat Jadwal Event <i className="ri-eye-fill"></i>{" "}
              </a>
            </div>
          </div>
          <img
            src={Image.HeroImage}
            alt="Hero Image"
            className="w-full md:block hidden lg:mb-0 -mb-14"
          />
        </div>
        {/* Hero */}
      </div>

      {/* Tentang */}
      <div className="tenteng bg-stone-950 py-28">
        <div className="container mx-auto px-2">
          <h1
            className="text-center text-white md:text-5xl/tight text-4xl/tight mb-6 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Sekilas Tentang Acara
          </h1>
          <p
            className="text-center text-white/75 md:text-base/loose text-sm/loose"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Selamat datang di Event! Acara ini adalah pertemuan para inovator,
            pengembang, dan pemimpin industri yang memiliki satu visi: membangun
            masa depan digital yang lebih cerah. Selama dua hari penuh, Anda
            akan berkesempatan untuk belajar langsung dari para ahli,
            berpartisipasi dalam sesi workshop interaktif, dan memperluas
            jaringan dengan sesama profesional.
          </p>

          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {SekilasAcara.map((acara) => (
              <div
                key={acara.id}
                className="text-center bg-white p-4 rounded-lg hover:bg-indigo-900 group"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay={acara.delay}
              >
                <i
                  className={` ${acara.icon} group-hover:text-white ri-3x
                 text-indigo-900`}
                ></i>
                <h1 className="group-hover:text-white text-3xl font-semibold my-4">
                  {acara.Judul}
                </h1>
                <p className="group-hover:text-white text-base/loose opacity-75">
                  {acara.text}
                </p>
              </div>
            ))}
            ;
          </div>

          <div className="text-center mt-16">
            <Link
              to={"tentang-event"}
              className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
              reloadDocument
            >
              Lihat Selengkapnya <i className="ri-eye-fill"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Pembicara */}
      <div className="pembicara py-28 ">
        <div className="container mx-auto px-2">
          <h1
            className="text-center md:text-5xl/tight text-4xl/tight mb-2 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Pembiacara Utama
          </h1>
          <p
            className="text-center md:text-base/loose text-sm/loose"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Berikut ini merupakan pembicara utama Event.
          </p>

          <div className="flex gap-10 justify-center items-center sm:flex-row flex-col mt-16">
            <div
              className="box relative w-96"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                src={Image.Pembicara1}
                alt="Pembiara Image"
                className="rounded-t-2xl"
              />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 from-40% to-black/0 to-100% bottom-0 left-0 "></div>
              <div className="absolute bottom-7 w-full text-center">
                <h1 className="text-white text-3xl font-semibold">
                  Ms. Jessica
                </h1>
                <p className="text-white/80 text-sm/loose">
                  CEO Perusahaan Jaya
                </p>
              </div>
            </div>
            <div
              className="box relative w-96"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img
                src={Image.Pembicara2}
                alt="Pembiara Image"
                className="rounded-t-2xl"
              />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 from-40% to-black/0 to-100% bottom-0 left-0 "></div>
              <div className="absolute bottom-7 w-full text-center">
                <h1 className="text-white text-3xl font-semibold">
                  Mr. Steven
                </h1>
                <p className="text-white/80 text-sm/loose">
                  CEO Perusahaan Techno
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to={"pembicara-event"}
              className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
              reloadDocument
            >
              Lihat Selengkapnya <i className="ri-eye-fill"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Pembicara */}

      {/* Sponsor */}
      <div className="sponsor bg-stone-950 py-16">
        <div className="container mx-auto px-2">
          <h1
            className="text-center text-white md:text-5xl/tight text-4xl/tight mb-8 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Sponsor Event
          </h1>

          <div className="flex items-center justify-center gap-10 flex-wrap sm:flex-nowrap">
            <img src={Image.Sponsor1} alt="Sponsor Image" className="w-24" />
            <img src={Image.Sponsor2} alt="Sponsor Image" className="w-32" />
            <img src={Image.Sponsor3} alt="Sponsor Image" className="w-24" />
            <img src={Image.Sponsor4} alt="Sponsor Image" className="w-32" />
          </div>
        </div>
      </div>
      {/* Sponsor */}

      {/* Jadwal */}
      <div className="jadwal py-28" id="jadwal-homepage">
        <div className="container mx-auto px-2">
          <h1
            className="text-center md:text-5xl/tight text-4xl/tight mb-2 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Pelaksanaan Event
          </h1>
          <p
            className="text-center md:text-base/loose text-sm/loose"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Berikut ini merupakan Jadwal Pelaksanaan Event.
          </p>

          <div className="mt-20 flex justify-center gap-10 md:flex-row flex-col items-center md:items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0087138199956!2d107.59343187356482!3d-6.889558767414788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6603f408a09%3A0xb0506a362a7810b2!2sParis%20Van%20Java%20Resort%20Lifestyle%20Place!5e0!3m2!1sid!2sid!4v1779499386224!5m2!1sid!2sid"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="p-2 bg-stone-950 sm:w-[500px] h-[400px] w-full"
            ></iframe>

            <div>
              <div className="mb-7">
                <p className="flex items-center gap-2">
                  <i className="ri-earth-fill ri-3x"></i>
                  PVJ Kota Bandung, Jawa Barat
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-calendar-fill ri-3x"></i>
                  Minggu, 28 September 2026
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-calendar-schedule-fill ri-3x"></i>
                  Terbatas 100 Orang
                </p>
              </div>
              <h1 className="text-5xl font-semibold">Rp. 50.000</h1>
              <div className="mt-8">
                <Link
                  to={"https://forms.gle/AqS7soDpiwptLxKz6"}
                  className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
                >
                  Daftar Sekarang{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jadwal */}
    </div>
  );
};

export default Homepage;
