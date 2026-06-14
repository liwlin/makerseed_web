const courses = [
  {
    title: "春秋季 STEAM 项目课",
    tag: "春秋季课程",
    category: "make",
    summary: "围绕结构设计、电子控制、编程调试和作品展示，形成稳定的项目制学习节奏。",
    points: ["每周持续推进", "设计到制作闭环", "适合长期能力培养"],
    link: "https://mp.weixin.qq.com/s/pHvM6vADUsP_PVRNrlVeNw"
  },
  {
    title: "暑假创客营",
    tag: "暑假课程",
    category: "robot",
    summary: "集中式主题营，适合在假期完成机器人、竞速模型、无人机或综合创客作品。",
    points: ["短周期高强度", "作品成果明确", "适合假期体验进阶"],
    link: "https://mp.weixin.qq.com/s/2Us_7YtPTEWQckH1mBOA9g"
  },
  {
    title: "少儿编程与计算思维",
    tag: "编程",
    category: "code",
    summary: "从图形化编程到 Python / Arduino 思维，建立拆解问题、表达逻辑和调试程序的能力。",
    points: ["算法启蒙", "项目任务制", "可视化反馈"],
    link: "#booking"
  },
  {
    title: "机器人与自动控制",
    tag: "机器人",
    category: "robot",
    summary: "学习传感器、执行器、机械结构与控制策略，让机器人完成可测试的挑战任务。",
    points: ["结构搭建", "传感器应用", "比赛式挑战"],
    link: "#booking"
  },
  {
    title: "数字制造与产品原型",
    tag: "数字制造",
    category: "make",
    summary: "使用 3D 打印、激光切割和 CNC，完成从草图、建模到实体样机的完整流程。",
    points: ["3D 建模", "材料加工", "工程迭代"],
    link: "#booking"
  },
  {
    title: "FPV / RC / 格斗机器人",
    tag: "竞速与对抗",
    category: "robot",
    summary: "把机械、电控、动力、操控和安全规范结合起来，在高反馈项目中训练抗压和复盘能力。",
    points: ["安全规范", "动力系统", "调试与复盘"],
    link: "#booking"
  }
];

const grid = document.querySelector("[data-course-grid]");
const filters = document.querySelectorAll("[data-filter]");
const form = document.querySelector("[data-booking-form]");
const message = document.querySelector("[data-form-message]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const exportButton = document.querySelector("[data-export]");
const copyButton = document.querySelector("[data-copy]");
const copyWechatButton = document.querySelector("[data-copy-wechat]");
const copyPhoneButton = document.querySelector("[data-copy-phone]");
const year = document.querySelector("[data-year]");

const storageKey = "makerseed-bookings";
const config = window.MAKERSEED_CONFIG || {};

function renderCourses(category = "all") {
  const selected = category === "all" ? courses : courses.filter((course) => course.category === category);
  grid.innerHTML = selected
    .map(
      (course) => `
        <article class="course-card">
          <span class="tag">${course.tag}</span>
          <h3>${course.title}</h3>
          <p>${course.summary}</p>
          <ul>
            ${course.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <a class="course-link" href="${course.link}" ${course.link.startsWith("https") ? 'target="_blank" rel="noreferrer"' : ""}>了解详情</a>
        </article>
      `
    )
    .join("");
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveBooking(data) {
  const bookings = getBookings();
  bookings.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem(storageKey, JSON.stringify(bookings));
}

async function submitBooking(data) {
  const payload = { ...data, createdAt: new Date().toISOString(), source: "makerseed-website" };
  saveBooking(payload);

  if (!config.bookingEndpoint) {
    return { mode: "local" };
  }

  const response = await fetch(config.bookingEndpoint, {
    method: "POST",
    headers: config.bookingHeaders || { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`booking endpoint returned ${response.status}`);
  }

  return { mode: "remote" };
}

function setText(selector, value, fallback = "") {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value || fallback;
  }
}

async function copyText(text, fallbackMessage) {
  if (!text) {
    message.textContent = fallbackMessage;
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    message.textContent = "已复制。";
  } catch {
    message.textContent = text;
  }
}

function toCsv(rows) {
  const headers = ["学生姓名", "年龄", "联系电话", "感兴趣方向", "备注", "提交时间"];
  const body = rows.map((row) =>
    [row.student, row.age, row.phone, row.interest, row.note, row.createdAt]
      .map((value) => `"${String(value || "").replaceAll('"', '""')}"`)
      .join(",")
  );
  return [headers.join(","), ...body].join("\n");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCourses(button.dataset.filter);
  });
});

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  message.textContent = "正在提交预约信息...";

  try {
    const result = await submitBooking(data);
    form.reset();
    message.textContent = result.mode === "remote" ? "预约信息已提交，我们会尽快联系你。" : "预约信息已保存。正式上线时可接入消息通知或 CRM。";
  } catch {
    message.textContent = "远程提交失败，信息已保存在当前浏览器，可导出 CSV 备份。";
  }
});

exportButton?.addEventListener("click", () => {
  const bookings = getBookings();
  if (!bookings.length) {
    message.textContent = "当前还没有可导出的预约记录。";
    return;
  }
  const blob = new Blob(["\ufeff", toCsv(bookings)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `makerseed-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
});

copyButton?.addEventListener("click", async () => {
  const text = "你好，我想预约种子创客工坊体验课，想了解孩子适合的创客/STEAM 课程。";
  try {
    await navigator.clipboard.writeText(text);
    message.textContent = "联系文案已复制。";
  } catch {
    message.textContent = text;
  }
});

copyWechatButton?.addEventListener("click", () => {
  copyText(config.contact?.wechatOfficialAccount || "种子创客工坊", "公众号名称暂未配置。");
});

copyPhoneButton?.addEventListener("click", () => {
  copyText(config.contact?.phone, "联系电话暂未配置，请先提交预约。");
});

setText("[data-contact-wechat]", config.contact?.wechatOfficialAccount, "种子创客工坊");
setText("[data-contact-city]", config.contact?.city, "广东江门");
setText("[data-contact-phone]", config.contact?.phone, "预约后联系");
setText("[data-contact-address]", config.contact?.address, "广东江门，详细地址请预约后确认");
year.textContent = new Date().getFullYear();
renderCourses();
