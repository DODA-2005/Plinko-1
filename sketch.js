var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
var p5 = [];
var p6 = [];
var p7 = [];
var p8 = [];
var p9 = [];
var p10 = [];
var p11 = [];
var p12 = [];
var p13 = [];
var p14 = [];
var p15 = [];
var p16 = [];
var p17 = [];
var p18 = [];
var p19 = [];
var p20 = [];
var p21 = [];
var p22 = [];
var p23 = [];
var p24 = [];
var p25 = [];
var p26 = [];
var p27 = [];
var p28 = [];
var p29 = [];
var p30 = [];
var p31 = [];
var p32 = [];
var p33 = [];
var p34 = [];
var p35 = [];
var p36 = [];
var p37 = [];
var p38 = [];
var p39 = [];
var p40 = [];
var p41 = [];
var p42 = [];
var p43 = [];
var p44 = [];
var p45 = [];
var p46 = [];
var p47 = [];
var p48 = [];
var p49 = [];
var p50 = [];


var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
  bg=loadImage("bg.jpg")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  //create 2nd row of plinko objects
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  //create 3rd row of plinko objects
  for (var j = 75; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  //create 4th row of plinko objects
  for (var j = 25; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  if(frameCount%60===0){
    p1.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p2.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p3.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p4.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p5.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p6.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
    
  if(frameCount%30===0){
    p7.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p8.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p9.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p10.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p11.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p12.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p13.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p14.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p15.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p16.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p17.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p18.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
    
  if(frameCount%30===0){
    p19.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p20.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p21.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p22.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p23.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p24.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p25.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p26.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p27.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p28.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p29.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p30.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p31.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
    
  if(frameCount%30===0){
    p32.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p33.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p34.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p35.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p36.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p37.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p38.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p39.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p40.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p41.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p42.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p43.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
    
  if(frameCount%30===0){
    p44.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p45.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p46.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p47.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p48.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p49.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }

  if(frameCount%60===0){
    p50.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
}
 


function draw() {
  background(bg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  

  //display the particles 
  fill("khaki");
  for (var c = 0; c < p1.length; c++) {
    p1[c].display();
  }
  for (var a = 0; a < p2.length; a++) {
    p2[a].display();
  }
  for (var d = 0; d < p3.length; d++) {
    p3[d].display();
  }
  for (var g = 0; g < p4.length; g++) {
    p4[g].display();
  }
  for (var l = 0; l < p10.length; l++) {
    p10[l].display();
  }

  fill("turquoise");
  for (var b = 0; b < p5.length; b++) {
    p5[b].display();
  }
  for (var f = 0; f < p6.length; f++) {
    p6[f].display();
  }
  for (var e = 0; e < p7.length; e++) {
    p7[e].display();
  }
  for (var h = 0; h < p8.length; h++) {
    p8[h].display();
  }
  for (var j = 0; j < p9.length; j++) {
    p9[j].display();
  }

  fill("pink");
  for (var m = 0; m < p11.length; m++) {
    p11[m].display();
  }
  for (var n = 0; n < p12.length; n++) {
    p12[n].display();
  }
  for (var o = 0; o < p13.length; o++) {
    p13[o].display();
  }
  for (var p = 0; p < p14.length; p++) {
    p14[p].display();
  }
  for (var q = 0; q < p15.length; q++) {
    p15[q].display();
  }

  fill("orchid");
  for (var r = 0; r < p16.length; r++) {
    p16[r].display();
  }
  for (var s = 0; s < p17.length; s++) {
    p17[s].display();
  }
  for (var t = 0; t < p18.length; t++) {
    p18[t].display();
  }
  for (var u = 0; u < p19.length; u++) {
    p19[u].display();
  }
  for (var v = 0; v < p20.length; v++) {
    p20[v].display();
  }

  fill("skyblue");
  for (var w = 0; w < p21.length; w++) {
    p21[w].display();
  }
  for (var x = 0; x < p22.length; x++) {
    p22[x].display();
  }
  for (var y = 0; y < p23.length; y++) {
    p23[y].display();
  }
  for (var z = 0; z < p24.length; z++) {
    p24[z].display();
  }
  for (var i = 0; i < p25.length; i++) {
    p25[i].display();
  }

  fill("orange");
  for (var ad = 0; ad < p26.length; ad++) {
    p26[ad].display();
  }
  for (var ab = 0; ab < p27.length; ab++) {
    p27[ab].display();
  }
  for (var ae = 0; ae < p28.length; ae++) {
    p28[ae].display();
  }
  for (var ah = 0; ah < p29.length; ah++) {
    p29[ah].display();
  }
  for (var ac = 0; ac < p30.length; ac++) {
    p30[ac].display();
  }

  fill("crimson");
  for (var bc = 0; bc < p31.length; bc++) {
    p31[bc].display();
  }
  for (var af = 0; af < p32.length; af++) {
    p32[af].display();
  }
  for (var bd = 0; bd < p33.length; bd++) {
    p33[bd].display();
  }
  for (var aa = 0; aa < p34.length; aa++) {
    p34[aa].display();
  }
  for (var am = 0; am < p35.length; am++) {
    p35[am].display();
  }

  fill("plum");
  for (var an = 0; an < p36.length; an++) {
    p36[an].display();
  }
  for (var ao = 0; ao < p37.length; ao++) {
    p37[ao].display();
  }
  for (var ap = 0; ap < p38.length; ap++) {
    p38[ap].display();
  }
  for (var aq = 0; aq < p39.length; aq++) {
    p39[aq].display();
  }
  for (var ar = 0; ar < p40.length; ar++) {
    p40[ar].display();
  }

  fill("gold");
  for (var as = 0; as < p41.length; as++) {
    p41[as].display();
  }
  for (var bb = 0; bb < p42.length; bb++) {
    p42[bb].display();
  }
  for (var au = 0; au < p43.length; au++) {
    p43[au].display();
  }
  for (var av = 0; av < p44.length; av++) {
    p44[av].display();
  }
  for (var aw = 0; aw < p45.length; aw++) {
    p45[aw].display();
  }

  fill("silver");
  for (var ax = 0; ax < p46.length; ax++) {
    p46[ax].display();
  }
  for (var ay = 0; ay < p47.length; ay++) {
    p47[ay].display();
  }
  for (var ba = 0; ba < p48.length; ba++) {
    p48[ba].display();
  }
  for (var az = 0; az < p49.length; az++) {
    p49[az].display();
  }
  for (var aj= 0; aj<p50.length; aj++) {
    p50[aj].display();
  }


}