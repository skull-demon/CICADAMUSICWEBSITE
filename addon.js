(() => {
 const nav=document.querySelector('.nav'); if(nav){const logo=document.createElement('img');logo.className='brand-wordmark';logo.src='assets/cicada-wordmark.png';logo.alt='Cicada';nav.prepend(logo)}
 const video=document.createElement('video');video.className='bg-video';video.autoplay=video.muted=video.loop=video.playsInline=true;video.innerHTML='<source src="assets/vision-board-bg.mp4" type="video/mp4">';document.body.prepend(video);
 const btn=document.createElement('button');btn.className='music-toggle on';btn.type='button';btn.textContent='SOUND ON';btn.setAttribute('aria-pressed','true');document.body.append(btn);const audio=new Audio('https://commons.wikimedia.org/wiki/Special:FilePath/Brahms%2C%20Tragic%20Overture.ogg');audio.loop=true;audio.preload='auto';audio.volume=.18;let wanted=true;const start=async()=>{if(!wanted)return;try{await audio.play()}catch{}};start();document.addEventListener('pointerdown',start,{once:true});document.addEventListener('keydown',start,{once:true});btn.addEventListener('click',async()=>{wanted=!wanted;if(wanted){await start();btn.textContent='SOUND ON';btn.classList.add('on');btn.setAttribute('aria-pressed','true')}else{audio.pause();btn.textContent='SOUND OFF';btn.classList.remove('on');btn.setAttribute('aria-pressed','false')}});
 const expansion=document.querySelector('.expansion');if(expansion){const s=document.createElement('section');s.className='immersive-panel';s.innerHTML='<div><img class="immersive-mark" src="assets/cicada-immersive.png" alt="Cicada Immersive"><p class="eyebrow">THE ADAPTIVE POLISH ENGINE</p><h2>Cicada<br><span>Immersive.</span></h2><p>The adaptive polish engine inside every playback—<b>richer, clearer, fuller.</b> It listens to the track, then shapes bass, clarity, harmonics and dynamics around it. Nothing is ever just “boosted”.</p><div class="immersive-chips"><b>ADAPTIVE TONE SHAPING</b><b>DEEP CONTROLLED BASS</b><b>VOCAL PRESENCE</b><b>HARMONIC RICHNESS</b><b>TRANSIENT PUNCH</b><b>LOUDNESS + SAFETY LIMITER</b></div></div><div class="stats"><div><strong>13</strong><span>BRAND PROFILES</span></div><div><strong>10</strong><span>EQ BANDS</span></div><div><strong>6</strong><span>ENGINES</span></div><div><strong>2</strong><span>MUSIC WORLDS</span></div></div>';expansion.before(s)}
 const worlds=document.querySelector('.worlds');if(worlds){worlds.querySelectorAll('article')[0].innerHTML='<b>01</b><h3>YouTube Music</h3><p>The full catalog through the innertube engine—search, albums, artists, playlists, live sessions and lyrics.</p><ul><li>Search & browse the entire YouTube Music catalog</li><li>Streams decoded and pushed through the Cicada DSP chain</li><li>Queue, shuffle, repeat—your library & playlists</li><li>YouTube Music links open in-app, instantly</li></ul>';worlds.querySelectorAll('article')[1].innerHTML='<b>02</b><h3>Spotify</h3><p>Spotify search lives side-by-side in global search—a dedicated backend, not the YouTube pipeline.</p><ul><li>Spotify and YouTube Music results, side-by-side</li><li>Open any Spotify link and start playing instantly</li><li>Playlists & albums open in-app and save to your library</li><li>Likes and saves write back to your Spotify library</li></ul>'}
 const end=document.querySelector('.end');if(end){end.innerHTML='<div><p class="eyebrow">CICADA IS IN ACTIVE BETA</p><h2>Download Cicada.</h2><p>Something big is here—get the latest beta build, straight to your phone.</p><div class="badges"><b>BETA · ACTIVELY UPDATED</b><b>ANDROID 8.0+</b><b>GPL-3.0</b></div><div class="download-container"><a class="download-btn" href="https://github.com/skull-demon/CICADAMUSICWEBSITE/releases/latest/download/cicada-latest.apk" download="cicada-latest.apk"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="dl-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>DOWNLOAD NOW</a><div class="source-code-wrapper"><a class="source-code-btn" href="https://github.com/skull-demon/CICADAMUSICWEBSITE" target="_blank" rel="noopener noreferrer">Source Code</a></div></div></div>'};const statObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const n=e.target,target=Number(n.dataset.target),started=performance.now(),duration=1000;const tick=now=>{const p=Math.min(1,(now-started)/duration),ease=1-Math.pow(1-p,3);n.textContent=Math.round(target*ease);if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);statObserver.unobserve(n)}),{threshold:.45});document.querySelectorAll('.stats strong').forEach(n=>{n.dataset.target=n.textContent;n.textContent='0';statObserver.observe(n)});
  const open=document.createElement('section');open.className='open-source';open.innerHTML='<div><p class="eyebrow">BUILT IN THE OPEN</p><h2>Open source,<br>right now.</h2></div><p>Cicada is built in the open. The website and the latest release build live on <b>GitHub</b>—grab the APK, read the code, and watch the beta evolve.<br><br><div class="source-code-wrapper" style="justify-content:flex-start"><a class="source-code-btn" style="opacity:1" href="https://github.com/skull-demon/CICADAMUSICWEBSITE" target="_blank" rel="noopener noreferrer">github.com/skull-demon/CICADAMUSICWEBSITE</a></div><br><br>© 2026 Cicada. All rights reserved.</p>';end.before(open)
  const stage=document.querySelector('.scroller');if(stage&&worlds)stage.after(worlds);const phone=document.getElementById('phone'), screens=[0,1,2,3].map(i=>document.getElementById('s'+i)), ft=document.getElementById('ft'), fp=document.getElementById('fp'), count=document.getElementById('counter'), tags=document.getElementById('tags'), bar=document.getElementById('bar');const states=[['An ultra-premium<br>player.','A focused playback experience built to make the music feel like the main character—not the interface.',['PLAYBACK','QUEUE','IMMERSIVE']],['Cicada<br>Immersive.','A specialized sound engine with profiles inspired by Dolby, Sennheiser, Sony and JBL.',['SIGNATURES','EQ','SOUND ENGINE']],['One search.<br>Every platform.','Search Spotify and YouTube Music together. One query, one beautiful result surface.',['GLOBAL SEARCH','SPOTIFY','YOUTUBE MUSIC']],['Your entire<br>music home.','One unified home for discovery, albums, artists and new releases.',['SPOTIFY','YOUTUBE MUSIC','DISCOVER']]];function lockSequence(){const r=stage.getBoundingClientRect(),p=Math.max(0,Math.min(.999,-r.top/(r.height-innerHeight))),q=p*4,i=Math.min(3,Math.floor(q)),f=q-i,s=states[i],next=states[Math.min(3,i+1)];phone.style.transform=`rotateX(${(-5+i*3)}deg) rotateY(${[-18,22,-27,15][i]+([22,-27,15,15][i]-[-18,22,-27,15][i])*f}deg) rotateZ(0deg)`;screens.forEach((x,n)=>{x.classList.toggle('active',n===i);x.style.opacity=n===i?'1':'0'});const shown=f>.5?Math.min(3,i+1):i,show=states[shown];ft.innerHTML=show[0];fp.textContent=show[1];count.textContent=String(shown+1).padStart(2,'0')+' / 04';tags.innerHTML=show[2].map(x=>`<span>${x}</span>`).join('');bar.style.transform=`scaleX(${p})`;requestAnimationFrame(lockSequence)}requestAnimationFrame(lockSequence);
})();

// Keep the long-form story in a fixed, intentional order after all panels load.
(() => {
 const sections=[
  document.querySelector('.scroller'),
  document.querySelector('.worlds'),
  document.querySelector('.immersive-panel'),
  document.querySelector('.expansion'),
  document.querySelector('.open-source'),
  document.querySelector('.end')
 ].filter(Boolean);
 sections.forEach(section=>document.body.append(section));
})();

// Keep the screenshot and its copy on the exact same numbered slide. The base
// build also has a crossfade loop, so this final loop deliberately uses hard
// handoffs: there is always one fully decoded screenshot visible.
(() => {
 const stage=document.querySelector('.scroller');
 const screens=[0,1,2,3].map(i=>document.getElementById('s'+i));
 const title=document.getElementById('ft'),copy=document.getElementById('fp');
 const counter=document.getElementById('counter'),tags=document.getElementById('tags');
 if(!stage||screens.some(screen=>!screen)||!title||!copy||!counter||!tags)return;
 const slides=[
  ['An ultra-premium<br>player.','A focused playback experience built to make the music feel like the main character—not the interface.',['PLAYBACK','QUEUE','IMMERSIVE']],
  ['Cicada<br>Immersive.','A specialized sound engine with profiles inspired by Dolby, Sennheiser, Sony and JBL.',['SIGNATURES','EQ','SOUND ENGINE']],
  ['One search.<br>Every platform.','Search Spotify and YouTube Music together. One query, one beautiful result surface.',['GLOBAL SEARCH','SPOTIFY','YOUTUBE MUSIC']],
  ['Your entire<br>music home.','One unified home for discovery, albums, artists and new releases.',['SPOTIFY','YOUTUBE MUSIC','DISCOVER']]
 ];
 screens.forEach(screen=>{screen.loading='eager';screen.decoding='sync';screen.style.transition='none'});
 Promise.all(screens.map(screen=>typeof screen.decode==='function'?screen.decode().catch(()=>undefined):Promise.resolve())).then(()=>document.documentElement.classList.add('phone-screens-ready'));
 const sync=()=>{
  const rect=stage.getBoundingClientRect();
  const progress=Math.max(0,Math.min(.999,-rect.top/(rect.height-innerHeight)));
  const index=Math.min(3,Math.floor(progress*4));
  const slide=slides[index];
  screens.forEach((screen,n)=>{const active=n===index;screen.classList.toggle('active',active);screen.style.opacity=active?'1':'0';screen.style.visibility=active?'visible':'hidden'});
  title.innerHTML=slide[0];copy.textContent=slide[1];counter.textContent=String(index+1).padStart(2,'0')+' / 04';tags.innerHTML=slide[2].map(tag=>`<span>${tag}</span>`).join('');
  requestAnimationFrame(sync);
 };
requestAnimationFrame(sync);
})();

// iOS and some Android WebViews only allow audible media from a user gesture.
// The primary controller starts audio immediately; these fallbacks unlock that
// same controller on the first touch or scroll when autoplay was blocked.
(() => {
 const unlockSound=()=>document.dispatchEvent(new KeyboardEvent('keydown',{bubbles:true,key:'AudioResume'}));
 document.addEventListener('touchstart',unlockSound,{once:true,passive:true});
 document.addEventListener('wheel',unlockSound,{once:true,passive:true});
})();

// Audible autoplay is blocked on iOS/Android. After the existing boot reveal,
// make that browser rule part of the experience instead of leaving a silent page.
(() => {
 const isTouchDevice=matchMedia('(hover:none) and (pointer:coarse)').matches;
 const control=document.querySelector('.music-toggle');
 if(!isTouchDevice||!control)return;
 control.click();
 document.body.classList.add('mobile-sound-locked');
 const gate=document.createElement('div');
 gate.className='mobile-sound-gate';
 gate.innerHTML='<p>PLEASE TURN ON YOUR VOLUME</p><button type="button" aria-label="Turn sound on">♪ SOUND OFF</button><small>TAP TO ENTER</small>';
 document.body.append(gate);
 setTimeout(()=>gate.classList.add('visible'),2550);
 const enter=()=>{
  control.click();
  gate.querySelector('button').textContent='♪ SOUND ON';
  gate.classList.add('exit');
  document.body.classList.remove('mobile-sound-locked');
  setTimeout(()=>gate.remove(),600);
 };
 gate.querySelector('button').addEventListener('click',enter,{once:true});
})();

// Product chapters shown directly before Open source and the final Stay tuned page.
(() => {
 const open=document.querySelector('.open-source');
 if(!open)return;
 const assistant=document.createElement('section');
 assistant.className='assistant-showcase';
 assistant.innerHTML='<div><p class="eyebrow">VOICE, WITHOUT THE FRICTION</p><h2>Hey<br><span>Cicada.</span></h2><p>Ask for a song the way you would ask a friend. Say <b>“Hey Cicada, play the song.”</b> Cicada finds it, queues it and lets the music take over.</p></div><div class="assistant-demo"><b>CICADA ASSISTANT · READY</b><h3>“Hey Cicada,<br>play Midnight City.”</h3><div class="assistant-answer"><i></i><span>NOW PLAYING · MIDNIGHT CITY — M83</span></div></div>';
 const auto=document.createElement('section');
 auto.className='android-auto';
 auto.innerHTML='<div><p class="eyebrow">LISTENING, EVERYWHERE</p><span class="auto-badge">ANDROID<br>AUTO</span></div><div><h2>Android Auto<br><span>is on the way.</span></h2><div class="auto-note"><b>UNDER PROGRESS</b><p>Android Auto support is still under progress. I hope it gets fixed soon—so Cicada can come with you on every drive.</p></div></div>';
 open.before(assistant,auto);
})();
