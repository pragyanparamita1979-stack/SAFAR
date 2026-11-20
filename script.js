const places=[
{name:"Coorg",state:"Karnataka",type:"Forest",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",description:"Coffee-country roads, green valleys and slow misty mornings.",spots:["Abbey Falls","Raja's Seat","Dubare Elephant Camp"],season:"October to March",tip:"Carry comfortable shoes and light rain protection."},
{name:"Sundarbans",state:"West Bengal",type:"Forest",image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",description:"A vast mangrove world shaped by tides, islands and wildlife.",spots:["Sajnekhali","Dobanki Watch Tower","Sudhanyakhali"],season:"November to February",tip:"Always use authorised local guides."},
{name:"Manali",state:"Himachal Pradesh",type:"Mountain",image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85",description:"Pine-lined roads, snowy peaks and Himalayan viewpoints.",spots:["Solang Valley","Old Manali","Atal Tunnel"],season:"March to June or December to February",tip:"Check road and weather conditions before leaving."},
{name:"Munnar",state:"Kerala",type:"Mountain",image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",description:"Tea gardens unfolding across cool, blue-green hills.",spots:["Tea Museum","Eravikulam National Park","Mattupetty Dam"],season:"September to March",tip:"Pack a warm layer for evenings."},
{name:"Cherrapunji",state:"Meghalaya",type:"Waterfall",image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=85",description:"Living bridges and waterfalls in an extraordinarily green landscape.",spots:["Nohkalikai Falls","Seven Sisters Falls","Living Root Bridges"],season:"October to May",tip:"Wear secure waterproof footwear."},
{name:"Dudhsagar Falls",state:"Goa",type:"Waterfall",image:"https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=900&q=85",description:"A dramatic cascade rising beside jungle and railway country.",spots:["Dudhsagar Falls","Mollem National Park","Bhagwan Mahavir Sanctuary"],season:"Post-monsoon to early winter",tip:"Confirm access and transport regulations locally."},
{name:"Puri",state:"Odisha",type:"Beach",image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",description:"Golden shores, temple mornings and long coastal walks.",spots:["Golden Beach","Puri Beach","Marine Aquarium"],season:"October to February",tip:"Follow lifeguard and beach safety flags."},
{name:"Goa",state:"Goa",type:"Beach",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",description:"Palm-framed coves, old streets and warm tropical evenings.",spots:["Palolem Beach","Baga Beach","Anjuna Village"],season:"November to February",tip:"Use sunscreen and respect local swimming conditions."},
{name:"Valley of Flowers",state:"Uttarakhand",type:"Flower",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",description:"A Himalayan meadow famous for its brief seasonal bloom.",spots:["National Park","Ghangaria","Hemkund Sahib"],season:"July to September, subject to opening dates",tip:"Prepare for trekking and confirm permits."},
{name:"Kaas Plateau",state:"Maharashtra",type:"Flower",image:"https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=900&q=85",description:"A seasonal plateau washed with tiny wildflowers.",spots:["Kaas Plateau","Kaas Lake","Thoseghar Falls"],season:"August to September, rainfall dependent",tip:"Do not pick or step on wildflowers."},
{name:"Yumthang Valley",state:"Sikkim",type:"Flower",image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",description:"Rhododendron meadows beneath immense Himalayan peaks.",spots:["Yumthang Valley","Rhododendron Sanctuary","Zero Point"],season:"March to May",tip:"Check permits and weather before travelling."},
{name:"Chilika Lake",state:"Odisha",type:"Lake",image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",description:"A quiet lagoon of islands, birds and fishing villages.",spots:["Satapada","Nalabana Bird Sanctuary","Kalijai Island"],season:"November to February",tip:"Confirm boat timings and wildlife guidelines."},
{name:"Nainital",state:"Uttarakhand",type:"Lake",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85",description:"A mountain lake framed by wooded slopes and old viewpoints.",spots:["Naini Lake","Snow View","Tiffin Top"],season:"March to June or September to October",tip:"Explore elevated viewpoints during daylight."}
];
let activeType="All";
function savedPlaces(){try{return JSON.parse(localStorage.getItem("safaraiSaved")||"[]")}catch(_){return[]}}
function showPlaces(){
const area=document.getElementById("placeList");if(!area)return;
const query=(document.getElementById("search")?.value||"").toLowerCase().trim();
const list=places.filter(p=>(activeType==="All"||p.type===activeType)&&`${p.name} ${p.state} ${p.type} ${p.description}`.toLowerCase().includes(query));
area.innerHTML=list.length?list.map(p=>`
<article class="destination-card"><div class="destination-card-image"><img src="${p.image}" alt="${p.name}" loading="lazy">
<button class="card-save ${savedPlaces().includes(p.name)?'saved':''}" type="button" onclick="savePlace('${p.name.replace(/'/g,"\\'")}')" aria-label="Save ${p.name}">${savedPlaces().includes(p.name)?'♥':'♡'}</button></div>
<div class="destination-card-info"><span class="meta">${p.type} · ${p.state}</span><h3>${p.name}</h3><p>${p.description}</p>
<div class="card-actions"><a href="destination.html?place=${encodeURIComponent(p.name)}">Explore place <span>↗</span></a></div></div></article>`).join(""):'<p class="empty-results">No places match that search. Try another state or experience.</p>';
}
function filterPlaces(type){
activeType=type;
const labels={All:"all places",Forest:"forests",Mountain:"mountains",Waterfall:"waterfalls",Beach:"beaches",Flower:"flower areas",Lake:"lakes"};
document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b.textContent.trim().toLowerCase()===labels[type]));
showPlaces();
}
function savePlace(name){let saved=savedPlaces();saved=saved.includes(name)?saved.filter(x=>x!==name):[...saved,name];localStorage.setItem("safaraiSaved",JSON.stringify(saved));showPlaces()}
function showDestination(){
const box=document.getElementById("destinationDetails");if(!box)return;
const name=new URLSearchParams(location.search).get("place"),p=places.find(x=>x.name===name);
if(!p){box.innerHTML='<section class="page-heading"><h1>Destination not found</h1><a class="button button-green" href="explore.html">Back to explore</a></section>';return}
document.title=`${p.name} — SafarAI`;
box.innerHTML=`<section class="detail-hero" style="background-image:url('${p.image}')"><div class="detail-hero-content"><p>${p.type} · ${p.state}</p><h1>${p.name}</h1></div></section>
<section class="detail-layout"><div class="detail-main"><p class="eyebrow dark"><span></span> About this place</p><h2>A journey worth taking slowly</h2><p>${p.description}</p><h2>Places to explore</h2><ul>${p.spots.map(s=>`<li>• ${s}</li>`).join("")}</ul></div>
<aside class="detail-aside"><h3>Travel notes</h3><p><strong>Best time</strong><br>${p.season}</p><p><strong>Keep in mind</strong><br>${p.tip}</p><a class="button button-green" href="planner.html?place=${encodeURIComponent(p.name)}">Plan this journey <span>→</span></a></aside></section>`;
}
function setupPlanner(){
const select=document.getElementById("planPlace");if(!select)return;
select.innerHTML=places.map(p=>`<option value="${p.name}">${p.name} — ${p.state}</option>`).join("");
const requested=new URLSearchParams(location.search).get("place");if(places.some(p=>p.name===requested))select.value=requested;
}
function fallbackItinerary(input){
const p=places.find(x=>x.name===input.destination)||places[0],titles=["Arrival and first impressions","Local discoveries","Hidden corners","Wild landscapes","Culture and cuisine","A slow farewell","Beyond the usual"];
const days=Array.from({length:input.days},(_,i)=>({day:i+1,title:i===0?"Arrival and first impressions":i===input.days-1?"A slow farewell":titles[(i+2)%titles.length],summary:i===0?`Settle into ${p.name} and enjoy a gentle first look.`:`Explore ${p.spots[i%p.spots.length]} at a comfortable pace.`,activities:[i===0?"Check in and take an easy orientation walk":`Visit ${p.spots[i%p.spots.length]}`,`Choose a local ${input.interests.includes("Food")?"meal or market":"viewpoint or neighbourhood"}`,input.travelStyle==="Adventure"?"Add a longer walk or locally guided activity":"Leave an unplanned evening for slow exploration"]}));
return{title:`${input.days}-day ${p.name} escape`,summary:`A ${input.travelStyle.toLowerCase()} ${input.budget.toLowerCase()} journey shaped around ${input.interests.join(", ")}.`,days,packing:["Comfortable walking shoes","Weather-appropriate layer","Reusable water bottle"],notes:[p.tip,"Confirm opening times and permits before travelling."]};
}
async function createPlan(event){
event?.preventDefault();const output=document.getElementById("planResult");if(!output)return;
const destination=document.getElementById("planPlace").value,days=Number(document.getElementById("days").value),travelStyle=document.getElementById("travelStyle").value,budget=document.getElementById("budget").value;
const interests=[...document.querySelectorAll('input[name="interest"]:checked')].map(i=>i.value),preferences=document.getElementById("preferences").value.trim();
document.getElementById("submitText").textContent="Composing...";
output.className="plan-output loading";output.innerHTML='<div class="loading-panel"><div class="orbit"><span>AI</span></div><p>Reading the possibilities...</p></div>';
const input={destination,days,travelStyle,budget,interests:interests.length?interests:["Nature"],preferences};let trip;
try{const response=await fetch("/.netlify/functions/generate-trip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(input)});if(!response.ok)throw new Error("AI unavailable");trip=await response.json()}catch(_){trip=fallbackItinerary(input)}
if(!trip?.days){output.className="plan-output";output.innerHTML='<div class="loading-panel"><h2>Could not compose this journey</h2><p>Please adjust the details and try again.</p></div>'}
else{output.className="plan-output";output.innerHTML=`<div class="ai-result"><p class="eyebrow"><span></span> Your personalised draft</p><h2>${escapeHtml(trip.title)}</h2><p>${escapeHtml(trip.summary)}</p><div class="result-days">${trip.days.slice(0,days).map(d=>`<article class="result-day"><h3>Day ${d.day} · ${escapeHtml(d.title)}</h3><p>${escapeHtml(d.summary)}</p>${Array.isArray(d.activities)?`<ul>${d.activities.map(a=>`<li>${escapeHtml(a)}</li>`).join("")}</ul>`:""}</article>`).join("")}</div><p class="result-notes">Smart draft: verify live weather, opening hours, permits and transport before booking.</p></div>`}
document.getElementById("submitText").textContent="Create again";
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[c])}
document.querySelector(".menu-button")?.addEventListener("click",function(){const open=document.querySelector(".nav-links").classList.toggle("open");this.setAttribute("aria-expanded",String(open))});
document.getElementById("search")?.addEventListener("input",showPlaces);
const requestedType=new URLSearchParams(location.search).get("type");if(requestedType&&["Forest","Mountain","Waterfall","Beach","Flower","Lake"].includes(requestedType))activeType=requestedType;
showPlaces();showDestination();setupPlanner();document.getElementById("plannerForm")?.addEventListener("submit",createPlan);
