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
- 浏览器本地保存预约记录
- CSV 导出预约记录
- 移动端导航适配

## 小程序功能

- 首页：品牌介绍、项目特点、学习闭环
- 课程页：课程分类、预约跳转、复制公众号原文链接
- 预约页：课程选择、表单校验、本地保存预约
- 我的页：查看预约记录、复制公众号名称、清空测试记录

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
4. AppID 可先使用测试号，正式发布前替换为工坊的小程序 AppID。
5. 在开发者工具中点击“编译”，测试首页、课程、预约、我的四个 Tab。

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

小程序需要在微信公众平台完成 AppID、类目、服务器域名和版本提审配置；当前版本无需后端接口即可在开发者工具中验证主要流程。
