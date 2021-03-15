const express=require('express');
const router=express.Router();


router.get('/',(req,res,next)=>{
    //let {side}=req.query;
    class Cube{
        side=req.query;
        constructor(a){
            this.side=a;
        }
        volume(){
            return this.side*this.side*this.side;
        }
        surface(){
            return 6*(this.side*this.side);
        }
        diagonal(){
            return (Math.sqrt(3)*this.side);
        }
        display(){
            console.log(`The side of cube is ${this.side}`);
            console.log(`Volume of the cube is ${this.volume()}`);
            console.log(`Surface Area of the cube is ${this.surface()}`);
            console.log(`Diagonal of the cube is ${this.diagonal()}`);
        }
    }
    let result= new Cube(10);
    r=result.display();
    res.render('result',{r});
});

module.exports=router;