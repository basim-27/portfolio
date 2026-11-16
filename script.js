(() => {
  const $ = (s, scope = document) => scope.querySelector(s);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const intro = $('.intro');
  const finishIntro = () => { if (!intro || intro.dataset.done) return; intro.dataset.done = 'true'; if (window.gsap && !reduced) gsap.to(intro, { opacity: 0, duration: .65, ease: 'power2.inOut', onComplete: () => intro.remove() }); else intro.remove(); };
  $('.intro-skip')?.addEventListener('click', finishIntro);
  if (reduced) finishIntro(); else if (window.gsap) {
    const timeline = gsap.timeline({ onComplete: finishIntro });
    timeline.to('.loadline i', { width: '100%', duration: .8, ease: 'power2.inOut' }).to('.intro-center', { opacity: 0, y: -10, duration: .35 }, '+=.25');
  } else setTimeout(finishIntro, 1000);
  setTimeout(finishIntro, 2500);

  const nav = $('.nav'); const menu = $('.menu-toggle');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), { passive: true });
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
  $('.nav nav')?.addEventListener('click', e => { if (e.target.matches('a')) { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); } });
  $('.back-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
  $('#year').textContent = new Date().getFullYear();

  if (!reduced && window.Lenis && window.gsap && window.ScrollTrigger) {
    const lenis = new Lenis({ lerp: .09 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.hero-orbit', { rotate: -35, scale: .9, opacity: 0 });
    gsap.timeline({ delay: .55 }).to('.hero-orbit', { rotate: 0, scale: 1, opacity: .78, duration: 1.6, ease: 'power3.out' }).to('.orbit-arc', { strokeDashoffset: 0, duration: 1.5, stagger: .16, ease: 'power2.inOut' }, '-=1.2');
    gsap.to('.hero-orbit', { rotate: 360, duration: 75, repeat: -1, ease: 'none' });
    gsap.to('.ring-two', { attr: { r: 145 }, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.utils.toArray('.reveal').forEach(el => gsap.fromTo(el, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    gsap.utils.toArray('.project-art').forEach(el => gsap.fromTo(el, { clipPath: 'inset(8% 0 8% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
    document.querySelectorAll('.button.solid, .inline-link').forEach(el => { el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .12, y: (e.clientY - r.top - r.height / 2) * .18, duration: .35 }); }); el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: .55, ease: 'elastic.out(1,.45)' })); });
  }

  const repoList = $('#repo-list'), status = $('#repo-status');
  const escape = v => String(v || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  fetch('https://api.github.com/users/basim-27/repos?per_page=100&sort=updated', { headers: { Accept: 'application/vnd.github+json' } })
    .then(r => { if (!r.ok) throw Error(); return r.json(); })
    .then(repos => { const usable = repos.filter(r => !r.fork).slice(0, 4); status.textContent = `${usable.length} latest / live`; repoList.innerHTML = usable.map(r => `<a class="repo" href="${r.html_url}" target="_blank" rel="noreferrer"><div><h3>${escape(r.name)}</h3><p>${escape(r.description || 'An ongoing frontend learning project.')}</p></div><span>${escape(r.language || 'Code')} ↗</span></a>`).join(''); })
    .catch(() => { status.textContent = 'Profile available'; repoList.innerHTML = `<a class="repo" href="https://github.com/basim-27" target="_blank" rel="noreferrer"><div><h3>Explore GitHub</h3><p>Visit the profile to see current public repositories and work in progress.</p></div><span>Open ↗</span></a>`; });
})();
