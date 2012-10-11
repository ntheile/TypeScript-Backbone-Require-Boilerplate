"TypeScript is compiling as AMD using TscAmdCompile.bat"
cd D:\Websites\TypeScript-Backbone-Require-Boilerplate\TypeScriptTest\js
tsc.exe app.ts --module AMD
cd models
tsc.exe Todo.ts --module AMD