// ============================================================
// ESTRELLAS — canvas de fondo completo, encima del tornasol
// ============================================================
(function() {
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var W, H, stars = [];

  function initStars() {
    stars = [];
    for (var i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.3,
        speed: Math.random() * 0.6 + 0.1,
        phase: Math.random() * Math.PI * 2,
        driftAmp: Math.random() * 12 + 4,
        driftFreq: Math.random() * 0.0004 + 0.0002
      });
    }
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    initStars();
  }

  var scrollProgress = 0;
  window.addEventListener('scroll', function() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = max > 0 ? window.scrollY / max : 0;
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(function(s) {
      var yOff = scrollProgress * s.speed * H * 1.5;
      var y = ((s.y - yOff) % H + H) % H;
      var x = s.x + Math.sin(t * s.driftFreq + s.phase) * s.driftAmp;
      var tw = 0.35 + 0.3 * Math.sin(t * 0.0012 + s.phase);
      var g = ctx.createRadialGradient(x, y, 0, x, y, s.r * 4);
      g.addColorStop(0, 'rgba(180,142,200,' + tw + ')');
      g.addColorStop(0.5, 'rgba(124,92,191,' + (tw * 0.35) + ')');
      g.addColorStop(1, 'rgba(124,92,191,0)');
      ctx.beginPath(); ctx.arc(x, y, s.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(230,210,255,' + (tw * 0.95) + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ============================================================
// NAV SCROLL
// ============================================================
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});


// ============================================================
// RENDER BLOG desde data.js
// ============================================================
var currentPostIndex = -1;
var POSTS_PER_PAGE = 4;

function renderBlog(lang, cat) {
  var lista = document.getElementById('blog-list');
  if (!lista) return;
  lista.innerHTML = '';

  var filtered = (cat && cat !== 'all')
    ? POSTS.filter(function(p) { return p.categoria === cat; })
    : POSTS;

  var shown = filtered.slice(0, POSTS_PER_PAGE);
  var hasMore = filtered.length > POSTS_PER_PAGE;

  shown.forEach(function(p) {
    var realIndex = POSTS.indexOf(p);
    var div = document.createElement('div');
    div.className = 'bitem' + (p.activo ? '' : ' coming');
    div.dataset.cat = p.categoria;
    if (p.activo) {
      div.onclick = (function(idx) {
        return function() { openPost(idx); };
      })(realIndex);
    }
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var fecha = lang === 'en' ? p.fecha_en : p.fecha_es;
    div.innerHTML =
      '<span class="bdate">' + fecha + '</span>' +
      '<span class="bitem-title">' + titulo + '</span>' +
      '<span class="btag ' + p.categoria + '">' + p.tag + '</span>';
    lista.appendChild(div);
  });

  var existing = document.getElementById('ver-mas-btn');
  if (existing) existing.remove();

  if (hasMore) {
    var btn = document.createElement('button');
    btn.id = 'ver-mas-btn';
    btn.className = 'btab';
    btn.style.marginTop = '1.5rem';
    btn.textContent = lang === 'en' ? 'See all posts →' : 'Ver todos →';
    btn.onclick = function() { renderBlogAll(lang, cat); };
    lista.parentElement.appendChild(btn);
  }
}

function renderBlogAll(lang, cat) {
  var lista = document.getElementById('blog-list');
  if (!lista) return;
  lista.innerHTML = '';

  var filtered = (cat && cat !== 'all')
    ? POSTS.filter(function(p) { return p.categoria === cat; })
    : POSTS;

  filtered.forEach(function(p) {
    var realIndex = POSTS.indexOf(p);
    var div = document.createElement('div');
    div.className = 'bitem' + (p.activo ? '' : ' coming');
    div.dataset.cat = p.categoria;
    if (p.activo) {
      div.onclick = (function(idx) {
        return function() { openPost(idx); };
      })(realIndex);
    }
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var fecha = lang === 'en' ? p.fecha_en : p.fecha_es;
    div.innerHTML =
      '<span class="bdate">' + fecha + '</span>' +
      '<span class="bitem-title">' + titulo + '</span>' +
      '<span class="btag ' + p.categoria + '">' + p.tag + '</span>';
    lista.appendChild(div);
  });

  var btn = document.getElementById('ver-mas-btn');
  if (btn) btn.remove();
}


// ============================================================
// RENDER PROYECTOS desde data.js
// ============================================================
function renderProyectos(lang) {
  var grid = document.getElementById('proy-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROYECTOS.forEach(function(p) {
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var desc = lang === 'en' ? p.desc_en : p.desc_es;
    var techs = (lang === 'en' && p.techs_en) ? p.techs_en : (p.techs_es || p.techs);
    var card = document.createElement('div');
    card.className = 'pcard reveal';
    card.innerHTML =
      '<div class="pnum">' + p.num + '</div>' +
      '<div class="ptitle">' + titulo + '</div>' +
      '<div class="pdesc">' + desc + '</div>' +
      '<div class="pfoot">' +
        '<span class="ptechs">' + techs + '</span>' +
        '<a href="' + p.link + '" class="parrow">&#8594;</a>' +
      '</div>';
    grid.appendChild(card);
  });

  reobserve();
}


// ============================================================
// BLOG FILTER
// ============================================================
var currentCat = 'all';

function filterBlog(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.btab').forEach(function(b) { b.classList.remove('on'); });
  btn.classList.add('on');
  renderBlog(currentLang, cat);
}


// ============================================================
// MODAL + LINKS PARA COMPARTIR
// ============================================================
function openPost(i) {
  var p = POSTS[i];
  if (!p || !p.activo) return;
  currentPostIndex = i;
  var lang = currentLang;

  document.getElementById('modal-label').textContent =
    lang === 'en' ? (p.label_en || '') : (p.label_es || '');
  document.getElementById('modal-title').textContent =
    lang === 'en' ? p.titulo_en : p.titulo_es;
  document.getElementById('modal-sub').innerHTML =
    lang === 'en' ? (p.subtitulo_en || '') : (p.subtitulo_es || '');
  document.getElementById('modal-body-content').innerHTML =
    lang === 'en' ? p.contenido_en : p.contenido_es;

  // Actualizar URL sin recargar la página
  var newUrl = window.location.pathname + window.location.search.replace(/[?&]post=\d+/, '');
  var separator = newUrl.indexOf('?') >= 0 ? '&' : '?';
  history.pushState({ post: i }, '', newUrl + separator + 'post=' + i);

  // Actualizar botón de compartir
  updateShareBtn();

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePostBtn() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
  currentPostIndex = -1;
  // Limpiar el parámetro de la URL al cerrar
  history.pushState({}, '', window.location.pathname);
}

function closePost(e) {
  if (e.target === document.getElementById('modal')) closePostBtn();
}

function updateShareBtn() {
  var btn = document.getElementById('share-btn');
  if (!btn) return;
  var lang = currentLang;
  btn.textContent = lang === 'en' ? '⤤ Copy link' : '⤤ Copiar link';
  btn.dataset.copied = 'false';
}

function sharePost() {
  var url = window.location.href;
  var btn = document.getElementById('share-btn');
  var lang = currentLang;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function() {
      btn.textContent = lang === 'en' ? '✓ Copied!' : '✓ ¡Copiado!';
      setTimeout(function() { updateShareBtn(); }, 2000);
    });
  } else {
    // fallback para navegadores sin clipboard API
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = lang === 'en' ? '✓ Copied!' : '✓ ¡Copiado!';
    setTimeout(function() { updateShareBtn(); }, 2000);
  }
}

// Leer ?post=N de la URL al cargar y abrir el post correspondiente
function checkUrlPost() {
  var params = new URLSearchParams(window.location.search);
  var postParam = params.get('post');
  if (postParam !== null) {
    var idx = parseInt(postParam, 10);
    if (!isNaN(idx) && POSTS[idx] && POSTS[idx].activo) {
      // Pequeño delay para que el DOM esté listo
      setTimeout(function() { openPost(idx); }, 300);
    }
  }
}


// ============================================================
// CAMBIO DE IDIOMA
// ============================================================
var currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-es]').forEach(function(el) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') return;
    var v = el.getAttribute('data-' + lang);
    if (v) el.innerHTML = v;
  });

  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var v = a.getAttribute('data-' + lang);
    if (v) a.textContent = v;
  });

  document.querySelectorAll('.btab').forEach(function(b) {
    var v = b.getAttribute('data-' + lang);
    if (v) b.textContent = v;
  });

  document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(function(el) {
    el.placeholder = el.getAttribute('data-placeholder-' + lang);
  });

  var aboutH = document.querySelector('.about-h');
  if (aboutH) {
    aboutH.innerHTML = lang === 'en'
      ? 'Mathematics to<br>understand the <em>world.</em>'
      : 'Matemática para<br>entender el <em>mundo.</em>';
  }

  renderBlog(lang, currentCat);
  renderProyectos(lang);

  if (currentPostIndex >= 0) {
    var p = POSTS[currentPostIndex];
    if (p) {
      document.getElementById('modal-body-content').innerHTML =
        lang === 'en' ? p.contenido_en : p.contenido_es;
      document.getElementById('modal-title').textContent =
        lang === 'en' ? p.titulo_en : p.titulo_es;
      document.getElementById('modal-sub').innerHTML =
        lang === 'en' ? (p.subtitulo_en || '') : (p.subtitulo_es || '');
      updateShareBtn();
    }
  }
}


// ============================================================
// SCROLL REVEAL
// ============================================================
var revealObserver;

function reobserve() {
  document.querySelectorAll('.reveal:not(.in)').forEach(function(el) {
    if (revealObserver) revealObserver.observe(el);
  });
}

revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});


// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  renderBlog('es', 'all');
  renderProyectos('es');
  checkUrlPost();
});
