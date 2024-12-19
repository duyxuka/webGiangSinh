$(document).ready(function () {
  // Snowflake Effect
  function createSnowflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const snowflake = isRound
      ? $('<div class="snowflake round-snowflake"></div>')
      : $('<div class="snowflake">❄</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    snowflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round snowflakes
      height: size + "px", // For round snowflakes
      animationDuration: duration + "s",
    });

    $("#snowflakes-container").append(snowflake);

    // Remove snowflake after animation
    setTimeout(() => snowflake.remove(), duration * 1000);
  }

  setInterval(createSnowflake, 200);
});

$(document).ready(function () {
  // Snowflake Effect (Giữ nguyên mã này từ trước)
  function createSnowflake() {
    const isRound = Math.random() > 0.5;
    const snowflake = isRound
      ? $('<div class="snowflake round-snowflake"></div>')
      : $('<div class="snowflake">❄</div>');

    const size = Math.random() * 30 + 10;
    const position = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    snowflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px",
      height: size + "px",
      animationDuration: duration + "s",
    });

    $("#snowflakes-container").append(snowflake);
    setTimeout(() => snowflake.remove(), duration * 1000);
  }
  setInterval(createSnowflake, 200);
  // Countdown Timer
  function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 December

    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1); // Chuyển sang năm sau nếu đã qua ngày Giáng Sinh
    }
    const timeRemaining = christmas - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#countdown").text(
      `${days} Ngày : ${hours} Giờ : ${minutes} Phút : ${seconds} Giây`
    );
    if (timeRemaining <= 0) {
      $("#countdown").text("🎄 Merry Christmas! 🎅");
    }
  }
  setInterval(updateCountdown, 1000);

  // Button Click Effect (Giữ nguyên mã này từ trước)
  $(".sparkle-button").click(function () {
    alert("🎅 Ho Ho Ho! You have opened a magical gift!");
  });
});

$(document).ready(function () {
  // satanflake Effect
  function createSatanflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const satanflake = isRound
      ? $('<div class="satanflake round-satanflake"></div>')
      : $('<div class="satanflake">🎅</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    satanflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round satanflakes
      height: size + "px", // For round satanflakes
      animationDuration: duration + "s",
    });

    $("#satanflakes-container").append(satanflake);

    // Remove satanflake after animation
    setTimeout(() => satanflake.remove(), duration * 1000);
  }

  setInterval(createSatanflake, 200);
});

$(document).ready(function () {
  // satanflake Effect
  function createPinetreeflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const pinetreeflake = isRound
      ? $('<div class="pinetreeflake round-pinetreeflake"></div>')
      : $('<div class="pinetreeflake">🎄</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    pinetreeflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round pinetreeflakes
      height: size + "px", // For round pinetreeflakes
      animationDuration: duration + "s",
    });

    $("#pinetreeflakes-container").append(pinetreeflake);

    // Remove pinetreeflake after animation
    setTimeout(() => pinetreeflake.remove(), duration * 1000);
  }

  setInterval(createPinetreeflake, 200);
});

$(document).ready(function () {
  // Snowmanflake Effect
  function createSnowmanflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const snowmanflake = isRound
      ? $('<div class="snowmanflake round-snowmanflake"></div>')
      : $('<div class="snowmanflake">☃️</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    snowmanflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round snowmanflakes
      height: size + "px", // For round snowmanflakes
      animationDuration: duration + "s",
    });

    $("#snowmanflakes-container").append(snowmanflake);

    // Remove snowmanflake after animation
    setTimeout(() => snowmanflake.remove(), duration * 1000);
  }

  setInterval(createSnowmanflake, 200);
});

$(document).ready(function () {
  // reindeerflake Effect
  function createReindeerflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const reindeerflake = isRound
      ? $('<div class="reindeerflake round-reindeerflake"></div>')
      : $('<div class="reindeerflake">🦌</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    reindeerflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round reindeerflakes
      height: size + "px", // For round reindeerflakes
      animationDuration: duration + "s",
    });

    $("#reindeerflakes-container").append(reindeerflake);

    // Remove reindeerflake after animation
    setTimeout(() => reindeerflake.remove(), duration * 1000);
  }

  setInterval(createReindeerflake, 200);
});

$(document).ready(function () {
  // socksflake Effect
  function createSocksflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const socksflake = isRound
      ? $('<div class="socksflake round-socksflake"></div>')
      : $('<div class="socksflake">🧦</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    socksflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round socksflakes
      height: size + "px", // For round socksflakes
      animationDuration: duration + "s",
    });

    $("#socksflakes-container").append(socksflake);

    // Remove socksflake after animation
    setTimeout(() => socksflake.remove(), duration * 1000);
  }

  setInterval(createSocksflake, 200);
});

$(document).ready(function () {
  // giftflake Effect
  function createGiftflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const giftflake = isRound
      ? $('<div class="giftflake round-giftflake"></div>')
      : $('<div class="giftflake">🎁</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    giftflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round giftflakes
      height: size + "px", // For round giftflakes
      animationDuration: duration + "s",
    });

    $("#giftflakes-container").append(giftflake);

    // Remove giftflake after animation
    setTimeout(() => giftflake.remove(), duration * 1000);
  }

  setInterval(createGiftflake, 200);
});

function checkScroll() {
  const elements = document.querySelectorAll(".animate-left, .animate-right");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= windowHeight - 100 && rect.bottom >= 100;

    if (isVisible) {
      element.classList.add("show");
    } else {
      element.classList.remove("show"); // Xóa khi cuộn ngược lên
    }
  });
}

// Gọi hàm khi cuộn trang
window.addEventListener("scroll", checkScroll);

$(document).ready(function () {
  const audio = document.getElementById("audio");
  const muteButton = document.getElementById("mute");
  const unmuteButton = document.getElementById("unmute");

  // Bắt sự kiện click vào biểu tượng âm thanh
  const enableAudio = () => {
    audio.play();
  };

  // Xử lý nút tắt tiếng
  unmuteButton.addEventListener("click", () => {
    audio.volume = 0;
    muteButton.style.display = "block";
    unmuteButton.style.display = "none";
  });

  // Xử lý nút bật tiếng
  muteButton.addEventListener("click", () => {
    audio.volume = 1;
    muteButton.style.display = "none";
    unmuteButton.style.display = "block";
    enableAudio();
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomAnimation() {
  const animations = ["float", "blink", "wiggle", "pulse"];
  return animations[Math.floor(Math.random() * animations.length)];
}
const wishes = [
  "Mong bạn luôn hạnh phúc và thành công!",
  "Chúc bạn một năm mới tràn đầy niềm vui và sức khỏe!",
  "Hy vọng mọi ước mơ của bạn sẽ thành hiện thực.",
  "Chúc bạn luôn gặp may mắn trong mọi việc.",
  "Mong bạn có một cuộc sống đầy yêu thương và hạnh phúc.",
  "Chúc bạn luôn mạnh mẽ và vững vàng trong mọi thử thách.",
  "Chúc bạn một mùa Giáng sinh an lành và ấm áp!",
  "Hy vọng bạn sẽ tìm thấy hạnh phúc trong những điều nhỏ bé.",
  "Chúc bạn mọi điều tốt đẹp trong cuộc sống và công việc.",
  "Mong bạn có một cuộc sống viên mãn và đầy ý nghĩa.",
  "Chúc bạn luôn thành công trong mọi dự định của mình!",
  "Mong rằng năm mới sẽ mang lại nhiều niềm vui và hạnh phúc cho bạn!",
  "Chúc bạn tìm được bình an trong tâm hồn và niềm vui trong công việc!",
  "Hy vọng bạn sẽ có một năm tràn đầy may mắn và sự nghiệp thăng tiến!",
  "Chúc bạn đạt được tất cả mục tiêu của mình trong năm nay!",
  "Mong bạn sẽ luôn giữ được nụ cười trên môi và tình yêu trong trái tim!",
  "Chúc bạn có một cuộc sống tràn đầy sức khỏe và niềm vui bất tận!",
  "Hy vọng bạn luôn tìm thấy sự an yên trong những thử thách cuộc sống!",
  "Chúc bạn luôn giữ được sự lạc quan và can đảm vượt qua mọi khó khăn!",
  "Mong rằng bạn sẽ luôn đạt được những thành công lớn trong công việc và cuộc sống!",
];

// Gán sẵn các lời chúc lên cây thông ở vị trí ngẫu nhiên khi trang được tải
window.onload = function () {
  wishes.forEach((wish) => {
    const tree = document.getElementById("tree");
    const wishNode = document.createElement("div");
    wishNode.className = "wish";

    wishNode.innerHTML = `<div class="wish-btn" style="cursor: pointer;"><strong>📜 </strong>${wish.substring(0, 50)}${wish.length > 50 ? "..." : ""}</div>`;

    // Random color and animation
    wishNode.style.color = getRandomColor();
    wishNode.style.animation = `${getRandomAnimation()} 3s ease-in-out infinite, blink 1s infinite alternate`;

    // Random position
    const maxX = tree.clientWidth - 150;
    const maxY = tree.clientHeight - 150;
    const posX = Math.random() * maxX;
    const posY = Math.random() * maxY;

    wishNode.style.left = `${posX}px`;
    wishNode.style.top = `${posY}px`;

    // Thêm sự kiện click để hiển thị thiệp
    wishNode.addEventListener("click", function () {
      const wishContent = document.getElementById("wishContent");

      // Thiết lập nội dung thiệp
      wishContent.innerHTML = `
        <div class="card wishCard show">
        <div class="imgBox">
          <div class="bark"></div>
          <img src="https://github.com/Panbap/datapanbap/blob/main/image/mery.png?raw=true">
        </div>
        <div class="details">
          <h4 class="color2 margin">🎄 MERRY CHRISTMAS 🎄</h4>
          <p class="text-center">${wish}</p>
          <button id="closeCard">X</button>
        </div>
      </div>
      `;

      document.getElementById("closeCard").addEventListener("click", function () {
        wishContent.querySelector(".wishCard").classList.remove("show");
        wishContent.querySelector(".wishCard").classList.add("hidden");
      });
    });

    tree.appendChild(wishNode);
  });
};


function addWish() {
  const wishInput = document.getElementById("wish");
  const wishText = wishInput.value.trim();

  if (!wishText) {
    alert("Bạn chưa nhập lời chúc kìa!");
    return;
  }

  const tree = document.getElementById("tree");
  const wishNode = document.createElement("div");
  wishNode.className = "wish";

  const uniqueID = `wish-${Date.now()}`;
  // wishNode.innerHTML = `<button class="wish-btn" data-id="${uniqueID}">📜 ${wishText.substring(
  //   0,
  //   50
  // )}${wishText.length > 50 ? "..." : ""}</button>`;
  wishNode.innerHTML = `<div class="wish-btn" data-id="${uniqueID}" style="cursor: pointer;"><strong>📜 </strong>${wishText.substring(0, 50)}${wishText.length > 50 ? "..." : ""}</div>`;

  wishNode.querySelector(".wish-btn").addEventListener("click", function () {
    const wishContent = document.getElementById("wishContent");

    wishContent.innerHTML = `
      <div class="card wishCard show">
        <div class="imgBox">
          <div class="bark"></div>
          <img src="https://github.com/Panbap/datapanbap/blob/main/image/mery.png?raw=true">
        </div>
        <div class="details">
          <h4 class="color2 margin">🎄 MERRY CHRISTMAS 🎄</h4>
          <p class="text-center">${wishText}</p>
          <button id="closeCard">X</button>
        </div>
      </div>
    `;

    // Đóng thiệp khi click vào nút đóng
    document.getElementById("closeCard").addEventListener("click", function () {
      wishContent.querySelector(".wishCard").classList.remove("show");
      wishContent.querySelector(".wishCard").classList.add("hidden");
    });
  });

  wishNode.style.color = getRandomColor();
  wishNode.style.animation = `${getRandomAnimation()} 3s ease-in-out infinite, blink 1s infinite alternate`;

  const maxX = tree.clientWidth - 150;
  const maxY = tree.clientHeight - 150;
  const posX = Math.random() * maxX;
  const posY = Math.random() * maxY;

  wishNode.style.left = `${posX}px`;
  wishNode.style.top = `${posY}px`;

  tree.appendChild(wishNode);
  wishInput.value = "";
}


// Đóng thiệp
document.getElementById("closeButton").addEventListener("click", function () {
  const guideInfo = document.getElementById("guideInfo");

  guideInfo.classList.remove("show");
  guideInfo.classList.add("hidden");
});
