TypeScript Backbone Require jQuery HTML App

This is a boilerplate app for using backbonejs, requirejs, and jQuery with TypeScript. Here are the steps I performed to get this project working.

1. Download Visual Studio 2012 (I downloaded the premium release version, not sure if these instruction will work with express, RC , or Beta. Let me know if it does!)
2. Install the visual studio add-in for TypeScript here: http://www.microsoft.com/en-us/download/details.aspx?id=34790
3. If your using git then clone my project: git clone ""
4. *Note:  I had to turn off VS2012 from compiling my code because I needed to to compile as ADM. 
	a. right click the .ts file
	b. goto properties > build action > change to "none"
5. Now compile each manually using the commands in compile-notes.txt. Example> tsc app.ts --module AMD
	a. *Hint: Run the commands from the Package Manager Console in Visual Studio to avoid having to switch out to a DOS prompt
