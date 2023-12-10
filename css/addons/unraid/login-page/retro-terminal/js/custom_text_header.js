
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> 
 <pre>                     
  ___ ___                __     ___________.__              __      __            .__       .___
 /   |   \_____    ____ |  | __ \__    ___/|  |__   ____   /  \    /  \___________|  |    __| _/
/    ~    \__  \ _/ ___\|  |/ /   |    |   |  |  \_/ __ \  \   \/\/   /  _ \_  __ \  |   / __ | 
\    Y    // __ \\  \___|    <    |    |   |   Y  \  ___/   \        (  <_> )  | \/  |__/ /_/ | 
 \___|_  /(____  /\___  >__|_ \   |____|   |___|  /\___  >   \__/\  / \____/|__|  |____/\____ | 
       \/      \/     \/     \/                 \/     \/         \/                         \/ 
 </pre> 
</div>
`;
document.getElementById("login").innerHTML += custom_text_header
