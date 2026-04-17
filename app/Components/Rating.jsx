"use client";
import { useState } from "react";

export default function Rating(props) {
  const [rating, setRating] = useState(props.value);

  function increase() {
    if (rating < 5) {
      setRating(rating + 1);
    }
  }

  function decrease() {
    if (rating > 0) {
      setRating(rating - 1);
    }
  }

  return (
    <div className="rating-box">
      <span className="stars">⭐ {rating} / 5</span>

      <div className="btn-group">
        <button
          className="btn decrease"
          onClick={decrease}
        >
          −
        </button>

        <button
          className="btn increase"
          onClick={increase}
        >
          +
        </button>
      </div>

      <style jsx>{`
        .rating-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 8px;
          padding: 6px 10px;
          border-radius: 10px;
          background: #f8fafc;
        }

        .stars {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .btn-group {
          display: flex;
          gap: 6px;
        }

        .btn {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: none;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .increase {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
        }

        .decrease {
          background: #e2e8f0;
          color: #0f172a;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .increase:hover {
          box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
        }

        .decrease:hover {
          background: #cbd5e1;
        }

        .btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}