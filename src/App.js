import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export default function QRScanGreeting() {
  const [userName, setUserName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [backgroundStyle, ] = useState({ background: "linear-gradient(90deg, #4F46E5, #D946EF, #EC4899)" });

  const myStyle = {
    backgroundImage:
        "url('https://wallpapers.com/images/featured/portrait-photography-background-8havpbr5k0u2fbb9.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  const spotifySongs = [
    "https://open.spotify.com/embed/track/5Y7Y315vZkOZbesJ22jXkK?utm_source=generator",
    "https://open.spotify.com/embed/track/4tU15AbFbtTSScUXJ2G28O?utm_source=generator",
    "https://open.spotify.com/embed/track/7nRFeG20drpHn9CqPuRVJ6?utm_source=generator",
    "https://open.spotify.com/embed/track/2dRj9RAkUWmsWeYnKR1ohe?utm_source=generator",
    "https://open.spotify.com/embed/track/09Z6o1yu596HJAwWZxTz4m?utm_source=generator",
    "https://open.spotify.com/embed/track/5DYfTyqUNBmOnQtljQjYk2?utm_source=generator",
    "https://open.spotify.com/embed/track/0FTPiuMAGuvXVjeXh7g8ot?utm_source=generator",
    "https://open.spotify.com/embed/track/45THyhjDbYhNU7bDrTTUK6?utm_source=generator",
    "https://open.spotify.com/embed/track/1AbSrAwrzuC3FcDXoYi3ED?utm_source=generator",
    "https://open.spotify.com/embed/track/5HgXSvl2YoBtEY623UsACk?utm_source=generator",
    "https://open.spotify.com/embed/track/2uMh5DHeh70RoQ572k5oPI?utm_source=generator",
    "https://open.spotify.com/embed/track/3IpEJ86hrMfUcoXCk9U4h3?utm_source=generator",
    "https://open.spotify.com/embed/track/6t2rDXyJZUD6uTp7P8e6Z4?utm_source=generator",
    "https://open.spotify.com/embed/track/22yZ031igTDdn2Q6mSG79Y?utm_source=generator",
    "https://open.spotify.com/embed/track/0xttqqTj7ZAGyVkfOYxQ4F?utm_source=generator",
    "https://open.spotify.com/embed/track/1L5jOr4vqumGibHTQtVwWq?utm_source=generator",
    "https://open.spotify.com/embed/track/5TL3UHuEBRMPbAIAOiPJmc?utm_source=generator",
    "https://open.spotify.com/embed/track/65dvxc4Kctq3JIJ2BkKKMj?utm_source=generator",
    "https://open.spotify.com/embed/track/72niNpc1LP2DEqaF118U7M?utm_source=generator",
    "https://open.spotify.com/embed/track/0KrKZB1EpquuWxhEU2nesa?utm_source=generator",
    "https://open.spotify.com/embed/track/0523YjBhkcVoAGONOUFrf6?utm_source=generator",
    "https://open.spotify.com/embed/track/7daqDwcy1W8UUdqgFAYB6P?utm_source=generator",
    "https://open.spotify.com/embed/track/5anRo1ZiyrQ79IFT5jyATP?utm_source=generator",
    "https://open.spotify.com/embed/track/6id01ayZW6GNqKTYDvVREN?utm_source=generator",
    "https://open.spotify.com/embed/track/1Nr46gjiP50uPsz30gYhAd?utm_source=generator",
    "https://open.spotify.com/embed/track/0iJPMG79hgWnDHjufnoplb?utm_source=generator",
    "https://open.spotify.com/embed/track/4wCy7erulqUfFQNVaZBD9b?utm_source=generator",
    "https://open.spotify.com/embed/track/6TQS7URegxmcb8tTNpoXzi?utm_source=generator",
    "https://open.spotify.com/embed/track/7e97QgqoYTXOj1s7JI0dHR?utm_source=generator",
    "https://open.spotify.com/embed/track/5XbHpOBN1vTU3hN1YzLqHL?utm_source=generator",
    "https://open.spotify.com/embed/track/5z1MmQVl17aPPi3VHL5C5Z?utm_source=generator",
    "https://open.spotify.com/embed/track/1AzNN19lPYC68iacrbWL8X?utm_source=generator",
  ];
  const randomSong = spotifySongs[Math.floor(Math.random() * spotifySongs.length)];

  const handleSubmit = () => {
    if (userName.trim() !== "") {
      setSubmitted(true);
    } else {
      alert("Please enter your name.");
    }
  };

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
        <div className="text-center bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full" style={myStyle}>
          <h2 className="text-4xl font-extrabold text-red-800 outline-4 ">Welcome, {userName}!</h2>
          <p className="text-lg text-gray-700 mt-4 font-bold">Your dedicated song 🎶 :) </p>
          <div className="mt-6 p-6 rounded-xl flex flex-col items-center w-full">
          <iframe style={{ borderRadius: "12px" }} src={randomSong}
          width="280px" height="322" frameBorder="0" allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy" title="Spotify Song">
          </iframe>
          </div>
        </div>
      )}
    </div>
  );
}
