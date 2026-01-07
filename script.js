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

// Get color class based on score
function getScoreColorClass(score) {
    if (score <= 50) return 'score-green';
    if (score <= 70) return 'score-yellow';
    if (score <= 100) return 'score-orange';
    return 'score-red';
}

function getIconColorClass(score) {
    if (score <= 50) return 'icon-green';
    if (score <= 70) return 'icon-yellow';
    if (score <= 100) return 'icon-orange';
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
    
    // TÍNH MINITEST - Tách riêng thang 20 và thang 30
    let totalScore20 = 0;
    let maxScore20 = 0;
    let totalScore30 = 0;
    let maxScore30 = 0;
    
    minitestScores.forEach(item => {
        if (item.max === 20) {
            totalScore20 += item.score;
            maxScore20 += item.max;
        } else if (item.max === 30) {
            totalScore30 += item.score;
            maxScore30 += item.max;
        }
    });
    
    // Tổng điểm minitest
    const totalMinitestScore = totalScore20 + totalScore30;
    const totalMinitestMax = maxScore20 + maxScore30;
    
    // Phần trăm minitest
    const minitestPercent = totalMinitestMax > 0 ? (totalMinitestScore / totalMinitestMax) * 100 : 0;
    
    // Quy về thang 10
    const minitestOn10 = minitestPercent / 10;
    
    // Quy về 20% (trọng số minitest)
    const minitestWeighted = minitestOn10 * 0.2;
    
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
    const classScore = minitestWeighted + btvnWeighted; // Tổng = 2.58 trong ví dụ
    
    // TÍNH TỔNG ĐIỂM HIỆN TẠI
    const chuyenCanScore = 1.0; // 10% chuyên cần (full)
    const currentScore = chuyenCanScore + classScore + kamatsuWeighted;
    
    // TÍNH ĐIỂM CUỐI KỲ CẦN THIẾT
    // Cuối kỳ chiếm 30% = 3.0 điểm tối đa
    const finalExamWeight = 0.3;
    
    const passScore = 4.0;
    const gradeBScore = 7.0;
    const gradeAScore = 8.5;
    
    const requiredToPass = Math.max(0, ((passScore - currentScore) / finalExamWeight) * 10);
    const requiredForB = Math.max(0, ((gradeBScore - currentScore) / finalExamWeight) * 10);
    const requiredForA = Math.max(0, ((gradeAScore - currentScore) / finalExamWeight) * 10);
    
    // UPDATE UI
    // Display minitest with breakdown
    avgMinitestEl.textContent = `${totalMinitestScore.toFixed(0)}/${totalMinitestMax}`;
    minitestPercentEl.textContent = `(${minitestPercent.toFixed(2)}% = ${minitestOn10.toFixed(2)}/10)`;
    
    // Display kamatsu
    avgKamatsuEl.textContent = `${avgKamatsu.toFixed(2)}/100`;
    kamatsuPercentEl.textContent = `(${kamatsuPercent.toFixed(2)}% = ${kamatsuOn10.toFixed(2)}/10)`;
    
    // Display current score
    currentScoreEl.textContent = `${currentScore.toFixed(2)}/10`;
    
    // Update required scores
    passScoreEl.textContent = requiredToPass <= 0 ? 'ĐÃ ĐẠT' : `${requiredToPass.toFixed(1)}/100`;
    bScoreEl.textContent = `${requiredForB.toFixed(1)}/100`;
    aScoreEl.textContent = `${requiredForA.toFixed(1)}/100`;
    
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
    
    // Change icon if impossible
    if (requiredToPass > 100) {
        passIconEl.className = 'fas fa-exclamation-circle icon-red';
    }
    if (requiredForB > 100) {
        bIconEl.className = 'fas fa-exclamation-circle icon-red';
    }
    if (requiredForA > 100) {
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