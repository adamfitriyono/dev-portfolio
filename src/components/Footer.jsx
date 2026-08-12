export default function Footer() {
  const currentTime = new Intl.DateTimeFormat('id-ID', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Jakarta',
  }).format(new Date());

  return (
    <footer className="footer-dark relative mt-10 border-t border-white/10 bg-[#242424] py-4 md:py-5">
      <div className="container">
        <div className="flex flex-col gap-2 text-center text-xs sm:text-sm text-muted md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-medium text-gray-500 tracking-wide">AdamFit@Copyright2026</p>
          <p className="font-medium text-gray-500 tracking-wide">Indonesia Time {currentTime}</p>
        </div>
      </div>
    </footer>
  );
}
