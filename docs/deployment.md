# Deployment

Website:

- GitHub Pages deploys only the `website/` folder.
- The repository root is not a website entry point.
- Keep source design assets in `assets/` / `design/`; only the curated `website/` artifact is published.

Mini Program:

- AppID: `wx967632af57c4d7ea`
- Preview locally with WeChat Developer Tools CLI.
- Upload development versions through the CLI after validation.
- Current development upload target: `0.0.2`, rebuilt around the design handoff and the three-end business plan.

Cloud:

- Create the CloudBase environment in WeChat Developer Tools.
- Apply the collections and indexes documented under `cloud/database/`.
- Replace mock service methods with `wx.cloud.callFunction` calls function by function.

Validation before deployment:

```bash
python3 scripts/validate.py
```
