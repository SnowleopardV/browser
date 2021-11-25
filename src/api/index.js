import { overViewInit1 } from "./overview1";
import { overViewInit2 } from "./overview2";
import { overViewInit3 } from "./overview3";
import { chromeInit } from "./chrome";
import { edgeInit } from "./edge";
import { safariInit } from "./safari";
import { firefoxInit } from "./firefox";



export const init = () => {
    overViewInit1()
    overViewInit2()
    overViewInit3()
    chromeInit()
    edgeInit()
    safariInit()
    firefoxInit()
}