let dataBlog = [];

function addblog(event) {
    event.preventDefault();

    let tittle = document.getElementById("tittle").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let description = document.getElementById("description").value;
    let teknologi = document.getElementById("teknologi").value;


    let blog = {
    tittle,
    description,
    postDate : new Date()
        
    }
    

    dataBlog.push(blog)

    renderBlog();
}

function renderBlog() {

    document.getElementById("content").innerHTML = "";

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById("content").innerHTML += `
        <div class="box">
            <div>
            <img src="./WhatsApp Image 2024-07-15 at 21.01.44.jpeg"
                alt="profile img"
                style="width: 100%; 
                    display: block; 
                    margin: 0; 
                    ">
                <div>
                <h3 class style="margin: auto;">${dataBlog[i].tittle}</h3>
                <p style="font-size: 12px; font-weight: 100;">${getFullDate(dataBlog[i].postDate)}</p>
                <p style="margin: auto;">${dataBlog[i].description}</p>
            </div>
            <div>
                <i id="icon" class="fa-brands fa-google-play"></i>
                <i id="icon" class="fa-brands fa-android"></i>
                <i id="icon" class="fa-brands fa-java"></i>
            </div>
            <div class="row col-md-12">
                <div class="col-md-6">
                    <button type="submit" id="buttonblog">edit</button>
                </div>
                <div class="col-md-6">
                    <button type="submit" id="buttonblog">delete</button>
                </div>
            </div>
        </div>
        `;
    }
}
function getFullDate(time){
let nameOfMonth = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
]
let date = time.getDate();
let month = nameOfMonth[time.getMonth()];
let year = time.getFullYear();

let hour = time.getHours();
let minute = time.getMinutes();

return `${date} ${month} ${year} - ${hour}:${minute} WIB`;

}
// const start = new Date();
// console.log(start);
// console.log("tanggal : ", start.getDate()); 
// console.log("bulan : ", nameOfMonth[start.getMonth()]);
// console.log("tahun : ", start.getFullYear());


