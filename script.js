// Present Perfect Practice App for A2 learners

const sentences = [
  // --- Affirmative (20) ---
  { type: "affirmative", correct: ["She", "has", "been", "reading", "a", "book", "."], distractors: ["have", "be", "read", "was"] },
  { type: "affirmative", correct: ["They", "have", "been", "playing", "football", "."], distractors: ["has", "be", "played", "were"] },
  { type: "affirmative", correct: ["We", "have", "been", "waiting", "for", "the", "bus", "."], distractors: ["has", "be", "waited", "were"] },
  { type: "affirmative", correct: ["He", "has", "been", "working", "all", "day", "."], distractors: ["have", "be", "worked", "was"] },
  { type: "affirmative", correct: ["You", "have", "been", "studying", "English", "."], distractors: ["has", "be", "studied", "were"] },
  { type: "affirmative", correct: ["My", "sister", "has", "been", "cooking", "dinner", "."], distractors: ["have", "be", "cooked", "was"] },
  { type: "affirmative", correct: ["The", "children", "have", "been", "drawing", "pictures", "."], distractors: ["has", "be", "drew", "were"] },
  { type: "affirmative", correct: ["Tom", "has", "been", "listening", "to", "music", "."], distractors: ["have", "be", "listened", "was"] },
  { type: "affirmative", correct: ["We", "have", "been", "cleaning", "the", "house", "."], distractors: ["has", "be", "cleaned", "were"] },
  { type: "affirmative", correct: ["They", "have", "been", "swimming", "in", "the", "pool", "."], distractors: ["has", "be", "swam", "were"] },
  { type: "affirmative", correct: ["He", "has", "been", "fixing", "his", "bike", "."], distractors: ["have", "be", "fixed", "was"] },
  { type: "affirmative", correct: ["You", "have", "been", "watching", "TV", "."], distractors: ["has", "be", "watched", "were"] },
  { type: "affirmative", correct: ["My", "parents", "have", "been", "gardening", "all", "morning", "."], distractors: ["has", "be", "gardened", "were"] },
  { type: "affirmative", correct: ["The", "dog", "has", "been", "barking", "loudly", "."], distractors: ["have", "be", "barked", "was"] },
  { type: "affirmative", correct: ["We", "have", "been", "shopping", "for", "clothes", "."], distractors: ["has", "be", "shopped", "were"] },
  { type: "affirmative", correct: ["She", "has", "been", "drawing", "a", "cat", "."], distractors: ["have", "be", "drew", "was"] },
  { type: "affirmative", correct: ["They", "have", "been", "traveling", "since", "Monday", "."], distractors: ["has", "be", "traveled", "were"] },
  { type: "affirmative", correct: ["He", "has", "been", "learning", "to", "drive", "."], distractors: ["have", "be", "learned", "was"] },
  { type: "affirmative", correct: ["You", "have", "been", "painting", "the", "wall", "."], distractors: ["has", "be", "painted", "were"] },
  { type: "affirmative", correct: ["My", "friends", "have", "been", "dancing", "all", "night", "."], distractors: ["has", "be", "danced", "were"] },

  // --- Negative (20) ---
  { type: "negative", correct: ["She", "has", "not", "been", "sleeping", "well", "."], distractors: ["have", "be", "slept", "was"] },
  { type: "negative", correct: ["They", "have", "not", "been", "playing", "outside", "."], distractors: ["has", "be", "played", "were"] },
  { type: "negative", correct: ["We", "have", "not", "been", "eating", "breakfast", "."], distractors: ["has", "be", "ate", "were"] },
  { type: "negative", correct: ["He", "has", "not", "been", "studying", "for", "the", "test", "."], distractors: ["have", "be", "studied", "was"] },
  { type: "negative", correct: ["You", "have", "not", "been", "listening", "to", "me", "."], distractors: ["has", "be", "listened", "were"] },
  { type: "negative", correct: ["My", "brother", "has", "not", "been", "helping", "me", "."], distractors: ["have", "be", "helped", "was"] },
  { type: "negative", correct: ["The", "students", "have", "not", "been", "doing", "their", "homework", "."], distractors: ["has", "be", "did", "were"] },
  { type: "negative", correct: ["Tom", "has", "not", "been", "feeling", "well", "."], distractors: ["have", "be", "felt", "was"] },
  { type: "negative", correct: ["We", "have", "not", "been", "walking", "to", "school", "."], distractors: ["has", "be", "walked", "were"] },
  { type: "negative", correct: ["They", "have", "not", "been", "watching", "the", "news", "."], distractors: ["has", "be", "watched", "were"] },
  { type: "negative", correct: ["He", "has", "not", "been", "playing", "the", "guitar", "."], distractors: ["have", "be", "played", "was"] },
  { type: "negative", correct: ["You", "have", "not", "been", "calling", "me", "."], distractors: ["has", "be", "called", "were"] },
  { type: "negative", correct: ["My", "parents", "have", "not", "been", "driving", "to", "work", "."], distractors: ["has", "be", "drove", "were"] },
  { type: "negative", correct: ["The", "cat", "has", "not", "been", "eating", "fish", "."], distractors: ["have", "be", "ate", "was"] },
  { type: "negative", correct: ["We", "have", "not", "been", "playing", "chess", "."], distractors: ["has", "be", "played", "were"] },
  { type: "negative", correct: ["She", "has", "not", "been", "drinking", "coffee", "."], distractors: ["have", "be", "drank", "was"] },
  { type: "negative", correct: ["They", "have", "not", "been", "fixing", "the", "car", "."], distractors: ["has", "be", "fixed", "were"] },
  { type: "negative", correct: ["He", "has", "not", "been", "reading", "the", "book", "."], distractors: ["have", "be", "read", "was"] },
  { type: "negative", correct: ["You", "have", "not", "been", "learning", "French", "."], distractors: ["has", "be", "learned", "were"] },
  { type: "negative", correct: ["My", "friends", "have", "not", "been", "singing", "today", "."], distractors: ["has", "be", "sang", "were"] },

  // --- Questions (20) ---
  { type: "question", correct: ["Has", "she", "been", "crying", "?"], distractors: ["have", "be", "cried", "was"] },
  { type: "question", correct: ["Have", "they", "been", "playing", "tennis", "?"], distractors: ["has", "be", "played", "were"] },
  { type: "question", correct: ["Have", "you", "been", "waiting", "long", "?"], distractors: ["has", "be", "waited", "were"] },
  { type: "question", correct: ["Has", "he", "been", "working", "today", "?"], distractors: ["have", "be", "worked", "was"] },
  { type: "question", correct: ["Have", "you", "been", "studying", "for", "the", "exam", "?"], distractors: ["has", "be", "studied", "were"] },
  { type: "question", correct: ["Has", "Tom", "been", "cooking", "?"], distractors: ["have", "be", "cooked", "was"] },
  { type: "question", correct: ["Have", "the", "children", "been", "drawing", "?"], distractors: ["has", "be", "drew", "were"] },
  { type: "question", correct: ["Has", "she", "been", "listening", "to", "music", "?"], distractors: ["have", "be", "listened", "was"] },
  { type: "question", correct: ["Have", "you", "been", "cleaning", "the", "room", "?"], distractors: ["has", "be", "cleaned", "were"] },
  { type: "question", correct: ["Have", "they", "been", "swimming", "?"], distractors: ["has", "be", "swam", "were"] },
  { type: "question", correct: ["Has", "he", "been", "fixing", "the", "car", "?"], distractors: ["have", "be", "fixed", "was"] },
  { type: "question", correct: ["Have", "you", "been", "watching", "TV", "?"], distractors: ["has", "be", "watched", "were"] },
  { type: "question", correct: ["Have", "my", "parents", "been", "gardening", "?"], distractors: ["has", "be", "gardened", "were"] },
  { type: "question", correct: ["Has", "the", "dog", "been", "barking", "?"], distractors: ["have", "be", "barked", "was"] },
  { type: "question", correct: ["Have", "we", "been", "shopping", "?"], distractors: ["has", "be", "shopped", "were"] },
  { type: "question", correct: ["Has", "she", "been", "drawing", "?"], distractors: ["have", "be", "drew", "was"] },
  { type: "question", correct: ["Have", "they", "been", "traveling", "?"], distractors: ["has", "be", "traveled", "were"] },
  { type: "question", correct: ["Has", "he", "been", "learning", "English", "?"], distractors: ["have", "be", "learned", "was"] },
  { type: "question", correct: ["Have", "you", "been", "painting", "the", "wall", "?"], distractors: ["has", "be", "painted", "were"] },
  { type: "question", correct: ["Have", "my", "friends", "been", "dancing", "?"], distractors: ["has", "be", "danced", "were"] }
];


let sessionSentences = [];
let currentSentenceIndex = 0;
let selectedWords = [];
let wordButtons = [];
const sentenceArea = document.getElementById("sentence-area");
const userSentence = document.getElementById("user-sentence");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const instructionBox = document.getElementById("instruction-box");
const progressBar = document.getElementById("progress-bar");
const restartBtn = document.getElementById("restart-btn");

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickSessionSentences() {
  sessionSentences = shuffle(sentences).slice(0, 15);
}

function renderProgressBar() {
  const percent = ((currentSentenceIndex) / sessionSentences.length) * 100;
  progressBar.style.width = percent + "%";
}

function renderSentence() {
  sentenceArea.innerHTML = "";
  userSentence.innerHTML = "";
  feedback.innerHTML = "";
  selectedWords = [];
  wordButtons = [];
  checkBtn.disabled = false;

  // Hide/show navigation buttons
  if (currentSentenceIndex < sessionSentences.length - 1) {
    nextBtn.style.display = "inline-block";
    restartBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
  }

  const sentence = sessionSentences[currentSentenceIndex];
  let words = sentence.correct.concat(sentence.distractors);
  words = shuffle(words);

  words.forEach((word, idx) => {
    const btn = document.createElement("button");
    btn.className = "word-btn";
    btn.textContent = word;
    btn.addEventListener("click", () => selectWord(word, idx));
    wordButtons.push(btn);
    sentenceArea.appendChild(btn);
  });

  // Show dynamic instruction
  let instruction = "";
  if (sentence.type === "affirmative") {
    instruction = "Make an <b>affirmative</b> sentence in the Present Perfect.";
  } else if (sentence.type === "negative") {
    instruction = "Make a <b>negative</b> sentence in the Present Perfect.";
  } else if (sentence.type === "question") {
    instruction = "Make a <b>question</b> in the Present Perfect.";
  }
  instructionBox.innerHTML = instruction;

  renderProgressBar();
}

function selectWord(word, idx) {
  const selectedIdx = selectedWords.indexOf(word + "|" + idx);
  if (selectedIdx > -1) {
    selectedWords.splice(selectedIdx, 1);
    wordButtons[idx].classList.remove("selected");
  } else {
    selectedWords.push(word + "|" + idx);
    wordButtons[idx].classList.add("selected");
  }
  updateUserSentence();
}

function updateUserSentence() {
  const words = selectedWords.map(wi => wi.split("|")[0]);
  userSentence.textContent = words.join(" ");
}

function checkAnswer() {
  const sentence = sessionSentences[currentSentenceIndex];
  const userWords = selectedWords.map(wi => wi.split("|")[0]);
  if (userWords.length === 0) {
    feedback.innerHTML = "Please select words to form a sentence.";
    return;
  }
  if (arraysEqual(userWords, sentence.correct)) {
    feedback.innerHTML = "<span style='color:green'>Correct!</span>";
  } else {
    feedback.innerHTML = "<span style='color:red'>Try again!</span>";
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function nextSentence() {
  if (currentSentenceIndex < sessionSentences.length - 1) {
    currentSentenceIndex++;
    renderSentence();
  }
}

function restartSession() {
  pickSessionSentences();
  currentSentenceIndex = 0;
  renderSentence();
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextSentence);
restartBtn.addEventListener("click", restartSession);

// Initialize session
pickSessionSentences();
renderSentence();





