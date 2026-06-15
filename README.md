# 种子创客工坊 Makerseed

这是种子创客工坊官网与微信小程序的开发仓库。

种子创客工坊是江门本地专注创客教育、STEAM 教育的创客空间，围绕数字制造、开源软硬件、机器人、计算机编程、物联网、格斗机器人、FPV 无人机、RC 竞速模型等方向，用“设计-建造-编程-调试-反思-改进”的项目制方法培养青少年的创造力、计算机思维和解决问题能力。

## 目录

- `index.html`、`styles.css`、`app.js`：静态官网，可直接部署到 GitHub Pages、Nginx、OSS、Vercel 或 Netlify。
- `assets/brand/`：公司 Logo 和品牌源文件，包含 PNG/JPG/PSD/AI 原素材。
- `miniprogram/`：微信小程序原生项目，可导入微信开发者工具。
- `scripts/validate.py`：本地文件完整性校验脚本。

## 官网功能

- 品牌首页与课程介绍
- 春秋季课程、暑假课程公众号原文入口
- 课程分类筛选
- 预约体验表单
- 可选远程表单接口提交预约
- 未配置远程接口时浏览器本地保存预约记录
- CSV 导出预约记录
- 移动端导航适配

## 小程序功能

- 校区：城市筛选、校区卡片、地址复制、立即报名入口
- 报名：常规课、赛事课、冬夏令营入口，固定报名 CTA
- Makerclub：创客会会员权益、权益网格、绑定学员提示
- 课程管理：当前课程/以往课程分段、空状态和去报名入口
- 我的：头像、成长等级、创客值统计、功能入口和最近预约
- 课程详情页：课程组/单课详情、适合年级、项目方向、预约回填
- 预约页：课程选择、表单校验、本地保存预约

小程序视觉参考了用户提供的 WOWKIDS 截图中的页面模式：浅灰底、大圆角白卡、紫橙主色、悬浮分段、底部 5 Tab 和固定报名按钮；品牌、文案与课程内容已替换为种子创客工坊。

## 课程素材来源

- 春秋季课程介绍：https://mp.weixin.qq.com/s/pHvM6vADUsP_PVRNrlVeNw
- 暑假课程介绍：https://mp.weixin.qq.com/s/2Us_7YtPTEWQckH1mBOA9g

微信文章页面可能限制自动抓取。当前项目已保留原文链接，后续可根据截图、公众号导出的图片或文案继续精修课程详情。

## 本地预览

官网可以直接打开 `index.html`，也可以启动一个静态服务：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 小程序导入

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择本仓库里的 `miniprogram`。
4. AppID 已配置为种子创客工坊正式小程序 `wx967632af57c4d7ea`。
5. 在开发者工具中点击“编译”，测试首页、课程、预约、我的四个 Tab。

命令行预览可用：

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli preview \
  --project /Users/lwl/Desktop/makerseed_web/miniprogram \
  --qr-format image \
  --qr-output miniprogram-preview-qr.png \
  --port 9420
```

当前 `project.config.json` 已使用正式小程序 AppID。开发者工具登录后，可通过 CLI 生成预览二维码或上传版本。

## 校验

```bash
python3 scripts/validate.py
```

校验内容包括官网资源引用、小程序 `app.json` 页面文件、图片资源和部署配置。

## 部署

仓库包含 GitHub Pages 工作流。推送到 `main` 后，可在 GitHub 仓库：

1. 打开 `Settings`。
2. 进入 `Pages`。
3. Source 选择 `GitHub Actions`。
4. 等待 `Deploy static website to Pages` 工作流完成。

小程序已配置正式 AppID，并可通过微信开发者工具 CLI 上传。发布前仍需在微信公众平台完成类目、版本提审与发布配置；当前版本无需后端接口即可在开发者工具中验证主要流程。

## 预约接口配置

官网默认使用浏览器本地存储，适合前期验证。正式使用时可编辑 `config.js`：

```js
window.MAKERSEED_CONFIG = {
  bookingEndpoint: "https://your-form-or-api.example.com/bookings",
  bookingHeaders: {
    "Content-Type": "application/json"
  }
};
```

如果远程接口提交失败，表单会保留本地记录，可通过页面上的“导出预约 CSV”备份。
