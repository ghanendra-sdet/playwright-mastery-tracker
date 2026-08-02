/* ─────────────────────────────────────────────
   Playwright Mastery Tracker — app.js v4
   Dual Tracker: 90-Day Plan + Udemy Course
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Constants ── */
  const STORE_KEY       = 'pw_tracker_v3';
  const UDEMY_STORE_KEY = 'pw_udemy_tracker_v1';
  const CIRC = 2 * Math.PI * 47;   // r=47 → ≈295.31
  let   activeTab       = 'plan';   // 'plan' | 'udemy'

  /* ── State ── */
  const S = {
    completed:   new Set(),
    notes:       {},
    dates:       {},
    theme:       'dark',
    filter:      'all',
    query:       '',
    openModules: new Set([0])
  };

  /* ── Persist ── */
  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      if (Array.isArray(d.completed))   S.completed   = new Set(d.completed);
      if (d.notes)                      S.notes        = d.notes;
      if (d.dates)                      S.dates        = d.dates;
      if (d.theme)                      S.theme        = d.theme;
      if (Array.isArray(d.openModules)) S.openModules  = new Set(d.openModules);
    } catch (_) { /* corrupt data — start fresh */ }
  }

  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      completed:   [...S.completed],
      notes:       S.notes,
      dates:       S.dates,
      theme:       S.theme,
      openModules: [...S.openModules]
    }));
  }

  /* ── DOM refs ── */
  const $  = id => document.getElementById(id);
  const ringVal    = $('ring-val');
  const ringPct    = $('ring-pct');
  const ringFrac   = $('ring-frac');
  const sDone      = $('s-done');
  const sMods      = $('s-mods');
  const sLeft      = $('s-left');
  const modulesEl  = $('modules');
  const searchEl   = $('search');
  const navAll     = $('nav-all');
  const navTodo    = $('nav-todo');
  const navDone    = $('nav-done');
  const themeBtn   = $('theme-btn');
  const themeLbl   = $('theme-lbl');
  const themeIcon  = $('theme-icon');
  const fabOpen    = $('fab-open');
  const drawer     = $('drawer');
  const drawerClose= $('drawer-close');
  const toastsEl   = $('toasts');

  /* ── Total topics ── */
  const totalDays = syllabusData.reduce((a, m) => a + m.days.length, 0);

  /* ──────────────────────────────────────────
     THEME
  ────────────────────────────────────────── */
  const SUN_PATH  = 'M12 3v1m0 16v1M4.22 4.22l.71.71m12.73 12.73.71.71M3 12h1m16 0h1M4.22 19.78l.71-.71m12.73-12.73.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z';
  const MOON_PATH = 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z';

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.theme);
    const light = S.theme === 'light';
    themeLbl.textContent = light ? '🌙 Dark Mode' : '☀️ Light Mode';
    themeIcon.querySelector('path').setAttribute('d', light ? MOON_PATH : SUN_PATH);
  }

  themeBtn.addEventListener('click', () => {
    S.theme = S.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    save();
    toast(`Switched to ${S.theme === 'light' ? '☀️ Light' : '🌙 Dark'} mode`);
  });

  /* ──────────────────────────────────────────
     METRICS
  ────────────────────────────────────────── */
  // updateMetrics() is defined below (tab-aware dual-tracker version)


  /* ──────────────────────────────────────────
     RENDER
  ────────────────────────────────────────── */
  function render() {
    modulesEl.innerHTML = '';
    let shown = 0;
    const q = S.query.toLowerCase().trim();

    syllabusData.forEach((mod, idx) => {

      /* Filter days */
      const filteredDays = mod.days.filter(d => {
        const hit = !q
          || d.topic.toLowerCase().includes(q)
          || d.details.toLowerCase().includes(q)
          || `day ${d.day}`.includes(q)
          || mod.moduleName.toLowerCase().includes(q);
        if (!hit) return false;
        if (S.filter === 'todo') return !S.completed.has(d.day);
        if (S.filter === 'done') return  S.completed.has(d.day);
        return true;
      });

      if (filteredDays.length === 0) return;
      shown += filteredDays.length;

      const total   = mod.days.length;
      const done    = mod.days.filter(d => S.completed.has(d.day)).length;
      const pct     = Math.round(done / total * 100);
      const allDone = done === total;
      const isOpen  = S.openModules.has(idx);

      /* ── Module card ── */
      const card = document.createElement('div');
      card.className = `module-card${isOpen ? ' expanded' : ''}`;

      /* ── Header ── */
      const head = document.createElement('div');
      head.className = 'module-head';
      head.innerHTML = `
        <div class="module-num">M${mod.moduleNum}</div>
        <div class="module-info">
          <div class="module-name">${mod.moduleName}</div>
          <div class="module-meta">
            <div class="module-bar-bg">
              <div class="module-bar-fill" style="width:${pct}%"></div>
            </div>
            <span class="module-pct">${done}/${total} &middot; ${pct}%</span>
            ${allDone ? '<span class="module-done-badge">✓ Complete</span>' : ''}
          </div>
        </div>
        <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      `;

      /* ── Body ── */
      const body      = document.createElement('div');
      body.className  = 'module-body';
      const inner     = document.createElement('div');
      inner.className = 'module-body-inner';

      /* ── Info panel (Key Coverage + Projects) ── */
      const panel = document.createElement('div');
      panel.className = 'mod-info-panel';
      panel.innerHTML = `
        <div class="mod-subtitle">${mod.subtitle}</div>
        <div class="mod-info-grid">
          <div class="mod-info-col">
            <div class="mod-info-col-title">Key Coverage</div>
            <ul class="mod-list">
              ${mod.keyCoverage.map(k => `
                <li>
                  <span class="bullet-key">›</span>
                  <span>${k}</span>
                </li>`).join('')}
            </ul>
          </div>
          <div class="mod-info-col">
            <div class="mod-info-col-title">Hands‑On Projects</div>
            <ul class="mod-list">
              ${mod.projects.map(p => `
                <li>
                  <span class="bullet-project">◆</span>
                  <span>${p}</span>
                </li>`).join('')}
            </ul>
          </div>
        </div>
        <hr class="mod-divider"/>
      `;
      inner.appendChild(panel);

      /* ── Day rows ── */
      filteredDays.forEach(day => {
        const isDone    = S.completed.has(day.day);
        const savedDate = S.dates[day.day]  || '';
        const savedNote = S.notes[day.day]  || '';

        const row = document.createElement('div');
        row.className = `day-row${isDone ? ' done' : ''}`;
        row.innerHTML = `
          <div>
            <input type="checkbox" id="cb-${day.day}" class="cb-input" ${isDone ? 'checked' : ''}>
            <label for="cb-${day.day}" class="cb-label">
              <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            </label>
          </div>
          <div class="day-badge">Day ${day.day}</div>
          <div class="day-info">
            <div class="day-topic">${day.topic}</div>
            <div class="day-details">${day.details}</div>
          </div>
          <div class="day-inputs">
            <input type="text" class="field field-date"  placeholder="Start date…" value="${escHtml(savedDate)}" aria-label="Start Date">
            <input type="text" class="field field-notes" placeholder="Notes…"      value="${escHtml(savedNote)}" aria-label="Notes">
          </div>
        `;

        /* Checkbox handler */
        const cb = row.querySelector('.cb-input');
        cb.addEventListener('change', e => {
          if (e.target.checked) {
            S.completed.add(day.day);
            row.classList.add('done');
            toast(`Day ${day.day} — ${day.topic} marked complete ✅`);
          } else {
            S.completed.delete(day.day);
            row.classList.remove('done');
            toast(`Day ${day.day} moved back to remaining`);
          }
          save();
          updateMetrics();

          // Live-update module header bar (no full re-render)
          const newDone = mod.days.filter(d => S.completed.has(d.day)).length;
          const newPct  = Math.round(newDone / total * 100);
          head.querySelector('.module-bar-fill').style.width = newPct + '%';
          head.querySelector('.module-pct').innerHTML = `${newDone}/${total} &middot; ${newPct}%`;
          const badge = head.querySelector('.module-done-badge');
          if (newDone === total && !badge) {
            const b = document.createElement('span');
            b.className = 'module-done-badge';
            b.textContent = '✓ Complete';
            head.querySelector('.module-meta').appendChild(b);
          } else if (newDone < total && badge) {
            badge.remove();
          }
        });

        /* Date field */
        row.querySelector('.field-date').addEventListener('blur', e => {
          const v = e.target.value.trim();
          v ? (S.dates[day.day] = v) : delete S.dates[day.day];
          save();
        });

        /* Notes field */
        row.querySelector('.field-notes').addEventListener('blur', e => {
          const v = e.target.value.trim();
          v ? (S.notes[day.day] = v) : delete S.notes[day.day];
          save();
        });

        inner.appendChild(row);
      });

      body.appendChild(inner);
      card.appendChild(head);
      card.appendChild(body);

      /* ── Accordion toggle ── */
      head.addEventListener('click', e => {
        if (e.target.closest('.cb-input') ||
            e.target.closest('.cb-label') ||
            e.target.closest('.day-inputs')) return;

        const opening = !card.classList.contains('expanded');
        card.classList.toggle('expanded', opening);

        if (opening) {
          S.openModules.add(idx);
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          S.openModules.delete(idx);
          body.style.maxHeight = '0';
        }
        save();
      });

      /* Set initial height if this module is open */
      if (isOpen) {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          body.style.maxHeight = body.scrollHeight + 'px';
        }));
      }

      modulesEl.appendChild(card);
    });

    /* Empty state */
    if (shown === 0) {
      modulesEl.innerHTML = `
        <div class="empty">
          <h3>No topics found</h3>
          <p>Try a different search term or switch the filter above.</p>
        </div>`;
    }
  }

  /* ──────────────────────────────────────────
     FILTER NAV
  ────────────────────────────────────────── */
  function setFilter(f) {
    S.filter = f;
    [navAll, navTodo, navDone].forEach(b => b.classList.remove('active'));
    ({ all: navAll, todo: navTodo, done: navDone }[f]).classList.add('active');
    render();
  }

  navAll.addEventListener('click',  () => setFilter('all'));
  navTodo.addEventListener('click', () => setFilter('todo'));
  navDone.addEventListener('click', () => setFilter('done'));

  /* ── Search ── */
  searchEl.addEventListener('input', e => { S.query = e.target.value; render(); });

  /* ──────────────────────────────────────────
     CHEAT SHEET DRAWER
  ────────────────────────────────────────── */
  fabOpen.addEventListener('click', e => { e.stopPropagation(); drawer.classList.toggle('open'); });
  drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
  document.addEventListener('click', e => {
    if (!drawer.contains(e.target) && !fabOpen.contains(e.target))
      drawer.classList.remove('open');
  });

  /* ──────────────────────────────────────────
     TOAST
  ────────────────────────────────────────── */
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span class="toast-icon">✓</span><span>${msg}</span>`;
    toastsEl.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity .3s, transform .3s';
      t.style.opacity    = '0';
      t.style.transform  = 'translateY(8px)';
      setTimeout(() => t.remove(), 320);
    }, 2800);
  }

  /* ── Helper: escape HTML for input values ── */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ── Helper: debounce ── */
  function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }

  /* ──────────────────────────────────────────
     VIDEO ACCORDION
  ────────────────────────────────────────── */
  const videoCard   = $('video-card');
  const videoHeader = $('video-header');
  const videoBody   = $('video-body');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (videoCard.classList.contains('open')) {
      videoBody.style.maxHeight = videoBody.scrollHeight + 'px';
    }
  }));

  videoHeader.addEventListener('click', () => {
    const opening = !videoCard.classList.contains('open');
    videoCard.classList.toggle('open', opening);
    videoBody.style.maxHeight = opening ? videoBody.scrollHeight + 'px' : '0';
  });

  /* ══════════════════════════════════════════
     UDEMY TRACKER
  ══════════════════════════════════════════ */

  /* ── Udemy State ── */
  const SU = {
    completed:   new Set(),
    notes:       {},   // topic notes
    codes:       {},   // topic code snippets
    openModules: new Set([0])
  };

  const udemyTotal = udemyData.reduce((a, m) => a + m.topics.length, 0);

  function loadUdemy() {
    try {
      const d = JSON.parse(localStorage.getItem(UDEMY_STORE_KEY) || '{}');
      if (Array.isArray(d.completed))   SU.completed   = new Set(d.completed);
      if (d.notes)                      SU.notes        = d.notes;
      if (d.codes)                      SU.codes        = d.codes;
      if (Array.isArray(d.openModules)) SU.openModules  = new Set(d.openModules);
    } catch (_) {}
  }

  function saveUdemy() {
    localStorage.setItem(UDEMY_STORE_KEY, JSON.stringify({
      completed:   [...SU.completed],
      notes:       SU.notes,
      codes:       SU.codes,
      openModules: [...SU.openModules]
    }));
  }

  /* ── Update sidebar metrics for active tab ── */
  function updateMetrics() {
    if (activeTab === 'plan') {
      const done  = S.completed.size;
      const pct   = totalDays > 0 ? Math.round(done / totalDays * 100) : 0;
      ringPct.textContent  = pct + '%';
      ringFrac.textContent = `${done}/${totalDays}`;
      ringVal.style.strokeDasharray  = `${CIRC}`;
      ringVal.style.strokeDashoffset = `${CIRC - (CIRC * pct / 100)}`;
      sDone.textContent = done;
      sLeft.textContent = totalDays - done;
      const modsDone = syllabusData.filter(m =>
        m.days.length > 0 && m.days.every(d => S.completed.has(d.day))
      ).length;
      sMods.textContent = modsDone;
    } else {
      const done  = SU.completed.size;
      const pct   = udemyTotal > 0 ? Math.round(done / udemyTotal * 100) : 0;
      ringPct.textContent  = pct + '%';
      ringFrac.textContent = `${done}/${udemyTotal}`;
      ringVal.style.strokeDasharray  = `${CIRC}`;
      ringVal.style.strokeDashoffset = `${CIRC - (CIRC * pct / 100)}`;
      sDone.textContent = done;
      sLeft.textContent = udemyTotal - done;
      const modsDone = udemyData.filter(m =>
        m.topics.length > 0 && m.topics.every(t => SU.completed.has(t.id))
      ).length;
      sMods.textContent = modsDone;
    }
  }

  /* ── Render Udemy Modules ── */
  function renderUdemy() {
    const container = $('udemy-modules');
    container.innerHTML = '';

    udemyData.forEach((mod, idx) => {
      const total   = mod.topics.length;
      const done    = mod.topics.filter(t => SU.completed.has(t.id)).length;
      const pct     = Math.round(done / total * 100);
      const allDone = done === total;
      const isOpen  = SU.openModules.has(idx);

      const card = document.createElement('div');
      card.className = `module-card${isOpen ? ' expanded' : ''}`;

      /* Header */
      const head = document.createElement('div');
      head.className = 'module-head';
      head.innerHTML = `
        <div class="module-num">M${mod.moduleNum}</div>
        <div class="module-info">
          <div class="module-name">${mod.moduleName}</div>
          <div class="module-meta">
            <div class="module-bar-bg">
              <div class="module-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,var(--purple),var(--cyan))"></div>
            </div>
            <span class="module-pct">${done}/${total} &middot; ${pct}%</span>
            ${allDone ? '<span class="module-done-badge">✓ Complete</span>' : ''}
          </div>
        </div>
        <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      `;

      /* Body */
      const body  = document.createElement('div');
      body.className = 'module-body';
      const inner = document.createElement('div');
      inner.className = 'module-body-inner';

      /* Info panel */
      const panel = document.createElement('div');
      panel.className = 'mod-info-panel';
      panel.innerHTML = `
        <div class="mod-subtitle" style="color:var(--purple)">${mod.subtitle}</div>
        <div class="mod-info-col">
          <div class="mod-info-col-title">Key Coverage</div>
          <ul class="mod-list">
            ${mod.keyCoverage.map(k => `
              <li><span class="bullet-key" style="color:var(--purple)">›</span><span>${k}</span></li>
            `).join('')}
          </ul>
        </div>
        <hr class="mod-divider"/>
      `;
      inner.appendChild(panel);

      /* Topic rows */
      mod.topics.forEach(topic => {
        const isDone     = SU.completed.has(topic.id);
        const savedNote  = SU.notes[topic.id]  || '';
        const savedCode  = SU.codes[topic.id]  || '';
        const hasCode    = savedCode.trim().length > 0;

        const row = document.createElement('div');
        row.className = `udemy-row${isDone ? ' done' : ''}`;

        row.innerHTML = `
          <div class="udemy-row-main">
            <div>
              <input type="checkbox" id="ucb-${topic.id}" class="cb-input" ${isDone ? 'checked' : ''}>
              <label for="ucb-${topic.id}" class="cb-label">
                <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </label>
            </div>
            <div class="udemy-info">
              <div class="udemy-topic">${topic.topic}</div>
              <div class="udemy-details">${topic.details}</div>
            </div>
            <div class="udemy-actions">
              <input type="text" class="field field-notes" placeholder="Notes…" value="${escHtml(savedNote)}" aria-label="Notes" style="width:160px;">
              <button class="code-toggle${hasCode ? ' has-code' : ''}" aria-label="Toggle code notes">
                <svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                ${hasCode ? 'Code ✓' : 'Code'}
              </button>
            </div>
          </div>
          <div class="code-panel">
            <div class="code-header">
              <span class="code-header-lbl">// Code Notes — ${topic.topic}</span>
              <button class="code-close" aria-label="Close">×</button>
            </div>
            <textarea class="code-textarea" placeholder="// Paste your code or notes here…\n// This saves automatically when you click away.">${escHtml(savedCode)}</textarea>
          </div>
        `;

        /* Checkbox */
        const cb = row.querySelector('.cb-input');
        cb.addEventListener('change', e => {
          if (e.target.checked) {
            SU.completed.add(topic.id);
            row.classList.add('done');
            toast(`✅ "${topic.topic}" marked complete`);
          } else {
            SU.completed.delete(topic.id);
            row.classList.remove('done');
            toast(`↩ "${topic.topic}" moved back to remaining`);
          }
          saveUdemy(); updateMetrics();
          const newDone = mod.topics.filter(t => SU.completed.has(t.id)).length;
          const newPct  = Math.round(newDone / total * 100);
          head.querySelector('.module-bar-fill').style.width = newPct + '%';
          head.querySelector('.module-pct').innerHTML = `${newDone}/${total} &middot; ${newPct}%`;
          const badge = head.querySelector('.module-done-badge');
          if (newDone === total && !badge) {
            const b = document.createElement('span'); b.className = 'module-done-badge'; b.textContent = '✓ Complete';
            head.querySelector('.module-meta').appendChild(b);
          } else if (newDone < total && badge) { badge.remove(); }
        });

        /* Notes field — save on input (debounced) + blur */
        const notesField = row.querySelector('.field-notes');
        const saveNote = debounce(() => {
          const v = notesField.value.trim();
          v ? (SU.notes[topic.id] = v) : delete SU.notes[topic.id];
          saveUdemy();
        }, 600);
        notesField.addEventListener('input', saveNote);
        notesField.addEventListener('blur',  saveNote);

        /* Code toggle & close */
        const codePanel  = row.querySelector('.code-panel');
        const codeToggle = row.querySelector('.code-toggle');
        const codeClose  = row.querySelector('.code-close');
        const codeArea   = row.querySelector('.code-textarea');

        codeToggle.addEventListener('click', () => {
          const opening = !codePanel.classList.contains('open');
          codePanel.classList.toggle('open', opening);
          if (opening) codeArea.focus();
        });

        codeClose.addEventListener('click', () => {
          codePanel.classList.remove('open');
        });

        /* Code textarea — save on input (debounced 800ms) + blur */
        function persistCode() {
          const v = codeArea.value.trim();
          if (v) {
            SU.codes[topic.id] = v;
            codeToggle.classList.add('has-code');
            codeToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>Code ✓`;
          } else {
            delete SU.codes[topic.id];
            codeToggle.classList.remove('has-code');
            codeToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>Code`;
          }
          saveUdemy();
        }
        const debouncedPersistCode = debounce(persistCode, 800);
        codeArea.addEventListener('input', debouncedPersistCode);
        codeArea.addEventListener('blur',  persistCode);   // immediate on blur

        inner.appendChild(row);
      });

      body.appendChild(inner);
      card.appendChild(head);
      card.appendChild(body);

      /* Accordion */
      head.addEventListener('click', e => {
        if (e.target.closest('.cb-input') || e.target.closest('.cb-label') ||
            e.target.closest('.udemy-actions') || e.target.closest('.code-panel')) return;
        const opening = !card.classList.contains('expanded');
        card.classList.toggle('expanded', opening);
        body.style.maxHeight = opening ? body.scrollHeight + 'px' : '0';
        opening ? SU.openModules.add(idx) : SU.openModules.delete(idx);
        saveUdemy();
      });

      if (isOpen) {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          body.style.maxHeight = body.scrollHeight + 'px';
        }));
      }

      container.appendChild(card);
    });
  }

  /* ──────────────────────────────────────────
     TAB SWITCHING
  ────────────────────────────────────────── */
  const tabPlan  = $('tab-plan');
  const tabUdemy = $('tab-udemy');
  const panelPlan  = $('panel-plan');
  const panelUdemy = $('panel-udemy');

  function switchTab(tab) {
    activeTab = tab;

    tabPlan.classList.toggle('active', tab === 'plan');
    tabUdemy.classList.toggle('active', tab === 'udemy');
    panelPlan.classList.toggle('active', tab === 'plan');
    panelUdemy.classList.toggle('active', tab === 'udemy');

    updateMetrics();
  }

  tabPlan.addEventListener('click',  () => switchTab('plan'));
  tabUdemy.addEventListener('click', () => switchTab('udemy'));

  /* ──────────────────────────────────────────
     BOOT
  ────────────────────────────────────────── */
  load();
  loadUdemy();
  applyTheme();
  updateMetrics();
  render();
  renderUdemy();

  /* Safety net: flush all pending saves before page unloads
     (handles hard-refresh, tab close, browser exit)        */
  window.addEventListener('beforeunload', () => {
    save();
    saveUdemy();
  });
});

