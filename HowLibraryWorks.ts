import * as rtl from "./lib/rtl";
// import * as SysUtils from "./lib/SysUtils";
import "./lib/SysUtils"; // side effects
import "./lib/DateUtils"; // for now.min(), now.day()
import DateUtils from "./lib/DateUtils"; // for DateUtils.JSDateAddDays...
import StrUtils from "./lib/StrUtils";

rtl.hello();
let now = new Date();
console.log(now);
DateUtils.JSDateAddDays(now, 1);
console.log(now);
console.log(StrUtils.formatUnicorn("Hello {0}", "there!"));
console.log("Hello {0}!".formatUnicorn("world"));
now.min().add(1);
now.day().add(1);
console.log(now);