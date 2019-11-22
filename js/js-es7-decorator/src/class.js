function who(Name){
  
    return function(target) {
        console.log(target);
    
        target.Name = Name;
        return target;
    }
}


// @who
// @who('蜗牛弟弟')
@who('蜗牛1')
// @who({
//     name:'蜗牛'
// })
class Man {
    xiangqin(){
        // console.log(`蜗牛去相亲了`);
        console.log(`${Man.Name}去相亲了`);    
    }
}

var man = new Man();
man.xiangqin();
class Man1 {
    xiangqin(){
        // console.log(`蜗牛弟弟去相亲了`);
        console.log(`${Man.Name}去相亲了`);    
    }
}