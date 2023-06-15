var library = [
    { id: "HoangSa", name: "Hoàng Sa (Đà Nẵng)", number: 65 },
    { id: "TruongSa", name: "Trường Sa (Khánh Hòa)", number: 64 },
    { id: "YenBai", name: "Yên Bái", number: 63 },
    { id: "VinhPhuc", name: "Vĩnh Phúc", number: 62 },
    { id: "VinhLong", name: "Vĩnh Long", number: 61 },
    { id: "TuyenQuang", name: "Tuyên Quang", number: 60 },
    { id: "TraVinh", name: "Trà Vinh", number: 59 },
    { id: "TienGiang", name: "Tiền Giang", number: 58 },
    { id: "ThuaThienHue", name: "Thừa Thiên - Huế", number: 57 },
    { id: "ThanhHoa", name: "Thanh Hóa", number: 56 },
    { id: "ThaiNguyen", name: "Thái Nguyên", number: 55 },
    { id: "ThaiBinh", name: "Thái Bình", number: 54 },
    { id: "TayNinh", name: "Tây Ninh", number: 53 },
    { id: "SonLa", name: "Sơn La", number: 52 },
    { id: "SocTrang", name: "Sóc Trăng", number: 51 },
    { id: "QuangTri", name: "Quảng Trị", number: 50 },
    { id: "QuangNinh", name: "Quảng Ninh", number: 49 },
    { id: "QuangNgai", name: "Quảng Ngãi", number: 48 },
    { id: "QuangNam", name: "Quảng Nam", number: 47 },
    { id: "QuangBinh", name: "Quảng Bình", number: 46 },
    { id: "PhuYen", name: "Phú Yên", number: 45 },
    { id: "PhuTho", name: "Phú Thọ", number: 44 },
    { id: "NinhThuan", name: "Ninh Thuận", number: 43 },
    { id: "NinhBinh", name: "Ninh Bình", number: 42 },
    { id: "NgheAn", name: "Nghệ An", number: 41 },
    { id: "NamDinh", name: "Nam Định", number: 40 },
    { id: "LongAn", name: "Long An", number: 39 },
    { id: "LangSon", name: "Lạng Sơn", number: 38 },
    { id: "LamDong", name: "Lâm Đồng", number: 37 },
    { id: "LaoCai", name: "Lào Cai", number: 36 },
    { id: "LaiChau", name: "Lai Châu", number: 35 },
    { id: "KomTum", name: "Kom Tum", number: 34 },
    { id: "KienGiang", name: "Kiên Giang", number: 33 },
    { id: "KhanhHoa", name: "Khánh Hòa", number: 32 },
    { id: "HungYen", name: "HưngYên", number: 31 },
    { id: "HoaBinh", name: "Hòa Bình", number: 30 },
    { id: "HoChiMinh", name: "Hồ Chí Minh", number: 29 },
    { id: "HauGiang", name: "Hậu Giang", number: 28 },
    { id: "HaiPhong", name: "Hải Phòng", number: 27 },
    { id: "HaiDuong", name: "Hải Dương", number: 26 },
    { id: "HaTinh", name: "Hà Tĩnh", number: 25 },
    { id: "HaNoi", name: "Hà Nội", number: 24 },
    { id: "HaNam", name: "Hà Nam", number: 23 },
    { id: "HaGiang", name: "Hà Giang", number: 22 },
    { id: "GiaLai", name: "Gia Lai", number: 21 },
    { id: "DongThap", name: "Đồng Tháp", number: 20 },
    { id: "DongNai", name: "Đồng Nai", number: 19 },
    { id: "DienBien", name: "Điện Biên", number: 18 },
    { id: "DakNong", name: "Đắk Nông", number: 17 },
    { id: "DakLak", name: "Đắk Lắk", number: 16 },
    { id: "DaNang", name: "Đà Nẵng", number: 15 },
    { id: "CanTho", name: "Cần Thơ", number: 14 },
    { id: "CaoBang", name: "Cao Bằng", number: 13 },
    { id: "CaMau", name: "Cà Mau", number: 12 },
    { id: "BinhThuan", name: "Bình Thuận", number: 11 },
    { id: "BinhPhuoc", name: "Bình Phước", number: 10 },
    { id: "BinhDuong", name: "Bình Dương", number: 9 },
    { id: "BinhDinh", name: "Bình Định", number: 8 },
    { id: "BenTre", name: "Bến Tre", number: 7 },
    { id: "BacNinh", name: "Bắc Ninh", number: 6 },
    { id: "BacGiang", name: "Bắc Giang", number: 5 },
    { id: "BacCan", name: "Bắc Cạn", number: 4 },
    { id: "BacLieu", name: "Bạc Liêu", number: 3 },
    { id: "BaRiaVungTau", name: "Bà Rịa - Vũng Tàu", number: 2 },
    { id: "AnGiang", name: "An Giang", number: 1 }
];

function findProvince(id) {
    for (var i = 0; i < library.length; i++) {
        if (id == library[i].id) {
            return library[i];
        }
    }
}

function displayProvince(jsonData) {
    return `
    <div class="info-component">
      <div class="title-content">
          <p class="subtitle">Chào mừng bạn đến với</p>
          <h2 class="info-title">${jsonData.province}</h2>
          <div class="underline"></div>
          <p class="info-text">${jsonData.description}</p>
      </div>
      <div class="section natural-section">
          <div class="natural-img"><img src="${jsonData.naturalImg}" alt=""></div>
          <div class="natural-content">
              <h3 class="ex-title">Khám phá Thiên Nhiên</h3>
              <div class="underline"></div>
              <p class="ex-text">${jsonData.naturalDescription}</p>
          </div>
      </div>

      <div class="section schedule-section">
          <div class="schedule-content">
              <h3 class="ex-title">Lịch trình gợi ý</h3>
              <div class="underline"></div>
              <p class="ex-text">${jsonData.scheduleDescription}</p>
          </div>
          <div class="schedule-wrapper">
              <div class="schedule-box">
                  <div class="schedule-img"><img src="${jsonData.fImg}" alt=""></div>
                  <div class="schedule-info">
                      <p>Ngày đầu tiên</p>
                      <h4>${jsonData.firstDay}</h4>
                      <p class="ex-text">${jsonData.fDescription}</p>
                  </div>
              </div>
              <div class="schedule-box">
                  <div class="schedule-img"><img src="${jsonData.sImg}" alt=""></div>
                  <div class="schedule-info">
                      <p>Ngày thứ hai</p>
                      <h4>${jsonData.secondDay}</h4>
                      <p class="ex-text">${jsonData.sDescription}</p>
                  </div>
              </div>
              <div class="schedule-box">
                  <div class="schedule-img"><img src="${jsonData.tImg}" alt=""></div>
                  <div class="schedule-info">
                      <p>Ngày thứ ba</p>
                      <h4>${jsonData.thirdDay}</h4>
                      <p class="ex-text">${jsonData.tDescription}</p>
                  </div>
              </div>
              <div class="schedule-box">
                  <div class="schedule-img"><img src="${jsonData.lImg}" alt=""></div>
                  <div class="schedule-info">
                      <p>Ngày cuối cùng</p>
                      <h4>${jsonData.lastDay}
                      </h4>
                      <p class="ex-text">${jsonData.lDescription}</p>
                  </div>
              </div>
          </div>
      </div>
      <!-- community -->
      <div class="community-section">
          <div class="community-content">
              <h3 class="ex-title">Cộng đồng Techtrek tại đây</h3>
              <div class="underline"></div>
              <p class="ex-text">Bạn có thể tham gia cùng Cộng đồng TechTrek để khám phá <br>những vẻ đẹp tuyệt vời
                  của Việt Nam cùng các Trekker.</p>
          </div>
          
          <div class="community-wrapper">
              <div class="community-box">
                  <div class="community-img"><img src="${jsonData.personImg1}" alt=""></div>
                  <div class="name-info">
                      <h5 class="name">${jsonData.name1}</h5>
                      <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                  <p>Vui tính, hòa đồng, thân thiện</p>
                  <div class="location">
                      <ion-icon name="location"></ion-icon>
                      <span>${jsonData.location1}</span>
                  </div>
              </div>
              <div class="community-box">
                  <div class="community-img"><img src="${jsonData.personImg2}" alt=""></div>
                  <div class="name-info">
                      <h5 class="name">${jsonData.name2}</h5>
                      <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                  <p>Vui vẻ, hoạt bát, mến khách</p>
                  <div class="location">
                      <ion-icon name="location"></ion-icon>
                      <span>${jsonData.location2}</span>
                  </div>
              </div>
              <div class="community-box">
                  <div class="community-img"><img src="${jsonData.personImg3}" alt=""></div>
                  <div class="name-info">
                      <h5 class="name">${jsonData.name3}</h5>
                      <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                  <p>Chuyên nghiệp, lịch sự</p>
                  <div class="location">
                      <ion-icon name="location"></ion-icon>
                      <span>${jsonData.location3}</span>
                  </div>
              </div>
              <div class="community-box">
                  <div class="community-img"><img src="${jsonData.personImg4}" alt=""></div>
                  <div class="name-info">
                      <h5 class="name">${jsonData.name4}</h5>
                      <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                  <p>Đam mê khám phá, năng nổ</p>
                  <div class="location">
                      <ion-icon name="location"></ion-icon>
                      <span>${jsonData.location4}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
    `;
}

$(document).ready(function () {
    $("svg").svgPanZoom();
});

$(document).on('click', 'path', function (e) {
    var province = findProvince(e.target.id);
    var jsonPath = "province/" + province.id + ".json";
    $.getJSON(jsonPath, function (data) {
        // Hiển thị thông tin về tỉnh thành và dữ liệu từ tệp JSON
        $("#info-box").css('display', 'block');
        $("#info-box").css({ position: "absolutely", left: 650, top: 0 });
        $('#info-box').html(displayProvince(data));
    });
});
$(document).ready(function () {
    $("svg").svgPanZoom();

    // Event listener for mouseover
    $(document).on('mouseover', 'path', function (e) {
        var province = findProvince(e.target.id);
        // Display the province name
        $("#info-box1").text(province.name);
        $("#info-box1").css('display', 'block');
        $("#info-box1").css({ position: "absolutely", left: e.pageX +30, top: e.pageY  , 'z-index':1000});
    });

    // Event listener for mouseout
    $(document).on('mouseout', 'path', function (e) {
        // Hide the province name when the mouse moves out
        $("#info-box1").css('display', 'none');
    });
});
