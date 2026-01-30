function combineStandards() {
  standard_1_1_1()
  standard_1_2_2()
  standard_1_3_1()
  standard_1_4_2()
  standard_1_4_4()
  standard_2_1_1()
  //standard_2_4_7()
  standard_3_1_1()
  standard_4_1_2()
}

document.addEventListener("load", () => {
  combineStandards();
});

// const observer = new MutationObserver(() => {
//   combineStandards();
// });

// observer.observe(document.documentElement, {
//   childList: true,
//   subtree: true
// });
