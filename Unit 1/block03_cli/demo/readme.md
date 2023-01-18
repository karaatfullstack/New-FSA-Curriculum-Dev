** during this demo it is beneficial to take some time to discuss with the students the importance of using google to look up commands when they are either unsure of the action that the command performs or when they don't remember the name of a command that they want to use. 


For the CLI demo start by opening up a terminal. 

use the  'ls' command initially to show the students where your terminal is starting

next use 'cd ~' to navigate yourself back to the root folder.

now use 'ls' command to show the students the current location of the terminal 

from root use 'cd Documents' to navigate into the documents folder.  This is a good time to introduce the concept of using 'tab' for auto-completing. 

in the documents folder use 'mkdir courseWork' to create a courseWork folder inside the document folder. 

use 'cd courseWork' to navigate into the folder

use 'ls' to show the students the contents of the folder, which should be empty

now use 'pwd' to show the students the output of this command 

use 'mkdir test1' to create a folder

the use 'mkdir test2 test3' to show the students that they can create multiple folders as part of the same command

use 'ls' to show the new contents of the courseWork folder

now 'cd test1' 

use 'ls' to show the empty contents of the test1 folder, you can also use 'pwd' here

in the test1 folder we will now create 3 files 

use 'touch index.js'  then use 'touch index.html index.css' to show the students that they can create multiple files as part of the same command


now lets use the 'mv' command to remain our 'index.css' file to be 'main.css' by typing the following in the terminal 'mv index.css main.css'

use 'ls' to demo the name change

now lets move the index.js file from our test1 folder to our test2 folder with the following command: 'mv index.js ../test2'

use 'ls' to show that index.js is no longer inside of the test1 folder

now show the students how to navigate back one folder with 'cd ..'

now use 'ls' or 'pwd' to show the student the location and contents of the courseWork folder

'cd test2' and then use 'ls' to show that the index.js file is now present in the test2 folder. 

lets now delete the index.js file that we just added to the test2 folder with 'rm index.js'

now use 'ls' to show that the test2 folder is now empty

step back to the courseFolder with 'cd ..'

now use 'ls' to show the student the contents of the courseWork folder

now we will delete the test2 folder 

type in 'rm test2' and we should receive a warning that "rm: test2: is a directory"

discuss this with the students and then run this command in the terminal 'rm -rf test2'

now use 'ls' to show that the test2 folder is now gone

navigate back to test1, use 'ls' to show the contents, and lets copy our main.css over to our test3 folder with this command 'cp main.css ../test3'

use 'ls' again to show that main.css is still in test1, now navigate over to test3 and use 'ls' to show that we have the same file in test3



