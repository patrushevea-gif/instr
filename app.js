const categories = [
  { id: "data", name: "Данные и таблицы", summary: "CSV, Excel, JSON, SQL, отчеты" },
  { id: "documents", name: "Документы и PDF", summary: "PDF, DOCX, шаблоны, сравнение" },
  { id: "production", name: "Производство", summary: "OEE, такт, смены, мощности" },
  { id: "quality", name: "Качество", summary: "SPC, дефекты, ОТК, СМК" },
  { id: "engineering", name: "Инженерия и CAD", summary: "чертежи, 3D, допуски, расчеты" },
  { id: "warehouse", name: "Склад и маркировка", summary: "QR, штрихкоды, GS1, паллеты" },
  { id: "supply", name: "Снабжение", summary: "КП, поставщики, закупки" },
  { id: "sales", name: "Продажи и пресейл", summary: "воронка, КП, тендеры, CRM" },
  { id: "marketing", name: "Маркетинг", summary: "контент, рынок, SEO, кампании" },
  { id: "finance", name: "Финансы", summary: "бюджет, план-факт, ДДС" },
  { id: "hr", name: "HR и обучение", summary: "адаптация, матрицы, оценка" },
  { id: "legal", name: "Право и договоры", summary: "риски, договоры, претензии" },
  { id: "it", name: "IT и администрирование", summary: "доступы, инциденты, сервисы" },
  { id: "security", name: "Безопасность", summary: "хэши, шифрование, ИБ, секреты" },
  { id: "ai", name: "ИИ и промпты", summary: "промпты, оценка, RAG, агенты" },
  { id: "dev", name: "Разработка", summary: "код, API, regex, форматтеры" },
  { id: "web", name: "Веб и SEO", summary: "сайты, ссылки, headers, мета" },
  { id: "media", name: "Медиа и изображения", summary: "фото, видео, OCR, metadata" },
  { id: "text", name: "Текст", summary: "очистка, diff, slug, счетчики" },
  { id: "personal", name: "Повседневные", summary: "калькуляторы, даты, пароли" },
  { id: "logistics", name: "Логистика", summary: "маршруты, упаковка, перевозки" },
  { id: "maintenance", name: "ТОиР", summary: "ремонты, простои, регламенты" },
  { id: "safety", name: "ОТ, ПБ и экология", summary: "инструктажи, СИЗ, риски" },
  { id: "service", name: "Сервис", summary: "заявки, работы, контроль качества" }
];

const toolTabs = [
  ["csv", "CSV"],
  ["bom", "BOM"],
  ["production", "OEE"],
  ["quality", "Качество"],
  ["labels", "Этикетки"],
  ["data", "Данные"],
  ["text", "Текст"],
  ["security", "Хэши"],
  ["gs1", "GS1"]
];

const toolSeeds = {
  data: [
    "CSV viewer", "CSV cleaner", "CSV delimiter detector", "CSV to JSON", "CSV to XLSX", "XLSX viewer", "XLSX to CSV", "XLSX to JSON",
    "Excel duplicate finder", "Excel column profiler", "Excel sheet merger", "BOM importer", "BOM comparer", "Supplier quote comparer", "Price list normalizer",
    "SQL over CSV", "SQL over Parquet", "JSON viewer", "JSON formatter", "JSON repair", "JSON schema generator", "JSON to TypeScript", "XML viewer",
    "XML to JSON", "YAML formatter", "YAML to JSON", "Parquet preview", "Local pivot table", "Pareto from CSV", "Dashboard builder",
    "Data dictionary builder", "Column mapping helper", "Encoding detector", "UTF-8 fixer", "Unit column normalizer", "Data quality report"
  ],
  documents: [
    "PDF merge", "PDF split", "PDF reorder", "PDF rotate", "PDF compress", "PDF metadata viewer", "PDF metadata remover", "PDF text extractor",
    "PDF to image", "Images to PDF", "Markdown to PDF", "HTML to PDF", "DOCX text extractor", "DOCX template generator", "DOCX to HTML",
    "PPTX summary generator", "Certificate generator", "Inspection report generator", "SOP builder", "Checklist PDF generator", "Document version diff",
    "Contract redline checklist", "Document naming helper", "File batch renamer", "Archive manifest generator", "Cover sheet generator",
    "Act template builder", "Meeting minutes builder", "Document approval tracker", "Stamp page generator", "Table of contents builder"
  ],
  production: [
    "OEE calculator", "Takt time calculator", "Cycle time calculator", "Capacity planner", "Line balancing helper", "Bottleneck finder", "Shift report analyzer",
    "Downtime analyzer", "Production plan checker", "Batch size calculator", "Kanban calculator", "WIP calculator", "Throughput calculator", "Changeover time tracker",
    "SMED checklist", "Scrap cost calculator", "Yield calculator", "FPY calculator", "RTY calculator", "Work order generator", "Job traveler generator",
    "Production calendar", "Machine load board", "Daily management board", "Andon event log", "Operator instruction card", "Route sheet builder",
    "Production loss tree", "Labor standard calculator", "Output forecast"
  ],
  quality: [
    "Cp/Cpk calculator", "Pp/Ppk calculator", "Control chart builder", "X-bar R chart", "I-MR chart", "p-chart", "np-chart", "Histogram builder",
    "Pareto chart", "Defect classifier", "NCR report builder", "8D report builder", "AQL helper", "Sampling plan calculator", "Gauge R&R helper",
    "MSA worksheet", "Calibration due checker", "Incoming inspection checklist", "Final inspection checklist", "Supplier quality scorecard",
    "Complaint register", "Root cause helper", "5 Why builder", "Ishikawa builder", "FMEA action tracker", "Audit checklist", "CAPA tracker",
    "Quality cost calculator", "Certificate of analysis builder", "Traceability checker"
  ],
  engineering: [
    "Unit converter", "Tolerance calculator", "Fit calculator", "Thread calculator", "Torque calculator", "Density weight calculator", "Paint consumption calculator",
    "Sheet cutting calculator", "Rod cutting calculator", "DXF viewer", "STL viewer", "OBJ viewer", "STEP viewer", "IGES viewer", "G-code viewer",
    "3D model metadata viewer", "Model screenshot generator", "Drill pattern generator", "Bolt circle calculator", "Bend allowance calculator",
    "Gear ratio calculator", "Hydraulic cylinder calculator", "Pneumatic flow calculator", "Motor power calculator", "Bearing life calculator",
    "Weld length calculator", "Cable section calculator", "Tolerance stack-up helper", "Engineering change note builder"
  ],
  warehouse: [
    "QR generator", "QR scanner", "Barcode generator", "Barcode scanner", "Data Matrix generator", "GS1 parser", "GS1 label builder", "Serial number generator",
    "Batch lot generator", "Pallet label generator", "Carton label generator", "Packing list generator", "Inventory CSV normalizer", "Stock aging report",
    "ABC analysis", "Cycle count planner", "Bin location generator", "Warehouse map list", "Pick list builder", "Putaway helper", "Expiry date checker",
    "FIFO checker", "Lot trace viewer", "Receiving checklist", "Shipment checklist", "Container loading helper", "Weight volume calculator"
  ],
  supply: [
    "Supplier register", "Supplier qualification checklist", "RFQ builder", "Quote comparison", "Purchase request builder", "Purchase order checker",
    "Lead time tracker", "Incoterms helper", "Customs code note", "Delivery risk matrix", "Supplier scorecard", "Contract price tracker",
    "Alternative material finder", "MOQ calculator", "Safety stock calculator", "Reorder point calculator", "Price variance report", "Logistics cost comparer",
    "Tender supplier matrix", "Procurement savings tracker", "Claim to supplier builder", "Supplier audit planner"
  ],
  sales: [
    "Commercial offer builder", "Quote calculator", "Margin calculator", "Discount approval helper", "CRM import cleaner", "Lead scoring table", "Pipeline forecast",
    "Tender pack checker", "Tender deadline calendar", "Product selector", "Customer requirement checklist", "Objection script builder", "Price waterfall",
    "Sales plan fact", "Account plan builder", "Call report builder", "Meeting summary template", "Win loss analysis", "Retail assortment checker",
    "Marketplace SKU card checklist", "Customer segmentation helper", "Contract handoff checklist"
  ],
  marketing: [
    "Market signal board", "Competitor price tracker", "Content brief builder", "SEO title checker", "Meta description checker", "UTM builder", "Campaign checklist",
    "Landing page checklist", "Product portfolio matrix", "Brand mention log", "Social post formatter", "Image alt text helper", "Email subject tester",
    "A/B test planner", "Survey builder", "Customer persona card", "NPS calculator", "Review classifier", "Keyword clustering sheet", "Marketing calendar"
  ],
  finance: [
    "Budget variance", "Plan fact report", "Cashflow planner", "Payment calendar", "Invoice checklist", "Cost center splitter", "Unit economics calculator",
    "Break-even calculator", "Contribution margin", "Working capital calculator", "Receivables aging", "Payables aging", "Currency converter note",
    "VAT helper", "Expense classifier", "CAPEX request builder", "ROI calculator", "NPV calculator", "IRR calculator", "Scenario planner",
    "Management report builder", "Financial close checklist"
  ],
  hr: [
    "Onboarding checklist", "Training matrix", "Skill matrix", "Certification due checker", "Employee card builder", "Interview scorecard", "Adaptation plan",
    "1-on-1 template", "Performance review helper", "Vacation planner", "Shift roster checker", "Payroll change checklist", "Motivation scheme calculator",
    "Job description builder", "Internal policy builder", "Org chart list", "Headcount planner", "Exit interview template", "Training feedback analyzer"
  ],
  legal: [
    "Contract checklist", "NDA checklist", "Specification checker", "Protocol of disagreements helper", "Claims generator", "Court deadline tracker",
    "Legal risk matrix", "Power of attorney register", "Corporate action checklist", "Document package checklist", "Sanctions screening note",
    "Personal data checklist", "IP rights checklist", "License terms register", "Counterparty card", "Contract obligation tracker",
    "Warranty terms checker", "Complaint response builder"
  ],
  it: [
    "Access matrix", "User access review", "Incident triage", "Service request form", "Asset register", "Configuration item card", "IP subnet calculator",
    "DNS lookup note", "SSL expiry checker", "Header checker", "Log parser", "Bitrix import cleaner", "CSV to vCard", "Wi-Fi QR generator",
    "API payload viewer", "Webhook tester spec", "Backup checklist", "Release checklist", "Change request builder", "Knowledge base article builder"
  ],
  security: [
    "SHA-256 checksum", "MD5 checksum", "CRC32 checksum", "File hash comparer", "Password generator", "Passphrase generator", "Base64 file encoder",
    "Base64 decoder", "AES-GCM encrypt note", "Encrypted file note", "JWT decoder", "Certificate viewer", "PEM formatter", "Secret sharing checklist",
    "PII detector checklist", "Phishing report template", "Security incident note", "URL defanger", "Malicious link notes", "Risk register"
  ],
  ai: [
    "Prompt library", "Prompt evaluator", "Prompt diff", "System prompt checklist", "AI use-case register", "AI ROI calculator", "RAG source checklist",
    "Dataset card builder", "Model risk checklist", "AI policy helper", "Agent task planner", "AI test cases builder", "LLM output rubric",
    "Hallucination checklist", "AI red-team checklist", "Meeting summary prompt", "SOP generation prompt", "Email rewrite prompt", "Classifier prompt builder",
    "Extraction schema builder", "Synthetic data prompt", "AI vendor comparison"
  ],
  dev: [
    "Regex tester", "Regex explainer", "JSON formatter", "JWT decoder", "URL encoder", "HTML encoder", "CSS formatter", "SQL formatter", "Diff viewer",
    "UUID generator", "NanoID generator", "Timestamp converter", "Cron expression helper", "Color converter", "SVG optimizer note", "OpenAPI viewer",
    "GraphQL payload viewer", "HTTP status lookup", "MIME type lookup", "Lorem generator", "Markdown preview", "Mermaid preview", "Code snippet vault"
  ],
  web: [
    "Website checklist", "Robots.txt viewer", "Sitemap checker", "Open Graph preview", "Favicon checklist", "Link checker", "Broken URL list",
    "UTM builder", "QR link card", "Page speed note", "Cookie checklist", "Privacy page checklist", "Accessibility checklist", "Contrast checker",
    "Responsive breakpoint checklist", "Redirect map builder", "Canonical URL checker", "Schema.org note", "Landing QA checklist"
  ],
  media: [
    "Image compressor", "Image resizer", "Image crop note", "EXIF viewer", "EXIF remover", "Image diff", "Color palette extractor", "SVG cleaner",
    "PNG to WebP", "JPG to WebP", "Video frame extractor", "Audio duration checker", "OCR from image", "Drawing stamp OCR", "Label OCR",
    "Thumbnail generator", "Watermark note", "Icon size checker", "File metadata viewer", "Media naming helper"
  ],
  text: [
    "Text stats", "Line sorter", "Duplicate line remover", "Text diff", "Slug generator", "Case converter", "Transliteration helper", "Whitespace cleaner",
    "Prefix suffix lines", "Find replace", "List comparer", "Markdown table builder", "CSV column from lines", "Email list cleaner", "Phone list cleaner",
    "Part number normalizer", "Template renderer", "Checklist from text", "Meeting notes cleaner", "Instruction outline builder"
  ],
  personal: [
    "Date calculator", "Workday calculator", "Time zone note", "Timer", "Stopwatch", "Random picker", "Decision matrix", "Priority matrix",
    "Password generator", "Unit converter", "Percent calculator", "Loan calculator", "Fuel cost calculator", "Packing checklist", "Shopping list cleaner",
    "Calendar CSV builder", "Contact card generator", "Reminder text builder"
  ],
  logistics: [
    "Pallet calculator", "Carton calculator", "Truck loading checklist", "Volume weight calculator", "Route stop list", "Delivery note builder",
    "Shipment cost comparer", "Container loading helper", "Incoterms helper", "Delivery SLA tracker", "Transport claim builder", "Warehouse dispatch board",
    "Cargo label builder", "Temperature log checker", "Packaging material calculator", "Export document checklist"
  ],
  maintenance: [
    "MTBF calculator", "MTTR calculator", "Downtime Pareto", "Maintenance checklist", "Preventive maintenance planner", "Equipment card",
    "Spare parts list", "Failure log", "Work permit checklist", "Lubrication schedule", "Tool register", "Calibration planner",
    "Repair act builder", "Maintenance KPI board", "Critical equipment matrix", "Service interval calculator"
  ],
  safety: [
    "Safety briefing log", "PPE calculator", "Risk assessment matrix", "Job safety analysis", "Permit to work checklist", "Incident report",
    "Near miss report", "Environmental aspect register", "Waste log", "Chemical compatibility note", "SDS checklist", "Fire inspection checklist",
    "Training due checker", "Workplace audit", "Emergency drill checklist", "Legal requirement register"
  ],
  service: [
    "Service job card", "Paint service quote", "Customer complaint card", "Service quality checklist", "Equipment handover act", "Materials issue sheet",
    "Work completion act", "Before after photo list", "Warranty case register", "Service schedule", "Technician route list", "Repeat work analyzer",
    "Service margin calculator", "Client acceptance checklist", "Service KPI board"
  ]
};

const readyNames = new Set([
  "CSV cleaner", "CSV to JSON", "BOM comparer", "OEE calculator", "Takt time calculator", "Cp/Cpk calculator", "Pareto chart",
  "Serial number generator", "GS1 parser", "SHA-256 checksum", "JSON formatter", "JWT decoder", "Base64 decoder", "Text stats", "Slug generator"
]);

const mvpNames = new Set([
  "XLSX viewer", "SQL over CSV", "PDF merge", "PDF split", "QR generator", "Barcode generator", "Image compressor", "OCR from image",
  "Regex tester", "Contract checklist", "Budget variance", "Training matrix", "Access matrix", "Prompt library", "Tender pack checker"
]);

const libraryCategories = new Set(["documents", "engineering", "warehouse", "media", "dev", "ai"]);

const tools = Object.entries(toolSeeds).flatMap(([category, names]) => names.map((name, index) => ({
  name,
  category,
  status: readyNames.has(name) ? "ready" : mvpNames.has(name) || index < 2 ? "mvp" : "backlog",
  type: readyNames.has(name) ? "browser" : libraryCategories.has(category) ? "library" : "browser",
  description: descriptionFor(name, category),
  tags: tagsFor(name, category)
})));

const state = {
  category: "all",
  status: "all",
  type: "all",
  query: ""
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  renderTopicBoard();
  renderFilters();
  renderTabs();
  renderCatalog();
  bindActions();
  $("#toolCount").textContent = tools.length;
  $("#categoryCount").textContent = categories.length;
  runDefaultOutputs();
}

function renderTopicBoard() {
  $("#topicBoard").innerHTML = categories.slice(0, 12).map((category) => `
    <button class="topic-chip" type="button" data-category="${category.id}">
      <strong>${category.name}</strong>
      <span>${countByCategory(category.id)} инструментов</span>
    </button>
  `).join("");
}

function renderFilters() {
  const categoryButtons = [{ id: "all", name: "Все темы" }, ...categories].map((category) => {
    const count = category.id === "all" ? tools.length : countByCategory(category.id);
    return `<button type="button" data-filter-category="${category.id}"><span>${category.name}</span><small>${count}</small></button>`;
  });
  $("#categoryFilters").innerHTML = categoryButtons.join("");
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
    const categoryMatch = state.category === "all" || tool.category === state.category;
    const statusMatch = state.status === "all" || tool.status === state.status;
    const typeMatch = state.type === "all" || tool.type === state.type;
    const haystack = `${tool.name} ${tool.description} ${tool.tags.join(" ")} ${categoryName(tool.category)}`.toLowerCase();
    const queryMatch = !state.query || haystack.includes(state.query.toLowerCase());
    return categoryMatch && statusMatch && typeMatch && queryMatch;
  });

  const title = state.category === "all" ? "Все инструменты" : categoryName(state.category);
  $("#catalogTitle").textContent = `${title}: ${filtered.length}`;
  $("#toolCatalog").innerHTML = filtered.map((tool) => `
    <article class="tool-card">
      <div>
        <h4>${tool.name}</h4>
        <span class="status ${tool.status}">${statusLabel(tool.status)}</span>
      </div>
      <p>${tool.description}</p>
      <div class="tag-row">
        <span class="tag">${categoryName(tool.category)}</span>
        <span class="tag">${tool.type}</span>
        ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("") || `<div class="tool-card"><h4>Ничего не найдено</h4><p>Смените фильтр или поисковый запрос.</p><div></div></div>`;
}

function bindActions() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;

    if (target.dataset.category) {
      state.category = target.dataset.category;
      syncActiveFilters();
      renderCatalog();
      document.querySelector("#workspace").scrollIntoView({ behavior: "smooth" });
    }

    if (target.dataset.filterCategory) {
      state.category = target.dataset.filterCategory;
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
  $$("[data-filter-category], [data-category]").forEach((button) => {
    const value = button.dataset.filterCategory || button.dataset.category;
    button.classList.toggle("active", value === state.category);
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
    "text-stats": textStats,
    "text-slug": textSlug,
    "text-lines": textLines,
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
  textStats();
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
    if (char === "\"") quoted = !quoted;
    else if (char === delimiter && !quoted) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells;
}

function cleanCsv() {
  const rows = parseDelimited($("#csvInput").value);
  const width = Math.max(...rows.map((row) => row.length));
  $("#csvOutput").textContent = rows.map((row) => [...row, ...Array(width - row.length).fill("")].map(escapeCsv).join(",")).join("\n");
}

function csvToJson() {
  const [header, ...rows] = parseDelimited($("#csvInput").value);
  const json = rows.map((row) => Object.fromEntries(header.map((key, index) => [key || `col_${index + 1}`, row[index] || ""])));
  $("#csvOutput").textContent = JSON.stringify(json, null, 2);
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
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
  $("#qualityOutput").innerHTML = metrics([
    ["N", values.length],
    ["Mean", round(mean, 4)],
    ["Sigma", round(sigma, 4)],
    ["Cp", round(cp, 3)],
    ["Cpk", round(cpk, 3)],
    ["Offset", round(mean - target, 4)]
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
  for (let index = 0; index < count; index += 1) lines.push(`${prefix}${start + index},${part},${today}`);
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

function textStats() {
  const text = $("#textInput").value;
  const words = text.trim().split(/\s+/).filter(Boolean);
  $("#textOutput").textContent = JSON.stringify({
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    words: words.length,
    lines: text.split(/\r?\n/).length,
    sentences: text.split(/[.!?]+/).filter((value) => value.trim()).length
  }, null, 2);
}

function textSlug() {
  const translit = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
    н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch",
    ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
  };
  $("#textOutput").textContent = $("#textInput").value.toLowerCase()
    .split("").map((char) => translit[char] ?? char).join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function textLines() {
  const lines = $("#textInput").value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  $("#textOutput").textContent = [...new Set(lines)].sort((a, b) => a.localeCompare(b, "ru")).join("\n");
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
  const rows = [["name", "category", "status", "type", "tags"]];
  tools.forEach((tool) => rows.push([tool.name, categoryName(tool.category), tool.status, tool.type, tool.tags.join("|")]));
  const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "instr-tools.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function descriptionFor(name, category) {
  const categoryText = categoryName(category).toLowerCase();
  if (readyNames.has(name)) return `Рабочий browser-only модуль: ${name}. Можно использовать сразу без сервера.`;
  if (mvpNames.has(name)) return `Кандидат на ближайший MVP: ${name}. Логика подходит для локальной обработки в браузере.`;
  return `Идея для каталога: ${name}. Тема: ${categoryText}; реализация отдельным модулем или библиотекой.`;
}

function tagsFor(name, category) {
  const words = name.split(/\s+/).slice(0, 3);
  return [categoryName(category), ...words].filter(Boolean);
}

function countByCategory(id) {
  return tools.filter((tool) => tool.category === id).length;
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.name || id;
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
