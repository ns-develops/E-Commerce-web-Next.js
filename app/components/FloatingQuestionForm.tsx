"use client";

import { useState } from "react";
import "./FloatingQuestionForm.css";

export default function FloatingQuestionForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="floating-btn">
        Help
      </button>

      {isOpen && (
        <div className="question-form">
          <h2 className="text-lg font-bold mb-2">Have you questions?</h2>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">E-mail</label>
              <input
                type="email"
                className="w-full border px-3 py-2 text-sm rounded"
                placeholder="Your e-mail"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="w-full border px-3 py-2 text-sm rounded"
                rows={3}
                placeholder="Write your questions..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
