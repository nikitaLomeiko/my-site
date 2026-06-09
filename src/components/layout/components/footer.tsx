interface IProps {
  name: string;
  position: string;
}

export const Footer: React.FC<IProps> = ({ name, position }) => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-bold text-purple-700 mb-2">{name}</p>
            <p className="opacity-70">{position}</p>
          </div>
          <div className="flex space-x-8">
            <a
              href="https://t.me/barsik_new"
              className="opacity-70 hover:opacity-100 transition-all duration-400 text-2xl hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://vk.com/id390878963"
              className="opacity-70 hover:opacity-100 transition-all duration-400 text-2xl hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-vk"></i>
            </a>
            <a
              href="mailto:nikitalomielko@gmail.com"
              className="opacity-70 hover:opacity-100 transition-all duration-400 text-2xl hover:scale-125"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="opacity-50 text-[var(--color-muted)]">
            © {new Date().getFullYear()} {name}. {position}.
          </p>
        </div>
      </div>
    </footer>
  );
};
