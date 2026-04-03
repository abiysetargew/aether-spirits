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
          max-width: 420px;
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a, #111);
          border: 1px solid rgba(201,169,98,0.3);
          border-radius: 4px;
          padding: 48px;
          text-align: center;
        ">
          <div style="
            width: 64px;
            height: 64px;
            margin: 0 auto 24px;
            border: 1px solid rgba(201,169,98,0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            color: #c9a962;
          ">A</div>
          
          <h1 style="
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 0.3em;
            margin-bottom: 4px;
            color: #fff;
          ">ADEY</h1>
          
          <p style="color: #c9a962; font-size: 9px; letter-spacing: 0.4em; margin-bottom: 32px;">SPIRITS</p>
          
          <h2 style="color: #fff; font-size: 18px; font-weight: 300; margin-bottom: 16px;">
            Age Verification
          </h2>
          
          <p style="color: #666; font-size: 13px; line-height: 1.7; margin-bottom: 32px;">
            You must be 18 years of age or older to enter this website.
          </p>
          
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button id="age-yes" style="
              padding: 14px 32px;
              background: linear-gradient(135deg, #c9a962, #e8d5a3);
              border: none;
              border-radius: 2px;
              color: #000;
              font-weight: 500;
              font-size: 11px;
              letter-spacing: 0.15em;
              cursor: pointer;
              transition: all 0.3s;
            ">I AM 18+</button>
            
            <button id="age-no" style="
              padding: 14px 32px;
              background: transparent;
              border: 1px solid #333;
              border-radius: 2px;
              color: #666;
              font-weight: 500;
              font-size: 11px;
              letter-spacing: 0.15em;
              cursor: pointer;
              transition: all 0.3s;
            ">UNDER 18</button>
          </div>
          
          <p style="color: #333; font-size: 10px; margin-top: 24px;">
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
