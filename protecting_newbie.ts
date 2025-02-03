//Leesw123 플긴 입니다.
//2차배포,코드찍거나 보내거나 다른사람 주는것,코드 마음데로 수정 금지입니다.(사용여부는 수정 가능하십니다.)
//버그 제보는 디스코드 leesw123으로 연락 부탁드립니다
















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
    const identifier = ev.victim.getIdentifier()
    if(identifier !== 'minecraft:player') return
    if (victim.hasTag('new')) {
        victim?.addEffect(fireResistance);
        bedrockServer.executeCommand(`/tellraw @a[name="${attacker.getName()}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : ${attacker.getName()}님이 때리신분은 뉴비분 입니다."}]}`)
        return CANCEL;
    }
    if (attacker.hasTag('new')) {
        victim?.addEffect(fireResistance);
        bedrockServer.executeCommand(`/tellraw @a[name="${attacker.getName()}"] {"rawtext":[{"text":"§d§b[ 뉴비보호 ]§r§6 : 뉴비인분은 때릴수 없습니다."}]}`)
        return CANCEL;
    }
});

events.levelTick.on(() => {
    runCommand(`execute at @a[tag=new] run kill @e[type=fishing_hook,r=2]`);
    runCommand(`execute @a[tag=new] ~~~ kill @e[type=fishing_hook,r=2]`);
    runCommand(`execute at @a[tag=new] run kill @e[type=arrow,r=2]`);
    runCommand(`execute @a[tag=new] ~~~ kill @e[type=arrow,r=2]`);
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
        bedrockServer.executeCommand(`tag @a[name="${username}"] add killer`)
        bedrockServer.executeCommand(`tag @a[name="${username}"] remove new`)
        bedrockServer.executeCommand(`scoreboard players set @a[name="${username}"] newm 20`);
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§d§b[ Leesw123 ]§r§6 : 뉴비삭제성공했습니다."}]}`)
    } else {
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§d§b[ Leesw123 ]§r§6 : ${username}님은 뉴비가 아니십니다."}]}`)
    }
}, {});


command.register("뉴비플러그인", "뉴비 플러그인 관련버그제보를 할곳을 알려줍니다.").overload((p, or, output) => {
    const ni = or.getEntity()?.getNetworkIdentifier()!;
    const actor = ni.getActor()!;
    const username = actor.getName();
    bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §bLeesw123 §f]§f§6 버그는 https://open.kakao.com/me/leesw123 이쪽에서 애기부탁드립니다."}]}`);
    return CANCEL
}, {});
