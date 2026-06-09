interface IProps {
  title: string;
  value: string;
  isCheck?: boolean;
}

export const StatusItem: React.FC<IProps> = ({
  title,
  value,
  isCheck = false,
}) => {
  return (
    <li
      className={`flex items-center p-4 bg-gradient-to-r ${
        isCheck ? "from-green-900/20" : "from-red-900/20"
      } to-transparent rounded-xl`}
    >
      <i
        className={`fas ${
          isCheck
            ? "fa-check-circle text-green-400"
            : "fa-times-circle text-red-400"
        } mr-4 text-xl`}
      ></i>
      <div>
        <span className="font-medium block">{title}:</span>
        <span>{value}</span>
      </div>
    </li>
  );
};
