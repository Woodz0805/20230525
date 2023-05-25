
var monster_colors = "03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8".split("-").map(a=>"#"+a)
class Monster{  //宣告一個怪物
    constructor(args){
        this.r=args.r||random(50,100) //怪物大小有大有小時，就傳參數args來設定大小，否則大小就是100
        this.p=args.p||createVector(random(width),random(height)) //建立一個向量，用亂數抽初始位置
        this.v=args.v||createVector(random(-1,1),random(-1,1)) //移動速度
        this.color=args.color||random(monster_colors)
        this.mode=random(['happy','bad'])
        this.dead=false //代表活著
        this.timenumber=0 //延長時間，讓大家看到他死
    }
    draw(){
        if(this.dead==false){

      
            push()
                translate(this.p.x,this.p.y) //把原點一道物件中心位置上
                fill(this.color)
                noStroke()
            
                ellipse(0,0,this.r,this.r/1.5)
                // stroke(this.color)
                // strokeWeight(4)
                // line(this.r/2,0,this.r,0)
                //++++++++++++++++++++++++++++++++++++++++++++
                if(this.mode=='happy'){
                    fill(255)
                    ellipse(0,0,this.r/2)
                    fill(0)
                    ellipse(0,0,this.r/3)
                }else{
                    fill(255)
                    arc(0,0,this.r/2,this.r/2,0,PI)
                    fill(0)
                    arc(0,0,this.r/3,this.r/3,0,PI)
                }
                stroke(this.color)
                strokeWeight(4)
                noFill()
                // line(this.r/2,0,this.r,0)
                for(var j=0;j<13;j++){
                    rotate(PI/14)
            
                beginShape()
                    for(var i=0;i<this.r/2;i++){
                        vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
                    }
                    
                endShape()
                }

                
            pop()
    }else{
        this.timenumber=this.timenumber+1
        push()
            translate(this.p.x,this.p.y) //把原點一道物件中心位置上
            fill(this.color)
            noStroke()
            ellipse(0,0,this.r,this.r/1.5)
            fill(255)
            line(this.r/2,0,this.r/2,0)
            stroke(this.color)
            strokeWeight(4)
            noFill()
          
            for(var j=0;j<13;j++){
            rotate(PI/14)
            line(this.r,0,this.r/2,0)
                
            // beginShape()
            // for(var i=0;i<this.r/2;i++){
            //     vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
            // }
                        
            // endShape()
            }
        pop()
    }

    }
    update(){
        this.p.add(this.v)
        if(this.p.x<=0||this.p.x>=width){ //x軸碰到左邊(<=0)，或碰到右邊(>=width)
            this.v.x=-this.v.x //把速度方向改變
        }
        if(this.p.y<=0||this.p.y>=height){ //y軸碰到上邊(<=0)，或碰到下邊(>=height)
            this.v.y=-this.v.y //把速度方向改變
        }

    }

    isBallInRange(x,y){ //判斷飛彈得位置是否在物件範圍內
        let d= dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下和物件中心點 )之間的距離
        if(d<this.r/2){
          return true //滑鼠與物件的距離小於物件寬度，代表碰觸了，傳回觸的值
        }else{
          return false //滑鼠與物件的距離大於物件寬度，代表沒碰觸了，傳回觸的值
        }
  
      }
}