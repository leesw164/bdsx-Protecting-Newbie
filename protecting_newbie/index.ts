import { events } from "bdsx/event";

events.serverOpen.on(() => {
    import ("./protecting_newbie");
    console.log("made by Leesw123")
})
