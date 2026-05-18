const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

const popupModal = document.querySelector("#pix-modal");
const popupTitle = document.querySelector("#pix-title");
const popupImage = document.querySelector("#pix-modal-image");
const defaultPopup = {
  src: "assets/images/pop-up-pix.png",
  title: "Sua doação transforma vidas"
};

function openPopup(src = defaultPopup.src, title = defaultPopup.title) {
  popupTitle.textContent = title;
  popupImage.src = src;
  popupImage.alt = title;
  popupModal.classList.add("open");
  popupModal.setAttribute("aria-hidden", "false");
}

function closePopup() {
  popupModal.classList.remove("open");
  popupModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".js-open-pix").forEach((button) => {
  button.addEventListener("click", () => openPopup());
});

document.querySelectorAll(".help-action[data-popup]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".help-option").forEach((item) => item.classList.remove("active"));
    button.closest(".help-option").classList.add("active");
    openPopup(button.dataset.popup, button.dataset.popupTitle || button.textContent.trim());
  });
});

document.querySelectorAll("[data-close-pix]").forEach((button) => {
  button.addEventListener("click", closePopup);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
    closeMediaModal();
    closeShareModal();
  }
});

window.addEventListener("load", () => {
  setTimeout(() => openPopup(), 450);
});

const galleryItems = [
  { type: "image", src: "assets/images/galeria-consulta.png", alt: "Atendimento e consulta no projeto" },
  { type: "image", src: "assets/images/galeria-injecao.png", alt: "Ação de cuidado em saúde" },
  { type: "image", src: "assets/images/galeria-jogos.png", alt: "Crianças participando de jogos educativos" },
  { type: "image", src: "assets/images/galeria-oracao.png", alt: "Momento de oração com as crianças" },
  { type: "image", src: "assets/images/galeria-refeicao.png", alt: "Refeição servida às crianças" },
  { type: "image", src: "assets/images/brincadeira-criancas.png", alt: "Crianças participando de brincadeiras no projeto" },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/Ifcvj3A7NtE",
    thumb: "https://img.youtube.com/vi/Ifcvj3A7NtE/hqdefault.jpg",
    alt: "Vídeo do Projeto Social Benjamim Monteiro da Silva"
  }
];

const galleryRow = document.querySelector("[data-gallery-row]");
const dots = [...document.querySelectorAll(".dot")];
const gallerySection = document.querySelector("#galeria");
const galleryToggle = document.querySelector("[data-gallery-toggle]");
const galleryPrevious = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let galleryPage = 0;
let galleryTimer;
let currentMediaIndex = 0;
let galleryPausedByUser = reducedMotionQuery.matches;
let galleryTemporarilyPaused = false;
const itemsPerPage = 4;
const galleryPageCount = Math.ceil(galleryItems.length / itemsPerPage);

function renderGallery(page) {
  const start = page * itemsPerPage;
  const visibleItems = galleryItems.slice(start, start + itemsPerPage);

  galleryRow.innerHTML = visibleItems.map((item, index) => {
    const absoluteIndex = start + index;
    if (item.type === "youtube") {
      return `<button class="photo-card photo-card--video" type="button" data-media-index="${absoluteIndex}" aria-label="Ampliar vídeo: ${item.alt}"><img src="${item.thumb}" alt="${item.alt}"><span class="play-badge" aria-hidden="true">▶</span></button>`;
    }

    return `<button class="photo-card" type="button" data-media-index="${absoluteIndex}" aria-label="Ampliar: ${item.alt}"><img src="${item.src}" alt="${item.alt}"></button>`;
  }).join("");

  dots.forEach((dot, index) => {
    dot.hidden = index >= galleryPageCount;
    dot.classList.toggle("active", index === page);
  });
}

function goToGalleryPage(page) {
  galleryPage = (page + galleryPageCount) % galleryPageCount;
  renderGallery(galleryPage);
}

function updateGalleryToggle() {
  if (reducedMotionQuery.matches) {
    galleryToggle.textContent = "Pausado";
    galleryToggle.setAttribute("aria-pressed", "true");
    galleryToggle.setAttribute("aria-label", "Galeria automática desativada por preferência de movimento reduzido");
    galleryToggle.disabled = true;
    return;
  }

  galleryToggle.disabled = false;
  galleryToggle.textContent = galleryPausedByUser ? "Reproduzir" : "Pausar";
  galleryToggle.setAttribute("aria-pressed", String(galleryPausedByUser));
  galleryToggle.setAttribute("aria-label", galleryPausedByUser ? "Reproduzir galeria automática" : "Pausar galeria automática");
}

function canAutoPlayGallery() {
  return galleryPageCount > 1 && !reducedMotionQuery.matches && !galleryPausedByUser && !galleryTemporarilyPaused;
}

function stopGalleryAutoPlay() {
  clearInterval(galleryTimer);
}

function startGalleryAutoPlay() {
  stopGalleryAutoPlay();
  updateGalleryToggle();
  if (!canAutoPlayGallery()) return;
  galleryTimer = setInterval(() => {
    goToGalleryPage((galleryPage + 1) % galleryPageCount);
  }, 4200);
}

function moveGallery(step) {
  goToGalleryPage(galleryPage + step);
  startGalleryAutoPlay();
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (index >= galleryPageCount) return;
    goToGalleryPage(index);
    startGalleryAutoPlay();
  });
});

galleryPrevious.addEventListener("click", () => moveGallery(-1));
galleryNext.addEventListener("click", () => moveGallery(1));

galleryToggle.addEventListener("click", () => {
  galleryPausedByUser = !galleryPausedByUser;
  startGalleryAutoPlay();
});

gallerySection.addEventListener("mouseenter", () => {
  galleryTemporarilyPaused = true;
  stopGalleryAutoPlay();
});

gallerySection.addEventListener("mouseleave", () => {
  galleryTemporarilyPaused = false;
  startGalleryAutoPlay();
});

gallerySection.addEventListener("focusin", () => {
  galleryTemporarilyPaused = true;
  stopGalleryAutoPlay();
});

gallerySection.addEventListener("focusout", (event) => {
  if (gallerySection.contains(event.relatedTarget)) return;
  galleryTemporarilyPaused = false;
  startGalleryAutoPlay();
});

reducedMotionQuery.addEventListener("change", () => {
  galleryPausedByUser = reducedMotionQuery.matches;
  startGalleryAutoPlay();
});

const mediaModal = document.querySelector("#media-modal");
const mediaContent = document.querySelector(".media-modal__content");

function renderMediaModalItem(index) {
  currentMediaIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentMediaIndex];

  if (item.type === "youtube") {
    mediaContent.innerHTML = `<iframe src="${item.src}?autoplay=1&rel=0" title="${item.alt}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    return;
  }

  mediaContent.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
}

function openMediaModal(index) {
  stopGalleryAutoPlay();
  renderMediaModalItem(index);
  mediaModal.classList.add("open");
  mediaModal.setAttribute("aria-hidden", "false");
}

function closeMediaModal() {
  if (!mediaModal) return;
  mediaModal.classList.remove("open");
  mediaModal.setAttribute("aria-hidden", "true");
  mediaContent.innerHTML = "";
  startGalleryAutoPlay();
}

galleryRow.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (!card) return;
  openMediaModal(Number(card.dataset.mediaIndex));
});

document.querySelectorAll("[data-close-media]").forEach((button) => {
  button.addEventListener("click", closeMediaModal);
});

document.querySelector("[data-media-prev]").addEventListener("click", () => {
  renderMediaModalItem(currentMediaIndex - 1);
});

document.querySelector("[data-media-next]").addEventListener("click", () => {
  renderMediaModalItem(currentMediaIndex + 1);
});

renderGallery(galleryPage);
startGalleryAutoPlay();

const shareModal = document.querySelector("#share-modal");
const nativeShareButton = document.querySelector("[data-native-share]");
const whatsappShareLink = document.querySelector("[data-share-whatsapp]");
const instagramShareLink = document.querySelector("[data-share-instagram]");
const emailShareLink = document.querySelector("[data-share-email]");
const copyShareButton = document.querySelector("[data-copy-share]");

function getShareData() {
  return {
    title: document.title,
    text: "Conheça o Projeto Social Benjamim Monteiro da Silva.",
    url: window.location.href
  };
}

function refreshShareLinks() {
  const shareData = getShareData();
  const textWithUrl = `${shareData.text} ${shareData.url}`;
  whatsappShareLink.href = `https://wa.me/?text=${encodeURIComponent(textWithUrl)}`;
  instagramShareLink.href = "https://www.instagram.com/projeto_benjamimmonteiro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  emailShareLink.href = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(textWithUrl)}`;
  nativeShareButton.hidden = !navigator.share;
}

function openShareModal() {
  refreshShareLinks();
  shareModal.classList.add("open");
  shareModal.setAttribute("aria-hidden", "false");
}

function closeShareModal() {
  if (!shareModal) return;
  shareModal.classList.remove("open");
  shareModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-close-share]").forEach((button) => {
  button.addEventListener("click", closeShareModal);
});

nativeShareButton.addEventListener("click", async () => {
  try {
    await navigator.share(getShareData());
    closeShareModal();
  } catch (error) {
    if (error.name !== "AbortError") {
      showToast("Não foi possível abrir o compartilhamento.");
    }
  }
});

copyShareButton.addEventListener("click", async () => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
    } else {
      const temporaryInput = document.createElement("input");
      temporaryInput.value = window.location.href;
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      temporaryInput.remove();
    }
    showToast("Link da página copiado.");
    closeShareModal();
  } catch {
    showToast("Copie o endereço da página no navegador.");
  }
});

document.querySelector(".js-share-page").addEventListener("click", () => {
  const shareButton = document.querySelector(".js-share-page");
  document.querySelectorAll(".help-option").forEach((item) => item.classList.remove("active"));
  shareButton.closest(".help-option").classList.add("active");
  openShareModal();
});

const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    note.textContent = "Preencha nome, e-mail e mensagem para continuar.";
    note.style.color = "#c0392b";
    form.reportValidity();
    return;
  }

  note.textContent = "Enviando mensagem...";
  note.style.color = "var(--blue)";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error("Falha no envio");
    }

    form.reset();
    note.textContent = "Mensagem enviada com sucesso. Em breve entraremos em contato.";
    note.style.color = "var(--green-2)";
  } catch (error) {
    note.textContent = "Não foi possível enviar agora. Verifique se o link do Formspree foi configurado corretamente.";
    note.style.color = "#c0392b";
  }
});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 520);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href")));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach((section) => observer.observe(section));
