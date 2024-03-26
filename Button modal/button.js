document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModalBtn");

  //   btn.addEventListener("click", () => {
  //     modal.style.display = "block";
  //   });

  //   document.addEventListener("keydown", (event) => {
  //     if (event.key === "Enter") {
  //       modal.style.display = "block";
  //     } else if (event.key === "Escape" && modal.style.display === "block") {
  //       modal.style.display = "none";
  //     }
  //   });
  // });

  btn.addEventListener(
    "focus",
    () => {
      modal.style.display = "block";
    },
    true
  );

  btn.addEventListener(
    "blur",
    () => {
      modal.style.display = "none";
    },
    true
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      btn.blur();
    }
  });
});
