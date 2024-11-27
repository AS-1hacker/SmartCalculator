// العمليات الحاسوبية الأساسية
let currentInput = "";

// تحديث شاشة العرض
function updateDisplay() {
    document.getElementById("display").textContent = currentInput || "0";
}

// إضافة الأرقام
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// اختيار العمليات الحسابية
function chooseOperation(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

// مسح شاشة العرض
function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

// حذف الرقم الأخير
function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// عملية الحساب
function calculate() {
    try {
        // استخدام eval لتقييم المعادلة الحسابية
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        currentInput = "خطأ";
        updateDisplay();
    }
}

// إضافة دوال رياضية علمية
function appendFunction(func) {
    currentInput += `${func}(`;
    updateDisplay();
}

// المساعد الذكي (محاكاة بسيطة للرد على الأسئلة)
function sendMessage() {
    const chatInput = document.getElementById('chatInput').value;
    const chatContainer = document.getElementById('chatContainer');

    if (chatInput) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = `أنت: ${chatInput}`;
        chatContainer.appendChild(userMessage);

        // محاكاة ردود المساعد الذكي
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        if (chatInput.includes('ما هو') || chatInput.includes('من هو')) {
            botMessage.textContent = "المساعد الذكي هنا للمساعدة. كيف يمكنني مساعدتك؟";
        } else if (chatInput.includes('حاسبة')) {
            botMessage.textContent = "هذه حاسبة علمية. يمكنك استخدام العمليات الحسابية المتقدمة.";
        } else {
            botMessage.textContent = "أنا آسف، لم أفهم السؤال.";
        }
        chatContainer.appendChild(botMessage);

        // مسح المدخل بعد إرسال الرسالة
        document.getElementById('chatInput').value = "";
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// تحسين ظهور الرسائل المرسلة
const styles = document.createElement('style');
styles.innerHTML = `
    .user-message {
        text-align: left;
        margin: 10px 0;
        background: #4CAF50;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }

    .bot-message {
        text-align: right;
        margin: 10px 0;
        background: #f0f0f0;
        color: #333;
        padding: 10px;
        border-radius: 5px;
    }
`;
document.head.appendChild(styles);
