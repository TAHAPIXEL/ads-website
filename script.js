document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // ⛔ جلوگیری از ارسال فرم و رفرش شدن صفحه

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (password === "1234") {
        showAlert("✅ ورود موفقیت‌آمیز بود!", "success");
        setTimeout(() => {
            window.location.href = "index.html"; // ورود موفق و انتقال به صفحه اصلی
        }, 2000);
    } else {
        showAlert("❌ رمز عبور اشتباه است!", "error");
    }
});

// تابع نمایش اعلان
function showAlert(message, type) {
    let alertBox = document.createElement("div");
    alertBox.className = `custom-alert ${type} show`; // اضافه کردن کلاس show برای نمایش اعلان
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.remove("show"); // شروع انیمیشن محو شدن
        alertBox.classList.add("hide");
        setTimeout(() => {
            alertBox.remove(); // حذف از صفحه
        }, 500);
    }, 3000);
}
