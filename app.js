const departments = [
  { id: "production", n: 1, name: "Производство", className: "", top: ["1.1 Планирование", "1.2 Исполнение", "1.3 Производственный учет", "1.4 Отгрузка ГП", "1.5 Оптимизация технологических процессов", "1.6 Складское хозяйство"], bottom: [] },
  { id: "quality", n: 2, name: "Качество", className: "", top: [], bottom: ["2.1 Контроль качества сырья", "2.2 Контроль качества операционный и ГП", "2.3 Контроль хранения и отгрузок ГП", "2.4 Работа с несоответствиями", "2.5 СМК"] },
  { id: "rnd", n: 3, name: "R&D и технологии", className: "", top: ["3.1 Разработка новых/доработка разработанных продуктов", "3.2 Поиск аналогов сырья", "3.3 Снижение себестоимости разработанного продукта", "3.4 Нормативная технологическая документация", "3.5 Контроль производственного цикла"], bottom: [] },
  { id: "sales", n: 4, name: "Продажи", className: "", top: [], bottom: ["4.1 Аттестация и сертификация", "4.2 Планирование продаж", "4.3 Продажи ОВП", "4.4 Новые продажи", "4.5 Ресейл"] },
  { id: "supply", n: 5, name: "Снабжение", className: "", top: ["5.1 Формирование реестра квалифицированных поставщиков по категориям", "5.2 Закупочная процедура", "5.3 Логистика"], bottom: [] },
  { id: "process", n: 6, name: "Развитие процессов", className: "", top: [], bottom: ["6.1 Формирование стратегии", "6.2 Развивающий аудит процессов", "6.3 Вовлеченность, реализация трансформационных проектов и администрирование", "6.4 Контроль эффектов", "6.5 Анализ развития существующих и новых направлений"] },
  { id: "ops", n: 7, name: "Операционная эффективность", className: "", top: ["7.1 Анализ и аудит", "7.2 Оптимизация процессов", "7.3 Система мониторинга ключевых показателей эффективности (KPI)", "7.4 5S организация рабочего места", "7.5 Управление проблемами и рисками", "7.6 Коммуникация и информационное сопровождение"], bottom: [] },
  { id: "hr", n: 8, name: "Персонал", className: "", top: [], bottom: ["8.1 Привлечение и удержание", "8.2 Адаптация персонала", "8.3 Оценка и обучение", "8.4 Кадровый учет", "8.5 Мотивация и оплата труда", "8.6 Разработка регламентов управления персоналом / ЛНА"] },
  { id: "finance", n: 9, name: "Финансы", className: "", top: ["9.1 Бюджетирование и финансовое планирование", "9.2 Бухгалтерский учет и отчетность", "9.3 Управленческий учет и отчетность", "9.4 Управление доходами и расходами", "9.5 Взаимодействие с внешними органами", "9.6 Автоматизация и цифровизация финансовых процессов"], bottom: [] },
  { id: "security", n: 10, name: "Безопасность", className: "", top: [], bottom: ["10.1 Экономическая безопасность", "10.2 Информационная безопасность", "10.3 Физическая защита", "10.4 Антитеррористическая безопасность", "10.5 Кадровая безопасность"] },
  { id: "sotp", n: 11, name: "СОТП и ЭБ", className: "", top: ["11.1 Целевые программы", "11.2 Инструктажи", "11.3 Обучение и оценка знаний", "11.4 Производство работ", "11.5 Документальное сопровождение"], bottom: [] },
  { id: "law", n: 12, name: "Право", className: "", top: [], bottom: ["12.1 Согласование договоров, протоколов разногласий, задач и иных документов", "12.2 Согласование спецификаций/заданий/приложений по действующим договорам", "12.3 Подготовка рекламаций, требований, жалоб, судебные споры", "12.4 Корпоративная защита", "12.5 Оценка юридических рисков"] },
  { id: "it", n: 13, name: "Информационные технологии", className: "", top: ["13.1 Управление запросами на обслуживание", "13.2 Управление изменениями", "13.3 Управление инцидентами", "13.4 Управление активами и конфигурацией", "13.5 Обеспечение доступами и ресурсами"], bottom: [] },
  { id: "admin", n: 14, name: "Администрирование", className: "", top: [], bottom: ["14.1 Матрица администрирования", "14.2 Анализ исполнения", "14.3 Развитие Битрикс 24", "14.4 Ознакомление/документооборот", "14.5 Инструменты администрирования"] },
  { id: "tech", n: 15, name: "Техническая политика и развитие", className: "", top: ["15.1 Внедрение технических инноваций и автоматизация", "15.2 Строительство", "15.3 ТОиР", "15.4 Метрологическое обеспечение"], bottom: [] },
  { id: "ai", n: 16, name: "Искусственный интеллект", className: "ai", top: [], bottom: ["16.1 Решение локальных задач", "16.2 Построение внутренней платформы", "16.3 Обучение персонала инструментам ИИ", "16.4 Обеспечение ИБ", "16.5 Техническое оснащение", "16.6 Подготовка стратегии развития ИИ", "16.7 MVP проекты"] },
  { id: "marketing", n: 17, name: "Маркетинг", className: "marketing", draft: true, top: ["17.1 Анализ рынка", "17.2 Рекламно-информационное сопровождение продаж", "17.3 Продвижение бренда", "17.4 Управление продуктовым портфелем"], bottom: [] },
  { id: "service", n: 18, name: "СК оказание услуг по покраске", className: "service", draft: true, top: [], bottom: ["18.1 Оказание услуг", "18.2 Качество", "18.3 Техническая документация", "18.4 Оборудование и ТОиР"] },
  { id: "presale", n: 19, name: "Пресейл", className: "presale", top: ["19.1 Тендерные продажи", "19.2 Розница / Маркетплейсы", "19.3 Автоматизация и аналитика"], bottom: [] }
];

const toolTabs = [
  ["csv", "CSV"],
  ["bom", "BOM"],
  ["production", "OEE"],
  ["quality", "Качество"],
  ["labels", "Этикетки"],
  ["data", "Данные"],
  ["security", "Хэши"],
  ["gs1", "GS1"]
];

const tools = [
  ["CSV cleaner", "production", "ready", "browser", "Очистка, нормализация разделителя, preview и JSON export.", ["CSV", "таблицы", "импорт"]],
  ["BOM comparer", "rnd", "ready", "browser", "Сравнение спецификаций: добавлено, удалено, изменены qty/rev.", ["BOM", "R&D", "закупки"]],
  ["OEE calculator", "ops", "ready", "browser", "Availability, performance, quality, OEE и такт смены.", ["KPI", "смена"]],
  ["Cp/Cpk calculator", "quality", "ready", "browser", "Статистика измерений, Cp, Cpk, смещение относительно цели.", ["ОТК", "SPC"]],
  ["Pareto chart", "quality", "ready", "browser", "Быстрый Pareto по списку дефектов или значений.", ["дефекты", "анализ"]],
  ["Serial batch generator", "production", "ready", "browser", "CSV серийников для партий, коробов, паллет и этикеток.", ["маркировка", "партии"]],
  ["GS1 parser", "supply", "ready", "browser", "Разбор GTIN, batch, expiry, serial из GS1-строки.", ["склад", "этикетки"]],
  ["SHA-256 checksum", "security", "ready", "browser", "Хэш текста или файла через Web Crypto API.", ["ИБ", "контроль"]],
  ["JSON formatter", "it", "ready", "browser", "Форматирование JSON, диагностика ошибок.", ["API", "MES"]],
  ["JWT decoder", "it", "ready", "browser", "Локальный разбор header и payload без отправки токена.", ["доступы", "API"]],
  ["Base64 / URL codec", "it", "ready", "browser", "Кодирование и декодирование строк.", ["интеграции", "логи"]],
  ["XLSX viewer", "finance", "mvp", "library", "SheetJS CE: просмотр Excel, экспорт CSV/JSON, проверка справочников.", ["Excel", "бюджет"]],
  ["SQL over CSV", "ops", "mvp", "library", "DuckDB-WASM: локальные SQL-запросы по CSV/Parquet/JSON.", ["аналитика", "WASM"]],
  ["Supplier quote comparer", "supply", "mvp", "browser", "Сравнение КП поставщиков по цене, сроку, условиям и рискам.", ["закупки", "КП"]],
  ["Inspection checklist builder", "quality", "mvp", "browser", "Чек-листы входного, операционного и финального контроля.", ["ОТК", "PDF"]],
  ["Calibration due checker", "tech", "mvp", "browser", "Проверка сроков поверки и калибровки по CSV-реестру.", ["метрология"]],
  ["SOP builder", "admin", "mvp", "browser", "Markdown-инструкции, согласование, PDF export.", ["СМК", "регламенты"]],
  ["PDF merge/split", "law", "mvp", "library", "pdf-lib/pdf.js: объединение, разделение, порядок страниц.", ["договоры", "PDF"]],
  ["Text diff", "law", "mvp", "browser", "Сравнение договоров, инструкций, спецификаций и требований.", ["версии", "право"]],
  ["QR generator", "production", "mvp", "library", "QR для оборудования, партий, инструкций и ссылок.", ["QR", "активы"]],
  ["Barcode generator", "supply", "mvp", "library", "Code128, GS1-128, Data Matrix через bwip-js.", ["склад", "маркировка"]],
  ["QR / Data Matrix scanner", "quality", "mvp", "library", "Сканирование камерой через ZXing Browser.", ["камера", "ОТК"]],
  ["OEE dashboard", "ops", "backlog", "library", "Свод смен, простоев, брака и выполнения плана.", ["дашборд", "KPI"]],
  ["Capacity planner", "production", "backlog", "browser", "Смены, станки, операции, загрузка и узкие места.", ["мощность"]],
  ["Kanban calculator", "production", "backlog", "browser", "Расчет карточек, страхового запаса и размера контейнера.", ["lean"]],
  ["AQL helper", "quality", "backlog", "browser", "Выборка, уровень контроля, приемочное число.", ["ОТК"]],
  ["Gauge R&R helper", "quality", "backlog", "browser", "Шаблоны замеров и расчет вариации измерительной системы.", ["MSA"]],
  ["Nonconformance report", "quality", "backlog", "browser", "NCR/8D, причины, корректирующие действия, PDF.", ["8D", "СМК"]],
  ["FMEA structure map", "rnd", "backlog", "browser", "Карты отказов, рисков, причин и действий.", ["R&D", "риски"]],
  ["Tolerance calculator", "rnd", "backlog", "browser", "Посадки, допуски, отклонения, перевод единиц.", ["инженерия"]],
  ["Process diagram editor", "process", "backlog", "library", "Mermaid/Excalidraw: процессы, swimlane, SOP-схемы.", ["процессы"]],
  ["Value stream map", "process", "backlog", "browser", "Поток создания ценности, потери, такт, запасы.", ["lean"]],
  ["5S audit", "ops", "backlog", "browser", "Карты аудита рабочего места, баллы, фото, PDF.", ["5S"]],
  ["Risk register", "ops", "backlog", "browser", "Реестр рисков, матрица вероятности/ущерба, действия.", ["риски"]],
  ["Shift report analyzer", "production", "backlog", "browser", "Загрузка сменных отчетов и поиск отклонений.", ["смена"]],
  ["Downtime analyzer", "tech", "backlog", "browser", "Простои, MTBF/MTTR, причины, Pareto.", ["ТОиР"]],
  ["Maintenance checklist", "tech", "backlog", "browser", "План ТО, чек-листы, журнал выполнения.", ["оборудование"]],
  ["Asset register", "it", "backlog", "browser", "Активы, конфигурации, владельцы, доступы.", ["ITSM"]],
  ["Access matrix", "it", "backlog", "browser", "Матрица ролей, заявок и периодический пересмотр.", ["ИБ"]],
  ["Incident triage", "it", "backlog", "browser", "Классификация инцидентов и шаблоны коммуникаций.", ["ITSM"]],
  ["Budget variance", "finance", "backlog", "browser", "План-факт, отклонения, комментарии, экспорт.", ["финансы"]],
  ["Cashflow planner", "finance", "backlog", "browser", "Календарь платежей, сценарии и разрывы.", ["ДДС"]],
  ["Contract checklist", "law", "backlog", "browser", "Проверка обязательных условий договора и рисков.", ["право"]],
  ["Claims generator", "law", "backlog", "browser", "Шаблоны претензий, требований и рекламаций.", ["документы"]],
  ["Training matrix", "hr", "backlog", "browser", "Матрица обучения, допуски, просрочки, протоколы.", ["персонал"]],
  ["Onboarding checklist", "hr", "backlog", "browser", "Адаптация сотрудника по роли и подразделению.", ["HR"]],
  ["Safety briefing log", "sotp", "backlog", "browser", "Журнал инструктажей, проверки знаний, допуски.", ["СОТП"]],
  ["PPE calculator", "sotp", "backlog", "browser", "Нормы СИЗ, выдача, сроки, потребность.", ["СИЗ"]],
  ["Market signal board", "marketing", "backlog", "browser", "Конкуренты, цены, сегменты, продуктовые сигналы.", ["рынок"]],
  ["Tender pack checker", "presale", "backlog", "browser", "Контроль комплекта документов для тендера.", ["тендеры"]],
  ["Service job card", "service", "backlog", "browser", "Заявка, карта работ, качество, материалы и закрытие.", ["сервис"]],
  ["Local AI prompt vault", "ai", "backlog", "browser", "Промпты, шаблоны, роли, проверки ИБ.", ["ИИ"]],
  ["AI use-case register", "ai", "backlog", "browser", "MVP, эффект, владелец, данные, риски.", ["ИИ", "MVP"]]
].map(([name, department, status, type, description, tags]) => ({ name, department, status, type, description, tags }));

const state = {
  department: "all",
  status: "all",
  type: "all",
  query: ""
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  renderMaps();
  renderFilters();
  renderTabs();
  renderCatalog();
  bindActions();
  $("#toolCount").textContent = tools.length;
  runDefaultOutputs();
}

function renderMaps() {
  $("#topProcessMap").innerHTML = departments.map((department) => processCard(department.top, department.draft)).join("");
  $("#departmentMap").innerHTML = departments.map((department) => `
    <button class="department-node ${department.className}" type="button" data-department="${department.id}">
      <span class="num">${department.n}</span>
      <span>${department.name}</span>
    </button>
  `).join("");
  $("#bottomProcessMap").innerHTML = departments.map((department) => processCard(department.bottom, department.draft)).join("");
}

function processCard(items, draft) {
  return `<div class="process-card ${draft ? "draft" : ""}">${items.length ? items.join("<br>") : ""}</div>`;
}

function renderFilters() {
  const departmentButtons = [{ id: "all", name: "Все" }, ...departments].map((department) => {
    const count = department.id === "all" ? tools.length : tools.filter((tool) => tool.department === department.id).length;
    return `<button type="button" data-filter-department="${department.id}"><span>${department.name}</span><span>${count}</span></button>`;
  });
  $("#departmentFilters").innerHTML = departmentButtons.join("");
  $("#statusFilters").innerHTML = [
    ["all", "Все"],
    ["ready", "Готово"],
    ["mvp", "MVP"],
    ["backlog", "Backlog"]
  ].map(([value, label]) => `<button type="button" data-filter-status="${value}">${label}</button>`).join("");
  $("#typeFilters").innerHTML = [
    ["all", "Все типы"],
    ["browser", "Browser"],
    ["library", "Library"]
  ].map(([value, label]) => `<button type="button" data-filter-type="${value}">${label}</button>`).join("");
  syncActiveFilters();
}

function renderTabs() {
  $("#toolTabs").innerHTML = toolTabs.map(([id, label], index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-tab="${id}">${label}</button>`).join("");
}

function renderCatalog() {
  const filtered = tools.filter((tool) => {
    const departmentMatch = state.department === "all" || tool.department === state.department;
    const statusMatch = state.status === "all" || tool.status === state.status;
    const typeMatch = state.type === "all" || tool.type === state.type;
    const haystack = `${tool.name} ${tool.description} ${tool.tags.join(" ")} ${departmentName(tool.department)}`.toLowerCase();
    const queryMatch = !state.query || haystack.includes(state.query.toLowerCase());
    return departmentMatch && statusMatch && typeMatch && queryMatch;
  });

  $("#toolCatalog").innerHTML = filtered.map((tool) => `
    <article class="tool-card">
      <header>
        <h4>${tool.name}</h4>
        <span class="status ${tool.status}">${statusLabel(tool.status)}</span>
      </header>
      <p>${tool.description}</p>
      <div class="tag-row">
        <span class="tag">${departmentName(tool.department)}</span>
        <span class="tag">${tool.type}</span>
        ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("") || `<div class="tool-card"><h4>Ничего не найдено</h4><p>Смените фильтр или поисковый запрос.</p></div>`;
}

function bindActions() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;

    if (target.dataset.department) {
      state.department = target.dataset.department;
      syncActiveFilters();
      renderCatalog();
    }

    if (target.dataset.filterDepartment) {
      state.department = target.dataset.filterDepartment;
      syncActiveFilters();
      renderCatalog();
    }

    if (target.dataset.filterStatus) {
      state.status = target.dataset.filterStatus;
      syncActiveFilters();
      renderCatalog();
    }

    if (target.dataset.filterType) {
      state.type = target.dataset.filterType;
      syncActiveFilters();
      renderCatalog();
    }

    if (target.dataset.tab) {
      activateTab(target.dataset.tab);
    }

    if (target.dataset.action) {
      runAction(target.dataset.action, target.dataset.target);
    }
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderCatalog();
  });

  $("#themeToggle").addEventListener("click", () => document.body.classList.toggle("compact"));
  $("#exportBacklog").addEventListener("click", exportBacklog);
  $("#hashFile").addEventListener("change", hashSelectedFile);
}

function syncActiveFilters() {
  $$("[data-filter-department], [data-department]").forEach((button) => {
    const value = button.dataset.filterDepartment || button.dataset.department;
    button.classList.toggle("active", value === state.department);
  });
  $$("[data-filter-status]").forEach((button) => button.classList.toggle("active", button.dataset.filterStatus === state.status));
  $$("[data-filter-type]").forEach((button) => button.classList.toggle("active", button.dataset.filterType === state.type));
}

function activateTab(tab) {
  $$("[data-tab]").forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
  $$("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tab));
}

function runAction(action, target) {
  const actions = {
    "csv-clean": cleanCsv,
    "csv-json": csvToJson,
    "bom-compare": compareBom,
    "production-calc": calculateProduction,
    "quality-calc": calculateQuality,
    "pareto-build": drawPareto,
    "serial-generate": generateSerials,
    "json-format": formatJson,
    "base64-encode": base64Encode,
    "base64-decode": base64Decode,
    "url-encode": urlEncode,
    "jwt-decode": decodeJwt,
    "hash-text": hashText,
    "gs1-parse": parseGs1,
    "copy": () => copyOutput(target)
  };
  actions[action]?.();
}

function runDefaultOutputs() {
  cleanCsv();
  compareBom();
  calculateProduction();
  calculateQuality();
  drawPareto();
  generateSerials();
  formatJson();
  hashText();
  parseGs1();
}

function parseDelimited(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const delimiter = detectDelimiter(lines[0] || "");
  return lines.map((line) => splitLine(line, delimiter).map((cell) => cell.trim()));
}

function detectDelimiter(line) {
  const candidates = [",", ";", "\t", "|"];
  return candidates.map((delimiter) => [delimiter, (line.match(new RegExp(`\\${delimiter}`, "g")) || []).length])
    .sort((a, b) => b[1] - a[1])[0][0];
}

function splitLine(line, delimiter) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\"") {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

function cleanCsv() {
  const rows = parseDelimited($("#csvInput").value);
  const width = Math.max(...rows.map((row) => row.length));
  const normalized = rows.map((row) => [...row, ...Array(width - row.length).fill("")].map(escapeCsv).join(",")).join("\n");
  $("#csvOutput").textContent = normalized;
}

function csvToJson() {
  const [header, ...rows] = parseDelimited($("#csvInput").value);
  const json = rows.map((row) => Object.fromEntries(header.map((key, index) => [key || `col_${index + 1}`, row[index] || ""])));
  $("#csvOutput").textContent = JSON.stringify(json, null, 2);
}

function escapeCsv(value) {
  return /[",\n]/.test(value) ? `"${value.replaceAll("\"", "\"\"")}"` : value;
}

function compareBom() {
  const oldRows = rowsToObjects(parseDelimited($("#bomOld").value));
  const newRows = rowsToObjects(parseDelimited($("#bomNew").value));
  const oldMap = new Map(oldRows.map((row) => [keyForPart(row), row]));
  const newMap = new Map(newRows.map((row) => [keyForPart(row), row]));
  const result = [];

  for (const [part, row] of newMap) {
    if (!oldMap.has(part)) result.push({ status: "added", part, current: row });
    else {
      const previous = oldMap.get(part);
      const changes = Object.keys({ ...previous, ...row }).filter((key) => String(previous[key] || "") !== String(row[key] || ""));
      if (changes.length) result.push({ status: "changed", part, changes, previous, current: row });
    }
  }

  for (const [part, row] of oldMap) {
    if (!newMap.has(part)) result.push({ status: "removed", part, previous: row });
  }

  $("#bomOutput").textContent = JSON.stringify(result, null, 2);
}

function rowsToObjects(rows) {
  const [header, ...body] = rows;
  return body.map((row) => Object.fromEntries(header.map((key, index) => [key.toLowerCase(), row[index] || ""])));
}

function keyForPart(row) {
  return String(row.part || row.sku || row["артикул"] || Object.values(row)[0] || "").toUpperCase();
}

function calculateProduction() {
  const planned = num("plannedTime");
  const downtime = num("downtime");
  const idealCycle = num("idealCycle");
  const total = num("totalCount");
  const good = num("goodCount");
  const demand = num("demand");
  const runTime = Math.max(planned - downtime, 0);
  const availability = safe(runTime / planned);
  const performance = safe((idealCycle * total) / (runTime * 60));
  const quality = safe(good / total);
  const oee = availability * performance * quality;
  const takt = safe((planned * 60) / demand);

  $("#productionOutput").innerHTML = metrics([
    ["Availability", pct(availability)],
    ["Performance", pct(performance)],
    ["Quality", pct(quality)],
    ["OEE", pct(oee)],
    ["Takt", `${round(takt)} сек/шт`],
    ["Run time", `${round(runTime)} мин`]
  ]);
}

function calculateQuality() {
  const values = parseNumbers($("#qualityValues").value);
  const lsl = num("lsl");
  const usl = num("usl");
  const target = num("target");
  const mean = average(values);
  const sigma = stdev(values);
  const cp = safe((usl - lsl) / (6 * sigma));
  const cpk = Math.min(safe((usl - mean) / (3 * sigma)), safe((mean - lsl) / (3 * sigma)));
  const offset = mean - target;
  $("#qualityOutput").innerHTML = metrics([
    ["N", values.length],
    ["Mean", round(mean, 4)],
    ["Sigma", round(sigma, 4)],
    ["Cp", round(cp, 3)],
    ["Cpk", round(cpk, 3)],
    ["Offset", round(offset, 4)]
  ]);
}

function drawPareto() {
  const values = $("#qualityValues").value.trim().split(/\r?\n/).map((value) => value.trim()).filter(Boolean);
  const counts = [...values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map())]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);
  const canvas = $("#paretoCanvas");
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  const max = Math.max(...counts.map(([, count]) => count), 1);
  const barWidth = (width - 90) / Math.max(counts.length, 1);

  context.fillStyle = "#09396c";
  counts.forEach(([label, count], index) => {
    const barHeight = (height - 80) * (count / max);
    const x = 50 + index * barWidth;
    const y = height - 38 - barHeight;
    context.fillRect(x, y, Math.max(barWidth - 10, 8), barHeight);
    context.fillStyle = "#17202a";
    context.font = "12px Segoe UI";
    context.fillText(String(label).slice(0, 9), x, height - 16);
    context.fillText(count, x, y - 8);
    context.fillStyle = "#09396c";
  });
}

function generateSerials() {
  const prefix = $("#serialPrefix").value;
  const start = num("serialStart");
  const count = Math.max(0, Math.min(num("serialCount"), 1000));
  const part = $("#serialPart").value;
  const lines = ["serial,part,created_at"];
  const today = new Date().toISOString().slice(0, 10);
  for (let index = 0; index < count; index += 1) {
    lines.push(`${prefix}${start + index},${part},${today}`);
  }
  $("#serialOutput").textContent = lines.join("\n");
}

function formatJson() {
  try {
    $("#dataOutput").textContent = JSON.stringify(JSON.parse($("#dataInput").value), null, 2);
  } catch (error) {
    $("#dataOutput").textContent = error.message;
  }
}

function base64Encode() {
  $("#dataOutput").textContent = btoa(unescape(encodeURIComponent($("#dataInput").value)));
}

function base64Decode() {
  try {
    $("#dataOutput").textContent = decodeURIComponent(escape(atob($("#dataInput").value.trim())));
  } catch (error) {
    $("#dataOutput").textContent = error.message;
  }
}

function urlEncode() {
  $("#dataOutput").textContent = encodeURIComponent($("#dataInput").value);
}

function decodeJwt() {
  try {
    const [header, payload] = $("#dataInput").value.trim().split(".");
    $("#dataOutput").textContent = JSON.stringify({
      header: JSON.parse(base64UrlDecode(header)),
      payload: JSON.parse(base64UrlDecode(payload))
    }, null, 2);
  } catch (error) {
    $("#dataOutput").textContent = error.message;
  }
}

function base64UrlDecode(value = "") {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return decodeURIComponent(escape(atob(padded)));
}

async function hashText() {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode($("#hashInput").value));
  $("#hashOutput").textContent = toHex(digest);
}

async function hashSelectedFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
  $("#hashOutput").textContent = `${file.name}\n${toHex(digest)}`;
}

function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function parseGs1() {
  const input = $("#gs1Input").value.trim();
  const labels = { "01": "GTIN", "10": "Batch/Lot", "17": "Expiry YYMMDD", "21": "Serial", "30": "Count", "37": "Units" };
  const matches = [...input.matchAll(/\((\d{2})\)([^\(]+)/g)];
  const result = matches.map(([, ai, value]) => ({ ai, label: labels[ai] || "AI", value: value.trim() }));
  $("#gs1Output").textContent = JSON.stringify(result, null, 2);
}

function copyOutput(target) {
  const element = $(`#${target}`);
  if (!element) return;
  navigator.clipboard?.writeText(element.textContent || "");
}

function exportBacklog() {
  const rows = [["name", "department", "status", "type", "tags"]];
  tools.forEach((tool) => rows.push([tool.name, departmentName(tool.department), tool.status, tool.type, tool.tags.join("|")]));
  const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "instr-backlog.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function departmentName(id) {
  return departments.find((department) => department.id === id)?.name || id;
}

function statusLabel(status) {
  return { ready: "Готово", mvp: "MVP", backlog: "Backlog" }[status] || status;
}

function parseNumbers(text) {
  return text.split(/[\s,;]+/).map((value) => Number(value.replace(",", "."))).filter(Number.isFinite);
}

function num(id) {
  return Number($(`#${id}`).value) || 0;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / Math.max(values.length, 1);
}

function stdev(values) {
  const mean = average(values);
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / Math.max(values.length - 1, 1);
  return Math.sqrt(variance);
}

function safe(value) {
  return Number.isFinite(value) ? value : 0;
}

function pct(value) {
  return `${round(value * 100, 1)}%`;
}

function round(value, digits = 2) {
  return Number(value || 0).toLocaleString("ru-RU", { maximumFractionDigits: digits });
}

function metrics(items) {
  return items.map(([label, value]) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

init();
