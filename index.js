var names= ["susan smith","anna johnson","peter jones","bill anderson"];
var jobs=["web developer","web designer","intern","the boss"];
var images=["https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg","https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg","https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg","https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"];
var texts=["I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry","Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."];

  var num=0;
  $( document ).ready(function() {
   showPerson(num);
});
  $(".next-btn").click(function(){
    num=num+1;
    if(num<names.length){
    showPerson(num);}
    else{num=0;
    showPerson(num);}
  });
  $(".prev-btn").click(function(){
    num=num-1;
    if(num<0){
      num=names.length-1;
      showPerson(num);
    }
    else{
    showPerson(num);}

  });
  function showPerson(person){
  $("#author").text(names[person]);
  $("#job").text(jobs[person]);
  $("#info").text(texts[person]);
  $("#person-img").attr("src",images[person]);}

$(".random-btn").click(function(){
  num=Math.floor(Math.random()*names.length);
  showPerson(num);
})
