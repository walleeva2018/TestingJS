class Vec
{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(v)
    {
        let a,b;
        a=this.x +v.x;
        b=this.y+v.y;
        return  {a,b}
    }
    minus(v)
    {
        let a,b;
        a=abs(this.x -v.x);
        b=abs(this.y-v.y);
        return {a,b}   
    }
    length()
    {
        return (Math.sqrt(Math.abs(this.x*this.x-this.y*this.y)))
    }
}

a=new Vec(3,5);
console.log(a.plus(new Vec(2,3)));
console.log(a.length())
