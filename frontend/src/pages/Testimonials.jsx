import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Solvias & Evolve",
      quote:
        "Working with Eduardo was a great asset for our journey to commercial excellence! From day one, he seamlessly integrated himself into our team, demonstrating an incredible commitment to our goals.",
      author: "Juergen Rotzler, PhD",
      date: "Nov 7, 2024",
      image: "/images/testimonials/solvias.jpg",
    },
    {
      company: "Gattefossé & Evolve",
      quote:
        "We had the pleasure of working with Eduardo on our pharmaceutical business development initiatives. His insights and structured approach helped us identify new opportunities and align our internal teams for success.",
      author: "Angelito DELOS REYES, GM",
      date: "Sept 13, 2024",
      image: "/images/testimonials/gattefosse.jpg",
    },
    {
      company: "NextPharma & Evolve",
      quote:
        "Eduardo has been supporting us in our business development strategy. He has demonstrated the unique combination of analytical strength, commercial acumen, and the ability to drive results through collaboration.",
      author: "Pierre DELAVAUD, EVP S&M",
      date: "May 1, 2024",
      image: "/images/testimonials/nextpharma.jpg",
    },
    {
      company: "On Commercial Excellence Transformation",
      quote:
        "Genuine passion, engagement & relentless drive. Eduardo’s contributions were indispensable: strategic insight, motivational leadership, and deep industry knowledge. He quickly earned the team’s trust and amplified collective engagement.",
      author: "Michel Letzelter",
      image: "/images/testimonials/commercial-excellence.jpg",
    },
    {
      company: "On Bio2Business (Events Organisation)",
      quote:
        "Process Driven, Analytical Approach. Eduardo demonstrated a process driven, analytical approach, driving the project forward over tight timelines with comprehensive documentation. Through this, we achieved a clear development pathway for the business.",
      author: "Richard Collins",
      image: "/images/testimonials/bio2business.jpg",
    },
    {
      company: "On Training Courses",
      quote:
        "Deep Insight and Great Trainer Skills. Eduardo’s wit and charisma are exceptional, and his performance as a trainer reflects deep knowledge and the ability to blend expertise with just the right amount of fun.",
      author: "Marek Babusiak",
      image: "/images/testimonials/training.jpg",
    },
    {
      company: "On Being a Guest Speaker",
      quote:
        "Your panel immediately gains credibility & respect. Eduardo’s stage presence and ability to engage are unmatched. His industry experience and communication style bring clarity and inspiration to every discussion.",
      author: "Charlie Brault",
      date: "Sept 24, 2025",
      image: "/images/testimonials/speaker.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Testimonials
      </h1>

      <div className="space-y-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center md:items-start bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <img
                src={t.image}
                alt={t.company}
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl shadow-md border border-gray-100"
              />
            </div>

            {/* Text content */}
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {t.company}
              </h2>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <p className="text-sm text-gray-500">
                — {t.author} {t.date ? `· ${t.date}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
