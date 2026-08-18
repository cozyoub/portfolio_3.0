import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * 리스트 아이템이 스크롤로 화면을 지나갈 때, 그 엘리먼트에 실제로 적용된
 * CSS padding 값을 기준으로 amount(px)만큼 상대적으로 줄었다가(-=)
 * 다시 원래 값으로 돌아오는(+=) "꿀렁" 효과.
 *
 * 절대 px값을 지정하지 않고 상대값(+=, -=)으로 움직이기 때문에,
 * padding이 vw 단위거나 미디어쿼리로 화면 크기별로 달라져도
 * 항상 "현재 렌더링된 값" 기준으로 자연스럽게 동작함.
 *
 * ⚠️ selector는 padding이 실제로 걸려있는 엘리먼트를 정확히 가리켜야 함.
 * (li 자체가 아니라 li 안쪽에 padding이 있는 요소일 수도 있음 - CSS 확인 필수)
 *
 * @param {React.RefObject} containerRef
 * @param {string} selector
 * @param {object} options
 * @param {number} options.amount - 줄어드는 정도(px), 기본 20
 * @param {("top"|"bottom")[]} options.sides - 움직일 방향, 기본 ['top','bottom']
 */

export default function useScrollSquish(
  containerRef,
  selector,
  { amount = 20, sides = ["top", "bottom"] } = {}
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(selector);
    if (!items.length) return;

    const squishVars = {};
    const restoreVars = {};
    if (sides.includes("top")) {
      squishVars.paddingTop = `-=${amount}`;
      restoreVars.paddingTop = `+=${amount}`;
    }
    if (sides.includes("bottom")) {
      squishVars.paddingBottom = `-=${amount}`;
      restoreVars.paddingBottom = `+=${amount}`;
    }

    const tweens = [];

    items.forEach((item) => {
      // fromVars 없이 to()만 사용 → 시작값은 현재 CSS에 렌더링된 padding 그대로 사용
      const tween = gsap.to(item, {
        keyframes: {
          "50%": squishVars, // 지나가는 중간에 살짝 줄어듦
          "100%": restoreVars, // 다시 원래 값으로 복귀
        },
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [containerRef, selector, amount, sides.join(",")]);
}