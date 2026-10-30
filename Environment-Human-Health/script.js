'use strict';
// constants to get the HTML elements on the page
const H_TITLE = document.getElementById('h-title');
const IMG_SECTION = document.getElementById(`img-section`);
const H_SUB1 = document.getElementById('h-sub1');
const P_TEXT1 = document.getElementById('p-text1');
const H_SUB2 = document.getElementById('h-sub2')
const P_TEXT2 = document.getElementById('p-text2')
const P_PROGRESS = document.getElementById('p-progress')
const P_QUESTION = document.getElementById('p-question')
const BTN_A = document.getElementById('btn-a')
const BTN_B = document.getElementById('btn-b')
const BTN_C = document.getElementById('btn-c')
const BTN_D = document.getElementById('btn-d')



// keeps track of which quiz question the user is on
let questionCounter = 0;

// counts how many questions the user got right
let score = 0;


/** Shows the negative impacts of computer technology on the environment. */
function showNegativeEnvironment(){
    hideQuiz();

    IMG_SECTION.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQle9g91KSHDGH-caTjWDQfqzJ1HALlplUFGDljmv5o2EpIiuvMd6a4bk&s=10`;
    IMG_SECTION.height = 250;
    IMG_SECTION.style.visibility = `visible`;
    H_TITLE.textContent = `Negative Impacts on the Environment`;
    H_SUB1.textContent =  `1. High Electricity Use of AI and Data Centres`;
    P_TEXT1.textContent =  `AI and the internet run in big buildings called data centres and they use a lot of electricity. in 2024 data centres used about 1.5% of all the electricity in the world, which is around 415 TWh. Their electricity use has been growing about 12% every year since 2017 which is more than 4 times faster than total electricity use. One big AI data centre uses as much power as 100,000 homes and the biggest ones being built will use about 20 times more than that. by 2030 it could be about 945 TWh, which is a bit more than all of Japan uses today. The pollution from this electricity could go from about 180 million tonnes to 300 million tonnes by 2035. Power grids are also getting stressed and about 20% of planned data centres might get delayed because of it.`;
    H_SUB2.textContent =`2. E-waste`;
    P_TEXT2.textContent =`E-waste is old electronics like phones and computers that people throw out. In 2022 the world made a record 62 billion kg of e-waste, which is about 7.8 kg per person. Only 22.3% of it was collected and recycled the right way. E-waste has been growing almost 5 times faster than recycling since 2010. By 2030 there could be 82 billion kg of it and the recycling rate might drop to about 20%. If dangerous stuff like lead and mercury isnt handled properly,it can hurt people and the environment. It also depends on where you live. Europe recycled about 42.8% of its e-waste, but African countries recycled less than 1%.`;


}



/** Hides the quiz question, the quiz buttons and the picture. */
function hideQuiz(){
    P_PROGRESS.textContent = ``;
    P_QUESTION.textContent = ``;
    IMG_SECTION.style.visibility = `hidden`;
    BTN_A.style.visibility = `hidden`;
    BTN_B.style.visibility = `hidden`;
    BTN_C.style.visibility = `hidden`;
    BTN_D.style.visibility = `hidden`;
}

/** Shows the positive impacts of computer technology on the environment. */


function showPositiveEnvironment(){
    hideQuiz();
    IMG_SECTION.src = `https://phoeocgixntlqiooqqmj.supabase.co/storage/v1/object/public/blog-images/smart-thermostats-hero.jpg`;
    IMG_SECTION.height = 250;
    IMG_SECTION.style.visibility = `visible`;
    H_TITLE.textContent = `Positive Impacts on the Environment`;
    H_SUB1.textContent = `1. Smart Thermostats`;
    P_TEXT1.textContent = `a smart thermostat,like an Ecobee or a Nest,connects to Wi-Fi and you control it with an app on your phone. you can set a schedule so the heat or air conditioning turns down when nobody is home or when everyone is sleeping,So less energy gets wasted. Some of them learn what you like, and a lot of them show reports on how much energy you used. Heating and cooling use a big part of a home's energy, so small changes add up over time. How much you save depends on your house and how you use it. Some power companies, like Hydro Ottawa with their Peak Perks program, also let people join a program where the thermostat gets adjusted a little during busy times. This helps the electricity grid not get overloaded.`;
    H_SUB2.textContent = `2. GPS and Map Programs`;
    P_TEXT2.textContent = `GPS and map programs help cut down pollution from driving. Map programs like Google Maps do this for   regular drivers by picking a good route and helping people avoid traffic.Less time driving and less idling means less fuel burned and fewer greenhouse gases. For delivery trucks, GPS tracking can show when drivers speed, brake too hard or leave the engine running too long, so the company can train them to drive better. It can also remind them to do maintenance like oil changes, which keeps the engine running well. Planning loads and routes better means fewer trips and fewer kilometres driven. All these small savings add up to a smaller carbon footprint.`;
    
}

/** Shows the negative impacts of computer technology on human health */
function showNegativeHealth(){
 hideQuiz();

    IMG_SECTION.src = `https://www.eizoglobal.com/library/basics/10_ways_to_address_eye_fatigue/tm_1402_vdt_a.gif`;
    IMG_SECTION.height = 250;
    IMG_SECTION.style.visibility = `visible`;
    H_TITLE.textContent = `Negative Impacts on Human Health`;
    H_SUB1.textContent = `1. Eye Strain From Screens`;
    P_TEXT1.textContent = `Digital eye strain is what happens when you look at screens for too long. the symptoms are dry, itchy or watery eyes, blurry vision and headaches and some people get a sore neck or back too. when we use screens we only blink about 4 to 6 times a minute instead of the normal 14 to 16, so our eyes get dry. Before COVID-19 studies said 5% to 65% of people had it, and during the lockdowns it went up to about 80% to 94%. For kids it went up to about 50% to 60%, and a lot of them also got nearsighted (myopia) or got worse. using screens more than 4 hours a day is one of the biggest risk factors. it makes it hard to concentrate, and since so many students and workers use screens all day, it affects a lot of society.`;
    H_SUB2.textContent = `2. Reduced Physical Activity`;
    P_TEXT2.textContent = `Using computers and phones usually means sitting for a really long time, and too much sitting is bad for you. Research connects it to a higher risk of type 2 diabetes, heart disease and dying earlier, even for people who do exercise sometimes. The World Health Organization says 27.5% of adults and 81% of teenagers don't get enough physical activity. For kids, lots of recreational screen time is linked to worse fitness, more body fat and less sleep. In the short term people feel stiff and tired. In the long term it can lead to serious diseases, which also costs the health care system a lot of money.`;
}

/** Shows policies that reduce the impacts of computer technology. */
function showPolicies(){
hideQuiz();

    IMG_SECTION.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMJHynVcBjsxa1kVqzKQsphakYVWY4fO5CkkU4UtcpmKzeUylsi-WYOdP&s=10`;    
    IMG_SECTION.height = 250;
    IMG_SECTION.style.visibility = `visible`;
    H_TITLE.textContent = `Policies That Reduce the Impacts`;
    H_SUB1.textContent = `1. Environment: Ontario's E-waste Regulation (O. Reg. 522/20)`;
    P_TEXT1.textContent = `Ontario has a rule called Regulation 522/20. it says the companies that sell electronics like computers, phones, printers and game devices are responsible for them after people are done using them. This is called producer responsibility. The companies have to set up collection sites, like at least one site for every 15,000 people in towns with more than 1,000 people. They also have to manage a certain amount of what they sold, which is 70% by weight for computer equipment from 2025 on. The recyclers have to recover at least 80% of the material they get. This works because the companies have to run the system, so fewer devices end up in the garbage and more materials get reused.`;
    H_SUB2.textContent = `2. Health: WHO Guidelines and Ergonomics Standards`;
    P_TEXT2.textContent = `The WHO 2020 guidelines say that everyone should sit less, and kids should limit recreational screen time. Adults should do 150 to 300 minutes of moderate exercise every week. This works because even replacing sitting time with light activity is good for your health. Ergonomics standards also help protect the eyes and body. You should sit up straight with the screen about 20 inches from your eyes and a bit below eye level, with good lighting and not much glare. There's also the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Keeping screen time to about 4 hours a day or less also helps. These work because they give your eyes and muscles breaks.`;


}


/** Shows organizations that help with the impacts of computer technology. */

function showOrganizations(){
    hideQuiz();

    IMG_SECTION.src = `https://www.bellmedia.ca/lede/wp-content/uploads/2023/03/Copy-of-Oscars-5.png`;
    IMG_SECTION.height = 250;
    IMG_SECTION.style.visibility = `visible`;
    H_TITLE.textContent = `Organizations That Help`;
    H_SUB1.textContent = `1. Elgin Mills Community Environmental Centre (York Region)`;
    P_TEXT1.textContent = `This is a York Region depot where people who live in York Region can drop off electronic waste at no cost, so old devices don't end up in the garbage. Address: 1124 Elgin Mills Road East, Richmond Hill, Ontario. Phone: 1-877-464-9675 (York Region Garbage and Recycling). Hours: Monday 8:30 AM to 3:30 PM, Thursday to Saturday 8:30 AM to 4:30 PM, closed Tuesday, Wednesday, Sunday and holidays (hours can change, so check first). To use it, bring proof that you live in York Region, delete your personal information from your devices, and take off any packaging and batteries. Don't take the electronics apart. The limit is 50 kg of e-waste per household per day. They also take things like scrap metal, tires and shredded paper.`;
    H_SUB2.textContent = `2. Kids Help Phone`;
    P_TEXT2.textContent = `Kids Help Phone is a Canadian service that helps kids, teens and young adults with their mental health, which technology can hurt through things like cyberbullying, FOMO and feeling alone. To use it, you can call 1-800-668-6868 to talk to a professional counsellor, any time, 24 hours a day, 7 days a week, in different languages. You can also text CONNECT to 686868 to talk to a trained volunteer crisis responder, also 24/7, or message them online. Their website, kidshelpphone.ca, also has articles, quizzes and activities about things like stress, school and friends.`;

}

/** Starts the quiz from question 1. */

function showQuiz(){

    questionCounter = 0;
    score = 0;

    H_TITLE.textContent = `Quiz`;
    IMG_SECTION.style.visibility =`hidden`;
    H_SUB1.textContent = ``;
    P_TEXT1.textContent =``;
    H_SUB2.textContent = ``;
    P_TEXT2.textContent = ``;
    BTN_A.style.visibility = `visible`;
    BTN_B.style.visibility =`visible`;
    BTN_C.style.visibility =`visible`;
    BTN_D.style.visibility = `visible`;

    chooseQuestion();
}

/** Figures out which question to show, or shows the results when it's over. */

function chooseQuestion(){

    if (questionCounter == 0){


        showQuestion1();


    }

    else if (questionCounter == 1){


        showQuestion2();

    }


    else if (questionCounter == 2){

        showQuestion3();

    }

    else {
        showResults();


    }
 
    showProgress();
}


/** Tells the user which question they are on, or that the quiz is done. */

function showProgress(){
    if (questionCounter < 3){
        P_PROGRESS.textContent = `Question ${questionCounter + 1} of 3`;
    }
    else {
        P_PROGRESS.textContent = `Quiz done!`;
    }
}
 
/** Shows question 1 (the right answer is B). */


function showQuestion1(){


    P_QUESTION.textContent = `In 2024 about how much of the world's electricity did data centres use?`;
    BTN_A.textContent =`15%`;
    BTN_B.textContent =`1.5%`;
    BTN_C.textContent =`45%`;
    BTN_D.textContent =`0.1%`;
}
 
/** Shows question 2 (the right answer is C). */
function showQuestion2(){

    P_QUESTION.textContent = `In 2022, how much of the world's e-waste was collected and recycled the right way?`;
    BTN_A.textContent = `78%`;
    BTN_B.textContent = `50%`;
    BTN_C.textContent = `22.3%`;
    BTN_D.textContent = `5%`;
}
 
/** Shows question 3 (the right answer is D). */
function showQuestion3(){
    P_QUESTION.textContent = `In the 20-20-20 rule for eye strain, how long is the break?`;
    BTN_A.textContent =`2 seconds`;
    BTN_B.textContent = `2 minutes`;
    BTN_C.textContent =`20 minutes`;
    BTN_D.textContent = `20 seconds`;
}
 
/** Scores the user when they click A (A is never right). */
function checkButtonA(){
    questionCounter = questionCounter + 1;
    chooseQuestion();
}
 
/** Scores the user when they click B (right for question 1). */
function checkButtonB(){
    if (questionCounter == 0){
        score = score + 1;
    }
 
    questionCounter = questionCounter + 1;
    chooseQuestion();
}
 
/** Scores the user when they click C (right for question 2). */
function checkButtonC(){
    if (questionCounter == 1){
        score = score + 1;
    }

 
    questionCounter = questionCounter + 1;
    chooseQuestion();
}
 
/** Scores the user when they click D (right for question 3). */
function checkButtonD(){
    if (questionCounter == 2){
        score = score + 1;
    }
 

    questionCounter = questionCounter + 1;
    chooseQuestion();
}
 
/** Shows how many they got right, the percentage, and a message. */
function showResults(){
    // hide the buttons because the quiz is over
    BTN_A.style.visibility =`hidden`;
    BTN_B.style.visibility =`hidden`;
    BTN_C.style.visibility = `hidden`;
    BTN_D.style.visibility =`hidden`;
 
    // find the percentage and round it to 2 decimal places
    let percent = Math.round(score / 3 * 100 * 10 ** 2) / 10 ** 2;
 
    H_TITLE.textContent = `Quiz Results`;
    P_QUESTION.textContent = `You got ${score} out of 3 correct. Your score is ${percent}%.`;
 
    // pick a message based on the score
    if (score == 3){
        P_TEXT1.textContent = `Nice, you got them all right!`;
    }
    else if (score >= 1 && score <= 2){
        P_TEXT1.textContent = `Not bad Read the info again and try the quiz one more time.`;
    }
    else {
        P_TEXT1.textContent = `Go back and read the info, then try the quiz again.`;
    }

}


/** Shows where all the information came from. */

function showSources(){
    hideQuiz();
    H_TITLE.textContent = `Sources`;
    H_SUB1.textContent = `Environment`;
    P_TEXT1.innerHTML = `IEA, Energy and AI: https://www.iea.org/reports/energy-and-ai/executive-summary <br> ITU, The Global E-waste Monitor 2024: https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx <br> Hydro Ottawa, Smart thermostats explained: https://hydroottawa.com/en/blog/smart-thermostats-explained-features-savings-and-comfort-benefits <br> Smart Fleet, The Environmental Benefits of GPS Tracking: https://smartfleetusa.com/blog/the-environmental-benefits-of-gps-tracking/ <br> Ontario Regulation 522/20: https://www.ontario.ca/laws/regulation/r20522`;
    H_SUB2.textContent = `Health and Organizations`;
    P_TEXT2.innerHTML = `Digital Eye Strain, A Comprehensive Review: https://pmc.ncbi.nlm.nih.gov/articles/PMC9434525/ <br> Too much sitting, a health hazard: https://pubmed.ncbi.nlm.nih.gov/22682948/ <br> WHO 2020 guidelines on physical activity and sedentary behaviour: https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/ <br> York Region, Elgin Mills Community Environmental Centre: https://www.york.ca/environment/garbage-and-recycling/waste-depots/elgin-mills-community-environmental-centre <br> Kids Help Phone: https://kidshelpphone.ca/get-info/kids-help-phones-ultimate-back-school-guide`;
}

 
/** Starts the program by showing a welcome message. */
function start(){

    hideQuiz();

    H_TITLE.textContent = `Welcome!`;

    H_SUB1.textContent = ``;
    P_TEXT1.textContent = `Click the buttons above to learn how computer technology affects the environment and our health, see what policies and organizations help, and then try the quiz at the end .`;
    H_SUB2.textContent = ``;

    P_TEXT2.textContent = ``;
}
