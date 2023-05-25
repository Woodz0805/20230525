class Obj{ //宣告一個類別，畫的圖案
    constructor(args){ //預設值，基本資料(物件的顏色、移動的速度、大小、初始位置)
      // this.p=args.p||{x:random(width) ,y:random(height)} //描述該物件的初始位置，||(or)，當產生一個物件時，有傳給位置參數，則使用該參數，如果沒有傳參數，就用or後面產出
      this.p=args.p||createVector(random(width) ,random(height))
      // this.v={x:random(-1,1) ,y:random(-1,1)} //移動的速度
      this.v=createVector(random(-5,5) ,random(-5,5)) //向量寫法
      this.size=random(10,20) //大小
      this.color=random(fill_colors) //充滿顏色
      this.stroke=random(line_colors) //外框顏色
    }
    draw(){ //劃出單一形狀物件
      push() //執行push以後，依照設定設定原點(0,0)
        translate(this.p.x,this.p.y) //以該物件位置為原點
        scale(this.v.x<0?1:-1,-1) //如果this.v.x<0成立，值為1，否則為-1，y軸為-1(上下翻轉)
        fill(this.color)
        // stroke(this.stroke)
        noStroke()
        beginShape()
        for(var k=0;k<points.length;k=k+1){
          // line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size)
          vertex(points[k][0]*this.size/2,points[k][1]*this.size/2)//設定一個點，當指令到endShape(close)，會把所有點串連在一起
          // curveVertex(points[k][0]*this.size,points[k][1]*this.size)//畫圓弧線
        }
        endShape(close)
      pop() //執行pop()，原點(0,0)設定回到視窗左上角

    }
    update(){
      // this.p.x=this.p.x+this.v.x //x軸˙目前位置加上x軸的移動速度
      // this.p.y=this.p.y+this.v.y
      this.p.add(this.v) //就可以跟上面兩行指令一樣的效果
      //向量sub==>減號

      //知道滑鼠的位置，並建立一個向量
      // let mouseV=createVector(mouseX,mouseY) //把滑鼠的位置轉換成一個向量
      // let delta=mouseV.sub(this.p).limit(this.v.mag()*2) //sub計算出滑鼠所在位置向量mouseV到物件向量(this.p)的距離，每次移動3靠近，this.v.mag()代表該物件的速度大小(一個向量值有大小與方向)
      // this.p.add(delta)


      if(this.p.x<=0||this.p.x>=width){ //x軸碰到左邊(<=0)，或碰到右邊(>=width)
        this.v.x=-this.v.x //把速度方向改變
      }
      if(this.p.y<=0||this.p.y>=height){ //y軸碰到上邊(<=0)，或碰到下邊(>=height)
        this.v.y=-this.v.y //把速度方向改變
      }
    }
    isBallInRange(x,y){ //判斷滑鼠按下得位置是否在物件範圍內
      let d= dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下和物件中心點 )之間的距離
      if(d<4*this.size){
        return true //滑鼠與物件的距離小於物件寬度，代表碰觸了，傳回觸的值
      }else{
        return false //滑鼠與物件的距離大於物件寬度，代表沒碰觸了，傳回觸的值
      }

    }

}