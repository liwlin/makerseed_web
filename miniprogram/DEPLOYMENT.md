# 种子创客工坊小程序部署说明

## 当前开发状态

当前项目可以在微信开发者工具中导入、编译和本地调试页面逻辑。仓库中的 `project.config.json` 仍使用占位：

```json
"appid": "touristappid"
```

这适合前期页面开发，但不适合生成正式预览二维码、上传体验版或提交审核。

## 必须替换的正式信息

上线前请替换：

- `project.config.json` 中的 `appid`
- `utils/site-config.js` 中的校区地址、电话、公众号、版本展示
- 如需远程保存报名数据，需要接入云开发或自有后端接口

## 你看到的开发者工具日志

以下日志通常不是业务代码错误：

- `[自动热重载] 已开启代码文件保存后自动热重载`
- `[Deprecation] SharedArrayBuffer will require cross-origin isolation...`
- `getSystemInfo API 提示`
- `游客模式 请注意游客模式下，调用 wx.operateWXData 是受限的`

这些来自微信开发者工具或基础库提示。

以下日志与当前 `touristappid` / 游客模式有关：

```text
webapi_getwxaasyncsecinfo:fail
Error: timeout
AppID 不合法, invalid appid
```

处理方式：

1. 登录微信开发者工具。
2. 将 `project.config.json` 的 `appid` 改为种子创客工坊正式小程序 AppID。
3. 重新编译。
4. 再运行预览或上传。

## 命令行验证

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli islogin --port 9420
```

返回 `{"login": true}` 表示开发者工具已登录。

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli preview \
  --project /Users/lwl/Desktop/makerseed_web/miniprogram \
  --qr-format image \
  --qr-output miniprogram-preview-qr.png \
  --port 9420
```

若仍使用 `touristappid`，预览可能失败，这是平台身份问题，不是页面代码问题。
