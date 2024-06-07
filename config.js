const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923412872683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_36_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlEwaDFFRkoxaWE3eE4rVWc0djdTdW05UGJnR1I5Q2c0emVTZ3hsb0JSVWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVuTEpMTVRpVEphOF9teFNaZ2VrQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDYxZWJmOTgtNWQwYy00NjBjLTgzZDItZThkODBmNTFjNzVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDIxMCxcbiAgICAgIDYsXG4gICAgICAxOTQsXG4gICAgICAxNTUsXG4gICAgICAyMTgsXG4gICAgICA0LFxuICAgICAgMTg3LFxuICAgICAgMTYzLFxuICAgICAgMTE0LFxuICAgICAgNDcsXG4gICAgICAxMSxcbiAgICAgIDExNCxcbiAgICAgIDc0LFxuICAgICAgNDcsXG4gICAgICAxNjksXG4gICAgICAxNTAsXG4gICAgICAyMzAsXG4gICAgICAyMzEsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAxOCxcbiAgICAgIDIwNixcbiAgICAgIDI0MSxcbiAgICAgIDEyMixcbiAgICAgIDE0NCxcbiAgICAgIDE2MSxcbiAgICAgIDE4NyxcbiAgICAgIDE5OSxcbiAgICAgIDEzOSxcbiAgICAgIDE4OSxcbiAgICAgIDExNyxcbiAgICAgIDIwLFxuICAgICAgNDYsXG4gICAgICAyMjQsXG4gICAgICA0OSxcbiAgICAgIDIxOSxcbiAgICAgIDE5NCxcbiAgICAgIDIzNSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJKQzhKVlBXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTI4NzI2ODM6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1Mjg3MDg4MDQ0ODU2OTozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcTFzWm9ERUl5Tmk3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRjdHpCS05Bbm41U0VPcXc4UG1BU0NOT0pVYitkSU16ZmNtUlZScVVoRWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS3NlNU95ZkVHcUJxdUdDVTRERjk3WDdRdElrVTY3YWxUdy9DdS9sd3crcGxvRWFqV2hhK0l4UVlkT2NMeHJPemlUc0N6d0EwbXdwN3lYVHg4RkVTQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXI0WURrRzEyRngyMmluK2xaaE1xRGk5VUQvTEZuUlFmSEtZUk4xOWNqTVh3WTVDUnloUk9BWFJoU2FvaFF1KzREdStjVW14NFhtbDNuV2hJd1IrQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDEyODcyNjgzOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzQ5Mzk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
