window.addEventListener("load", function () {
  const tabs = document.querySelectorAll(".tab-item");
  // lấy ra danh sách item, nội dung bên trong của nó
  const tabsContent = document.querySelectorAll(".tab-content");

  function handleChangeTab(e) {
    // muốn lấy giá trị của custom attribute thì dùng dataset
    const tabId = e.target.dataset.tab;
    //đầu tiên sẽ vào tất cả các tab item để xóa active đi
    tabs.forEach((el) => el.classList.remove("active"));

    // ban đầu chỉ để active cho tab-item đầu tiên
    e.target.classList.add("active");

    // đến lượt tab content cũng xóa hết active đi
    tabsContent.forEach((el) => {
      el.classList.remove("active");
      // nếu data-tab trùng vs tabId đã lấy ra đc các dataset tương ứng thì mới active ra
      if (el.getAttribute("data-tab") === tabId) {
        el.classList.add("active");
      }
    });
  }

  // tạo sự kiện khi click vào gọi tab ra
  tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
});
