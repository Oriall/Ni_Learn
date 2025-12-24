// Database - Replace with your actual data
const DATABASE = [
    // Bài 9
    { id: 1, lesson: 9, meaning: "hiểu, nắm được", word: "わかります" },
    { id: 2, lesson: 9, meaning: "có (sở hữu)", word: "あります" },
    { id: 3, lesson: 9, meaning: "thích", word: "すき[な]" },
    { id: 4, lesson: 9, meaning: "ghét, không thích", word: "きらい[な]" },
    { id: 5, lesson: 9, meaning: "giỏi, khéo", word: "じょうず[な]" },
    { id: 6, lesson: 9, meaning: "kém", word: "へた[な]" },
    { id: 7, lesson: 9, meaning: "đồ uống", word: "のみもの" },
    { id: 8, lesson: 9, meaning: "món ăn, việc nấu ăn", word: "りょうり" },
    { id: 9, lesson: 9, meaning: "thể thao", word: "スポーツ" },
    { id: 10, lesson: 9, meaning: "bóng chày", word: "やきゅう" },
    { id: 11, lesson: 9, meaning: "nhảy, khiêu vũ", word: "ダンス" },
    { id: 12, lesson: 9, meaning: "du lịch, chuyến du lịch", word: "りょこう" },
    { id: 13, lesson: 9, meaning: "âm nhạc", word: "おんがく" },
    { id: 14, lesson: 9, meaning: "bài hát", word: "うた" },
    { id: 15, lesson: 9, meaning: "nhạc cổ điển", word: "クラシック" },
    { id: 16, lesson: 9, meaning: "nhạc jazz", word: "ジャズ" },
    { id: 17, lesson: 9, meaning: "buổi hòa nhạc", word: "コンサート" },
    { id: 18, lesson: 9, meaning: "karaoke", word: "カラオケ" },
    { id: 19, lesson: 9, meaning: "Kabuki (ca kịch truyền thống)", word: "かぶき" },
    { id: 20, lesson: 9, meaning: "tranh, hội họa", word: "え" },
    { id: 21, lesson: 9, meaning: "chữ", word: "じ" },
    { id: 22, lesson: 9, meaning: "chữ hán", word: "かんじ" },
    { id: 23, lesson: 9, meaning: "chữ Hiragana", word: "ひらがな" },
    { id: 24, lesson: 9, meaning: "Chữ Katakana", word: "かたかな" },
    { id: 25, lesson: 9, meaning: "chữ La Mã", word: "ローマじ" },
    { id: 26, lesson: 9, meaning: "tiền lẻ", word: "こまかいおかね" },
    { id: 27, lesson: 9, meaning: "vé (xem hòa nhạc, xem phim)", word: "チケット" },
    { id: 28, lesson: 9, meaning: "thời gian", word: "じかん" },
    { id: 29, lesson: 9, meaning: "việc bận, công chuyện", word: "ようじ" },
    { id: 30, lesson: 9, meaning: "cuộc hẹn, lời hứa", word: "やくそく" },
    { id: 31, lesson: 9, meaning: "việc làm thêm", word: "アルバイト" },
    { id: 32, lesson: 9, meaning: "chồng (người khác)", word: "ごしゅじん" },
    { id: 33, lesson: 9, meaning: "chồng (mình)", word: "おっと/しゅじん" },
    { id: 34, lesson: 9, meaning: "vợ (người khác)", word: "おくさん" },
    { id: 35, lesson: 9, meaning: "vợ (mình)", word: "つま/かない" },
    { id: 36, lesson: 9, meaning: "con cái", word: "こども" },
    { id: 37, lesson: 9, meaning: "tốt, rõ (chỉ mức độ)", word: "よく" },
    { id: 38, lesson: 9, meaning: "đại khái, đại thể", word: "だいたい" },
    { id: 39, lesson: 9, meaning: "nhiều", word: "たくさん" },
    { id: 40, lesson: 9, meaning: "ít, một ít", word: "すこし" },
    { id: 41, lesson: 9, meaning: "hoàn toàn ~ không", word: "ぜんぜん" },
    { id: 42, lesson: 9, meaning: "sớm, nhanh", word: "はやく" },
    { id: 43, lesson: 9, meaning: "vì ~", word: "～から" },
    { id: 44, lesson: 9, meaning: "tại sao", word: "どうして" },
    { id: 45, lesson: 9, meaning: "Hãy cho tôi mượn.", word: "かしてください" },
    { id: 46, lesson: 9, meaning: "Được chứ./ Được ạ.", word: "いいですよ。" },
    { id: 47, lesson: 9, meaning: "Thật đáng tiếc nhỉ./ buồn nhỉ.", word: "ざんねんですね。" },
    { id: 48, lesson: 9, meaning: "Ah (khi gặp đúng người trên điện thoại)", word: "ああ" },
    { id: 49, lesson: 9, meaning: "Anh/chị cùng làm với chúng tôi không?", word: "いっしょにいかがですか。" },
    { id: 50, lesson: 9, meaning: "[~ thì] có lẽ không được rồi.", word: "[～は]ちょっと…。" },
    { id: 51, lesson: 9, meaning: "Không được à?", word: "だめですか。" },
    { id: 52, lesson: 9, meaning: "Hẹn Anh/Chị lần sau vậy.", word: "また 今度 お願いします" },

    // Bài 10
    { id: 53, lesson: 10, meaning: "có (tồn tại, đồ vật)", word: "あります" },
    { id: 54, lesson: 10, meaning: "có, ở (tồn tại, người và động vật)", word: "います" },
    { id: 55, lesson: 10, meaning: "nhiều, đa dạng", word: "いろいろ[な]" },
    { id: 56, lesson: 10, meaning: "người đàn ông", word: "おとこのひと" },
    { id: 57, lesson: 10, meaning: "người đàn bà", word: "おんなのひと" },
    { id: 58, lesson: 10, meaning: "cậu con trai", word: "おとこのこ" },
    { id: 59, lesson: 10, meaning: "cô con gái", word: "おんなのこ" },
    { id: 60, lesson: 10, meaning: "chó", word: "いぬ" },
    { id: 61, lesson: 10, meaning: "mèo", word: "ねこ" },
    { id: 62, lesson: 10, meaning: "gấu trúc", word: "パンダ" },
    { id: 63, lesson: 10, meaning: "voi", word: "ぞう" },
    { id: 64, lesson: 10, meaning: "cây, gỗ", word: "き" },
    { id: 65, lesson: 10, meaning: "vật, đồ vật", word: "もの" },
    { id: 66, lesson: 10, meaning: "Pin", word: "でんち" },
    { id: 67, lesson: 10, meaning: "hộp", word: "はこ" },
    { id: 68, lesson: 10, meaning: "công tắc", word: "スイッチ" },
    { id: 69, lesson: 10, meaning: "tủ lạnh", word: "れいぞうこ" },
    { id: 70, lesson: 10, meaning: "bàn", word: "テーブル" },
    { id: 71, lesson: 10, meaning: "giường", word: "ベッド" },
    { id: 72, lesson: 10, meaning: "giá sách", word: "たな" },
    { id: 73, lesson: 10, meaning: "cửa", word: "ドア" },
    { id: 74, lesson: 10, meaning: "cửa sổ", word: "まど" },
    { id: 75, lesson: 10, meaning: "hộp thư, hòm thư", word: "ポスト" },
    { id: 76, lesson: 10, meaning: "toà nhà", word: "ビル" },
    { id: 77, lesson: 10, meaning: "máy rút tiền tự động ATM", word: "ATM" },
    { id: 78, lesson: 10, meaning: "cửa hàng tiện lợi (24/24)", word: "コンビニ" },
    { id: 79, lesson: 10, meaning: "công viên", word: "こうえん" },
    { id: 80, lesson: 10, meaning: "quán giải khát, quán cà-phê", word: "きっさてん" },
    { id: 81, lesson: 10, meaning: "hiệu ~, cửa hàng ~", word: "～や" },
    { id: 82, lesson: 10, meaning: "bến xe, điểm lên xuống xe", word: "のりば" },
    { id: 83, lesson: 10, meaning: "tỉnh", word: "けん" },
    { id: 84, lesson: 10, meaning: "trên", word: "うえ" },
    { id: 85, lesson: 10, meaning: "dưới", word: "した" },
    { id: 86, lesson: 10, meaning: "trước", word: "まえ" },
    { id: 87, lesson: 10, meaning: "sau", word: "うしろ" },
    { id: 88, lesson: 10, meaning: "phải", word: "みぎ" },
    { id: 89, lesson: 10, meaning: "trái", word: "ひだり" },
    { id: 90, lesson: 10, meaning: "trong, giữa", word: "なか" },
    { id: 91, lesson: 10, meaning: "ngoài", word: "そと" },
    { id: 92, lesson: 10, meaning: "bên cạnh", word: "となり" },
    { id: 93, lesson: 10, meaning: "gần", word: "ちかく" },
    { id: 94, lesson: 10, meaning: "giữa", word: "あいだ" },
    { id: 95, lesson: 10, meaning: "~ và ~, [v.v.]", word: "～や～[など]～" },

    // Bài 11
    { id: 96, lesson: 11, meaning: "mất, tốn (thời gian, tiền bạc)", word: "かかります" },
    { id: 97, lesson: 11, meaning: "nghỉ [làm việc]", word: "やすみます" },
    { id: 98, lesson: 11, meaning: "một cái", word: "ひとつ" },
    { id: 99, lesson: 11, meaning: "hai cái", word: "ふたつ" },
    { id: 100, lesson: 11, meaning: "ba cái", word: "みっつ" },
    { id: 101, lesson: 11, meaning: "bốn cái", word: "よっつ" },
    { id: 102, lesson: 11, meaning: "năm cái", word: "いつつ" },
    { id: 103, lesson: 11, meaning: "sáu cái", word: "むっつ" },
    { id: 104, lesson: 11, meaning: "bảy cái", word: "ななつ" },
    { id: 105, lesson: 11, meaning: "tám cái", word: "やっつ" },
    { id: 106, lesson: 11, meaning: "chín cái", word: "ここのつ" },
    { id: 107, lesson: 11, meaning: "mười cái", word: "とお" },
    { id: 108, lesson: 11, meaning: "mấy cái, bao nhiêu cái", word: "いくつ" },
    { id: 109, lesson: 11, meaning: "một người", word: "ひとり" },
    { id: 110, lesson: 11, meaning: "hai người", word: "ふたり" },
    { id: 111, lesson: 11, meaning: "- người", word: "―にん" },
    { id: 112, lesson: 11, meaning: "- cái (máy móc, xe cộ)", word: "―だい" },
    { id: 113, lesson: 11, meaning: "tờ, tấm (vật mỏng)", word: "―まい" },
    { id: 114, lesson: 11, meaning: "- lần", word: "―かい" },
    { id: 115, lesson: 11, meaning: "táo", word: "りんご" },
    { id: 116, lesson: 11, meaning: "quýt", word: "みかん" },
    { id: 117, lesson: 11, meaning: "bánh San Úych", word: "サンドイッチ" },
    { id: 118, lesson: 11, meaning: "món [cơm] ca-ri", word: "カレー[ライス]" },
    { id: 119, lesson: 11, meaning: "kem", word: "アイスクリーム" },
    { id: 120, lesson: 11, meaning: "tem", word: "きって" },
    { id: 121, lesson: 11, meaning: "bưu thiếp", word: "はがき" },
    { id: 122, lesson: 11, meaning: "phong bì", word: "ふうとう" },
    { id: 123, lesson: 11, meaning: "bố mẹ", word: "りょうしん" },
    { id: 124, lesson: 11, meaning: "anh chị em", word: "きょうだい" },
    { id: 125, lesson: 11, meaning: "anh trai (của mình)", word: "あに" },
    { id: 126, lesson: 11, meaning: "anh trai (người khác)", word: "おにいさん" },
    { id: 127, lesson: 11, meaning: "chị gái (của mình)", word: "あね" },
    { id: 128, lesson: 11, meaning: "chị gái (người khác)", word: "おねえさん" },
    { id: 129, lesson: 11, meaning: "em trai (của mình)", word: "おとうto" },
    { id: 130, lesson: 11, meaning: "em trai (người khác)", word: "おとうとさん" },
    { id: 131, lesson: 11, meaning: "em gái (của mình)", word: "いもうto" },
    { id: 132, lesson: 11, meaning: "em gái (người khác)", word: "いもうとさん" },
    { id: 133, lesson: 11, meaning: "nước ngoài", word: "がいこく" },
    { id: 134, lesson: 11, meaning: "lưu học sinh", word: "りゅうがくせい" },
    { id: 135, lesson: 11, meaning: "lớp học", word: "クラス" },
    { id: 136, lesson: 11, meaning: "- tiếng", word: "―じかん" },
    { id: 137, lesson: 11, meaning: "- tuần", word: "―しゅうかん" },
    { id: 138, lesson: 11, meaning: "- tháng", word: "―かげつ" },
    { id: 139, lesson: 11, meaning: "- năm", word: "―ねn" },
    { id: 140, lesson: 11, meaning: "khoảng ~", word: "～ぐらい" },
    { id: 141, lesson: 11, meaning: "bao lâu", word: "どのくらい" },
    { id: 142, lesson: 11, meaning: "tổng cộng", word: "ぜんぶで" },
    { id: 143, lesson: 11, meaning: "tất cả", word: "みんな" },
    { id: 144, lesson: 11, meaning: "chỉ ~", word: "～だけ" },
    { id: 145, lesson: 11, meaning: "Tôi đã rõ rồi ạ (thưa ông/bà)", word: "かしこまりました。" },
    { id: 146, lesson: 11, meaning: "Trời đẹp nhỉ.", word: "いい[お]てんきですね。" },
    { id: 147, lesson: 11, meaning: "Anh/ chị đi ra ngoài đấy à?", word: "おでかけですか." },
    { id: 148, lesson: 11, meaning: "Tôi đi ~ một chút.", word: "ちょっと～まで。" },
    { id: 149, lesson: 11, meaning: "Anh/chị đi nhé.", word: "いっていらっしゃい。" },
    { id: 150, lesson: 11, meaning: "Tôi đi đây.", word: "いってきます。" },
    { id: 151, lesson: 11, meaning: "gửi bằng đường biển", word: "ふなびん" },
    { id: 152, lesson: 11, meaning: "gửi bằng đường hàng không", word: "こうくうびん(エアメール)" },
    { id: 153, lesson: 11, meaning: "Nhờ anh/chị.", word: "おねがいします。" }
];

// Main Application Class
class JapaneseApp {
    constructor() {
        this.config = {
            lessons: [],
            mode: null,
            examType: null,
            timeLimit: 10
        };
        this.examData = {
            questions: [],
            answers: {},
            currentIndex: 0,
            startTime: null,
            timerInterval: null
        };
        this.history = this.loadHistory();
        
        this.init();
    }

    init() {
        this.updateLessonCounts();
        this.attachEventListeners();
        this.loadScreen('setup');
    }

    // Event Listeners
    attachEventListeners() {
        // Lesson selection
        document.querySelectorAll('.lesson-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectLesson(e.target.closest('.lesson-btn')));
        });

        // Mode selection
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectMode(e.target.closest('.mode-btn')));
        });

        // Start button
        document.getElementById('startBtn').addEventListener('click', () => this.start());

        // Search
        document.getElementById('searchInput')?.addEventListener('input', (e) => this.searchVocab(e.target.value));
    }

    // Lesson Selection
    selectLesson(btn) {
        const lesson = btn.dataset.lesson;
        
        if (lesson === 'all') {
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
                this.config.lessons = [];
            } else {
                document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.config.lessons = [9, 10, 11];
            }
        } else {
            document.querySelector('.lesson-all').classList.remove('selected');
            btn.classList.toggle('selected');
            
            const lessonNum = parseInt(lesson);
            if (btn.classList.contains('selected')) {
                if (!this.config.lessons.includes(lessonNum)) {
                    this.config.lessons.push(lessonNum);
                }
            } else {
                this.config.lessons = this.config.lessons.filter(l => l !== lessonNum);
            }
        }

        this.updateStartButton();
    }

    // Mode Selection
    selectMode(btn) {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        this.config.mode = btn.dataset.mode;
        
        const examConfig = document.getElementById('examConfig');
        if (this.config.mode === 'exam') {
            examConfig.classList.remove('hidden');
        } else {
            examConfig.classList.add('hidden');
        }

        this.updateStartButton();
    }

    // Update Start Button
    updateStartButton() {
        const btn = document.getElementById('startBtn');
        btn.disabled = this.config.lessons.length === 0 || !this.config.mode;
    }

    // Update Lesson Counts
    updateLessonCounts() {
        const counts = { 9: 0, 10: 0, 11: 0 };
        DATABASE.forEach(item => {
            if (counts[item.lesson] !== undefined) {
                counts[item.lesson]++;
            }
        });

        document.getElementById('count-9').textContent = `${counts[9]} words`;
        document.getElementById('count-10').textContent = `${counts[10]} words`;
        document.getElementById('count-11').textContent = `${counts[11]} words`;
        document.getElementById('count-all').textContent = `${counts[9] + counts[10] + counts[11]} words`;
    }

    // Start Application
    start() {
        if (this.config.mode === 'review') {
            this.startReview();
        } else {
            this.config.examType = document.querySelector('input[name="examType"]:checked').value;
            this.config.timeLimit = parseInt(document.getElementById('timeLimit').value);
            this.startExam();
        }
    }

    // Review Mode
    startReview() {
        const data = this.getSelectedData();
        this.loadScreen('review');
        this.renderReview(data);
    }

    renderReview(data) {
        const container = document.getElementById('reviewContent');
        container.innerHTML = data.map(item => `
            <div class="vocab-card" onclick="app.speakWord('${item.word}')">
                <div class="vocab-japanese">${item.word}</div>
                <div class="vocab-meaning">${item.meaning}</div>
                <span class="vocab-lesson">LESSON ${item.lesson}</span>
            </div>
        `).join('');
    }

    searchVocab(query) {
        const data = this.getSelectedData();
        const filtered = data.filter(item => 
            item.word.toLowerCase().includes(query.toLowerCase()) ||
            item.meaning.toLowerCase().includes(query.toLowerCase())
        );
        this.renderReview(filtered);
    }

    speakWord(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            speechSynthesis.speak(utterance);
        }
    }

    // Exam Mode
    startExam() {
        const data = this.getSelectedData();
        this.examData.questions = this.generateQuestions(data);
        this.examData.currentIndex = 0;
        this.examData.answers = {};
        
        this.loadScreen('exam');
        this.startTimer();
        this.renderQuestion();
        
        document.getElementById('totalQ').textContent = this.examData.questions.length;
    }

    generateQuestions(data) {
        const questions = [];
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        
        // Prioritize questions not in history or answered incorrectly
        const prioritized = shuffled.sort((a, b) => {
            const aHistory = this.history[a.id];
            const bHistory = this.history[b.id];
            
            if (!aHistory && !bHistory) return 0;
            if (!aHistory) return -1;
            if (!bHistory) return 1;
            
            return aHistory.correct - bHistory.correct;
        });

        prioritized.forEach(item => {
            let type = this.config.examType;
            if (type === 'mix') {
                type = Math.random() > 0.5 ? 'quiz' : 'essay';
            }

            const question = {
                id: item.id,
                type: type,
                data: item
            };

            if (type === 'quiz') {
                question.question = item.meaning;
                question.correctAnswer = item.word;
                question.choices = this.generateChoices(item, data);
            } else {
                question.question = item.meaning;
                question.correctAnswer = item.word;
            }

            questions.push(question);
        });

        return questions;
    }

    generateChoices(correctItem, allData) {
        const choices = [correctItem.word];
        const others = allData.filter(item => item.id !== correctItem.id);
        const shuffled = [...others].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < 3 && i < shuffled.length; i++) {
            choices.push(shuffled[i].word);
        }
        
        return choices.sort(() => Math.random() - 0.5);
    }

    renderQuestion() {
        const q = this.examData.questions[this.examData.currentIndex];
        const container = document.getElementById('answerContainer');
        
        document.getElementById('currentQ').textContent = this.examData.currentIndex + 1;
        document.getElementById('questionType').textContent = q.type.toUpperCase();
        document.getElementById('questionText').textContent = q.question;
        
        const progress = ((this.examData.currentIndex + 1) / this.examData.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;

        if (q.type === 'quiz') {
            container.innerHTML = `
                <div class="choices-grid">
                    ${q.choices.map(choice => `
                        <button class="choice-btn ${this.examData.answers[this.examData.currentIndex] === choice ? 'selected' : ''}" 
                                onclick="app.selectAnswer('${choice}')">
                            ${choice}
                        </button>
                    `).join('')}
                </div>
            `;
        } else {
            const savedAnswer = this.examData.answers[this.examData.currentIndex] || '';
            container.innerHTML = `
                <input type="text" class="essay-input" id="essayInput" 
                       placeholder="日本語で答えてください..." 
                       value="${savedAnswer}"
                       oninput="app.saveEssayAnswer(this.value)">
            `;
        }

        this.updateNavButtons();
    }

    selectAnswer(choice) {
        this.examData.answers[this.examData.currentIndex] = choice;
        
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent.trim() === choice) {
                btn.classList.add('selected');
            }
        });
    }

    saveEssayAnswer(value) {
        this.examData.answers[this.examData.currentIndex] = value;
    }

    updateNavButtons() {
        document.getElementById('prevBtn').disabled = this.examData.currentIndex === 0;
        
        const isLast = this.examData.currentIndex === this.examData.questions.length - 1;
        document.getElementById('nextBtn').style.display = isLast ? 'none' : 'flex';
        document.getElementById('submitBtn').style.display = isLast ? 'flex' : 'none';
    }

    nextQuestion() {
        if (this.examData.currentIndex < this.examData.questions.length - 1) {
            this.examData.currentIndex++;
            this.renderQuestion();
        }
    }

    prevQuestion() {
        if (this.examData.currentIndex > 0) {
            this.examData.currentIndex--;
            this.renderQuestion();
        }
    }

    // Timer
    startTimer() {
        const totalSeconds = this.config.timeLimit * 60;
        this.examData.startTime = Date.now();
        
        this.examData.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.examData.startTime) / 1000);
            const remaining = totalSeconds - elapsed;
            
            if (remaining <= 0) {
                clearInterval(this.examData.timerInterval);
                this.submitExam();
                return;
            }

            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            document.getElementById('timerText').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (remaining <= 60) {
                document.querySelector('.timer-display').classList.add('warning');
            }
        }, 1000);
    }

    // Submit Exam
    submitExam() {
        if (!confirm('Are you sure you want to submit?')) return;

        clearInterval(this.examData.timerInterval);

        const elapsed = Math.floor((Date.now() - this.examData.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timeStr = `${minutes}m ${seconds}s`;

        let correct = 0;
        const wrongAnswers = [];

        this.examData.questions.forEach((q, idx) => {
            const userAnswer = (this.examData.answers[idx] || '').trim();
            const correctAnswer = q.correctAnswer.trim();
            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

            if (isCorrect) {
                correct++;
            } else {
                wrongAnswers.push({
                    question: q.question,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: correctAnswer
                });
            }

            // Update history
            this.updateHistory(q.data.id, isCorrect);
        });

        const total = this.examData.questions.length;
        const accuracy = Math.round((correct / total) * 100);
        const score = Math.round((correct / total) * 1000);

        this.showResult(score, accuracy, correct, total, timeStr, wrongAnswers);
    }

    showResult(score, accuracy, correct, total, time, wrongAnswers) {
        this.loadScreen('result');

        document.getElementById('resultScore').textContent = score;
        document.getElementById('resultAccuracy').textContent = `${accuracy}%`;
        document.getElementById('resultCorrect').textContent = `${correct}/${total}`;
        document.getElementById('resultTime').textContent = time;

        const wrongList = document.getElementById('wrongAnswersList');
        if (wrongAnswers.length > 0) {
            wrongList.innerHTML = `
                <h3>WRONG ANSWERS</h3>
                ${wrongAnswers.map(item => `
                    <div class="wrong-item">
                        <div><strong>Q:</strong> ${item.question}</div>
                        <div><strong>Your answer:</strong> ${item.userAnswer}</div>
                        <div><strong>Correct:</strong> ${item.correctAnswer}</div>
                    </div>
                `).join('')}
            `;
        } else {
            wrongList.innerHTML = '<p style="text-align: center; color: var(--success);">Perfect! No mistakes!</p>';
        }
    }

    // History Management
    loadHistory() {
        const saved = localStorage.getItem('japaneseHistory');
        return saved ? JSON.parse(saved) : {};
    }

    updateHistory(id, isCorrect) {
        if (!this.history[id]) {
            this.history[id] = { correct: 0, total: 0 };
        }
        
        this.history[id].total++;
        if (isCorrect) {
            this.history[id].correct++;
        }

        localStorage.setItem('japaneseHistory', JSON.stringify(this.history));
    }

    // Utility Functions
    getSelectedData() {
        return DATABASE.filter(item => this.config.lessons.includes(item.lesson));
    }

    loadScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(`${screenName}Screen`).classList.add('active');
    }

    backToSetup() {
        if (this.examData.timerInterval) {
            clearInterval(this.examData.timerInterval);
        }
        this.loadScreen('setup');
    }

    retryExam() {
        this.startExam();
    }
}

// Initialize Application
const app = new JapaneseApp();