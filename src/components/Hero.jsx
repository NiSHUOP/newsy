import React from 'react';
import '../App.css';

export const Hero = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://source.unsplash.com/featured/3000x500?news" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis" style={{"font-size": "6rem"}}>newsy</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?science" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Science</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?technology" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Technology</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?health" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Health</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?entertainment" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Entertainment</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?business" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Business</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?politics" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis" >Politics</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/featured/3000x500?sports" class="d-block w-100" alt="..." />
          <div class="carousel-caption pb-5 text-center">
            <h1 class="display-4 fw-bold text-body-emphasis">Sports</h1>
            <h2 class="text-desc lead mb-4">Website Build with News API.</h2>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
