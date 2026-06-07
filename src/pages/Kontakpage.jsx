const Kontakpage = () => {
  return (
    <div className="kontak py-40 ">
      <div className="container mx-auto px-2">
        <h1 className="text-center text-6xl/tight font-semibold mb-4">
          Hubungi Kami
        </h1>
        <p className="text-center md:text-base/loose text-sm/loose">
          Bila ada Pertanyaan Terkait Event Silahkan Menghubungi Kami.
        </p>

        <form
          action="https://formspree.io/f/mgoqzrpj"
          method="POST"
          className="flex flex-col sm:w-[600px] mx-auto mt-10 gap-2 bg-stone-950 p-2 rounded-2xl w-full"
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama.."
            required
            autoComplete="off"
            className="p-3 bg-white rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email.."
            required
            autoComplete="off"
            className="p-3 bg-white rounded-lg"
          />
          <textarea
            name="pesan"
            cols={30}
            rows={10}  
            required
            placeholder="Pesan"
            className="p-3 bg-white rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-900 rounded-lg h-12 text-white border border-white cursor-pointer hover:bg-indigo-800 active:bg-indigo-900"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kontakpage;