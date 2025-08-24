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
non-concatenated strings list=[1:phrase “arcturus variant is part of a long arc in covid history” , 2:phrase “it may be negative or positive”, 3:phrase “there may be some new thing next”, 4:math problem “if 5 people Used Zoom For A Discussion On Covid And The Amount To Download The Service Is $ 79 How Much Would It Cost To Download The Feature For Everyone?”, Math Problem “If One Of The People Ended Up Getting Covid And The Guidelines For Canceling The Conference Are If 3 People Get Infected Can The Conference Continue As Planned?”, Math Problem “If A Sudden Outbreak Caused 3 More People To Get Infected Along With The One Already Infected Can The Conference Proceed?”, Math Problem “If A Vaccine Came And The Guidelines  Were Changed To Say That A Conference Can Happen If 70 Percent Of The People Are Vaccinated Could It Happen If Only 40 Percent Of People Are Vaccinated?”, Math Problem  “If A Guest Speaker Were To Appear At This Conference If They Were Vaccinated Can It Still Happen?”, 9:math problem “if vaccine requirements were to drop and guidelines were to include a 5 day self isolation period for anyone testing positive can it still happen?”, 10:math problem  “if a poll found that 87 percent of people oppose this conference given the disorganized nature how many dont?”, 11:phrase “this includes inequities existing from year one to today”, 12:phrase “another part of this long arc includes inequities in healthcare”, 13:phrase “perhaps it may be stronger antibodies” , 14:phrase “even if its not the case there will be stronger antibodies”, 15: phrase “hey they can serve as an umbrella against future variants”, 16:sentence “the idea of a covid conference being canceled due to covid is ironic”  ]
non-concatenated string1=phrase“arcturus variant is part of a long arc in covid history”
non-concatenated string2=phrase “it may be negative or positive”,
non-concatenated string3=phrase “there may be some new thing next”
non-concatenated string4=math problem “If 5 People Used Zoom For A Discussion On Covid And The Amount To Download The Service Is $ 79 How Much Would It Cost To Download The Feature For Everyone?”
non-concatenated string5=math problem “If One Of The People Ended Up Getting Covid And The Guidelines For Canceling The Conference Are If 3 People Get Infected Can The Conference Continue As Planned?
non-concatenated string6=math problem “If A Sudden Outbreak Caused 3 More People To Get Infected Along With The One Already Infected, Can The Conference Proceed?”
non-concatenated string7=math problem “If A Vaccine Came And The Guidelines  Were Changed To Say That A Conference Can Happen If 70 Percent Of The People Are Vaccinated Could It Happen If Only 40 Percent Of People Are Vaccinated?”
non-concatenated string8=math problem “If A Guest Speaker Were To Appear At This Conference If They Were Vaccinated Can It Still Happen?”
non-concatenated string9=math problem “If Vaccine Requirements Were To Drop And Guidelines Were To Include A 5 Day Self Isolation Period For Anyone Testing Positive Can It Still Happen?”
non-concatenated string10=math problem “If A Poll Found That 87 Percent Of People Oppose This Conference Given The Disorganized Nature How Many Dont?”
non-concatenated string11=phrase “This Includes Inequities Existing From Year One To Today”
non-concatenated string12=phrase “Another Part Of This Long Arc Includes Inequities In Healthcare”,
non-concatenated string13=phrase“Perhaps It May Be Stronger Antibodies” 
non-concatenated string14=phrase “Even If Its Not The Case There Will Be Stronger Antibodies”,
non-concatenated string15=phrase “Hey They Can Serve As An Umbrella Against Future Variants”,
non-concatenated string16=sentence “The Idea Of A Covid Conference Being Canceled Due To Covid Is Ironic”  
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings4fan voting
select characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
String 3 [Votes ‘String 3 ‘]}Votes</P>
String 4 [Votes ‘String 4 ‘]}Votes</P>
String 5[Votes ‘String 5 ‘]}Votes</P>
String 6[Votes ‘String 6 ‘]}Votes</P>
String 7 [Votes ‘String 7 ‘]}Votes</P>
String 8[Votes ‘String 8 ‘]}Votes</P>
String 9 [Votes ‘String 9 ‘]}Votes</P>
String 10 [Votes ‘String 10 ‘]}Votes</P>
String 11[Votes ‘String 11 ‘]}Votes</P>
String 12 [Votes ‘String 12 ‘]}Votes</P>
String 13 [Votes ‘String 13 ‘]}Votes</P>
String 14 [Votes ‘String 14 ‘]}Votes</P>
String 15 [Votes ‘String 15 ‘]}Votes</P>
String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings= Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
<Header.Html>
Concatenated String Variables
Concatenated Strings In Covid Strings
Concatenated String List=[Phrase “5Th”+”Harmonys”+”Work”+”Is”+”Not”+”The”+”Only”+”Work”+”From”+”Home”+”Song”, Phrase ”I”+”Hear”+”There”+”Are”+”Some”+”More”,Phrase “One”+”Of”+”Them”+”Deals”+”With”+”Not”+”Giving”+”Up”, Phrase “There”+”Was”+”After”+”All”+”A”+”Lot”+”Of”+”Madness”+”Over”+”The”+”Last”+”Two”+”Years”, Phrase ”This”+”Included”+”But”+”Was”+”Not”+”Limited”+”To”+”The”+”2020”+”NCAA”+”Basketball”+”Tournament”, Phrase ”There”+”Was”+”Better”+”News”+”At”+”The”+”Professional”+”Level”, Math Problem “If”+”A”+”Draft”+”Of”+”CDC”+”Guidelines”+”Suggests”+”That”+”Social”+”Distancing”+”Can”+”Be”+”Reduced”+”To”+”3Ft”+”Of”+”Distancing”+”Be”+”Implemented”+”If”+”School”+”Starts”+”In”+”September?”, Math Problem ”If”+”The”+”Cdc”+”Clarified”+”These”+”Guidelines”+”To”+”Say”+”That”+”Everyone”+”Means”+”70”+”Percent”+’Of”+”K-12”+”Kids”+”Nationwide”+”And”+”The”+”Vaccination”+”Rate”+”Is”+”40%”+”Should”+”Schools”+”Allow”+”For”+”3”+”Feet”+”Of”+”Distancing?”, Math Problem “If”+”A”+”Poll”+”Taken”+”On”+”July”+”28Th”+”Showed”+”That”+”25%”+”Of”+”Respondents”+”Said”+”They”+”Were”+”Open”+”To”+”Getting”+”Vaccinated”+”Can”+”3Ft”+”Of”+”Distancing”+”Be”+”Implemented”+”If”+”School”+”Starts”+”In”+”September”?, Math Problem “If”+”The”+”Margin”+”Of”+”Error”+”Is”+”7.25”+”Percent”+”What”+”Is”+”The”+”Range?”, Math Problem ”If”+”That”+”Same”+”Poll”+”Found”+”That”+”35”+”Percent”+”Of”+”Kids”+”Are”+”Skeptical”+”Of”+”Being”+”Vaccinated”+”What”+”Are”+”The”+”Chances”+”Of”+”Getting”+”To”+”Herd”+”Immunity?” Math Problem “If”+”The”+”Heritage”+”Foundation”+”Decided”+”To”+”Challenge”+”The”+”Cdcs”+”Guidelines”+”On”+”The”+”Idea”+”That”+”Education”+”Is”+”Not”+”Federal”+”And”+”The”+”70”+”Percent”+”Rule”+”Is”+”Unconstituional”+”Would”+”It”+”Hold”+”Water?” Phrase “One”+”Of”+”The”+”Positive”+”Stories”+”Can”+”Be”+”Found”+”In”+”The”+”One”+”Four”+”Four”, Phrase “The”+”Basic”+”Lesson”+”From”+”The”+”Bubble”+”Is”+”That”+”There”+”Is”+”A”+”Way”+”To”+”Safely”+”Carry”+”Out”+”High”+”Contact”+”Activites” Sentence “Herd”+”Immunity”+”Will”+”Keep”+”Kids”+”Safe”+”From”+”Covid”+”Weather”, Sentence “The”+”Debate”+”Between”+”3Ft”+”And”+”6Ft”+”Is”+”A”+”Sideshow”
Concatenated String1=Phrase “5Th”+”Harmonys”+”Work”+”Is”+”Not”+”The”+”Only”+”Work”+”From”+”Home”+”Song”
Concatenated String2=Phrase”I”+”Hear”+”There”+”Are”+”Some”+”More”
Concatenated String3=Phrase “One”+”Of”+”Them”+”Deals”+”With”+”Not”+”Giving”+”Up”
Concatenated String4=Phrase “There”+”Was”+”After”+”All”+”A”+”Lot”+”Of”+”Madness”+”Over”+”The”+”Last”+”Two”+”Years”
Concatenated String5=Phrase ”This”+”Included”+”But”+”Was”+”Not”+”Limited”+”To”+”The”+”2020”+”NCAA”+”Basketball”+”Tournament”
Concatenated String6= Phrase ”There”+”Was”+”Better”+”News”+”At”+”The”+”Professional”+”Level”
Concatenated String7=Math Problem “If”+”A”+”Draft”+”Of”+”CDC”+”Guidelines”+”Suggests”+”That”+”Social”+”Distancing”+”Can”+”Be”+”Reduced”+”To”+”3Ft”+”Of”+”Distancing”+”Be”+”Implemented”+”If”+”School”+”Starts”+”In”+”September?”
Concatenated String8=Math Problem ”If”+”The”+”Cdc”+”Clarified”+”These”+”Guidelines”+”To”+”Say”+”That”+”Everyone”+”Means”+”70”+”Percent” +’Of”+”K-12”+”Kids”+”Nationwide”+”And”+”The”+”Vaccination”+”Rate”+”Is”+”40%”+”Should”+”Schools”+”Allow”+”For”+”3”+”Feet”+”Of”+”Distancing?”
Concatenated String9=Math Problem “If”+”A”+”Poll”+”Taken”+”On”+”July”+”28Th”+”Showed”+”That”+”25%”+”Of”+”Respondents”+”Said”+”They”+”Were”+”Open”+”To”+”Getting”+”Vaccinated”+”Can”+”3Ft”+”Of”+”Distancing”+”Be”+”Implemented”+”If”+”School”+”Starts”+”In”+”September”?
Concatenated String10=Math Problem “If”+”The”+”Margin”+”Of”+”Error”+”Is”+”7.25”+”Percent”+”What”+”Is”+”The”+”Range?
Concatenated String11=Math Problem ”If”+”That”+”Same”+”Poll”+”Found”+”That”+”35”+”Percent”+”Of”+”Kids”+”Are”+”Skeptical”+”Of”+”Being”+”Vaccinated”+”What”+”Are”+”The”+”Chances”+”Of”+”Getting”+”To”+”Herd”+”Immunity?”
Concatenated String12=Math Problem “If”+”The”+”Heritage”+”Foundation”+”Decided”+”To”+”Challenge”+”The”+”Cdcs”+”Guidelines”+”On”+”The”+”Idea”+”That”+”Education”+”Is”+”Not”+”Federal”+”And”+”The”+”70”+”Percent”+”Rule”+”Is”+”Unconstituional”+”Would”+”It”+”Hold”+”Water?”
Concatenated String13=Phrase “One”+”Of”+”The”+”Positive”+”Stories”+”Can”+”Be”+”Found”+”In”+”The”+”One”+”Four”+”Four”
Concatenated String14=Phrase “The”+”Basic”+”Lesson”+”From”+”The”+”Bubble”+”Is”+”That”+”There”+”Is”+”A”+”Way”+”To”+”Safely”+”Carry”+”Out”+”High”+”Contact”+”Activites”
Concatenated String15=Sentence “Herd”+”Immunity”+”Will”+”Keep”+”Kids”+”Safe”+”From”+”Covid”+”Weather”
Concatenated String16=Sentence “The”+”Debate”+”Between”+”3Ft”+”And”+”6Ft”+”Is”+”A”+”Sideshow”
Chapter= Document.Queryselector(Chapter)
Chapter Inner Html
Replace ‘ With / 
For Apostrophe In Covid Strings4Fan Voting
Select Characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
<P>String 3 [Votes ‘String 3 ‘]}Votes</P>
<P>String 4 [Votes ‘String 4 ‘]}Votes</P>
<P>String 5[Votes ‘String 5 ‘]}Votes</P>
<P>String 6[Votes ‘String 6 ‘]}Votes</P>
<P>String 7 [Votes ‘String 7 ‘]}Votes</P>
<P>String 8[Votes ‘String 8 ‘]}Votes</P>
<P>String 9 [Votes ‘String 9 ‘]}Votes</P>
<P>String 10 [Votes ‘String 10 ‘]}Votes</P>
<P>String 11[Votes ‘String 11 ‘]}Votes</P>
<P>String 12 [Votes ‘String 12 ‘]}Votes</P>
<P>String 13 [Votes ‘String 13 ‘]}Votes</P>
<P>String 14 [Votes ‘String 14 ‘]}Votes</P>
<P>String 15 [Votes ‘String 15 ‘]}Votes</P>
<P>String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
First Round  Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  First Round
<Header.Html>
Second Round
The Second Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H2 Round {Second Round} <H2>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round2
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 2:
Commence Round 2
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
String Numbers[Concatenated Strings : Name ‘String Pair1’ Votes 
Name: ‘String Pair 2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
<Subheading.Html>
Second Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
Concatenated Strings 
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
Name String5 Votes
Name String6 Votes
Name String7 Votes
Name String8 Votes
<Subheading.Html>
Second Round Concatenated String Advancing 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  Second Round
<Header.Html>
Third Round
The Third Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H3 Round {Third Round} <H3>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round3
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 3:
Commence Round 3
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
String Numbers[Concatenated Strings : Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
<Subheading.Html>
Third Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings .Slice(0,Num To 2)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
<Subheading.Html>
Third Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 2)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Third Round 
<Header.Html>
Fourth Round
The Fourth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H4 Round {Fourth Round} <H4>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name}</Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=ROUND4
Total Rounds=5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Non-Concatenated Strings : Name ‘String Pair1’ Votes 
String Numbers[Concatenated Strings :Name ‘String Pair1’ Votes
Name String1 Votes
Name String2 Votes 
<Subheading.Html>
Fourth Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2)Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String )
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fourth Round 
<Header.Html>
Fifth Round
The Fifth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H5 Round {Fifth Round} <H5>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name} {Candidate Votes} Votes</P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round5
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Name ‘String Pair Votes‘]
Last Remaining Non-Concatenated String 
Last Remaining Non-Concatenated String 
<Subheading.Html>
Covid Strings Fan Voting Victory
The End Result Of Fan Voting 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(Winner String)
Return Winner
Last Remaining Non-Concatenated String=Last Non-Concatenated String Variable Left In Fan Voting
Last Remaining Concatenated String=Last Concatenated String Variable Left In Fan Voting
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Last Remaining Non-Concatenated String>=.5
If Last Remaining Concatenated String>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fifth Round 
Return Filename
