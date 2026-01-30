import standard_1_1_1 from './standards/standard-1.1.1'
import standard_1_2_2 from './standards/standard-1.2.2'
import standard_1_3_1 from './standards/standard-1.3.1'
import standard_1_4_2 from './standards/standard-1.4.2'
import standard_1_4_3 from './standards/standard-1.4.3'
import standard_1_4_4 from './standards/standard-1.4.4'
import standard_2_1_1 from './standards/standard-2.1.1'
import standard_2_4_7 from './standards/standard-2.4.7'
import standard_3_1_1 from './standards/standard-3.1.1'
import standard_4_1_2 from './standards/standard-4.1.2'

function combineStandards() {
  standard_1_1_1()
  standard_1_2_2()
  standard_1_3_1()
  standard_1_4_2()
  standard_1_4_3()
  standard_1_4_4()
  standard_2_1_1()
  standard_2_4_7()
  standard_3_1_1()
  standard_4_1_2()
}

document.addEventListener("DOMContentLoaded", () => {
  combineStandards();
});

const observer = new MutationObserver(() => {
  combineStandards();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
