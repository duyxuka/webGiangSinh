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


