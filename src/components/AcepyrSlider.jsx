import React,{ useRef } from "react";
import { motion,useMotionValue,useTransform } from "framer-motion";
import "../styles/AcepyrSlide.css";

// Import ảnh từ assets (sửa lại tên file cho đúng với thư mục của bạn)
import img1 from "../assets/main/1.png";
import img2 from "../assets/main/2.png";
import img3 from "../assets/main/3.png";
import img4 from "../assets/main/4.png";
import img5 from "../assets/main/5.png";
import img6 from "../assets/main/6.png";
import img7 from "../assets/main/7.png";
import img8 from "../assets/main/8.png";
import img9 from "../assets/main/9.png";
import img10 from "../assets/main/10.png";

const ArcSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10];

  const radius = 400; // Bán kính vòng xoay
  const x = useMotionValue(0);
  
  // rotation: Chỉ dùng để xoay các ảnh quanh tâm, không di chuyển khung hình
  // Kéo 800px sẽ xoay được 180 độ
  const rotation = useTransform(x, [-400, 400], [-90, 90]);

  return (
    <div className="fixed-viewport">
      <div className="fixed-scene">
        {/* motion.div này đóng vai trò là 'vùng nhận diện kéo' (Drag Surface) */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} // Giữ tâm x luôn ở 0
          dragElastic={0} 
          onDrag={(event, info) => {
             // Cập nhật giá trị x thủ công để tính góc, nhưng không di chuyển div này
             x.set(info.offset.x);
          }}
          style={{ rotateY: rotation }} // Chỉ xoay tại chỗ, không thay đổi vị trí x
          className="fixed-rail"
        >
          {images.map((img, i) => {
            const angleStep = 360 / images.length;
            const currentAngle = i * angleStep;

            return (
              <div
                key={i}
                className="anchor-point"
                style={{
                  transform: `rotateY(${currentAngle}deg) translateZ(${radius}px)`,
                }}
              >
                {/* Ảnh luôn xoay ngược lại để đối diện người dùng */}
                <motion.div 
                  className="static-card"
                  style={{ 
                    rotateY: useTransform(rotation, (r) => -r - currentAngle) 
                  }}
                >
                  <img src={img} alt={`Slide ${i}`} draggable="false" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
          </div>
  );
};

export default ArcSlider;