TypeScript-Backbone-Require-Boilerplate
=======================================

TypeScript Backbone Require jQuery - HTML App Boilerplate

This is a boilerplate app for using backbonejs, requirejs, and jQuery with TypeScript. Here are the steps I performed to get this project working.

1. Download Visual Studio 2012 (I downloaded the premium release version, not sure if these instruction will work with express, RC , or Beta. Let me know if it does!)
2. Install the visual studio add-in for TypeScript here: http://www.microsoft.com/en-us/download/details.aspx?id=34790
3. If your using git then clone my project: git clone https://github.com/ntheile/TypeScript-Backbone-Require-Boilerplate.git
4. *Note:  I had to turn off VS2012 from compiling my code because I needed to to compile as AMD. 
	* right click the .ts file
	* goto properties > build action > change to "none"
5. Now compile each manually using the commands in compile-notes.txt. Example> tsc app.ts --module AMD
	* *Hint: Run the commands from the Package Manager Console in Visual Studio to avoid having to switch out to a DOS prompt
	
	
The Build Script
=========================================================

It's a pain to manually compile each ts file to use AMD so I wrote this batch script that you can configure to run at build time.
 
`/TscAmdCompile.bat`
 
<pre>
"TypeScript is compiling as AMD using TscAmdCompile.bat"
cd D:\Websites\TypeScript-Backbone-Require-Boilerplate\TypeScriptTest\js
tsc.exe app.ts --module AMD
cd models
tsc.exe Todo.ts --module AMD
</pre>
 
To configure this to run at build time:
**right click project > properties > build events > pre-build event command line >  D:\Websites\TypeScript-Backbone-Require-Boilerplate\TypeScriptTest\TscAmdCompile.bat**
 
_Make sure to keep the TscAmdCompile.bat file up to date when you add new .ts files._

_You can ignore this build output message "'n++"TypeScript is compiling as AMD using TscAmdCompile.bat"' is not recognized as an internal or external command, operable program or batch file." I am not sure why VS inputs those weird characters, so the first line of the bat file is a dummy line_