(()=>{
window.KOKORYO_PACKS=window.KOKORYO_PACKS||{};
const recreationText='自分の設置済みカード1枚を、VP差が±1以内（同値含む）の手札1枚と入れ替えて仮設置する。設置時効果は発動する。複数所持しても範囲は±1のまま。';
const goldText='常時：このキャラクターは10VPを持つ。《パーフェクト・イミテーション》ではコピーできない。同じ《無限の黄金》を複数所持しても10VPのまま。';
const blessingText='追加実サイコロ1個。実サイコロを資源に変換するとき、その資源の獲得量を+1する。この+1は《神の恩恵》の所持数だけ重複する。';
const commandOnHire='雇用時：命令書1枚を獲得。';
function pay(api,p,cost){for(const k of ['y','p','r'])if((api.powers[p]?.[k]||0)<(cost[k]||0))return false;for(const k of ['y','p','r'])if(cost[k])api.resource(p,k,-cost[k]);return true}
function clearAllDebt(api){for(let p=0;p<api.playerCount;p++)api.clearDebt(p)}
window.KOKORYO_PACKS.pack1={
 id:'pack1',name:'追加パック1',
 characters:{
  P13:{name:'ジュネ',title:'天使見習い',gender:'男性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P14:{name:'ジュネ',title:'天使見習い',gender:'女性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P15:{name:'マイン',title:'無限の黄金',gender:'男性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,copyable:false,abilityText:goldText},
  P16:{name:'マイン',title:'無限の黄金',gender:'女性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,copyable:false,abilityText:goldText},
  P17:{name:'築友城 トキ',title:'駆け出し領主',gender:'男性',group:'hero',selectLabel:'トキ／さくら',uniqueAbility:'神の恩恵',extraDice:1,dieResourceBonus:1,abilityText:blessingText},
  P18:{name:'築友城 さくら',title:'駆け出し領主',gender:'女性',group:'hero',selectLabel:'トキ／さくら',uniqueAbility:'神の恩恵',extraDice:1,dieResourceBonus:1,abilityText:blessingText}
 },
 characterFamilies:[
  {id:'june',label:'ジュネ',packId:'pack1',versions:[{id:'apprenticeAngel',label:'天使見習い',male:'P13',female:'P14'}]},
  {id:'minegold',label:'マイン',packId:'pack1',versions:[{id:'infiniteGold',label:'無限の黄金',male:'P15',female:'P16'}]},
  {id:'hero',label:'トキ／さくら',packId:'pack1',versions:[{id:'beginnerLord',label:'駆け出し領主',male:'P17',female:'P18'}]}
 ],
 casts:{
  CN4:{id:'CN4',name:'見習い賭博師',rarity:'N',hireBread:1,abilityText:commandOnHire+'ランダムな実サイコロ1個を獲得。'},
  CR4:{id:'CR4',name:'ディーラー',rarity:'R',chooseDie:true,hireBread:1,abilityText:commandOnHire+'好きな出目の実サイコロ1個を獲得。'},
  CSR5:{id:'CSR5',name:'イカサマ師',rarity:'SR',synthesisOnly:true,chooseDie:true,extraDice:1,hireBread:1,abilityText:commandOnHire+'ランダム1個＋好きな出目1個の実サイコロを獲得。'},
  CSSR5:{id:'CSSR5',name:'伝説の勝負師',rarity:'SSR',synthesisOnly:true,chosenDice:2,hireBread:1,abilityText:commandOnHire+'好きな出目の実サイコロ2個を獲得。'},
  CSR6:{id:'CSR6',name:'メイド',rarity:'SR',hireChooseResource:3,hireOnly:true,hireBread:1,noCommonDie:true,abilityText:'雇用時：命令書1枚。好きな1種類の資源を3個獲得。'},
  CSSR6:{id:'CSSR6',name:'メイド長',rarity:'SSR',hireFreeResourceTotal:3,hireOnly:true,hireBread:1,noCommonDie:true,abilityText:'雇用時：命令書1枚。好きな資源を合計3個、自由に振り分けて獲得。'},
  CUR7:{id:'CUR7',name:'リラ',title:'創造の大魔術師',rarity:'UR',uniqueAbility:'リクリエイション',chooseDie:true,recreationRange:1,abilityText:recreationText,personKey:'lira'},
  CUR8:{id:'CUR8',name:'ゴルド',title:'金・暴力・欲望',rarity:'UR',uniqueAbility:'無限の黄金',chooseDie:true,vp:10,copyable:false,abilityText:goldText,personKey:'gold'},
  CUR9:{id:'CUR9',name:'柊 歌音',title:'領主補佐',rarity:'UR',uniqueAbility:'神の恩恵',chooseDie:true,extraDice:1,dieResourceBonus:1,abilityText:blessingText,personKey:'kanon'}
 },
 castIds:['CN4','CR4','CSR5','CSSR5','CSR6','CSSR6','CUR7','CUR8','CUR9'],
 normalCards:[
  {key:'N16',name:'人員削減',type:'N',vp:1,implemented:true,costText:'🎲ANY×2',effectText:'設置：任意のサイコロ2個。1ターンに1回、資金1・食料1・兵力1を支払い、同レアリティの雇用キャラクター2人を捨て、1段階上をランダム雇用。SSR×2→UR。URは素材不可。',installSpec:{any:2},fieldAction:{type:'promoteCastPair',cost:{y:1,p:1,r:1}}},
  {key:'N17',name:'借り入れ',type:'N',vp:1,implemented:true,costText:'🎲1/2＋資金3',effectText:'ターン開始時：負債1枚。1ターンに1回、負債1枚を捨てて資金2。',installSpec:{faces:[[1,2]],resources:{y:3}},hooks:{turnStart:({owner,api})=>api.addDebt(owner,1)}},
  {key:'N18',name:'バブル崩壊',type:'N',vp:2,implemented:true,costText:'🎲1＋🎲4＋資金3＋食料3',effectText:'設置時：自分は負債1枚、その後全員が負債1枚。',installSpec:{faces:[[1],[4]],resources:{y:3,p:3}},hooks:{onInstall:({owner,api})=>{api.addDebt(owner,1);for(let p=0;p<api.playerCount;p++)api.addDebt(p,1)}}},
  {key:'N19',name:'債務不履行',type:'N',vp:2,implemented:true,costText:'負債数に応じてANY×5→0',effectText:'設置時：全員の負債をすべて捨てる。捨てた負債1枚につき、そのプレイヤーは資源を合計3個捨てる。',installSpec:{any:({owner,api})=>Math.max(0,5-api.debt(owner))},hooks:{onInstall:({api})=>clearAllDebt(api)}},
  {key:'N20',name:'連帯保証',type:'N',vp:-2,implemented:true,costText:'🎲ANY',effectText:'設置時：自分の負債を最大2枚、選んだ他プレイヤーへ渡す。最終ラウンド中は新たな負債取得不可。',installSpec:{any:1}},
  {key:'N21',name:'自転車操業',type:'N',vp:2,implemented:true,costText:'🎲2＋🎲5＋資金5',effectText:'負債所持中、実サイコロ1個を使用済みにして資金5・命令書1枚。ターン終了時に負債があれば全資源を捨てる。',installSpec:{faces:[[2],[5]],resources:{y:5}},hooks:{turnEnd:({owner,api})=>{if(api.debt(owner)>0)api.clearResources(owner)}}},
  {key:'N22',name:'夜逃げ',type:'N',vp:0,implemented:true,costText:'特殊獲得：負債5枚以上',effectText:'ターン開始時効果後、負債5枚以上なら獲得可能。全負債・全資源を捨て、残りのサイコロを全て使用済みにし、好きな資源を合計4個獲得。次の自分のターンをゲーム開始時扱い。'},
  {key:'N23',name:'徳政令',type:'N',vp:3,implemented:true,costText:'🎲ANY×3',effectText:'設置時：全プレイヤーの負債をすべて捨てる。',installSpec:{any:3},hooks:{onInstall:({api})=>clearAllDebt(api)}},
  {key:'N24',name:'債務回収',type:'N',vp:1,implemented:true,costText:'🎲5/6＋兵力4',effectText:'1ターンに1回、兵力1を支払い、資金2または食料2を獲得。',installSpec:{faces:[[5,6]],resources:{r:4}}},
  {key:'N25',name:'カルテル',type:'N',vp:1,implemented:true,costText:'🎲ANY＋資金3',effectText:'設置時：自分は資金3・食料3・兵力3。他プレイヤーは各1。',installSpec:{any:1,resources:{y:3}},hooks:{onInstall:({owner,api})=>{for(let p=0;p<api.playerCount;p++)for(const k of ['y','p','r'])api.resource(p,k,p===owner?3:1)}}}
 ],
 legends:[
  {id:'LL7',tier:'lower',name:'マネーロンダリング',vp:1,special:'moneyLaundering',cost:{y:20},effectText:'設置時：食料10・兵力10。1ターンに1回、資金5→食料10または兵力10。'},
  {id:'LL8',tier:'lower',name:'好景気',vp:0,special:'boom',specialGroup:'economyLower',specialConfig:{vpFormula:{resources:['y'],divisor:6,round:'ceil'}},hooks:{turnStart:({api})=>{for(let p=0;p<api.playerCount;p++)for(const k of ['y','p','r'])api.resource(p,k,2,'boom')}},effectText:'VP=ceil(資金/6)。獲得条件：出目1/2のサイコロを5個使用。所有者ターン開始時：全員が資金・食料・兵力を2ずつ獲得。'},
  {id:'LL9',tier:'lower',name:'不況',vp:0,special:'recession',specialGroup:'economyLower',specialConfig:{vpFormula:{resources:['r','p'],divisor:6,round:'ceil'}},hooks:{turnStart:({api})=>{for(let p=0;p<api.playerCount;p++){api.addDebt(p,1);for(const k of ['y','p','r'])api.resource(p,k,-Math.min(1,api.powers[p][k]||0))}}},effectText:'VP=ceil((兵力+食料)/6)。獲得条件：出目3～6のサイコロを5個使用。所有者ターン開始時：全員が負債1、資金・食料・兵力-1。'},
  {id:'LU7',tier:'upper',name:'雲を貫く摩天楼',vp:8,special:'skyscraper',hooks:{turnStart:({owner,api})=>api.resource(owner,'y',5)},effectText:'ターン開始時：資金5。ゲーム終了時、負債をプラスVPとして扱う。'},
  {id:'LU8',tier:'upper',name:'黄金時代',vp:0,specialEffect:'goldenAge',special:'goldenAge',specialGroup:'economyUpper',effectText:'特殊獲得：全員の負債合計10以上。VP=ceil(資金/3)-兵力不足-食料不足。'},
  {id:'LU9',tier:'upper',name:'世界恐慌',vp:0,specialEffect:'greatDepression',special:'greatDepression',specialGroup:'economyUpper',effectText:'特殊獲得：全員の負債0。VP=ceil((兵力+食料)/4)-資金不足。全員資金0・負債6。負債-2VP、返済コスト2倍。'}
 ]
};
})();
