//Leesw123 플긴 입니다.(도와주신분 이슈님 감사합니다.)
//2차배포가능합니다. 단 코드 마음데로 수정 금지입니다.(뉴비보호 시간은 수정 가능하십니다.)
//버그 제보는 https://open.kakao.com/me/leesw123

/////////////////////////////////////////////////////////
//뉴비보호 시간 (몇분) (""지우지 마세요.) 기본 20분입니다.
const newtime = "20"



/////////////////////////////////////////////////////////
import { MobEffectIds, MobEffectInstance } from "bdsx/bds/effects";
import { command } from "bdsx/command";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
const runCommand = bedrockServer.executeCommand;
const fireResistance = MobEffectInstance.create(MobEffectIds.FireResistant, 40, 255, false, false, false);


events.playerAttack.on((ev) => {
    const victim = ev.victim
    const attacker = ev.player
    if (victim.hasTag('new')) {
        victim?.addEffect(fireResistance);
        runCommand(`/tellraw @a[name="${attacker.getName()}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : ${attacker.getName()}님이 때리신분은 뉴비분 입니다."}]}`)
        return CANCEL;
    }
    if (attacker.hasTag('new')) {
        victim?.addEffect(fireResistance);
        runCommand(`/tellraw @a[name="${attacker.getName()}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : 뉴비인분은 때릴수 없습니다."}]}`)
        return CANCEL;
    }
});

events.levelTick.on(() => {
    runCommand(`execute at @a[tag=new] run kill @e[type=fishing_hook,r=2]`);
    runCommand(`execute at @a[tag=new] run kill @e[type=arrow,r=2]`);
})

events.entityHurt.on(eventData => {
    const victim = eventData.entity
    if (victim.hasTag('new')) {
        return CANCEL
    }
}); 

command.register("뉴비삭제", "뉴비 삭제를 합니다.").overload((p, o, output) => {
    const ni = o.getEntity()?.getNetworkIdentifier()!;
    const actor = ni.getActor()!;
    const username = actor.getName();
    if (o.getEntity()?.hasTag('new')) {
        runCommand(`scoreboard players set @a[name="${username}"] newm ${newtime}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : 뉴비보호가 해제됐습니다."}]}`)
    } else {
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : ${username}님은 뉴비가 아니십니다."}]}`)
    }
}, {});


command.register("뉴비플러그인", "뉴비 플러그인 계발자를 알려줍니다.").overload((p, or, output) => {
    const ni = or.getEntity()?.getNetworkIdentifier()!;
    const actor = ni.getActor()!;
    const username = actor.getName();
    runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §b뉴비보호 §f] §6Leesw123의 뉴비보호 플긴 사용중입니다.(도와주신분 : 이슈님)"}]}`);
    return CANCEL
}, {});

