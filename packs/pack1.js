(()=>{
window.KOKORYO_PACKS=window.KOKORYO_PACKS||{};
const recreationText='自分の設置済みカード1枚を、VP差が±1以内（同値含む）の手札1枚と入れ替えて仮設置する。設置時効果は発動する。複数所持しても範囲は±1のまま。';
const goldText='常時：このキャラクターは10VPを持つ。《パーフェクト・イミテーション》ではコピーできない。';
window.KOKORYO_PACKS.pack1={
 id:'pack1',name:'追加パック1',
 characters:{
  P13:{name:'ジュネ',title:'天使見習い',gender:'男性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P14:{name:'ジュネ',title:'天使見習い',gender:'女性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P15:{name:'マイン',title:'',gender:'男性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,vpStackGroup:'infiniteGold',copyable:false,abilityText:goldText},
  P16:{name:'マイン',title:'',gender:'女性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,vpStackGroup:'infiniteGold',copyable:false,abilityText:goldText}
 },
 characterFamilies:[
  {id:'june',label:'ジュネ',packId:'pack1',versions:[{id:'apprenticeAngel',label:'天使見習い',male:'P13',female:'P14'}]},
  {id:'minegold',label:'マイン',packId:'pack1',versions:[{id:'infiniteGold',label:'無限の黄金',male:'P15',female:'P16'}]}
 ],
 casts:{
  CN4:{id:'CN4',name:'見習い賭博師',rarity:'N',hireBread:1,abilityText:'雇用時：命令書1枚。ターン開始時：ランダムな実サイコロ1個。'},
  CR4:{id:'CR4',name:'ディーラー',rarity:'R',noCommonDie:true,extraChosenDice:1,hireBread:1,abilityText:'雇用時：命令書1枚。ターン開始時：好きな出目の実サイコロ1個。'},
  CSR5:{id:'CSR5',name:'イカサマ師',rarity:'SR',extraChosenDice:1,hireBread:1,synthesisOnly:true,abilityText:'雇用時：命令書1枚。ターン開始時：ランダムな実サイコロ1個＋好きな出目の実サイコロ1個。'},
  CSSR5:{id:'CSSR5',name:'伝説の勝負師',rarity:'SSR',extraChosenDice:1,hireBread:1,synthesisOnly:true,abilityText:'雇用時：命令書1枚。ターン開始時：好きな出目の実サイコロ2個。'},
  CSR6:{id:'CSR6',name:'メイド',rarity:'SR',noCommonDie:true,turnBread:1,chooseResource:true,amount:3,abilityText:'ターン開始時：命令書1枚＋好きな1種類の資源3個。'},
  CSSR6:{id:'CSSR6',name:'メイド長',rarity:'SSR',noCommonDie:true,turnBread:1,flexibleResourceTotal:3,abilityText:'ターン開始時：命令書1枚＋好きな資源を合計3個、自由に振り分け。'},
  CUR7:{id:'CUR7',name:'リラ',title:'創造の大魔術師',rarity:'UR',uniqueAbility:'リクリエイション',chooseDie:true,recreationRange:1,abilityText:recreationText},
  CUR8:{id:'CUR8',name:'ゴルド',title:'金・暴力・欲望',rarity:'UR',uniqueAbility:'無限の黄金',chooseDie:true,vp:10,vpStackGroup:'infiniteGold',copyable:false,abilityText:goldText},
  CUR9:{id:'CUR9',name:'榎 奏音',title:'もう1人の転移者',rarity:'UR',uniqueAbility:'神の恩恵',extraDice:1,effectStackGroup:'divineGrace',anyResourceDieConversionAmount:2,uniquePersonGroup:'kanon-kanato',abilityText:'《神の恩恵》：ランダムな実サイコロ1個を追加する。サイコロ1個を好きな資源2個に交換できる。《神の恩恵》は重複しない。'}
 },
 castIds:['CN4','CR4','CSR6','CSSR6','CUR7','CUR8','CUR9'],
 castSynthesis:{CN4:'CR4',CR4:'CSR5',CSR5:'CSSR5',CSR6:'CSSR6'},
 normalCards:[{
  key:'N16',name:'組織再編',type:'N',special:'pack1_reorganization',vp:1,implemented:true,costText:'🎲ANY',
  effectText:'設置：任意のサイコロ／命令書1個。1VP。1ターンに1回、資金1・食料1・兵力1を支払い、自分の同じレアリティの雇用キャラクター2人を捨てる。その1段階上のレアリティからランダムに1人雇用する。SSR×2ならUR。URは素材にできない。',
  installSpec:{any:1},fieldAction:{type:'promoteCastPair',cost:{y:1,p:1,r:1}}
 }]
};
})();
