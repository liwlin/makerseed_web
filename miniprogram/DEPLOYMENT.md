# 种子创客工坊小程序部署说明

## 当前开发状态

当前项目可以在微信开发者工具中导入、编译、本地调试、生成预览二维码并上传体验版本。仓库中的 `project.config.json` 已使用正式 AppID：

```json
"appid": "wx967632af57c4d7ea"
```

已验证微信开发者工具 CLI 可生成预览二维码，并已上传 `0.1.0` 版本。

## 必须替换的正式信息

上线前请确认：

- 微信公众平台中的类目、主体信息、体验成员与版本提审配置
- `utils/site-config.js` 中的校区地址、电话、公众号、版本展示
- 如需远程保存报名数据，需要接入云开发或自有后端接口

## 你看到的开发者工具日志

以下日志通常不是业务代码错误：

- `[自动热重载] 已开启代码文件保存后自动热重载`
- `[Deprecation] SharedArrayBuffer will require cross-origin isolation...`
- `getSystemInfo API 提示`
- `游客模式 请注意游客模式下，调用 wx.operateWXData 是受限的`

这些来自微信开发者工具或基础库提示。

以下日志常见于游客模式、未登录或基础库模拟环境：

```text
webapi_getwxaasyncsecinfo:fail
Error: timeout
```

处理方式：

1. 登录微信开发者工具。
2. 确认 `project.config.json` 的 `appid` 为 `wx967632af57c4d7ea`。
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

已验证当前正式 AppID 可执行预览与上传。如果预览或上传失败，优先检查开发者工具是否登录、项目 AppID 是否匹配、账号是否有该小程序的开发权限。

## 已验证命令

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli upload \
  --project /Users/lwl/Desktop/makerseed_web/miniprogram \
  --version 0.1.0 \
  --desc "种子创客工坊小程序首版：校区、报名、MakerSeed机构介绍、课程与我的" \
  --port 9420
```
