## 作业01



Mark和John在PK他们的BMI（Body Mass Index，体重指数）。

体重指数是用这个公式计算的：
$$
BMI = mass / height^2 = mass / (height * height)。
$$
其中，mass是体重，单位为kg；height为身高，单位为米。

请用 JavaScript 编写一个程序，命名为 `bmi.js` ，完成如下任务：

1. 用变量存储Mark和John的体重以及身高；

   ```
   let M_height = 1.80,M_Mass = 54;//声明变量：存储Mark的身高、体重
   let J_height = 1.78,J_Mass = 50;//声明变量：存储John的身高、体重
   ```

2. 计算二人的BMI；

   ```
   let M_BIM = M_Mass / (M_height * M_height);
   let J_BIM = J_Mass / (J_height * J_height);
   console.log("Mark的BIM值为：",M_BIM);
   console.log("John的BIM值为：",J_BIM);
   ```

3. 创建一个布尔变量，用来包含Mark的BMI是否比John更高；

  ```
  let compare;
  compare = (M_BIM > J_BIM) ? true : false;
  console.log(compare);
  ```

4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）

```
console.log("Mark的BMI是否比John的更高？",String(compare));
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201007151254107.png#pic_center)


## 作业02

John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，而 Mike 的队得了116分、94分和123分。

用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：

1. 计算每队的平均分；

   ```
   let John_avg = (89 + 120 + 103) / 3;
   let Mike_avg = (116 + 94 + 123) / 3;
   console.log("John的平均分为："+John_avg+"\n"+"Mike的平均分为："+Mike_avg+"\n");
   ```

   

2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；

   ```
   if (John_avg > Mike_avg){
       console.log("John是获胜队伍！"+ "平均分为："+John_avg);
   }
   else if (John_avg < Mike_avg){
       console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg);
   }
   else{
       console.log("平局");
   }
   console.log("********************************")
   ```

   

3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；

   ```
   let John_avg1 = (96 + 121 + 110) / 3;
   let Mike_avg1 = (116 + 86 + 78) / 3;
   console.log("John的平均分为："+John_avg1+"\n"+"Mike的平均分为："+Mike_avg1+"\n");
   if (John_avg1 > Mike_avg1){
       console.log("John是获胜队伍！"+ "平均分为："+John_avg1);
   }
   else if (John_avg1 < Mike_avg1){
       console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg1);
   }
   else{
       console.log("平局");
   }
   console.log("********************")
   ```

   

4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；

   ```
   let Mary_avg = (97 + 134 + 105) / 3;
   console.log("John的平均分为："+John_avg+"\n"+"Mike的平均分为："+Mike_avg+"\n" + "Mary的平均分为："+Mary_avg+"\n");
   if ((John_avg > Mike_avg) && (John_avg > Mary_avg)){
       console.log("John是获胜队伍！"+ "平均分为："+John_avg);
   }
   else if ((Mary_avg > Mike_avg) && (John_avg < Mary_avg)){
       console.log("Mary是获胜队伍！"+ "平均分为："+Mary_avg);
   }
   else if ((Mike_avg > John_avg) && (Mike_avg > Mary_avg)){
        console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg)
   }
   else{
       console.log("平局");
   }
   console.log("******************************")
   ```

   

5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。

​    

```
let John_avg2 = (97 + 102 + 108) / 3;
let Mike_avg2 = (116 + 89 + 114) / 3;
let Mary_avg2 = (97 + 102 + 108) / 3;
console.log("John的平均分为："+John_avg2+"\n"+"Mike的平均分为："+Mike_avg2+"\n" + "Mary的平均分为："+Mary_avg2+"\n");
if ((John_avg2 > Mike_avg2) && (John_avg2 > Mary_avg2)){
    console.log("John是获胜队伍！"+ "平均分为："+John_avg2);
}
else if ((Mary_avg2 > Mike_avg2) && (John_avg2 < Mary_avg2)){
    console.log("Mary是获胜队伍！"+ "平均分为："+Mary_avg2);
}
else if ((Mike_avg2 > John_avg2) && (Mike_avg2 > Mary_avg2)){
     console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg2)
}
else{
    console.log("平局");
}
console.log("******************************")
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201007151325811.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdTYxNjU=,size_16,color_FFFFFF,t_70#pic_center)


## 作业03



用JavaScript编写程序，取名 `star.js`，在控制台输出如下图形：

```
   *
  * *
 * * *
* * * *
 * * *
  * *
   *
```

```
//输出1~4行的*号
var str = "";
for(var i = 1; i <= 4; i++){
    var blank = "",
    stars = "";
for(var j = 1; j <= 4 - i; j++) { //每行输出的的空格数
    blank = blank + " ";
}
for(var k = 1; k <= i; k++) { //每行输出的的*号
    stars = stars + "*" + " ";
}
   str = str + blank + stars + "\n";
}
//输出5~7行的*号
for(var i = 4-1; i > 0; i--){
     var blank = "",
     stars = "";
for(var j = 1; j <= 4 - i; j++){
    blank = blank + " ";
}
for(var k = 1;k <= i; k++){
    stars = stars + "*" + " ";
}
   str = str + blank + stars + "\n";
}
console.log(str);
```






