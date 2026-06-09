interface IProps {
  githubUrl?: string;
  resumeUrl: string;
  fullname: string;
}

export const ActionButtons: React.FC<IProps> = ({
  githubUrl,
  resumeUrl,
  fullname,
}) => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error("Failed to download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Резюме_${fullname.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          <i className="fab fa-github text-lg sm:text-xl" />
          <span>Мой GitHub</span>
        </a>
      )}

      {resumeUrl && (
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          <i className="fas fa-download text-base sm:text-lg" />
          <span>Резюме (PDF)</span>
        </button>
      )}
    </div>
  );
};
