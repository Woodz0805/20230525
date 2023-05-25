class Bullet{
    constructor(args){
        this.r=args.r||10 //飛彈大小有大有小時，就傳參數args來設定大小，否則大小就是10
        this.p=args.p||shipP.copy() //createVector(width/2,height/2) //建立一個向量
        this.v=args.v||createVector(mouseX-width/2,mouseY-height/2).limit(5)
        this.color=args.color||"#a9def9"
    }
    draw(){ //匯出物件程式碼
        push()
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            rect(0,0,this.r,this.r+3)
          

        pop()
    }
    update(){ //計算出物件移動後的位置
        this.p.add(this.v)
    }
  
  }