# Deployment

Website:

- GitHub Pages deploys only the `website/` folder.
- Keep large design source files outside the Pages artifact.

Mini Program:

- AppID: `wx967632af57c4d7ea`
- Preview locally with WeChat Developer Tools CLI.
- Upload development versions through the CLI after validation.

Cloud:

- Create the CloudBase environment in WeChat Developer Tools.
- Apply the collections and indexes documented under `cloud/database/`.
- Replace mock service methods with `wx.cloud.callFunction` calls function by function.
