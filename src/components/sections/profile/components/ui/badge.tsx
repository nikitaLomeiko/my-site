interface IProps {
  icon: string;
  value: string;
  label: string;
  color: string;
  delay: string;
  mobile?: boolean;
}

export const Badge: React.FC<IProps> = ({
  icon,
  value,
  label,
  color,
  delay,
  mobile = false,
}) => {
  if (mobile) {
    return (
      <div className={`glass rounded-xl p-3 ${delay}`}>
        <div className="flex items-center gap-2">
          <i className={`fas ${icon} ${color}`}></i>
          <span className="font-bold text-sm truncate">{value}</span>
        </div>
        <p className="text-xs opacity-80 mt-1">{label}</p>
      </div>
    );
  }

  return (
    <div className={`absolute glass rounded-2xl p-4 shadow-xl ${delay}`}>
      <div className="flex items-center gap-2">
        <i className={`fas ${icon} ${color}`}></i>
        <span className="font-bold text-sm">{value}</span>
      </div>
      <p className="text-xs opacity-80 mt-1">{label}</p>
    </div>
  );
};
