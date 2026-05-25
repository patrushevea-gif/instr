const categories = [
  { id: "data", name: "Данные и таблицы" },
  { id: "documents", name: "Документы" },
  { id: "production", name: "Производство" },
  { id: "quality", name: "Качество" },
  { id: "engineering", name: "Инженерия" },
  { id: "warehouse", name: "Склад и маркировка" },
  { id: "supply", name: "Снабжение" },
  { id: "sales", name: "Продажи" },
  { id: "marketing", name: "Маркетинг" },
  { id: "finance", name: "Финансы" },
  { id: "hr", name: "Персонал и обучение" },
  { id: "legal", name: "Право" },
  { id: "it", name: "IT и администрирование" },
  { id: "security", name: "Безопасность" },
  { id: "ai", name: "Искусственный интеллект" },
  { id: "dev", name: "Разработка" },
  { id: "web", name: "Веб-сайты" },
  { id: "media", name: "Медиа" },
  { id: "text", name: "Текст" },
  { id: "logistics", name: "Логистика" },
  { id: "maintenance", name: "ТОиР" },
  { id: "safety", name: "Охрана труда и экология" },
  { id: "service", name: "Сервис" },
  { id: "daily", name: "Повседневные задачи" }
];

const toolGroups = {
  data: [
    ["Просмотр CSV", "table"], ["Очистка CSV", "table"], ["Определение разделителя CSV", "parser"], ["CSV в JSON", "converter"],
    ["CSV в Excel", "converter"], ["Просмотр Excel", "table"], ["Excel в CSV", "converter"], ["Excel в JSON", "converter"],
    ["Поиск дублей в таблице", "table"], ["Профиль колонок таблицы", "table"], ["Объединение листов Excel", "table"],
    ["Импорт спецификации", "table"], ["Сравнение спецификаций", "compare"], ["Сравнение коммерческих предложений", "compare"],
    ["Нормализация прайс-листа", "table"], ["SQL-запрос по CSV", "table"], ["Просмотр JSON", "json"], ["Форматирование JSON", "json"],
    ["Исправление JSON", "json"], ["Генератор схемы JSON", "json"], ["Просмотр XML", "parser"], ["XML в JSON", "converter"],
    ["Форматирование YAML", "parser"], ["YAML в JSON", "converter"], ["Сводная таблица", "table"], ["Отчет о качестве данных", "table"]
  ],
  documents: [
    ["Объединение PDF", "document"], ["Разделение PDF", "document"], ["Поворот страниц PDF", "document"], ["Сжатие PDF", "document"],
    ["Просмотр метаданных PDF", "parser"], ["Удаление метаданных PDF", "document"], ["Извлечение текста из PDF", "parser"],
    ["PDF в изображения", "converter"], ["Изображения в PDF", "document"], ["Markdown в PDF", "document"],
    ["Шаблон DOCX", "document"], ["Извлечение текста из DOCX", "parser"], ["Генератор сертификата", "document"],
    ["Генератор акта", "document"], ["Генератор протокола встречи", "document"], ["Сравнение версий документа", "compare"],
    ["Чек-лист согласования документа", "checklist"], ["Проверка названия файла", "checklist"], ["Реестр документов", "register"],
    ["Титульный лист", "document"], ["Оглавление", "document"], ["Шаблон служебной записки", "document"]
  ],
  production: [
    ["Калькулятор OEE", "calc"], ["Расчет такта", "calc"], ["Расчет времени цикла", "calc"], ["Планировщик мощности", "calc"],
    ["Балансировка линии", "calc"], ["Поиск узкого места", "calc"], ["Анализ сменного отчета", "table"], ["Анализ простоев", "table"],
    ["Проверка производственного плана", "checklist"], ["Расчет партии", "calc"], ["Расчет Kanban", "calc"], ["Расчет WIP", "calc"],
    ["Расчет производительности", "calc"], ["Журнал переналадок", "register"], ["Чек-лист SMED", "checklist"], ["Расчет стоимости брака", "calc"],
    ["Расчет выхода годной продукции", "calc"], ["Производственное задание", "document"], ["Маршрутный лист", "document"],
    ["Календарь производства", "register"], ["Доска загрузки станков", "register"], ["Журнал производственных сигналов", "register"]
  ],
  quality: [
    ["Калькулятор Cp/Cpk", "calc"], ["Калькулятор Pp/Ppk", "calc"], ["Контрольная карта", "calc"], ["Гистограмма", "calc"],
    ["Диаграмма Парето", "table"], ["Классификатор дефектов", "register"], ["Отчет о несоответствии", "document"],
    ["Отчет 8D", "document"], ["Расчет выборки AQL", "calc"], ["План контроля", "document"], ["Анализ повторяемости измерений", "calc"],
    ["Лист MSA", "document"], ["Контроль сроков поверки", "register"], ["Чек-лист входного контроля", "checklist"],
    ["Чек-лист финального контроля", "checklist"], ["Оценка поставщика по качеству", "table"], ["Реестр рекламаций", "register"],
    ["Анализ корневой причины", "document"], ["Метод 5 почему", "document"], ["Диаграмма Исикавы", "document"], ["План корректирующих действий", "register"]
  ],
  engineering: [
    ["Конвертер единиц", "calc"], ["Калькулятор допусков", "calc"], ["Расчет посадок", "calc"], ["Расчет резьбы", "calc"],
    ["Расчет момента затяжки", "calc"], ["Расчет массы по плотности", "calc"], ["Расчет расхода краски", "calc"],
    ["Расчет раскроя листа", "calc"], ["Расчет раскроя прутка", "calc"], ["Просмотр DXF", "parser"], ["Просмотр STL", "parser"],
    ["Просмотр STEP", "parser"], ["Просмотр G-code", "parser"], ["Метаданные 3D-модели", "parser"], ["Шаблон извещения об изменении", "document"],
    ["Расчет отверстий по окружности", "calc"], ["Расчет гиба", "calc"], ["Расчет передаточного числа", "calc"], ["Расчет мощности двигателя", "calc"]
  ],
  warehouse: [
    ["Генератор QR-кода", "document"], ["Сканер QR-кода", "parser"], ["Генератор штрихкода", "document"], ["Сканер штрихкода", "parser"],
    ["Генератор Data Matrix", "document"], ["Разбор GS1", "parser"], ["Этикетка GS1", "document"], ["Генератор серийных номеров", "register"],
    ["Генератор партий", "register"], ["Этикетка паллеты", "document"], ["Этикетка короба", "document"], ["Упаковочный лист", "document"],
    ["Нормализация складского CSV", "table"], ["Отчет по возрасту запасов", "table"], ["ABC-анализ", "table"], ["План циклической инвентаризации", "register"],
    ["Генератор ячеек хранения", "register"], ["Лист отбора", "document"], ["Контроль FIFO", "checklist"], ["Проверка срока годности", "checklist"]
  ],
  supply: [
    ["Реестр поставщиков", "register"], ["Квалификация поставщика", "checklist"], ["Заявка на закупку", "document"], ["Запрос коммерческого предложения", "document"],
    ["Сравнение предложений поставщиков", "compare"], ["Проверка заказа поставщику", "checklist"], ["Контроль срока поставки", "register"],
    ["Справка по Incoterms", "document"], ["Матрица рисков поставки", "register"], ["Оценка поставщика", "table"], ["Трекер цен по договору", "register"],
    ["Поиск альтернативного материала", "document"], ["Расчет минимальной партии", "calc"], ["Расчет страхового запаса", "calc"],
    ["Точка заказа", "calc"], ["Отчет об отклонении цены", "table"], ["Расчет экономии закупок", "calc"], ["Претензия поставщику", "document"]
  ],
  sales: [
    ["Коммерческое предложение", "document"], ["Калькулятор цены", "calc"], ["Калькулятор маржи", "calc"], ["Согласование скидки", "document"],
    ["Очистка импорта CRM", "table"], ["Оценка лида", "table"], ["Прогноз воронки продаж", "calc"], ["Проверка тендерного пакета", "checklist"],
    ["Календарь тендеров", "register"], ["Подбор продукта", "document"], ["Чек-лист требований клиента", "checklist"], ["Скрипт работы с возражениями", "document"],
    ["План-факт продаж", "table"], ["План по клиенту", "document"], ["Отчет о звонке", "document"], ["Анализ выигранных и проигранных сделок", "table"]
  ],
  marketing: [
    ["Доска рыночных сигналов", "register"], ["Трекер цен конкурентов", "table"], ["Бриф на контент", "document"], ["Проверка SEO-заголовка", "text"],
    ["Проверка метаописания", "text"], ["Генератор UTM-меток", "converter"], ["Чек-лист кампании", "checklist"], ["Чек-лист лендинга", "checklist"],
    ["Матрица продуктового портфеля", "table"], ["Журнал упоминаний бренда", "register"], ["Форматирование поста", "text"], ["Подсказки для описания изображения", "text"],
    ["План A/B-теста", "document"], ["Анкета для опроса", "document"], ["Портрет клиента", "document"], ["Калькулятор NPS", "calc"]
  ],
  finance: [
    ["План-факт бюджета", "table"], ["Отчет план-факт", "table"], ["План движения денежных средств", "register"], ["Платежный календарь", "register"],
    ["Проверка счета", "checklist"], ["Распределение по центрам затрат", "table"], ["Расчет юнит-экономики", "calc"], ["Точка безубыточности", "calc"],
    ["Маржинальная прибыль", "calc"], ["Оборотный капитал", "calc"], ["Возраст дебиторской задолженности", "table"], ["Возраст кредиторской задолженности", "table"],
    ["Классификатор расходов", "table"], ["Заявка на CAPEX", "document"], ["Расчет ROI", "calc"], ["Расчет NPV", "calc"], ["Расчет IRR", "calc"], ["Сценарный план", "document"]
  ],
  hr: [
    ["Чек-лист адаптации", "checklist"], ["Матрица обучения", "register"], ["Матрица навыков", "table"], ["Контроль сроков обучения", "register"],
    ["Карточка сотрудника", "document"], ["Оценочный лист интервью", "document"], ["План адаптации", "document"], ["Шаблон встречи 1-на-1", "document"],
    ["Оценка эффективности", "document"], ["План отпусков", "register"], ["Проверка графика смен", "table"], ["Изменение оплаты труда", "checklist"],
    ["Калькулятор мотивации", "calc"], ["Должностная инструкция", "document"], ["Локальный нормативный акт", "document"], ["План численности", "calc"]
  ],
  legal: [
    ["Проверка договора", "checklist"], ["Проверка NDA", "checklist"], ["Проверка спецификации", "checklist"], ["Протокол разногласий", "document"],
    ["Претензия", "document"], ["Судебный календарь", "register"], ["Матрица юридических рисков", "register"], ["Реестр доверенностей", "register"],
    ["Корпоративный чек-лист", "checklist"], ["Комплект документов", "checklist"], ["Проверка персональных данных", "checklist"],
    ["Проверка интеллектуальных прав", "checklist"], ["Реестр лицензий", "register"], ["Карточка контрагента", "document"], ["Трекер обязательств по договору", "register"]
  ],
  it: [
    ["Матрица доступов", "register"], ["Пересмотр прав доступа", "checklist"], ["Классификация инцидента", "document"], ["Заявка в IT", "document"],
    ["Реестр активов", "register"], ["Карточка конфигурации", "document"], ["Калькулятор IP-подсети", "calc"], ["Проверка срока SSL", "checklist"],
    ["Проверка HTTP-заголовков", "parser"], ["Разбор журнала событий", "parser"], ["Очистка импорта в Битрикс", "table"], ["Контакты в vCard", "converter"],
    ["QR-код Wi-Fi", "document"], ["Просмотр API-запроса", "json"], ["Чек-лист резервного копирования", "checklist"], ["Чек-лист релиза", "checklist"]
  ],
  security: [
    ["Контрольная сумма SHA-256", "security"], ["Контрольная сумма MD5", "security"], ["Сравнение хэшей файла", "compare"], ["Генератор пароля", "security"],
    ["Генератор парольной фразы", "security"], ["Файл в Base64", "converter"], ["Base64 в текст", "converter"], ["Шифрование заметки", "security"],
    ["Декодер JWT", "json"], ["Просмотр сертификата", "parser"], ["Форматирование PEM", "text"], ["Чек-лист передачи секрета", "checklist"],
    ["Проверка персональных данных", "checklist"], ["Шаблон сообщения о фишинге", "document"], ["Заметка об инциденте ИБ", "document"], ["Обезвреживание ссылки", "text"]
  ],
  ai: [
    ["Библиотека промптов", "ai"], ["Оценка промпта", "ai"], ["Сравнение промптов", "compare"], ["Чек-лист системного промпта", "checklist"],
    ["Реестр ИИ-кейсов", "register"], ["Расчет эффекта ИИ-кейса", "calc"], ["Чек-лист RAG-источников", "checklist"], ["Карточка набора данных", "document"],
    ["Чек-лист рисков модели", "checklist"], ["Политика использования ИИ", "document"], ["План задачи для агента", "ai"], ["Тесты для ИИ-функции", "document"],
    ["Рубрика оценки ответа LLM", "document"], ["Проверка галлюцинаций", "checklist"], ["Промпт для протокола встречи", "ai"], ["Промпт для инструкции", "ai"]
  ],
  dev: [
    ["Тестер регулярного выражения", "text"], ["Объяснение регулярного выражения", "document"], ["Форматирование JSON", "json"], ["Декодер JWT", "json"],
    ["URL-кодирование", "converter"], ["HTML-кодирование", "converter"], ["Форматирование CSS", "text"], ["Форматирование SQL", "text"],
    ["Сравнение текста", "compare"], ["Генератор UUID", "document"], ["Конвертер Unix-времени", "calc"], ["Подсказка по расписанию cron", "document"],
    ["Конвертер цветов", "converter"], ["Оптимизация SVG", "text"], ["Просмотр OpenAPI", "parser"], ["Справочник HTTP-статусов", "parser"]
  ],
  web: [
    ["Чек-лист сайта", "checklist"], ["Просмотр robots.txt", "parser"], ["Проверка sitemap", "checklist"], ["Предпросмотр карточки ссылки", "document"],
    ["Чек-лист favicon", "checklist"], ["Проверка ссылок", "checklist"], ["Список битых ссылок", "register"], ["Генератор UTM", "converter"],
    ["QR-код ссылки", "document"], ["Заметка по скорости страницы", "document"], ["Чек-лист cookie", "checklist"], ["Чек-лист доступности", "checklist"],
    ["Проверка контраста", "checklist"], ["Карта редиректов", "register"], ["Проверка канонической ссылки", "checklist"], ["Чек-лист проверки лендинга", "checklist"]
  ],
  media: [
    ["Сжатие изображения", "media"], ["Изменение размера изображения", "media"], ["Кадрирование изображения", "media"], ["Просмотр EXIF", "parser"],
    ["Удаление EXIF", "media"], ["Сравнение изображений", "compare"], ["Палитра изображения", "media"], ["Очистка SVG", "text"],
    ["PNG в WebP", "converter"], ["JPG в WebP", "converter"], ["Кадр из видео", "media"], ["Длительность аудио", "parser"],
    ["OCR изображения", "parser"], ["OCR штампа чертежа", "parser"], ["OCR этикетки", "parser"], ["Проверка размеров иконки", "checklist"]
  ],
  text: [
    ["Статистика текста", "text"], ["Сортировка строк", "text"], ["Удаление дублей строк", "text"], ["Сравнение текста", "compare"],
    ["Генератор адресной строки", "text"], ["Смена регистра", "text"], ["Транслитерация", "text"], ["Очистка пробелов", "text"],
    ["Префикс и суффикс строк", "text"], ["Поиск и замена", "text"], ["Сравнение списков", "compare"], ["Markdown-таблица", "document"],
    ["Очистка списка почты", "text"], ["Очистка списка телефонов", "text"], ["Нормализация артикулов", "text"], ["Шаблонизатор текста", "document"]
  ],
  logistics: [
    ["Расчет паллет", "calc"], ["Расчет коробов", "calc"], ["Чек-лист загрузки машины", "checklist"], ["Объемный вес", "calc"],
    ["Список остановок маршрута", "register"], ["Транспортная накладная", "document"], ["Сравнение стоимости доставки", "compare"],
    ["Расчет загрузки контейнера", "calc"], ["Справка по Incoterms", "document"], ["Контроль SLA доставки", "register"], ["Претензия перевозчику", "document"],
    ["Этикетка груза", "document"], ["Проверка температурного журнала", "checklist"], ["Расчет упаковочного материала", "calc"], ["Экспортный комплект документов", "checklist"]
  ],
  maintenance: [
    ["Расчет MTBF", "calc"], ["Расчет MTTR", "calc"], ["Парето простоев", "table"], ["Чек-лист обслуживания", "checklist"],
    ["План профилактического обслуживания", "register"], ["Карточка оборудования", "document"], ["Список запасных частей", "register"],
    ["Журнал отказов", "register"], ["Наряд-допуск", "checklist"], ["График смазки", "register"], ["Реестр инструмента", "register"],
    ["План калибровки", "register"], ["Акт ремонта", "document"], ["Показатели ТОиР", "table"], ["Матрица критичности оборудования", "register"]
  ],
  safety: [
    ["Журнал инструктажей", "register"], ["Расчет потребности в СИЗ", "calc"], ["Матрица рисков", "register"], ["Анализ безопасности работ", "document"],
    ["Наряд-допуск на работы", "checklist"], ["Отчет об инциденте", "document"], ["Сообщение о почти-инциденте", "document"],
    ["Реестр экологических аспектов", "register"], ["Журнал отходов", "register"], ["Проверка паспорта безопасности", "checklist"],
    ["Пожарный чек-лист", "checklist"], ["Контроль сроков обучения", "register"], ["Аудит рабочего места", "checklist"], ["Реестр требований охраны труда", "register"]
  ],
  service: [
    ["Карточка сервисной заявки", "document"], ["Расчет услуги покраски", "calc"], ["Карточка жалобы клиента", "document"],
    ["Чек-лист качества сервиса", "checklist"], ["Акт передачи оборудования", "document"], ["Лист выдачи материалов", "register"],
    ["Акт выполненных работ", "document"], ["Список фото до и после", "checklist"], ["Реестр гарантийных случаев", "register"],
    ["График сервиса", "register"], ["Маршрут техника", "register"], ["Анализ повторных работ", "table"], ["Маржа сервисной работы", "calc"], ["Приемка работ клиентом", "checklist"]
  ],
  daily: [
    ["Калькулятор дат", "calc"], ["Калькулятор рабочих дней", "calc"], ["Заметка по часовым поясам", "document"], ["Таймер", "calc"],
    ["Случайный выбор", "text"], ["Матрица решений", "table"], ["Матрица приоритетов", "table"], ["Генератор пароля", "security"],
    ["Конвертер единиц", "calc"], ["Калькулятор процентов", "calc"], ["Кредитный калькулятор", "calc"], ["Чек-лист поездки", "checklist"],
    ["Очистка списка покупок", "text"], ["CSV календаря", "register"], ["Карточка контакта", "document"], ["Текст напоминания", "document"]
  ]
};

const descriptions = {
  table: "Приводит строки или таблицу к понятной структуре, показывает сводку и готовит результат для копирования.",
  document: "Создает аккуратный шаблон документа с разделами, ответственным, сроком и исходными пунктами.",
  calc: "Считает показатели по введенным числам и параметрам, выводит сумму, среднее, диапазон и итоговый расчет.",
  checklist: "Формирует чек-лист с ответственным и сроком по каждому пункту.",
  register: "Собирает входные строки в реестр, который можно скопировать или выгрузить как CSV.",
  compare: "Сравнивает два блока данных, разделенных строкой из трех дефисов, и показывает добавленные и удаленные пункты.",
  converter: "Преобразует данные в нужный формат или готовит структурированный результат для переноса.",
  parser: "Разбирает входные строки на ключи и значения, считает элементы и выводит результат в JSON.",
  json: "Форматирует JSON, показывает ошибку разбора или строит производный результат для схемы и API.",
  text: "Обрабатывает текст: считает символы и слова, очищает строки, сортирует и удаляет повторы.",
  security: "Готовит безопасный результат локально в браузере: хэш, пароль, заметку или проверочный список.",
  ai: "Формирует рабочий промпт, критерии проверки и структуру результата для ИИ-задачи.",
  media: "Готовит план обработки медиафайла, параметры результата и чек-лист контроля качества."
};

const tools = Object.entries(toolGroups).flatMap(([categoryId, items]) =>
  items.map(([title, kind], index) => ({
    id: `${categoryId}-${index}`,
    title,
    kind,
    categoryId,
    description: descriptions[kind]
  }))
);

const state = {
  categoryId: "all",
  query: "",
  activeToolId: tools[0].id
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  renderCategories();
  renderCatalog();
  openTool(state.activeToolId, false);
  bindEvents();
  $("#toolCount").textContent = tools.length;
  $("#categoryCount").textContent = categories.length;
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderCatalog();
  });
  $("#densityToggle").addEventListener("click", () => document.body.classList.toggle("compact"));
  $("#runTool").addEventListener("click", runActiveTool);
  $("#fillTemplate").addEventListener("click", fillTemplate);
  $("#exportResult").addEventListener("click", exportResultAsCsv);
  $("#copyResult").addEventListener("click", () => navigator.clipboard?.writeText($("#toolOutput").textContent || ""));
  $("#exportCatalog").addEventListener("click", exportCatalog);
}

function renderCategories() {
  const items = [{ id: "all", name: "Все разделы" }, ...categories];
  $("#categoryFilters").innerHTML = items.map((category) => {
    const count = category.id === "all" ? tools.length : tools.filter((tool) => tool.categoryId === category.id).length;
    return `<button type="button" class="${state.categoryId === category.id ? "active" : ""}" data-category="${category.id}">
      <span>${category.name}</span><small>${count}</small>
    </button>`;
  }).join("");
  $$("#categoryFilters button").forEach((button) => {
    button.addEventListener("click", () => {
      state.categoryId = button.dataset.category;
      renderCategories();
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const visible = tools.filter((tool) => {
    const categoryMatch = state.categoryId === "all" || tool.categoryId === state.categoryId;
    const query = `${tool.title} ${tool.description} ${categoryName(tool.categoryId)}`.toLowerCase();
    return categoryMatch && (!state.query || query.includes(state.query));
  });
  $("#visibleCount").textContent = visible.length;
  $("#catalogTitle").textContent = state.categoryId === "all" ? `Все инструменты: ${visible.length}` : `${categoryName(state.categoryId)}: ${visible.length}`;
  $("#toolCatalog").innerHTML = visible.map((tool) => `
    <article class="tool-card">
      <h4>${tool.title}</h4>
      <p>${tool.description}</p>
      <button class="tool-open" type="button" data-tool="${tool.id}">Открыть</button>
    </article>
  `).join("") || `<article class="tool-card"><h4>Ничего не найдено</h4><p>Измените запрос или выберите другой раздел.</p><span></span></article>`;
  $$("#toolCatalog [data-tool]").forEach((button) => button.addEventListener("click", () => openTool(button.dataset.tool, true)));
}

function openTool(id, scroll) {
  const tool = tools.find((item) => item.id === id) || tools[0];
  state.activeToolId = tool.id;
  $("#activeCategory").textContent = categoryName(tool.categoryId);
  $("#activeTitle").textContent = tool.title;
  $("#activeDescription").textContent = tool.description;
  $("#inputLabel").textContent = inputLabel(tool);
  $("#toolInput").value = sampleInput(tool);
  renderParams(tool);
  runActiveTool();
  if (scroll) $("#workbench").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderParams(tool) {
  const params = parameterSet(tool);
  $("#toolParams").innerHTML = params.map((param) => `
    <label class="field">
      <span>${param.label}</span>
      <input id="param-${param.id}" type="${param.type || "text"}" value="${param.value}" />
    </label>
  `).join("");
}

async function runActiveTool() {
  const tool = activeTool();
  const input = $("#toolInput").value;
  const params = currentParams();
  $("#toolOutput").textContent = await executeTool(tool, input, params);
}

function fillTemplate() {
  const tool = activeTool();
  $("#toolInput").value = templateInput(tool);
  runActiveTool();
}

function exportResultAsCsv() {
  const tool = activeTool();
  const rows = [
    ["Инструмент", "Раздел", "Результат"],
    [tool.title, categoryName(tool.categoryId), ($("#toolOutput").textContent || "").replace(/\r?\n/g, " | ")]
  ];
  $("#toolOutput").textContent = toCsv(rows);
}

function exportCatalog() {
  const rows = [["Раздел", "Инструмент", "Описание"]];
  tools.forEach((tool) => rows.push([categoryName(tool.categoryId), tool.title, tool.description]));
  downloadText("instr-catalog.csv", toCsv(rows));
}

async function executeTool(tool, input, params) {
  if (tool.kind === "json") return jsonTool(tool, input);
  if (tool.kind === "table") return tableTool(input);
  if (tool.kind === "calc") return calcTool(tool, input, params);
  if (tool.kind === "checklist") return checklistTool(input, params);
  if (tool.kind === "register") return registerTool(input, params);
  if (tool.kind === "compare") return compareTool(input);
  if (tool.kind === "converter") return converterTool(tool, input);
  if (tool.kind === "parser") return parserTool(tool, input);
  if (tool.kind === "text") return textTool(tool, input);
  if (tool.kind === "security") return securityTool(tool, input);
  if (tool.kind === "ai") return aiTool(tool, input, params);
  if (tool.kind === "media") return mediaTool(tool, input, params);
  return documentTool(tool, input, params);
}

function tableTool(input) {
  const rows = parseRows(input);
  if (!rows.length) return "Нет данных для обработки.";
  const columns = Math.max(...rows.map((row) => row.length));
  const normalized = rows.map((row) => [...row, ...Array(columns - row.length).fill("")]);
  return [
    `Строк: ${normalized.length}`,
    `Колонок: ${columns}`,
    "",
    toCsv(normalized)
  ].join("\n");
}

function jsonTool(tool, input) {
  try {
    const value = JSON.parse(input);
    if (tool.title.toLowerCase().includes("схем")) return JSON.stringify(schemaFromValue(value), null, 2);
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return `JSON не разобран: ${error.message}`;
  }
}

function calcTool(tool, input, params) {
  const values = parseNumbers(input);
  const sum = values.reduce((total, value) => total + value, 0);
  const avg = values.length ? sum / values.length : 0;
  const factor = Number(params.factor || 1) || 1;
  const qty = Number(params.qty || values.length || 1) || 1;
  return [
    tool.title,
    `Значений: ${values.length}`,
    `Сумма: ${formatNumber(sum)}`,
    `Среднее: ${formatNumber(avg)}`,
    `Минимум: ${formatNumber(values.length ? Math.min(...values) : 0)}`,
    `Максимум: ${formatNumber(values.length ? Math.max(...values) : 0)}`,
    `Расчет: ${formatNumber((sum || qty) * factor)}`
  ].join("\n");
}

function checklistTool(input, params) {
  return inputLines(input).map((line, index) => `${index + 1}. [ ] ${line} | ${params.owner} | ${params.due}`).join("\n");
}

function registerTool(input, params) {
  const rows = [["ID", "Пункт", "Ответственный", "Статус", "Срок"]];
  inputLines(input).forEach((line, index) => rows.push([index + 1, line, params.owner, params.status, params.due]));
  return toCsv(rows);
}

function compareTool(input) {
  const [left = "", right = ""] = input.split(/\n---+\n/);
  const a = inputLines(left);
  const b = inputLines(right);
  const added = b.filter((line) => !a.includes(line));
  const removed = a.filter((line) => !b.includes(line));
  return JSON.stringify({ совпало: a.filter((line) => b.includes(line)).length, добавлено: added, удалено: removed }, null, 2);
}

function converterTool(tool, input) {
  const title = tool.title.toLowerCase();
  if (title.includes("base64") && title.includes("текст")) return decodeBase64(input);
  if (title.includes("base64")) return encodeBase64(input);
  if (title.includes("url")) return encodeURIComponent(input);
  if (title.includes("json")) return JSON.stringify(rowsToObjects(parseRows(input)), null, 2);
  return documentTool(tool, input, defaultParams());
}

function parserTool(tool, input) {
  const pairs = inputLines(input).map((line) => {
    const [key, ...rest] = line.split(/[:=;]/);
    return { ключ: (key || "").trim(), значение: rest.join(":").trim() || line.trim() };
  });
  return JSON.stringify({ инструмент: tool.title, строк: pairs.length, данные: pairs }, null, 2);
}

function textTool(tool, input) {
  const title = tool.title.toLowerCase();
  const lines = inputLines(input);
  if (title.includes("адрес")) return slugify(input);
  if (title.includes("дубл")) return [...new Set(lines)].join("\n");
  if (title.includes("сорт")) return [...lines].sort((a, b) => a.localeCompare(b, "ru")).join("\n");
  if (title.includes("регистр")) return `${input.toUpperCase()}\n\n${input.toLowerCase()}`;
  return JSON.stringify({
    символов: input.length,
    без_пробелов: input.replace(/\s/g, "").length,
    слов: input.trim().split(/\s+/).filter(Boolean).length,
    строк: input.split(/\r?\n/).length
  }, null, 2);
}

async function securityTool(tool, input) {
  const title = tool.title.toLowerCase();
  if (title.includes("парол")) return generatePassword(title.includes("фраз"));
  if (title.includes("md5")) return simpleChecksum(input);
  if (title.includes("sha")) return sha256(input);
  if (title.includes("ссылка")) return input.replaceAll(".", "[.]").replace(/^http/i, "hxxp");
  return documentTool(tool, input, defaultParams());
}

function aiTool(tool, input, params) {
  return [
    `Задача: ${tool.title}`,
    `Роль: эксперт по теме "${categoryName(tool.categoryId)}"`,
    `Контекст: ${inputLines(input).join("; ")}`,
    `Формат ответа: список действий, риски, ожидаемый результат`,
    `Критерии проверки: точность, полнота, применимость`,
    `Ответственный: ${params.owner}`
  ].join("\n");
}

function mediaTool(tool, input, params) {
  return [
    tool.title,
    `Исходные файлы или требования: ${inputLines(input).join("; ")}`,
    `Параметры результата: размер, формат, качество, имя файла`,
    `Контроль: проверить читаемость, вес файла и отсутствие лишних метаданных`,
    `Ответственный: ${params.owner}`
  ].join("\n");
}

function documentTool(tool, input, params) {
  return [
    `# ${tool.title}`,
    `Раздел: ${categoryName(tool.categoryId)}`,
    `Ответственный: ${params.owner}`,
    `Срок: ${params.due}`,
    "",
    "## Исходные данные",
    ...inputLines(input).map((line) => `- ${line}`),
    "",
    "## Результат",
    "- Цель",
    "- Действия",
    "- Контроль",
    "- Следующий шаг"
  ].join("\n");
}

function parameterSet(tool) {
  if (tool.kind === "calc") {
    return [
      { id: "factor", label: "Коэффициент", value: "1" },
      { id: "qty", label: "Количество", value: "1" }
    ];
  }
  return [
    { id: "owner", label: "Ответственный", value: "Исполнитель" },
    { id: "status", label: "Статус", value: "В работе" },
    { id: "due", label: "Срок", value: today(), type: "date" }
  ];
}

function sampleInput(tool) {
  if (tool.kind === "json") return "{\"номер\":\"WO-1024\",\"количество\":120,\"статус\":\"готово\"}";
  if (tool.kind === "table") return "Артикул;Наименование;Количество\nA-100;Корпус;12\nA-200;Крышка;12";
  if (tool.kind === "compare") return "A-100\nA-200\n---\nA-100\nA-300";
  if (tool.kind === "calc") return "10\n20\n30";
  if (tool.kind === "security") return "Проверяемая строка или секрет";
  return "Пункт 1\nПункт 2\nПункт 3";
}

function templateInput(tool) {
  return [
    tool.title,
    "Цель:",
    "Исходные данные:",
    "Ограничения:",
    "Ожидаемый результат:"
  ].join("\n");
}

function inputLabel(tool) {
  if (tool.kind === "calc") return "Числа для расчета";
  if (tool.kind === "compare") return "Два блока через строку ---";
  if (tool.kind === "json") return "JSON";
  if (tool.kind === "table") return "Таблица или CSV";
  return "Входные данные";
}

function activeTool() {
  return tools.find((tool) => tool.id === state.activeToolId) || tools[0];
}

function currentParams() {
  const params = {};
  $$("#toolParams input").forEach((input) => {
    params[input.id.replace("param-", "")] = input.value;
  });
  return { ...defaultParams(), ...params };
}

function defaultParams() {
  return { owner: "Исполнитель", status: "В работе", due: today(), factor: "1", qty: "1" };
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.name || id;
}

function parseRows(input) {
  const lines = inputLines(input);
  const delimiter = detectDelimiter(lines[0] || "");
  return lines.map((line) => splitLine(line, delimiter).map((cell) => cell.trim()));
}

function detectDelimiter(line) {
  const candidates = [";", ",", "\t", "|"];
  return candidates.map((delimiter) => [delimiter, (line.match(new RegExp(`\\${delimiter}`, "g")) || []).length]).sort((a, b) => b[1] - a[1])[0][0];
}

function splitLine(line, delimiter) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\"") quoted = !quoted;
    else if (char === delimiter && !quoted) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells;
}

function rowsToObjects(rows) {
  const [header = [], ...body] = rows;
  return body.map((row) => Object.fromEntries(header.map((key, index) => [key || `Колонка ${index + 1}`, row[index] || ""])));
}

function schemaFromValue(value) {
  if (Array.isArray(value)) return { type: "array", items: schemaFromValue(value[0] ?? "") };
  if (value && typeof value === "object") return { type: "object", properties: Object.fromEntries(Object.entries(value).map(([key, item]) => [key, schemaFromValue(item)])) };
  return { type: typeof value };
}

function parseNumbers(input) {
  return input.split(/[\s,;]+/).map((value) => Number(value.replace(",", "."))).filter(Number.isFinite);
}

function inputLines(input) {
  return input.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function toCsv(rows) {
  return rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function encodeBase64(input) {
  return btoa(unescape(encodeURIComponent(input)));
}

function decodeBase64(input) {
  try {
    return decodeURIComponent(escape(atob(input.trim())));
  } catch (error) {
    return `Base64 не разобран: ${error.message}`;
  }
}

async function sha256(input) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function simpleChecksum(input) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) hash = (hash + input.charCodeAt(index) * (index + 1)) >>> 0;
  return hash.toString(16).padStart(8, "0");
}

function generatePassword(words) {
  const alphabet = words ? ["сталь", "цех", "план", "смена", "качество", "поставка", "контроль", "деталь"] : "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%";
  if (words) return Array.from({ length: 5 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("-");
  return Array.from({ length: 18 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function slugify(input) {
  const map = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya" };
  return input.toLowerCase().split("").map((char) => map[char] ?? char).join("").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("ru-RU", { maximumFractionDigits: 2 });
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

init();
