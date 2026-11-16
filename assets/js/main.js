(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function num(e,d,min,max){var v=parseFloat(e.value);if(isNaN(v))v=d;return Math.min(max,Math.max(min,v));}
function clock(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mi=m%60,ap=h>=12?'pm':'am',h12=h%12===0?12:h%12;return h12+':'+(mi<10?'0':'')+mi+' '+ap;}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
var rs=$('rt-s');if(rs){var rd=$('rt-d'),rh=$('rt-h'),rr=$('rt-r');
 on([rs,rd,rh,rr],function(){var s=Math.round(num(rs,5,1,15)),d=Math.round(num(rd,42,1,300)),h=num(rh,3,.5,12),rest=parseInt(rr.value,10);
  var study=Math.max(1,Math.round(d*(7-rest)/7)),total=study*h,papers=total*0.2,learn=total-papers,per=learn/s,sess=Math.max(1,Math.round(per*60/45)),ppDay=Math.max(1,Math.round(d*0.8));
  $('rt-o').innerHTML='<strong>'+Math.round(per*10)/10+' hours per subject</strong><ul>'+row('Study days',study)+row('Total study hours',Math.round(total))+row('45-minute sessions per subject',sess)+row('Hours kept for past papers',Math.round(papers))+row('Start past papers on day',ppDay+' of '+d)+'</ul><p>'+(per<4?'That is tight. Prioritise the topics that carry the most marks and go straight to practice questions.':per>30?'You have plenty of time. Use spaced reviews so early topics are not forgotten by exam week.':'A workable plan. Give your hardest subject one extra session a week, taken from your strongest.')+'</p>';});}
var st=$('ss-t');if(st){var sm=$('ss-m'),sf=$('ss-f');
 on([st,sm,sf],function(){var p=(st.value||'16:00').split(':'),t=parseInt(p[0],10)*60+parseInt(p[1],10);if(isNaN(t))t=960;var left=Math.round(num(sm,150,20,600)),f=parseInt(sf.value,10),rows=[],n=0,focus=0;
  while(left>=f){n++;rows.push(row(clock(t),'Focus block '+n));t+=f;left-=f;focus+=f;if(left<f)break;var br=(n%3===0)?20:(f>=40?10:5);if(left-br<f)break;rows.push(row(clock(t),(br===20?'Long break':'Break')+' ('+br+' min)'));t+=br;left-=br;}
  $('ss-o').innerHTML=n?'<strong>'+n+' focus block'+(n>1?'s':'')+', '+focus+' minutes of study</strong><ul>'+rows.join('')+row(clock(t),'Finish')+'</ul><p>Decide the task for each block before you start the timer.</p>':'<p>That is not enough time for one full block. Try a shorter block length.</p>';});}
var pm=$('pp-m');if(pm){var pt=$('pp-t'),pg=$('pp-g'),px=$('pp-x');
 on([pm,pt,pg,px],function(){var tot=Math.round(num(pt,80,1,1000)),m=Math.min(tot,Math.round(num(pm,52,0,1000))),g=num(pg,75,1,100),x=num(px,90,10,300),pct=m/tot*100,need=Math.ceil(g/100*tot),gap=need-m,rate=x*0.9/tot;
  $('pp-o').innerHTML='<strong>'+pct.toFixed(0)+'% &middot; '+(gap>0?gap+' mark'+(gap>1?'s':'')+' short of target':'target reached')+'</strong><ul>'+row('Marks needed for '+g+'%',need+' / '+tot)+row('Marks lost on this paper',tot-m)+row('Time per mark',rate.toFixed(1)+' min')+row('A 6-mark question gets',Math.round(rate*6)+' min')+'</ul><p>'+(gap>0?'Go through the '+(tot-m)+' lost marks and sort them into knowledge gaps, misread questions and slips. Closing the knowledge gaps alone usually covers the difference.':'Good. Sit another paper under timed conditions to confirm it was not a kind paper.')+'</p>';});}
})();
