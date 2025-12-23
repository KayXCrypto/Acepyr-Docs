import React from "react";
import "../styles/ImageSlider.css";
import img1 from "../assets/layer1.png";
import img2 from "../assets/layer2.png";
import img3 from "../assets/layer3.png";
import img4 from "../assets/layer4.png";
import img5 from "../assets/layer5.png";
import img6 from "../assets/layer6.png";

const ImageSlider = () => {
    // Danh sách 6 ảnh từ acepyr.com hoặc placeholder chất lượng cao
    const images = [img1, img2, img3, img4, img5, img6
    ];

    // Nhân đôi mảng để tạo hiệu ứng lặp vô tận
    const displayImages = [...images, ...images];

    return (
        <div className="slider-container">
            <div className="slider-track">
                {displayImages.map((img, index) => (
                    <div className="slide" key={index}>
                        <img src={img} alt={`Acepyr insight ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;