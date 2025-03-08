import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function QRScanGreeting() {
  const [userName, setUserName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({ background: "linear-gradient(90deg, #4F46E5, #D946EF, #EC4899)" });
  const audioRef = useRef(null);

  const songs = [
    "https://masstamilan.dev/downloader/XtJXTCdOTqVluZXhDNlp8w/1741360009/d320_cdn/24279/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/qozdTY5ks80Wfzpsd46qdw/1741360929/d320_cdn/9737/MjAwMTo0ODYwOjc6NDA1OjpkOA==",
    "https://masstamilan.dev/downloader/ZXu-hSL-WlvyiLGKxZ6eeA/1741361046/d320_cdn/9778/MjQwOTo0MGY0OjQwZGM6NjhhNDo4MDAwOjo=",
    "https://masstamilan.dev/downloader/ZXu-hSL-WlvyiLGKxZ6eeA/1741361046/d320_cdn/9773/MjQwOTo0MGY0OjQwZGM6NjhhNDo4MDAwOjo=",
    "https://masstamilan.dev/downloader/ILBBbSjJaTmDoWfugtUYSg/1741361133/d320_cdn/32437/MTU3LjQ5LjIyNy4xMTE=",
    "https://masstamilan.dev/downloader/JNBYMfhNzTHssj8eTkxhGQ/1741361171/d320_cdn/21908/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/YASARg8NltxQody39bn7TQ/1741361163/d320_cdn/3240/MjQwMTo0OTAwOjFjMjk6N2QyMDo4OGIzOmRkZWU6NWY2Mjo1Y2Fm",
    "https://masstamilan.dev/downloader/BY1URm7hh9JFyvlqRR61Bw/1741361220/d320_cdn/22204/MjQwMTo0OTAwOjU2MTg6YWQ3Njo2ODY3OmU2ZmY6ZmViZDpmYWNl",
    "https://masstamilan.dev/downloader/jlkX70Mn8T8YjiDYEFqNEA/1741361311/d320_cdn/21168/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/jlkX70Mn8T8YjiDYEFqNEA/1741361311/d320_cdn/21170/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/t7q1PjyS0VqRFcJ73Zqa7Q/1741361360/d320_cdn/7890/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/t7q1PjyS0VqRFcJ73Zqa7Q/1741361360/d320_cdn/7892/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/Wf7Ndgr4sUG3n71zf2Eupw/1741361434/d320_cdn/24693/MjQwMTo0OTAwOjkyNDg6N2QwYjo5Y2RiOmRiZTE6YzE4Mzo4NGI2",
    "https://masstamilan.dev/downloader/qEiXG6kAVItLeLmLmOruoQ/1741361460/d320_cdn/6799/MTUyLjU4LjI0Ni40Nw==",
  ];
  const randomSong = songs[Math.floor(Math.random() * songs.length)];

  const handleSubmit = () => {
    if (userName.trim() !== "") {
      setSubmitted(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 500);
    } else {
      alert("Please enter your name.");
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const animate = () => {
        analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b) / bufferLength;
        const intensity = Math.min(255, Math.floor(avg * 2));
        setBackgroundStyle({
          background: `linear-gradient(90deg, rgb(${intensity}, 70, 230), rgb(${intensity}, 100, 239), rgb(236, 72, ${intensity}))`,
          transition: "background 0.2s ease-in-out"
        });
        requestAnimationFrame(animate);
      };
      audio.addEventListener("play", () => {
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }
        animate();
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white p-6 transition-all duration-500 w-full" style={backgroundStyle}>
      {!submitted ? (
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-black text-center max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">Enter your name</h2>
          <input
            type="text"
            className="p-4 w-full text-lg border rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="mt-6 px-8 py-4 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-purple-700">Welcome, {userName}!</h2>
          <p className="text-lg text-gray-700 mt-4">Your dedicated song:</p>
          <div className="mt-6 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center w-full">
            <div className="relative w-full max-w-xs bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
              <audio
                ref={audioRef}
                className="w-full bg-white p-4 rounded-lg shadow-md"
                controls
                src={randomSong}
                autoPlay
              ></audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
