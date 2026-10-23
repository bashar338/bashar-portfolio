const copy = {
  ar: {
    navWork: 'الأعمال', navAbout: 'عني', navContact: 'تواصل', letsTalk: 'لنتحدث', available: 'متاح لمشاريع مختارة · 2024—25', heroLead: 'حكايات بصرية،', heroEm: 'مقصوصة بقصد.', heroSub: 'أنا بشار زاهد — Video Editor & Motion Graphic، أحوّل اللقطات الخام إلى أفلام بإيقاع واضح وحركة لها معنى.', explore: 'استعرض الأعمال', moreAbout: 'تعرف عليّ أكثر', heroNote: 'إيقاع، لون، وحركة', workTitle: 'أعمال مختارة', workIntro: 'مجموعة من التجارب التي تجمع المونتاج، الموشن، والصوت في قصة واحدة.', aboutTitle: 'أصنع المعنى<br /><em>بين اللقطات.</em>', aboutLead: 'أحوّل اللقطات الخام إلى تجارب تتحرك بإيقاع واضح. من أول cut إلى آخر frame، أبحث عن اللحظة التي تجعل الفكرة تُحس قبل أن تُفهم.', startProject: 'ابدأ مشروعًا', service1: 'Video Editing', service1Desc: 'قص، إيقاع، وقصة', service2: 'Motion Graphics', service2Desc: 'حركة تعطي الفكرة صوتًا', service3: 'Color & Sound', service3Desc: 'اللمسة التي تكمل المشهد', processTitle: 'من الفكرة إلى الإطار', processIntro: 'سير عمل بسيط ومركّز، حتى تبقى الطاقة في المكان الصحيح: داخل العمل.', process1: 'Listen', process1Desc: 'أفهم هدفك، جمهورك، والإحساس الذي تريد تركه.', process2: 'Shape', process2Desc: 'أبني الإيقاع، أختار اللقطات، وأحرك الفكرة بصريًا.', process3: 'Polish', process3Desc: 'لون، صوت، وتسليم جاهز للنشر أينما كان.', contactTitle: 'عندك قصة؟<br /><em>خلّنا نحركها.</em>', uploadHint: 'أضف رابط الفيديو المستضاف خارجيًا في script.js.', videoUnavailable: 'هذا المقطع غير متاح الآن؛ ستُضاف رابطه الخارجي قريبًا.'
  },
  en: {
    navWork: 'Work', navAbout: 'About', navContact: 'Contact', letsTalk: "Let's talk", available: 'Available for selected projects · 2024—25', heroLead: 'Visual stories,', heroEm: 'cut with intent.', heroSub: "I'm Bashar Zahid — a video editor & motion designer shaping raw footage into films with rhythm and meaning.", explore: 'Explore selected work', moreAbout: 'More about me', heroNote: 'Rhythm, color, motion', workTitle: 'Selected work', workIntro: 'A collection of edits, motion studies, and stories shaped frame by frame.', aboutTitle: 'Meaning lives<br /><em>between the cuts.</em>', aboutLead: 'I turn raw footage into experiences with a clear pulse. From the first cut to the final frame, I look for the moment an idea can be felt before it is understood.', startProject: 'Start a project', service1: 'Video Editing', service1Desc: 'Cuts, rhythm, story', service2: 'Motion Graphics', service2Desc: 'Movement with a point of view', service3: 'Color & Sound', service3Desc: 'The finish that completes the frame', processTitle: 'From idea to frame', processIntro: 'A focused process that keeps the energy where it belongs: inside the work.', process1: 'Listen', process1Desc: 'I learn your goal, your audience, and the feeling you want to leave behind.', process2: 'Shape', process2Desc: 'I build the rhythm, choose the moments, and move the idea forward.', process3: 'Polish', process3Desc: 'Color, sound, and a final delivery ready for wherever it needs to go.', contactTitle: 'Have a story?<br /><em>Let’s make it move.</em>', uploadHint: 'Add the externally hosted video URL in script.js.', videoUnavailable: 'This clip is not available yet; its external link will be added soon.'
  }
};

const projectData = {
  afterlight: { title: 'Afterlight', kicker: 'FILM EDIT / 2024', duration: '01:24', video: '' },
  kinetic: { title: 'Kinetic Type', kicker: 'MOTION DESIGN / 2024', duration: '00:41', video: '' },
  noura: { title: 'Noura', kicker: 'BRAND FILM / 2023', duration: '02:10', video: '' },
  signal: { title: 'Find Your Signal', kicker: 'SOCIAL CAMPAIGN / 2023', duration: '00:36', video: '' },
  afterEffects: {
    title: 'After Effects',
    kicker: 'VIDEO COLLECTION',
    clips: [
      { title: '1', duration: '00:48', video: 'media/1.mp4' },
      { title: '2', duration: '00:47', video: 'media/2.mp4' },
      { title: '3', duration: '00:41', video: 'media/3.mp4' },
      { title: '4', duration: '00:27', video: 'media/4.mp4' },
      { title: '5', duration: '00:40', video: 'media/٥.mp4' },
      { title: '6', duration: '00:32', video: 'media/6.mov' },
      { title: '7', duration: '01:02', video: 'media/7.mp4' },
      { title: '8', duration: '00:45', video: 'media/8.mp4' },
      { title: '9', duration: '00:29', video: 'media/9.mp4' }
    ]
  },
  videoEditing: {
    title: 'Video Editing',
    kicker: 'VIDEO COLLECTION',
    clips: [
      { title: '1', duration: '00:39', video: 'media/مونتاج/1.mov' },
      { title: '2', duration: '00:43', video: 'media/مونتاج/2.mp4' },
      { title: '3', duration: '00:42', video: 'media/مونتاج/3.mov' },
      { title: '4', duration: '00:24', video: 'media/مونتاج/4.mov' },
      { title: '5', duration: '00:37', video: 'media/مونتاج/5.mp4' }
    ]
  },
  aiCollection: {
    title: 'AI',
    kicker: 'VIDEO COLLECTION',
    clips: [
      { title: '1', duration: '00:11', video: 'media/ai/ai  تحويل.mov' },
      { title: '2', duration: '00:11', video: 'media/ai/boba minto.mov' },
      { title: '3', duration: '00:13', video: 'media/ai/covo.mov' },
      { title: '4', duration: '00:12', video: 'media/ai/تحويل للوطنية .mov' }
    ]
  }
};

const langToggle = document.querySelector('.lang-toggle');
const applyLanguage = (lang) => {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = copy[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  localStorage.setItem('bz-lang', lang);
};
applyLanguage(localStorage.getItem('bz-lang') || 'ar');
langToggle.addEventListener('click', () => applyLanguage(document.documentElement.dataset.lang === 'ar' ? 'en' : 'ar'));

const modal = document.querySelector('.video-modal');
const modalVideo = document.querySelector('.modal-video');
const modalVideoWrap = document.querySelector('.modal-video-wrap');
const modalPlaceholder = document.querySelector('.modal-placeholder');
const modalPlaceholderCode = modalPlaceholder.querySelector('code');
const modalPlaylist = document.querySelector('.modal-playlist');
const modalTitle = document.querySelector('#modal-title');
const modalKicker = document.querySelector('#modal-kicker');
const modalDuration = document.querySelector('#modal-duration');
const fitModalVideo = () => {
  const { videoWidth, videoHeight } = modalVideo;
  if (!videoWidth || !videoHeight) return;
  const maxHeight = Math.max(120, Math.min(window.innerHeight * 0.72, window.innerHeight - 120));
  const maxWidth = modalVideoWrap.parentElement.clientWidth;
  const scale = Math.min(maxWidth / videoWidth, maxHeight / videoHeight);
  modalVideoWrap.style.width = `${videoWidth * scale}px`;
  modalVideoWrap.style.aspectRatio = `${videoWidth} / ${videoHeight}`;
  modalVideoWrap.style.marginInline = 'auto';
};
modalVideo.addEventListener('loadedmetadata', fitModalVideo);
modalVideo.addEventListener('error', () => {
  if (!modalVideo.getAttribute('src')) return;
  modalVideo.style.display = 'none';
  modalPlaceholder.style.display = 'grid';
  modalPlaceholderCode.style.display = 'none';
  modalPlaceholder.querySelector('[data-i18n="uploadHint"]').textContent = copy[document.documentElement.dataset.lang].videoUnavailable;
});
window.addEventListener('resize', fitModalVideo);
const selectCollectionClip = (project, index) => {
  const clip = project.clips[index];
  if (!clip) return;
  modalVideo.pause();
  modalVideo.src = clip.video;
  modalVideo.style.display = 'block';
  modalPlaceholder.style.display = 'none';
  modalVideo.load();
  modalKicker.textContent = `CLIP ${clip.title}`;
  modalDuration.textContent = clip.duration;
  modalPlaylist.querySelectorAll('button').forEach((button, buttonIndex) => {
    button.setAttribute('aria-pressed', String(buttonIndex === index));
  });
};
const closeModal = () => {
  modal.hidden = true;
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modalVideoWrap.style.width = '';
  modalVideoWrap.style.aspectRatio = '';
  modalVideoWrap.style.marginInline = '';
  modalVideo.style.display = 'none';
  modalPlaceholder.style.display = 'grid';
  modalPlaylist.hidden = true;
  modalPlaylist.replaceChildren();
  document.body.style.overflow = '';
};
const openModal = (key) => {
  const project = projectData[key];
  if (!project) return;
  modalTitle.textContent = project.title;
  modalKicker.textContent = project.kicker;
  modalDuration.textContent = project.duration || '';
  modalPlaceholderCode.style.removeProperty('display');
  modalPlaceholder.querySelector('[data-i18n="uploadHint"]').textContent = copy[document.documentElement.dataset.lang].uploadHint;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modalVideoWrap.style.width = '';
  modalVideoWrap.style.aspectRatio = '';
  modalVideoWrap.style.marginInline = '';
  modalVideo.style.display = 'none';
  modalPlaceholder.style.display = 'grid';
  modalPlaylist.replaceChildren();
  modalPlaylist.hidden = !project.clips;
  if (project.clips) {
    modalPlaylist.setAttribute('aria-label', `${project.title} clips`);
    project.clips.forEach((clip, index) => {
      const button = document.createElement('button');
      button.className = 'modal-clip-button';
      button.type = 'button';
      button.textContent = clip.title;
      button.setAttribute('aria-label', `Play clip ${clip.title}`);
      button.setAttribute('aria-pressed', String(index === 0));
      button.addEventListener('click', () => selectCollectionClip(project, index));
      modalPlaylist.append(button);
    });
    selectCollectionClip(project, 0);
  } else if (project.video) {
    modalVideo.src = project.video;
    modalVideo.style.display = 'block';
    modalPlaceholder.style.display = 'none';
  }
};
document.querySelectorAll('.project-card, .stage-play').forEach((el) => {
  el.addEventListener('click', (event) => {
    if (el.classList.contains('stage-play')) openModal('afterlight');
    else openModal(el.dataset.project);
    event.stopPropagation();
  });
});
document.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
