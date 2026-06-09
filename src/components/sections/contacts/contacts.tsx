import { StatusItem } from "./components/status.item";

interface IProps {
  phone: string;
  email: string;
  telegram: string;
  vk: string;
  typeEmployment?: string;
  formatWork?: string;
  removal?: string;
  businessTrips?: string;
  travelTime?: string;
}

export const Contacts: React.FC<IProps> = (props) => {
  const {
    email,
    phone,
    telegram,
    travelTime,
    vk,
    businessTrips,
    formatWork,
    removal,
    typeEmployment,
  } = props;
  return (
    <section id="contacts" className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-purple-700">
        Контакты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <div className="md:col-span-2 glass rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 glass-dark rounded-2xl gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <i className="fas fa-phone text-blue-500 text-4xl sm:text-2xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl mb-1">Телефон</h3>
                <p className="text-base sm:text-lg truncate">{phone}</p>
                <p className="opacity-70 text-xs sm:text-sm mt-2">
                  Предпочитаемый способ связи, WhatsApp/Telegram
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 glass-dark rounded-2xl gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <i className="fas fa-envelope text-blue-500 text-4xl sm:text-2xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl mb-1">Email</h3>
                <p className="text-base sm:text-lg break-all">{email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 glass-dark rounded-2xl gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <i className="fab fa-telegram text-blue-500 text-4xl sm:text-2xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl mb-1">Telegram</h3>
                <p className="text-base sm:text-lg truncate">@{telegram}</p>
                <a
                  href={`https://t.me/${telegram}`}
                  className="opacity-70 hover:opacity-100 transition-opacity block mt-2 text-xs sm:text-sm break-all"
                >
                  https://t.me/{telegram}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 glass-dark rounded-2xl gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <i className="fab fa-vk text-blue-500 text-4xl sm:text-2xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl mb-1">VK</h3>
                <a
                  href={vk}
                  className="opacity-70 hover:opacity-100 transition-opacity text-base sm:text-lg break-all"
                >
                  {vk}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 h-full">
          <h3 className="font-bold mb-4 sm:mb-6 text-xl sm:text-2xl text-purple-700">
            Готовность к работе
          </h3>
          <ul className="space-y-4 sm:space-y-6">
            <StatusItem
              title="Тип занятости"
              value={typeEmployment || "по договоренности"}
              isCheck
            />
            <StatusItem
              title="Формат работы"
              value={formatWork || "удаленно"}
              isCheck
            />
            <StatusItem
              title="Переезд"
              value={removal || "не готов"}
              isCheck={!!removal}
            />
            <StatusItem
              title="Командировки"
              value={businessTrips || "не готов"}
              isCheck={!!businessTrips}
            />
            <StatusItem
              title="Время в пути"
              value={travelTime || "не имеет значения"}
              isCheck
            />
          </ul>
        </div>
      </div>
    </section>
  );
};
