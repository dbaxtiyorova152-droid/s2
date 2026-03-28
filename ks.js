document.addEventListener("DOMContentLoaded", () => {
    Students.forEach((student) => {
        if (student.kurs === "Kompyuter savodxonligi") {
            let col5 = document.createElement("div");
            col5.classList.add("col-5");
            col5.innerHTML = `
            <div class="card mb-3" style="max-width: 540px; cursor: pointer;" data-id="${student.id}">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${student.rasm}" class="img-fluid rounded ms-3" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ms-3">
                            <p class="card-text">${student.kurs}</p>
                            <h5 class="card-title">${student.fio}</h5>
                            <p class="card-text">${student.group}</p>
                            <p class="card-text">
                                <small class="text-body-secondary-color">O'quvchi haqida -></small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `

            col5.querySelector(".card").addEventListener("click", () => {
                let username = localStorage.getItem("username")
                let password = localStorage.getItem("password")

                let isLogin = Users.some(u => u.username === username && u.password === password)

                if (isLogin) {
                    window.location.href = `singlepage.html?id=${student.id}`
                } else {
                    window.location.href = "signIn.html"
                }
            })

            document.querySelector(".row").append(col5)
        }
    });
});