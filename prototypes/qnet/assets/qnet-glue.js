/* Qnet prototype glue — loaded in <head> of every screen. */
(function(){
  var K_THEME='qnet-theme', K_COL='qnet-sidebar-collapsed', root=document.documentElement;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var mq=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
  function theme(){return get(K_THEME)||'light'}
  function applyTheme(){var t=theme(),dark=t==='dark'||(t==='system'&&mq&&mq.matches);root.classList.toggle('qn-dark',dark);syncSwitch()}
  function syncSwitch(){var s=document.querySelector('aside[aria-label="Primary"] [role="switch"]');if(s)s.setAttribute('aria-checked',root.classList.contains('qn-dark')?'true':'false')}
  function applyCollapse(){var c=get(K_COL)==='1';root.classList.toggle('qn-collapsed',c);
    var b=document.querySelector('aside[aria-label="Primary"] button[aria-label$="sidebar"]');if(b)b.setAttribute('aria-label',c?'Expand sidebar':'Collapse sidebar');
    document.querySelectorAll('aside[aria-label="Primary"] nav a, aside[aria-label="Primary"] [role="switch"]').forEach(function(a){a.title=c?a.textContent.trim():''})}
  window.qnetSetTheme=function(t){set(K_THEME,t);applyTheme()};
  window.qnetTheme=theme;
  if(mq&&mq.addEventListener)mq.addEventListener('change',applyTheme);
  applyTheme();applyCollapse();
  document.addEventListener('click',function(e){
    var sw=e.target.closest&&e.target.closest('aside[aria-label="Primary"] [role="switch"]');
    if(sw){window.qnetSetTheme(root.classList.contains('qn-dark')?'light':'dark');return}
    var cb=e.target.closest&&e.target.closest('aside[aria-label="Primary"] button[aria-label$="sidebar"]');
    if(cb){set(K_COL,get(K_COL)==='1'?'0':'1');applyCollapse()}
  });
  // the page renders after React boots; re-sync once the sidebar exists
  var n=0,iv=setInterval(function(){if(document.querySelector('aside[aria-label="Primary"]')||++n>100){clearInterval(iv);syncSwitch();applyCollapse()}},50);
  window.addEventListener('storage',function(e){if(e.key===K_THEME)applyTheme();if(e.key===K_COL)applyCollapse()});
})();
/* Deep link into a checklist field: action-center.html?view=checklist&sec=site&focus=vol */
(function(){
  var f; try{f=new URLSearchParams(location.search).get('focus')}catch(e){}
  var SEL={notes:'textarea[placeholder="Anything notable on the floor today"]',vol:'input[placeholder="e.g. 12,400 units"]',cnotes:'textarea[placeholder="Anything a customer flagged or asked for"]'}[f];
  if(!SEL)return;
  var n=0,iv=setInterval(function(){var el=document.querySelector(SEL);if(!el&&++n<120)return;clearInterval(iv);if(!el)return;
    el.scrollIntoView({block:'center',behavior:'smooth'});try{el.focus({preventScroll:true})}catch(e){el.focus()}
    var lab=el.closest('label')||el;lab.classList.add('qn-flash');setTimeout(function(){lab.classList.remove('qn-flash')},2200)},50);
})();
