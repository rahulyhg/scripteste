function grabDoll(dolls){
  var bag=[];

  //coding here
  for (var i=0; i<dolls.length; i++){
    if(dolls[i]==="Hello Kitty" || dolls[i]==="Barbie doll"){
      if(bag.length >= 3)break;
      bag.push(dolls[i]);
      continue;
    }
  }
  return bag;
}
