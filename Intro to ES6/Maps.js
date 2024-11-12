const mymap=new Map([
    ["stringvalue",54],
    [61,"numberkey"],
]);
mymap.set(false,0);
mymap.set(1,true);
console.log(mymap.get("stringvalue"),mymap.get(61),
            mymap.get(false),mymap.get(1));