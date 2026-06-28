const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-3xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager — University Assignment
      </div>
    </footer>
  );
};

export default Footer;
