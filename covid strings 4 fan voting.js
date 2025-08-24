<doctype.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third found
heading8=fourth found
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second  round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings4 fan voting.js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,initial scale 1>
<title covid strings4 fan voting</title>
<style>
vote button
margin: 5px;
padding:10px;
background-color:4caf50
color:white;
border:none;
cursor:pointer;
vote button.hover
background color 45a049
</style>
</head>
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string  limit=16
amount of rounds=math.log(entry limit) /math.log(2) 
for (i=amount_ of_ rounds;-i>0;i- -)
s=round+(amount_ of_ rounds;i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,i-1)+ matches’;
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class=vote button  on click “vote” (‘string 1’) <string pair button>
<button class=vote button on click “vote” (‘string 2’) <string pair button>
<button class=vote button  on click “vote” (‘string 3’) <string pair button>
<button class=vote button on click “vote” (‘string 4’) <string pair button>
<button class=vote button  on click “vote” (‘string 5’) <string pair button>
<button class=vote button  on click “vote” (‘string 6’) <string pair button>
<button class=vote button  on click “vote” (‘string 7’) <string pair button>
<button class=vote button on click “vote” (‘string 8’) <string pair button>
<button class=vote button on click “vote” (‘string 9’) <string pair button>
<button class=vote button  on click “vote” (‘string 10’) <string pair button>
<button class=vote button  on click "vote” (‘string 11’) <string pair button>
<button class=vote button on click “vote” (‘string 12’) <string pair button>
<button class=vote button on click “vote” (‘string 13’) <string pair button>
<button class=vote button on click “vote” (‘string 14’) <string pair button>
<button class=vote button on click “vote” (‘string 15’) <string pair button>
<button class=vote button on click “vote” (‘string 16’) <string pair button>
<header.html>
first round
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round} <h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded ,()
let current round=1
total rounds= 5
round container=document.Get Element By Id(‘Round-Container’)
nextroundbutton=document.Get Element By Id(‘Next-Round’)
window open 
window vote function(index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup”
concatenated strings 
matchup1=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup2=string 5 vs string 12
<button id vote string 5 “vote for string 5”  </button>
<button id vote string 12 “vote for string 12”  </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup3=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup4= string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup5=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup6=string 6 vs string 11
<button id vote string 6 “vote for string 6”  </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup7=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup8=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
<div class=“matchup”
non-concatenated strings
matchup1=string 4 vs string 13
<button id vote string 4 “vote for string 4”</button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup2=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup3=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup4=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup5=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup6=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup7=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup8=string 6 vs string 11
<button id vote string 6 “vote for string 6”  </button>
<Button Id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
<h2 id =”result”></h2>
<header.html>
result
the end result of voting on a particular pair of strings
<script src=”vote.js”>
<script>
<body>
<html>
vote js file notes:
votes={
‘string 1
‘string 2’
vote (string)
if (votes.hasownproperty(character))
votes [character]++
display results
else:
console.error(‘invalid string’)
displayresults
result element=document get element by id (‘result’)
result element inner html
<header.html>
non-concatenated string variables 
non-concatenated strings in covid strings
non-concatenated strings list=[1:phrase “arcturus variant is part of a long arc in covid history” , 2:phrase “it may be negative or positive”, 3:phrase “there may be some new thing next”, 4:math problem “if 5 people Used Zoom For A Discussion on covid and the amount to download the service is $ 79 how much would it cost to download the feature for everyone?”, 5:math problem “if one of the people ended up getting covid and the guidelines for canceling the conference are if 3 people get infected can the conference continue as planned?”, 6:math problem “if a sudden outbreak caused 3 more people to get infected along with the one already infected can the conference proceed?”, 7:math problem “if a vaccine came and the guidelines  were changed to say that a conference can happen if 70 percent of the people are vaccinated could it happen if only 40 percent of people are vaccinated?”, 8:math problem  “if a guest speaker were to appear at this conference if they were vaccinated can it still happen?”, 9:math problem “if vaccine requirements were to drop and guidelines were to include a 5 day self isolation period for anyone testing positive can it still happen?”, 10:math problem  “if a poll found that 87 percent of people oppose this conference given the disorganized nature how many dont?”, 11:phrase “this includes inequities existing from year one to today”, 12:phrase “another part of this long arc includes inequities in healthcare”, 13:phrase “perhaps it may be stronger antibodies” , 14:phrase “even if its not the case there will be stronger antibodies”, 15: phrase “hey they can serve as an umbrella against future variants”, 16:sentence “the idea of a covid conference being canceled due to covid is ironic”]
non-concatenated string1=phrase“arcturus variant is part of a long arc in covid history”
non-concatenated string2=phrase “it may be negative or positive”,
non-concatenated string3=phrase “there may be some new thing next”
non-concatenated string4=math problem “if 5 people used zoom for a discussion on covid and the amount to download the service is $ 79 how much would it cost to download the feature for everyone?”
non-concatenated string5=math problem “if one of the people ended up getting covid and the guidelines for canceling the conference are if 3 people get infected can the conference continue as planned?
non-concatenated string6=math problem “if a sudden outbreak caused 3 more people to get infected along with the one already infected, can the conference proceed?”
non-concatenated string7=math problem “if a vaccine came and the guidelines were changed to say that a conference can happen if 70 percent of the people are vaccinated could it happen if only 40 percent of people are vaccinated?”
non-concatenated string8=math problem “if a guest speaker were to appear at this conference if they were vaccinated can it still happen?”
non-concatenated string9=math problem “if vaccine requirements were to drop and guidelines were to include a 5 day self isolation period for anyone testing positive can it still happen?”
non-concatenated string10=math problem “if a poll found that 87 percent of people oppose this conference given the disorganized nature how many dont?”
non-concatenated string11=phrase “this includes inequities existing from year one to today”
non-concatenated string12=phrase “another part of this long arc includes inequities in healthcare”,
non-concatenated string13=phrase“perhaps it may be stronger antibodies” 
non-concatenated string14=phrase “even if its not the case there will be stronger antibodies”,
non-concatenated string15=phrase “hey they can serve as an umbrella against future variants”,
non-concatenated string16=sentence “the idea of a covid conference being canceled due to covid is ironic”  
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings4fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
string 3 [votes ‘string 3 ‘]}votes</p>
string 4 [votes ‘string 4 ‘]}votes</p>
string 5[votes ‘string 5 ‘]}votes</p>
string 6[votes ‘string 6 ‘]}votes</p>
string 7 [votes ‘string 7 ‘]}votes</p>
string 8[votes ‘string 8 ‘]}votes</p>
string 9 [votes ‘string 9 ‘]}votes</p>
string 10 [votes ‘string 10 ‘]}votes</p>
string 11[votes ‘string 11 ‘]}votes</p>
string 12 [votes ‘string 12 ‘]}votes</p>
string 13 [votes ‘string 13 ‘]}votes</p>
string 14 [votes ‘string 14 ‘]}votes</p>
string 15 [votes ‘string 15 ‘]}votes</p>
string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings= sorted strings.slice(0,num to 8)
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
<header.html>
concatenated string variables
concatenated strings in covid strings
concatenated string list=[1:phrase “5th”+”harmonys”+”work”+”is”+”not”+”the”+”only”+”work”+”from”+”home”+”song”, 2:phrase ”i”+”hear”+”there”+”are”+”some”+”more”,3:phrase “one”+”of”+”them”+”deals”+”with”+”not”+”giving”+”up”, 4:phrase “there”+”was”+”after”+”all”+”a”+”lot”+”of”+”madness”+”over”+”the”+”last”+”two”+”years”, 5:phrase ”this”+”included”+”but”+”was”+”not”+”limited”+”to”+”the”+”2020”+”ncaa”+”basketball”+”tournament”, 6:phrase ”there”+”was”+”better”+”news”+”at”+”the”+”professional”+”level”, 7:math problem “if”+”a”+”draft”+”of”+”cdc”+”guidelines”+”suggests”+”that”+”social”+”distancing”+”can”+”be”+”reduced”+”to”+”3ft”+”of”+”distancing”+”be”+”implemented”+”if”+”school”+”starts”+”in”+”september?”, 8:math problem ”if”+”the”+”cdc”+”clarified”+”these”+”guidelines”+”to”+”say”+”that”+”everyone”+”means”+”70”+”percent”+"of”+”k-12”+”kids”+”nationwide”+”and”+”the”+”vaccination”+”rate”+”is”+”40%”+”should”+”schools”+”allow”+”for”+”3”+”feet”+”of”+”distancing?”, 9:math problem “if”+”a”+”poll”+”taken”+”on”+”july”+”28th”+”showed”+”that”+”25%”+”of”+”respondents”+”said”+”they”+”were”+”open”+”to”+”getting”+”vaccinated”+”can”+”3ft”+”of”+”distancing”+”be”+”implemented”+”if”+”school”+”starts”+”in”+”september”?, 10:math problem “if”+”the”+”margin”+”of”+”error”+”is”+”7.25”+”percent”+”what”+”is”+”the”+”range?”, 11:math problem ”if”+”that”+”same”+”poll”+”found”+”that”+”35”+”percent”+”of”+”kids”+”are”+”skeptical”+”of”+”being”+”vaccinated”+”what”+”are”+”the”+”chances”+”of”+”getting”+”to”+”herd”+”immunity?” 12: math problem “if”+”the”+”heritage”+”foundation”+”decided”+”to”+”challenge”+”the”+”cdcs”+”guidelines”+”on”+”the”+”idea”+”that”+”education”+”is”+”not”+”federal”+"and”+”the”+”70”+”percent”+”rule”+”is”+”unconstituional”+”would”+”it”+”hold”+”water?” 13:phrase “one”+”of”+”the”+”positive”+”stories”+”can”+”be”+”found”+”in”+”the”+”one”+”four”+"four”, 14:phrase “the”+”basic”+”lesson”+”from”+”the”+”bubble”+”is”+”that”+”there”+”is”+”a”+”way”+”to”+”safely”+”carry”+”out”+”high”+”contact”+”activites” 15:sentence “herd”+”immunity”+”will”+”keep”+”kids”+”safe”+”from”+”covid”+”weather”, 16:sentence “the”+”debate”+”between”+”3ft”+”and”+”6ft”+”is”+”a”+”sideshow”
concatenated string1=phrase “5th”+”harmonys”+”work”+”is”+”not”+”the”+”only”+”work”+”from”+”home”+”song”
concatenated string2=phrase”i”+”hear”+”there”+”are”+”some”+”more”
concatenated string3=phrase “one”+”of”+”them”+”deals”+”with”+”not”+”giving”+”up”
concatenated string4=phrase “there”+”was”+”after”+”all”+”a”+”lot”+”of”+”madness”+”over”+”the”+”last”+”two”+”years”
concatenated string5=phrase ”this”+”included”+”but”+”was”+”not”+”limited”+”to”+”the”+”2020”+”ncaa”+”basketball”+”tournament”
concatenated string6=phrase ”there”+”was”+”better”+”news”+”at”+”the”+”professional”+”level”
concatenated string7=math problem “if”+”a”+”draft”+”of”+”cdc”+”guidelines”+”suggests”+”that”+”social”+”distancing”+”can”+”be”+”reduced”+”to”+”3ft”+”of”+”distancing”+”be”+”implemented”+”if”+”school”+”starts”+”in”+”september?”
concatenated string8=math problem ”if”+”the”+”cdc”+”clarified”+”these”+”guidelines”+”to”+”say”+”that”+”everyone”+”means”+”70”+”percent”+"of”+”k-12”+”kids”+”nationwide”+”and”+”the”+”vaccination”+”rate”+”is”+”40%”+”should”+”schools”+”allow”+”for”+”3”+”feet”+”of”+”distancing?”
concatenated string9=math problem “if”+”a”+”poll”+”taken”+”on”+”july”+”28th”+”showed”+”that”+”25%”+”of”+”respondents”+”said”+”they”+”were”+”open”+”to”+”getting”+”vaccinated”+”can”+”3ft”+”of”+”distancing”+”be”+”implemented”+”if”+”school”+”starts”+”in”+”september”?
concatenated string10=math problem “if”+”the”+”margin”+”of”+”error”+”is”+”7.25”+”percent”+"what”+”is”+”the”+”range?"
concatenated string11=math problem ”if”+”that”+”same”+”poll”+”found”+”that”+”35”+”percent”+”of”+”kids”+”are”+”skeptical”+”of”+”being”+”vaccinated”+”what”+”are”+”the”+”chances”+”of”+”getting”+”to”+”herd”+”immunity?”
concatenated string12=math problem “if”+”the”+”heritage”+”foundation”+”decided”+”to”+”challenge”+”the”+”cdcs”+”guidelines”+”on”+”the”+”idea”+”that”+”education”+”is”+”not”+”federal”+”and”+”the”+”70”+”percent”+”rule”+”is”+”unconstituional”+”would”+”it”+”hold”+”water?”
concatenated string13=phrase “one”+”of”+”the”+”positive”+”stories”+”can”+”be”+”found”+”in”+”the”+”one”+”four”+”four”
concatenated string14=phrase “the”+”basic”+”lesson”+”from”+”the”+”bubble”+”is”+”that”+”there”+”is”+”a”+”way”+”to”+”safely”+”carry”+”out”+”high”+”contact”+”activites”
concatenated string15=sentence “herd”+”immunity”+”will”+”keep”+”kids”+”safe”+”from”+”covid”+”weather”
concatenated string16=sentence “the”+”debate”+”between”+”3ft”+”and”+”6ft”+”is”+”a”+”sideshow”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings4fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
<p>string 3 [votes ‘string 3 ‘]}votes</p>
<p>string 4 [votes ‘string 4 ‘]}votes</p>
<p>string 5[votes ‘string 5 ‘]}votes</p>
<p>string 6[votes ‘string 6 ‘]}votes</p>
<p>string 7 [votes ‘string 7 ‘]}votes</p>
<p>string 8[votes ‘string 8 ‘]}votes</p>
<p>string 9 [votes ‘string 9 ‘]}votes</p>
<p>string 10 [votes ‘string 10 ‘]}votes</p>
<p>string 11[votes ‘string 11 ‘]}votes</p>
<p>string 12 [votes ‘string 12 ‘]}votes</p>
<p>string 13 [votes ‘string 13 ‘]}votes</p>
<p>string 14 [votes ‘string 14 ‘]}votes</p>
<p>string 15 [votes ‘string 15 ‘]}votes</p>
<p>string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
newwindow=window.open(current round)
currentround=first round
window.close(current round)
window.vote =function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for first round
<header.html>
second round
the second round of fan voting
render round
roundcontainer.innerhtml=<h2 round {second round} <h2>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round2
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round .addeventlistener(click)
if current round==round 2:
commence round 2
else:
remain 
string numbers[non-concatenated strings:name ‘string pair1’ votes 
name: ‘string pair2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
string numbers[concatenated strings:name ‘string pair1’ votes 
name: ‘string pair 2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
<subheading.html>
second round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 4)
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
concatenated strings 
name string1 votes
name string2 votes
name string3 votes
name string4 votes
name string5 votes
name string6 votes
name string7 votes
name string8 votes
<subheading.html>
second round concatenated string advancing 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 4)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
new window=window.open(current round)
currentround=first round
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for second round
<header.html>
third round
the third round of fan voting
render round
roundcontainer.innerhtml=<h3 round {third round} <h3>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round3
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round .addeventlistener(click)
if current round ==round 3:
commence round 3
else:
remain 
string numbers[non-concatenated strings:name ‘string pair1’ votes 
name: ‘string pair2’ votes
string numbers[concatenated strings:name  ‘string pair1’ votes 
Name: ‘string pair2’ votes
<subheading.html>
third round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
name string1 votes
name string2 votes
name string3 votes
name string4 votes
<subheading.html>
third round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
if result matchup2>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for third round 
<header.html>
fourth round
the fourth round of fan voting
render round
roundcontainer.innerhtml=<h4 round {fourth round} <h4>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name}</button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round4
total rounds=5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
string numbers[non-concatenated strings :name ‘string pair1’ votes 
string numbers[concatenated strings :name ‘string pair1’ votes
name string1 votes
name string2 votes 
<subheading.html>
fourth round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2)strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(last concatenated string last non-concatenated string )
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
name string1 votes
name string2 votes
<subheading.html>
fourth round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(last concatenated string last non-concatenated string)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates[index] votes++;
next round button.addeventlistener(‘Click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for fourth round 
<header.html>
fifth round
the fifth round of fan voting
render round
roundcontainer.innerhtml=<h5 round {fifth round} <h5>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes</p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round5
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
string numbers[name ‘string pair votes‘]
last remaining non-concatenated string 
last remaining non-concatenated string 
<subheading.html>
covid strings fan voting victory
the end result of fan voting 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(winner string)
return winner
last remaining non-concatenated string=last non-concatenated string variable left in fan voting
last remaining concatenated string=last concatenated string variable left in fan voting
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if last remaining non-concatenated string>=.5
if last remaining concatenated string>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for fifth round 
return filename
