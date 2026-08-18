import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants/project";
import useScrollSquish from "../hooks/useScrollSquish.jsx";

gsap.registerPlugin(ScrollTrigger);

const TYPE_LABEL = {
  PERSONAL: "개인프로젝트",
  TEAM: "팀프로젝트",
};

const PRODUCT_SLUGS = ["hello-money", "slow-mode", "bookkok"];

const ProductSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(null);
  const [showCursor, setShowCursor] = useState(false);
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);

  // padding은 li 자체가 아니라 안쪽 .product__text(padding: 2.4vw 0, vw 단위)에 있음.
  // 상대값(-=, +=)이라 vw 기반이어도 반응형 그대로 유지됨
  useScrollSquish(sectionRef, ".product__list li .product__text", { amount: 12 });

  const products = PRODUCT_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".product__list li", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product__list",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (imageId) => {
    setActiveImage(imageId);
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
    setShowCursor(false);
  };

  return (
    <>
      <section id="product" className="product_wrap section" ref={sectionRef}>
        <div className="inner">
          <h2 className="main-title">Development Projects</h2>
          <div>
            <ul className="product__list">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/project/${product.slug}`}
                    onMouseEnter={() => handleMouseEnter(product.imageId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <figure className="img__box">
                      <img src={product.image} alt={product.title} />
                    </figure>
                    <div className="product__text">
                      <h5>{product.title}</h5>
                      <p className="hash">
                        {product.tags.split(" ").map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </p>
                      <p className="desc">
                        {TYPE_LABEL[product.type] ?? product.type}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 커서 이미지 박스 */}
      <div className="cursor">
        <div
          className={`img-box ${showCursor ? "on" : ""}`}
          ref={cursorRef}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.imageId}
              id={product.imageId}
              className={`image ${activeImage === product.imageId ? "on" : ""}`}
            >
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;