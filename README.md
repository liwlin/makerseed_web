# 种子创客工坊 MakerSeed

这是种子创客工坊官网、微信小程序和云开发骨架的开发仓库。

种子创客工坊是江门本地专注创客教育、STEAM 教育的创客空间，围绕数字制造、开源软硬件、机器人、计算机编程、物联网、格斗机器人、FPV 无人机、RC 竞速模型等方向，用“设计-建造-编程-调试-反思-改进”的项目制方法培养青少年的创造力、计算机思维和解决问题能力。

## 项目结构

- `website/`：官网静态站点，GitHub Pages 只部署这个目录。
- `miniprogram/`：微信原生小程序，包含学生/家长端、教师端、管理端。
- `cloud/`：微信云开发数据库说明、索引建议、安全规则和云函数骨架。
- `content/`：品牌、校区、课程、师资、荣誉、文章等共享内容源。
- `assets/`：设计源素材与高质量原始素材库，不直接作为 GitHub Pages 发布入口。
- `design/`：Claude Code 输出的设计方案，是当前视觉和页面结构的来源。
- `docs/`：架构、数据模型、角色权限、部署和路线图文档。
- `scripts/validate.py`：本地结构和关键规则校验脚本。

## 当前小程序

小程序旧方案已经删除，不再保留早期参考 WOWKIDS 的页面、路由、图标或旧课程数据源。当前实现严格围绕 `design/` 与整体业务方案重建。

学生/家长端：

- 校区、报名、MakerSeed、课程、我的 5 个底部 Tab，严格对应 `design/` 学生端方案。
- MakerSeed Tab 为机构介绍页，内含“实力 / 师资研发”切换，不再显示旧会员权益页。
- 预约填写、课程详情、机构实力、师资研发等页面。
- 预约表单已接入统一 `booking.service`，管理端可读取同一份开发版数据。
- “MakerSeed”Tab 图标使用公司 Logo：`makerseed-logo-normal.png` / `makerseed-logo-active.png`。

教师端：

- 今日排课、学员列表、签到、课后反馈、个人页。

管理端：

- 数据看板、预约管理、学员管理、课程管理、教师管理、订单管理、会员管理、个人页。

开发期通过 `pages/role-select/index` 切换角色；正式上线时应把角色绑定到微信登录和云开发权限。

## 已清理的旧内容

- 旧根页面：`home`、`courses`、`campus`、`signup`、`makerclub`、`course-manage`、`profile`、`booking`、`course-detail`、`org-strength`、`org-faculty`
- 旧数据源：`miniprogram/utils/courses.js`、`miniprogram/utils/articles.js`
- 旧图标：`miniprogram/images/tab/club-normal.png`、`miniprogram/images/tab/club-active.png`

`scripts/validate.py` 会阻止这些旧入口和旧 WOWKIDS 关键词重新混入。

## 当前状态

- GitHub 只维护 `main` 作为干净主线，阶段成果直接合入 `main`。
- 官网生产入口已经迁移到 `website/`，根目录不再保留旧版 `index.html`、`styles.css`、`app.js` 等入口文件。
- 小程序 `0.0.2` 开发版按三端结构维护；每次阶段改动后使用微信开发者工具 CLI 生成预览码。
- 当前阶段是可演示 MVP：官网预约和小程序部分业务流使用本地 mock/local storage；正式运营前需要接入微信云开发和权限校验。

详细阶段记录见 `docs/implementation-status.md`。

## 官网

官网入口在 `website/index.html`，主要包含：

- 品牌首页与课程介绍
- 春秋季课程、暑假课程公众号原文入口
- 课程分类筛选
- 预约体验表单
- 当前设计入口将预约记录保存在浏览器本地，适合阶段演示与内容验证
- 移动端导航适配

`website/app.js` 与 `website/config.js` 保留了远程表单接口和 CSV 导出能力，但当前 `website/index.html` 使用 design 方案内嵌脚本，尚未把这两项能力接入首屏体验。

GitHub Pages 工作流位于 `.github/workflows/pages.yml`，artifact path 为 `website`。

## 课程素材来源

- 春秋季课程介绍：https://mp.weixin.qq.com/s/pHvM6vADUsP_PVRNrlVeNw
- 暑假课程介绍：https://mp.weixin.qq.com/s/2Us_7YtPTEWQckH1mBOA9g

微信文章页面可能限制自动抓取。当前项目保留原文链接，后续可根据公众号后台素材、截图或导出图片继续精修课程详情。

## 本地预览

官网：

```bash
python3 -m http.server 8080 --directory website
```

访问：

```text
http://localhost:8080
```

小程序预览：

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli preview \
  --project /Users/lwl/Desktop/makerseed_web/miniprogram \
  --qr-format terminal \
  --port 52099
```

## 小程序开发版上传

AppID 已配置为：

```text
wx967632af57c4d7ea
```

上传开发版：

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli upload \
  --project /Users/lwl/Desktop/makerseed_web/miniprogram \
  --version 0.0.2 \
  --desc "按整体业务方案重构三端小程序" \
  --port 52099
```

发布前仍需在微信公众平台完成类目、版本提审与发布配置。

## 校验

```bash
python3 scripts/validate.py
```

校验内容包括：

- 官网资源引用与 Pages 部署目录
- 根目录旧官网入口清理
- `content/` 共享内容源 JSON
- 小程序三端页面结构和所有页面文件
- 学生端 5 Tab：校区、报名、MakerSeed、课程、我的，以及 MakerSeed 公司 Logo 图标
- MakerSeed Tab 必须显示 design 里的机构介绍 / 师资研发，不允许回退成会员权益页
- 旧页面、旧数据源、旧图标、旧 WOWKIDS 关键词清理
- 服务层、模型、组件、云函数和文档骨架

## GitHub 同步

本仓库默认保持 `main` 干净主线。由于本机到 GitHub 的普通 `git push` 曾多次卡在 pack 传输，阶段提交后优先使用 API 同步脚本：

```bash
node scripts/github-sync-main.js --branch main --base HEAD~1 --head HEAD
```

脚本会读取本机 GitHub credential 或 `GITHUB_TOKEN` / `GH_TOKEN`，不会把 token 写入仓库或输出到终端。

## 云开发接入

当前 `miniprogram/services/` 使用本地 mock 数据，便于开发者工具和手机预览立即跑通。

后续接入微信云开发时，建议按以下顺序替换：

1. `auth.service.js`：绑定 `openid` 和角色。
2. `booking.service.js`：预约创建、列表和状态更新。
3. `teacher.service.js`：排课、签到、课后反馈。
4. `order.service.js` 与 `member.service.js`：订单、会员和课包。

数据库集合、索引和安全规则说明见 `cloud/database/`。
