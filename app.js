const items = window.CTTSS_PRESENTATIONS || [];
const grid = document.querySelector('#presentation-grid');
const search = document.querySelector('#search');
const filters = document.querySelectorAll('.filter');
const empty = document.querySelector('#empty');
const dialog = document.querySelector('#viewer');
let activeFilter = 'all';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
  const term = search.value.trim().toLowerCase();
  const visible = items.filter(x => (activeFilter === 'all' || x.status === activeFilter) && [x.title,x.presenter,x.affiliation,x.description,...(x.keywords||[])].join(' ').toLowerCase().includes(term));
  grid.innerHTML = visible.map(x => `<article class="presentation-card"><div class="card-body"><div class="card-type">${x.status === 'available' ? 'AVAILABLE' : 'AWAITING DEPOSIT'}</div><h3>${esc(x.title)}</h3><p class="presenter">${esc(x.presenter)} <span>· ${esc(x.affiliation)}</span></p><p class="description">${esc(x.description)}</p><div class="tags">${(x.keywords||[]).map(k=>`<span>${esc(k)}</span>`).join('')}</div><div class="card-actions">${x.status === 'available' && x.pdf ? `<button class="view-btn" data-view="${esc(x.id)}">View slides ↗</button>` : ''}${x.status === 'available' && x.powerpoint ? `<a href="${esc(x.powerpoint)}" download>Download PPTX ↓</a>` : '<span class="not-yet">Materials not yet deposited</span>'}</div></div></article>`).join('');
  empty.hidden = visible.length !== 0;
  const n = items.filter(x=>x.status==='available').length;
  document.querySelector('#archive-count').textContent = `${n} presentation${n===1?'':'s'} available`;
}
search.addEventListener('input', render);
filters.forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;filters.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});render();}));
grid.addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(!b)return;const item=items.find(x=>x.id===b.dataset.view);if(!item||!item.pdf)return;document.querySelector('#viewer-title').textContent=item.title;document.querySelector('#viewer-author').textContent=`${item.presenter} · ${item.affiliation}`;document.querySelector('#viewer-frame').src=item.pdf+'#toolbar=1&navpanes=0';document.querySelector('#viewer-download').href=item.powerpoint||item.pdf;dialog.showModal();});
function closeViewer(){dialog.close();document.querySelector('#viewer-frame').removeAttribute('src');}
document.querySelector('#close-viewer').addEventListener('click',closeViewer);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeViewer();});
dialog.addEventListener('close',()=>document.querySelector('#viewer-frame').removeAttribute('src'));
render();
