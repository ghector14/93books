// All your books in one place - just add entries here as you read new books
const booksData = [
  {
    id: 1,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    abbrev: "HTWFIP",
    coverImage: "pictures/HWFIP.jpg",
    coverFront: "https://m.media-amazon.com/images/I/41pqEVq1MQL._AC_SY1000_.jpg",
    coverBack: "https://m.media-amazon.com/images/I/51nhK7pMuVL._AC_SY780_.jpg",
    spine: "https://live.staticflickr.com/65535/51932114975_b31b4914e7_b.jpg",
    dateRead: "2023-01",
    genre: "Self-help",
    summary: {
      intro: "Dale Carnegie's timeless classic on human relations and influence.",
      sections: [
        {
          title: "Fundamental Techniques in Handling People",
          content: "Don't criticize, condemn, or complain. Give honest and sincere appreciation. Arouse in the other person an eager want."
        },
        {
          title: "Six Ways to Make People Like You",
          content: "Become genuinely interested in other people. Smile. Remember that a person's name is to that person the sweetest sound. Be a good listener. Talk in terms of the other person's interests."
        },
        {
          title: "Win People to Your Way of Thinking",
          content: "Avoid arguments. Show respect for the other person's opinions. If you are wrong, admit it quickly. Get the other person saying 'yes, yes' immediately."
        }
      ]
    }
  },
  {
    id: 2,
    title: "You Can Be Happy No Matter What",
    author: "Richard Carlson",
    abbrev: "YCBHNMW",
    coverImage: "pictures/YCBHNMW.jpg",
    coverFront: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171466627l/100287._SX318_.jpg",
    coverBack: "https://live.staticflickr.com/65535/51932101455_6faefd9b41_b.jpg",
    spine: "https://live.staticflickr.com/65535/51931804879_8e4e4bab64_b.jpg",
    dateRead: "2023-02",
    genre: "Psychology",
    summary: {
      intro: "You Can Be Happy No Matter What was written by bestselling author and nationally known stress management consultant Dr. Richard Carlson.",
      sections: [
        {
          title: "PART 1 – The Principles",
          content: `
            <strong>ONE: The principle of thought</strong><br><br>
            Understanding the nature of thought is the foundation of living a happy and functional life. Thinking goes on whether we want it or not and it's an impersonal element of our existence. Your thoughts, not your circumstances determine how you feel. The same circumstance can and will mean entirely different things to different people. The significance of everything that happens in your life is determined by your thought system.
            <br><br>
            <strong>TWO: The principle of mood</strong><br><br>
            When you are in a high mood, life looks good. You have perspective and common sense. In low moods, we lose our ability to listen, and our perspective flies out the window. Moods are part of being a human being and you can't avoid them. The only feelings you will ever experience in a low mood are negative; thus it makes no sense to trust or act on those feelings.
            <br><br>
            <strong>THREE: The principle of separate realities</strong><br><br>
            Each thought system is unique to itself. Our parents, backgrounds, interpretations, memory, circumstances- many factors play roles in determining our thought system. When we expect to see things differently, the compassion we have for ourselves and others rises dramatically.
            <br><br>
            <strong>FOURTH: The principle of feelings</strong><br><br>
            Your feelings are a foolproof guidance system that helps you navigate through life. Your feelings let you know when you are off track and headed toward unhappiness and conflict. Negative feelings will disappear quickly enough if we simply let them alone.
          `
        },
        {
          title: "PART 2 – Applying the Principles",
          content: "Practical applications of the four principles in daily life situations."
        }
      ]
    }
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    abbrev: "TPON",
    coverImage: "pictures/TPON.jpg",
    coverFront: "https://images-na.ssl-images-amazon.com/images/I/71wzP4rL1mL.jpg",
    coverBack: "https://images-na.ssl-images-amazon.com/images/I/81saR9ldJHL.jpg",
    spine: "https://live.staticflickr.com/65535/51931518058_1ae940cf55_b.jpg",
    dateRead: "2023-03",
    genre: "Spirituality",
    summary: {
      intro: "A guide to spiritual enlightenment and the importance of living in the present moment.",
      sections: [
        {
          title: "Key Concepts",
          content: "The present moment is all you ever have. Time is an illusion. The ego lives in the past and future, creating suffering."
        }
      ]
    }
  },
  {
    id: 4,
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    abbrev: "TTP",
    coverImage: "pictures/TTP.jpg",
    coverFront: "pictures/TTP.jpg",
    coverBack: "",
    spine: "",
    dateRead: "2023-04",
    genre: "Psychology",
    summary: {
      intro: "How little things can make a big difference in creating social epidemics.",
      sections: []
    }
  },
  {
    id: 5,
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    abbrev: "OAWF",
    coverImage: "pictures/OAWF.jpg",
    coverFront: "",
    coverBack: "",
    spine: "",
    dateRead: "2023-05",
    genre: "Self-help",
    summary: {
      intro: "What makes high-achievers different? The 10,000 hour rule and cultural advantages.",
      sections: []
    }
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    abbrev: "7H",
    coverImage: "pictures/7H.jpg",
    coverFront: "",
    coverBack: "",
    spine: "",
    dateRead: "2023-06",
    genre: "Self-help",
    summary: {
      intro: "A principle-centered approach for solving personal and professional problems.",
      sections: []
    }
  }
  
  // ADD YOUR REMAINING 44 BOOKS HERE
  // Just copy the structure above and fill in your book details
  // For books without the 3D effect yet, leave coverFront, coverBack, and spine as empty strings
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = booksData;
}
