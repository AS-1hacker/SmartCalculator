let currentInput = "0";
let previousInput = "";
let operation = null;

function appendNumber(number) {
    if (currentInput === "0" || currentInput === "خطأ") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (operation !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = "0";
    operation = op;
}

function appendFunction(func) {
    currentInput = func + "(" + currentInput + ")";
    updateDisplay();
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "خطأ";
            } else {
                result = prev / current;
            }
            break;
        case "^":
            result = Math.pow(prev, current); // الأس
            break;
        case "√":
            result = Math.sqrt(current);  // الجذر التربيعي
            break;
        case "∛":
            result = Math.cbrt(current);  // الجذر التكعيبي
            break;
        case "sin":
            result = Math.sin(current);  // دالة الجيب
            break;
        case "cos":
            result = Math.cos(current);  // دالة الجيب التمام
            break;
        case "tan":
            result = Math.tan(current);  // دالة الظل
            break;
        case "log":
            result = Math.log10(current);  // اللوغاريتم العشري
            break;
        case "ln":
            result = Math.log(current);  // اللوغاريتم الطبيعي
            break;
        case "asin":
            result = Math.asin(current);  // دالة الجيب العكسي
            break;
        case "acos":
            result = Math.acos(current);  // دالة الجيب التمام العكسي
            break;
        case "atan":
            result = Math.atan(current);  // دالة الظل العكسي
            break;
        case "π":
            result = Math.PI;  // قيمة باي
            break;
        case "e":
            result = Math.E;  // قيمة ثابت رياضي "e"
            break;
        case "|x|":
            result = Math.abs(current);  // القيمة المطلقة
            break;
        default:
            result = "خطأ";
    }
    currentInput = result.toString();
    updateDisplay();
    operation = null;
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operation = null;
    updateDisplay();
}

function deleteNumber() {
    if (currentInput.length === 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = currentInput;
}

// دالة للمساعد الذكي
function sendMessage() {
    let input = document.getElementById("chatInput").value;
    let chatContainer = document.getElementById("chatContainer");

    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = input;
    chatContainer.appendChild(userMessage);

    // هنا يمكننا إضافة بعض الاستجابات المبدئية للمساعد الذكي
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");

    if (input.toLowerCase().includes("مرحبا")) {
        botMessage.innerText = "مرحباً! كيف يمكنني مساعدتك؟";
    } else if (input.toLowerCase().includes("حساب")) {
        botMessage.innerText = "من فضلك أدخل العملية الحسابية.";
    } else {
        botMessage.innerText = "عذراً، لم أفهم سؤالك.";
    }

    chatContainer.appendChild(botMessage);
    document.getElementById("chatInput").value = "";
}
