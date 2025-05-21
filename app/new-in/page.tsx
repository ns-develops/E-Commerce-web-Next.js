// app/new-in/page.tsx

import Image from "next/image";
import NewInCarousel from "./NewInCarousel";
import "./page2.css";

export default function NewInPage() {
  return (
    <div className="new-in-container">
      <div className="new-in-text">New-In Clothes</div>
      <div className="sustainable-text">Sustainable</div>

      <div className="carousel-container">
        <NewInCarousel>
          <div className="carousel-slide">
            <Image src="/image2.jpg" alt="Image 2" width={600} height={400} />
          </div>
          <div className="carousel-slide">
            <Image src="/image1.jpg" alt="Image 1" width={600} height={400} />
          </div>
        </NewInCarousel>
      </div>
    </div>
  );
}

