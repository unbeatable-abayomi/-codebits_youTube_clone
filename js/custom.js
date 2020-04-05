


// $(".hambuger").click(function (){
//    $("#side_hand_bar_mobile").hide("slow")
// })

const hambuger = document.querySelector(".hambuger");
const webView = document.querySelector(".right-hand-bar");
const mobileView = document.querySelector("#side_hand_bar_mobile");
console.log(webView)
console.log(mobileView)

// hambuger.addEventListener("click", ()=>{
//    let toggle = true;

//  if(mobileView.style.display = 'none'){
//    mobileView.style.display = 'block';
//    webView.style.display = 'none';
//    toggle = false;
//  }else if (mobileView.style.display = 'block'){
//    mobileView.style.display = 'none';
//     webView.style.display = 'block';
//     toggle = true;
//  }

// })

$('#webView').hide();
$('.hambuger').on('click',
  function() {
    $('#side_hand_bar_mobile, .right-hand-bar').toggle(200);
  }
);

// $(".hambuger").click(function (){
//    $(".right-hand-bar").hide.
   
   
//    ("#side_hand_bar_mobile");
// })