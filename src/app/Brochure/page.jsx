export default function BrochurePage() {
  const totalPages = 24;
  const basePath = "/UDBHAV'25 BROCHURE/UDBHAV'25 BROCHURE-";

  // Create array of image URLs from 1 to 24
  const imageUrls = Array.from({ length: totalPages }, (_, i) => {
    const pageNum = String(i + 1).padStart(2, "0"); // 01, 02, ..., 24
    return `${basePath}${pageNum}.png`;
  });

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">UDBHAV'25 BROCHURE</h1>
      <div className="flex flex-col items-center gap-8">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brochure Page ${index + 1}`}
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        ))}
      </div>
    </main>
  );
}
