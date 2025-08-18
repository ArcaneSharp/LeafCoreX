# Welcome to LeafCoreX Repo.

## Development

Run in development:

1. Start vite dev server: cd Assets --> npm run dev
2. Start Website: cd Website --> dotnet watch
   dotnet watch --launch-profile "https:prod" --configuration Release

- Test prod build: dotnet watch --launch-profile "https" --configuration Debug --project ./Website

### Debugger:

Run watch command.
go to debug window and run profile "Attach and Debug"

## Release Build:

- Run "npm run build" in Assets.
- Publish Components
- Publish Website.
