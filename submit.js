document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file");
    const fileNameDisplay = document.querySelector(".file-name");
    const imagePreviewContainer = document.querySelector(".image-preview");
    const submitForm = document.querySelector(".submit-form");
    const notification = document.getElementById("notification");

    let selectedFiles = [];

    fileInput.addEventListener("change", function () {
        selectedFiles = Array.from(this.files);
        updatePreview();
    });

    function updatePreview() {
        imagePreviewContainer.innerHTML = "";
        
        if (selectedFiles.length === 0) {
            fileNameDisplay.textContent = "هیچ فایلی انتخاب نشده";
            return;
        }

        fileNameDisplay.textContent = selectedFiles.length + " فایل انتخاب شد";

        selectedFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("image-item");

                const img = document.createElement("img");
                img.src = e.target.result;

                if (index === 0) {
                    img.style.width = "80px";
                    img.style.height = "80px";
                    img.style.border = "3px solid gold";
                } else {
                    img.style.width = "60px";
                    img.style.height = "60px";
                }

                const removeBtn = document.createElement("span");
                removeBtn.classList.add("remove-btn");
                removeBtn.innerHTML = "&times;";
                removeBtn.onclick = function () {
                    selectedFiles.splice(index, 1);
                    updatePreview();
                };

                imgContainer.appendChild(img);
                imgContainer.appendChild(removeBtn);
                imagePreviewContainer.appendChild(imgContainer);
            };

            reader.readAsDataURL(file);
        });
    }

    // جلوگیری از رفرش شدن فرم هنگام ارسال و نمایش اعلان
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // جلوگیری از رفرش شدن صفحه
        showNotification("آگهی شما با موفقیت ثبت شد! ✅");
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = "block";
        notification.style.opacity = "1";

        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
                notification.style.display = "none";
            }, 500);
        }, 3000);
    }
});
