'use client';

import { useEffect } from 'react';

export default function AgeVerification() {
  useEffect(() => {
    const verified = sessionStorage.getItem('age-verified');
    if (verified !== 'true') {
      const modal = document.createElement('div');
      modal.id = 'age-modal';
      modal.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 10000;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      `;
      
      modal.innerHTML = `
        <div style="
          max-width: 500px;
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a, #111);
          border: 1px solid rgba(201,169,98,0.3);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
        ">
          <div style="
            width: 80px;
            height: 80px;
            margin: 0 auto 24px;
            border: 2px solid #c9a962;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
          ">🍷</div>
          
          <h1 style="
            font-size: 36px;
            font-weight: 300;
            letter-spacing: 0.2em;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #e8d5a3, #c9a962, #8b7355);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">ETHO BEVERAGES</h1>
          
          <p style="color: #c9a962; font-size: 12px; letter-spacing: 0.3em; margin-bottom: 32px;">LUXURY SPIRITS</p>
          
          <h2 style="color: #fff; font-size: 24px; font-weight: 300; margin-bottom: 16px;">
            Age Verification Required
          </h2>
          
          <p style="color: #888; font-size: 14px; line-height: 1.7; margin-bottom: 32px;">
            You must be 21 years of age or older to enter this website.
          </p>
          
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button id="age-yes" style="
              padding: 16px 40px;
              background: linear-gradient(135deg, #c9a962, #e8d5a3);
              border: none;
              border-radius: 8px;
              color: #000;
              font-weight: 600;
              font-size: 14px;
              letter-spacing: 0.1em;
              cursor: pointer;
              transition: all 0.3s;
            ">I AM 21+</button>
            
            <button id="age-no" style="
              padding: 16px 40px;
              background: transparent;
              border: 1px solid #444;
              border-radius: 8px;
              color: #888;
              font-weight: 500;
              font-size: 14px;
              letter-spacing: 0.1em;
              cursor: pointer;
              transition: all 0.3s;
            ">UNDER 21</button>
          </div>
          
          <p style="color: #444; font-size: 11px; margin-top: 24px;">
            Please drink responsibly.
          </p>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      document.getElementById('age-yes')?.addEventListener('click', () => {
        sessionStorage.setItem('age-verified', 'true');
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.5s';
        setTimeout(() => modal.remove(), 500);
      });
      
      document.getElementById('age-no')?.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
      });
    }
  }, []);
  
  return null;
}
