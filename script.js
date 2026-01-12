// Get DOM elements
const minitestInput = document.getElementById('minitest-input');
const kamatsuInput = document.getElementById('kamatsu-input');
const calculateBtn = document.getElementById('calculate-btn');
const resultsDiv = document.getElementById('results');
const errorDiv = document.getElementById('error');
const errorText = document.getElementById('error-text');

// Modal elements
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeModalBtn = document.getElementById('close-modal');
const gradeTableImg = document.getElementById('grade-table-img');

// Result elements
const avgMinitestEl = document.getElementById('avg-minitest');
const minitestPercentEl = document.getElementById('minitest-percent');
const avgKamatsuEl = document.getElementById('avg-kamatsu');
const kamatsuPercentEl = document.getElementById('kamatsu-percent');
const currentScoreEl = document.getElementById('current-score');

const passScoreEl = document.getElementById('pass-score');
const bScoreEl = document.getElementById('b-score');
const aScoreEl = document.getElementById('a-score');

const passIconEl = document.getElementById('pass-icon');
const bIconEl = document.getElementById('b-icon');
const aIconEl = document.getElementById('a-icon');
function hieu(){
    const welcomeModal = document.getElementById('welcome-modal');
    welcomeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal functions
helpBtn.addEventListener('click', function() {
    helpModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function() {
    helpModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

helpModal.addEventListener('click', function(e) {
    if (e.target === helpModal) {
        helpModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Image upload for grade table
gradeTableImg.addEventListener('error', function() {
    this.style.display = 'none';
});

// Parse score input (e.g., "16/20" or "96/100")
function parseScore(scoreStr) {
    const parts = scoreStr.trim().split('/');
    if (parts.length !== 2) return null;
    
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) return null;
    
    return { score: numerator, max: denominator };
}

// Parse all scores from textarea
function parseScores(text) {
    const lines = text.split('\n');
    const scores = [];
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === '') continue;
        
        const parsed = parseScore(trimmed);
        if (parsed) {
            scores.push(parsed);
        }
    }
    
    return scores;
}

// Get color class based on score (thang 150)
function getScoreColorClass(score) {
    if (score <= 75) return 'score-green';      // <= 50% của 150
    if (score <= 105) return 'score-yellow';    // <= 70% của 150
    if (score <= 150) return 'score-orange';    // <= 100% của 150
    return 'score-red';
}

function getIconColorClass(score) {
    if (score <= 75) return 'icon-green';
    if (score <= 105) return 'icon-yellow';
    if (score <= 150) return 'icon-orange';
    return 'icon-red';
}

// Show error message
function showError(message) {
    errorText.textContent = message;
    errorDiv.classList.remove('hidden');
    resultsDiv.classList.add('hidden');
}

// Hide error message
function hideError() {
    errorDiv.classList.add('hidden');
}

// Calculate grades
function calculateGrades() {
    hideError();
    
    // Parse input
    const minitestScores = parseScores(minitestInput.value);
    const kamatsuScores = parseScores(kamatsuInput.value);
    
    // Validate input
    if (minitestScores.length === 0) {
        showError('Vui lòng nhập điểm Minitest');
        return;
    }
    
    if (kamatsuScores.length === 0) {
        showError('Vui lòng nhập điểm Kamatsu');
        return;
    }
    
    // TÍNH MINITEST - Quy mỗi bài về thang 10, sau đó tính trung bình
    const minitestScoresOn10 = minitestScores.map(item => {
        // Quy về thang 10: (điểm / max) * 10
        return (item.score / item.max) * 10;
    });
    
    // Tính trung bình các bài minitest (đã quy về thang 10)
    const avgMinitestOn10 = minitestScoresOn10.length > 0 
        ? minitestScoresOn10.reduce((sum, score) => sum + score, 0) / minitestScoresOn10.length 
        : 0;
    
    // Quy về 20% (trọng số minitest)
    const minitestWeighted = avgMinitestOn10 * 0.2;
    
    // TÍNH KAMATSU
    const totalKamatsuScore = kamatsuScores.reduce((sum, item) => sum + item.score, 0);
    const kamatsuCount = kamatsuScores.length;
    const avgKamatsu = totalKamatsuScore / kamatsuCount;
    
    // Phần trăm kamatsu (đã là /100)
    const kamatsuPercent = avgKamatsu;
    
    // Quy về thang 10
    const kamatsuOn10 = kamatsuPercent / 10;
    
    // Quy về 30% (trọng số kamatsu)
    const kamatsuWeighted = kamatsuOn10 * 0.3;
    
    // TÍNH ĐIỂM TRÊN LỚP (30%)
    // Minitest (20%) + BTVN (10%)
    const btvnWeighted = 1.0; // Full điểm BTVN = 1.0 (10% của tổng)
    const classScore = minitestWeighted + btvnWeighted;
    
    // TÍNH TỔNG ĐIỂM HIỆN TẠI
    const chuyenCanScore = 1.0; // 10% chuyên cần (full)
    const currentScore = chuyenCanScore + classScore + kamatsuWeighted;
    
    // TÍNH ĐIỂM CUỐI KỲ CẦN THIẾT
    // Cuối kỳ chiếm 30% = 3.0 điểm tối đa
    const finalExamWeight = 0.3;
    
    const passScore = 4.0;
    const gradeBScore = 7.0;
    const gradeAScore = 8.5;
    
    // Điểm cuối kỳ trên thang 150
    const requiredToPass = Math.max(0, ((passScore - currentScore) / finalExamWeight) * 15);
    const requiredForB = Math.max(0, ((gradeBScore - currentScore) / finalExamWeight) * 15);
    const requiredForA = Math.max(0, ((gradeAScore - currentScore) / finalExamWeight) * 15);
    
    // UPDATE UI
    // Display minitest
    avgMinitestEl.textContent = `${avgMinitestOn10.toFixed(2)}/10`;
    minitestPercentEl.textContent = `(Trung bình ${minitestScores.length} bài)`;
    
    // Display kamatsu
    avgKamatsuEl.textContent = `${avgKamatsu.toFixed(2)}/100`;
    kamatsuPercentEl.textContent = `(${kamatsuPercent.toFixed(2)}% = ${kamatsuOn10.toFixed(2)}/10)`;
    
    // Display current score
    currentScoreEl.textContent = `${currentScore.toFixed(2)}/10`;
    
    // Update required scores (thang 150)
    passScoreEl.textContent = requiredToPass <= 0 ? 'ĐÃ ĐẠT' : `${requiredToPass.toFixed(1)}/150`;
    bScoreEl.textContent = `${requiredForB.toFixed(1)}/150`;
    aScoreEl.textContent = `${requiredForA.toFixed(1)}/150`;
    
    // Update colors
    if (requiredToPass <= 0) {
        passScoreEl.className = 'required-score score-green';
    } else {
        passScoreEl.className = 'required-score ' + getScoreColorClass(requiredToPass);
    }
    bScoreEl.className = 'required-score ' + getScoreColorClass(requiredForB);
    aScoreEl.className = 'required-score ' + getScoreColorClass(requiredForA);
    
    // Update icons
    if (requiredToPass <= 0) {
        passIconEl.className = 'fas fa-check-circle icon-green';
    } else {
        passIconEl.className = 'fas fa-check-circle ' + getIconColorClass(requiredToPass);
    }
    bIconEl.className = 'fas fa-check-circle ' + getIconColorClass(requiredForB);
    aIconEl.className = 'fas fa-check-circle ' + getIconColorClass(requiredForA);
    
    // Change icon if impossible (thang 150)
    if (requiredToPass > 150) {
        passIconEl.className = 'fas fa-exclamation-circle icon-red';
    }
    if (requiredForB > 150) {
        bIconEl.className = 'fas fa-exclamation-circle icon-red';
    }
    if (requiredForA > 150) {
        aIconEl.className = 'fas fa-exclamation-circle icon-red';
    }
    
    // Show results
    resultsDiv.classList.remove('hidden');
    
    // Scroll to results
    setTimeout(() => {
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Event listener
calculateBtn.addEventListener('click', calculateGrades);

// Allow Ctrl+Enter in textareas
minitestInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        calculateGrades();
    }
});

kamatsuInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        calculateGrades();
    }
});