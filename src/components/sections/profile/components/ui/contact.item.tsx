interface IProps {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export const ContactItem: React.FC<IProps> = ({
  icon,
  label,
  value,
  color,
}) => (
  <div className="flex items-center p-3 glass-dark rounded-xl">
    <i className={`fas ${icon} ${color} mr-3 md:mr-4 text-lg md:text-xl`} />
    <div className="min-w-0 flex-1">
      <p className="font-medium text-sm md:text-base">{label}</p>
      <p className="opacity-80 text-sm truncate">{value}</p>
    </div>
  </div>
);
