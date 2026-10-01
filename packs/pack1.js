(()=>{
window.KOKORYO_PACKS=window.KOKORYO_PACKS||{};
const recreationText='自分の設置済みカード1枚を、VP差が±1以内（同値含む）の手札1枚と入れ替えて仮設置する。設置時効果は発動する。複数所持しても範囲は±1のまま。';
const goldText='常時：このキャラクターは10VPを持つ。《パーフェクト・イミテーション》ではコピーできない。';
window.KOKORYO_PACKS.pack1={
 id:'pack1',name:'追加パック1',
 characters:{
  P13:{name:'ジュネ',title:'天使見習い',gender:'男性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P14:{name:'ジュネ',title:'天使見習い',gender:'女性',group:'june',selectLabel:'ジュネ',uniqueAbility:'リクリエイション',recreationRange:1,abilityText:recreationText},
  P15:{name:'マイン',title:'',gender:'男性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,copyable:false,abilityText:goldText},
  P16:{name:'マイン',title:'',gender:'女性',group:'minegold',selectLabel:'マイン',uniqueAbility:'無限の黄金',vp:10,copyable:false,abilityText:goldText}
 },
 characterFamilies:[
  {id:'june',label:'ジュネ',packId:'pack1',versions:[{id:'apprenticeAngel',label:'天使見習い',male:'P13',female:'P14'}]},
  {id:'minegold',label:'マイン',packId:'pack1',versions:[{id:'infiniteGold',label:'無限の黄金',male:'P15',female:'P16'}]}
 ],
 casts:{
  CUR7:{id:'CUR7',name:'リラ',title:'創造の大魔術師',rarity:'UR',uniqueAbility:'リクリエイション',chooseDie:true,recreationRange:1,abilityText:recreationText},
  CUR8:{id:'CUR8',name:'ゴルド',title:'金・暴力・欲望',rarity:'UR',uniqueAbility:'無限の黄金',chooseDie:true,vp:10,copyable:false,abilityText:goldText}
 },
 castIds:['CUR7','CUR8'],
 normalCards:[{
  key:'N16',name:'組織再編',type:'N',special:'pack1_reorganization',vp:1,implemented:true,costText:'🎲ANY',
  effectText:'設置：任意のサイコロ／命令書1個。1VP。1ターンに1回、資金1・食料1・兵力1を支払い、自分の同じレアリティの雇用キャラクター2人を捨てる。その1段階上のレアリティからランダムに1人雇用する。SSR×2ならUR。URは素材にできない。',
  installSpec:{any:1},fieldAction:{type:'promoteCastPair',cost:{y:1,p:1,r:1}}
 }]
};
})();
