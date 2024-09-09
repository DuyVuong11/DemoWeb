$(document).ready(function() {
    $(".tab-content").hide();
    $("#home").show();

    $(".nav-link").click(function(event) {
        event.preventDefault();
        $(".navcon > li").removeClass("active");
        $(this).parent().addClass("active");
        $(".tab-content").hide();

        let target = $(this).data("target");
        $("#" + target).show();
    });

    $(".dropcon a").click(function(event) {
        event.preventDefault();
        $(".sub-tab-content").hide();

        let subTarget = $(this).data("target");
        $(".tab-content").hide(); 
        $("#khoa-luyen").show();
        $("#" + subTarget).show();
    });

    $("#submit-test").click(function() {
        let totalQuestions = 23;
        let answeredQuestions = $("input[type='radio']:checked").length;

        if(answeredQuestions < totalQuestions) {
            let confirma = confirm("You have not answered all questions. Are you sure to submit?");
            if (!confirma) {
                return;
            }
        }

        let score=0;

        if ($("input[name='q1']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q2']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q3']:checked").val() === "C") {
            score++;
        }
        if ($("input[name='q4']:checked").val() === "D") {
            score++;
        }
        if ($("input[name='q5']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q6']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q7']:checked").val() === "C") {
            score++;
        }
        if ($("input[name='q8']:checked").val() === "D") {
            score++;
        }
        if ($("input[name='q9']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q10']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q11']:checked").val() === "C") {
            score++;
        }
        if ($("input[name='q12']:checked").val() === "D") {
            score++;
        }
        if ($("input[name='q13']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q14']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q15']:checked").val() === "C") {
            score++;
        }
        if ($("input[name='q16']:checked").val() === "D") {
            score++;
        }
        if ($("input[name='q17']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q18']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q19']:checked").val() === "C") {
            score++;
        }
        if ($("input[name='q20']:checked").val() === "D") {
            score++;
        }
        if ($("input[name='q21']:checked").val() === "B") {
            score++;
        }
        if ($("input[name='q22']:checked").val() === "A") {
            score++;
        }
        if ($("input[name='q23']:checked").val() === "C") {
            score++;
        }

        $("#score").text("Your scored "+ score + " out of " + totalQuestions);
        $("#result").show();
    });
});

window.onload = function(){
    var imgFeature = document.querySelector('.img-feature'); 
    var listImg=document.querySelectorAll('.list-image img');
    var preBut = document.querySelector('.prev');
    var nextBut = document.querySelector('.next');
    var currentIndex =0 ;
    function updateImageByIndex(index){
        document.querySelectorAll('.list-image div').forEach(item=>{
            item.classList.remove('active1');
        })

        currentIndex = index; 
        imgFeature.src=listImg[index].getAttribute('src');
        listImg[index].parentElement.classList.add('active1');
    }
    
    listImg.forEach((imgElement,index)=>{
        imgElement.addEventListener('click',e=>{
            updateImageByIndex(index);
        })
    })

    preBut.addEventListener('click',e=>{
        if(currentIndex == 0){
            currentIndex = listImg.length-1;
        }else {
            currentIndex--;
        }

        updateImageByIndex(currentIndex);
    })

    nextBut.addEventListener('click',e=>{
        if(currentIndex== listImg.length-1){
            currentIndex = 0; 
        }else {
            currentIndex++; 
        }

        updateImageByIndex(currentIndex);
    })
}

window.onload = function() {
    const slideWrapper = document.querySelector('.slide-wrapper');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function changeSlide() {
        const slideWidth = slides[0].offsetWidth; 
        currentIndex++;

        if (currentIndex == slides.length) {
            currentIndex = 0;  //quay lai tu dau
        }

        slideWrapper.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    // duyet anh moi 7s
    setInterval(changeSlide, 7000);
}
     
    
    


    
 



