const Footer = () => {
  return (
    <div className="bg-stone-950 py-6">
      <div className="container mx-auto px-2 flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2">
        <p className="text-white text-base/loose">
          &copy; Copyright | 2026 by <span className="font-bold">Muhammad Latif Zahran</span>
        </p>

        <div className="flex items-center sm:gap-4 gap-1">
          <p className="text-white text-base/loose">Social Media</p>
          <span className="text-white"></span>
          <a href="https://www.tiktok.com/@kiffsermax09" target="_blank">
            <i className="ri-github-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://www.tiktok.com/@kiffsermax09" target="_blank">
            <i className="ri-tiktok-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://wa.me/6282186593791" target="_blank">
            <i className="ri-whatsapp-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
