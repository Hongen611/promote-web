import "./FeaturesDetails.css";

import activityImg from "../assets/activityTracker.png";
import chatbotImg from "../assets/chatBot.png";
import doctorImg from "../assets/connectDoctor.png";
import goalsImg from "../assets/goal.png";
import achievementImg from "../assets/achievement.png";
import nutritionImg from "../assets/logMeal.png";
import biomarkerImg from "../assets/biomarker.png";

const features = [
  {
    id: "activity",
    title: "Track Health Metrics",
    desc1:
        "Monitor your daily activity, steps, calories, and overall health performance in real-time.",
    desc2:
        "Track both your physical activity and nutrition intake to gain a complete view of your health.",
    images: [activityImg, nutritionImg], 
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    desc1:
      "Interact with our AI-powered assistant to receive instant health advice and personalized guidance.",
    desc2:
      "Whether you need tips, reminders, or support, AURA is always ready to help you stay on track.",
    image: chatbotImg,
  },
  {
    id: "hospital",
    title: "Locate Nearest Hospital",
    desc1:
    "Quickly find nearby hospitals and healthcare facilities based on your real-time location.",
    desc2:
    "In emergencies, easily access directions and essential information to get medical help fast.",
    image: null,
  },
  {
    id: "doctor",
    title: "Connect with Healthcare Provider",
    desc1:
      "Consult with certified doctors and healthcare professionals directly through the platform.",
    desc2:
      "Receive expert advice tailored to your health data anytime without visiting a clinic.",
    image: doctorImg,
  },
  {
    id: "biomarker",
    title: "Connect with Biomarker Devices",
    desc1:
    "Integrate with wearable devices such as smartwatches to collect real-time health data automatically.",
    desc2:
    "Track important indicators like heart rate, activity levels, and sleep patterns for a complete health overview.",
    image: biomarkerImg, 
  },
  {
    id: "goals",
    title: "Goals & Achievements",
    desc1:
    "Set personalized health goals such as steps, calories, and wellness targets while tracking your progress over time.",
    desc2:
    "Unlock achievements as you reach milestones and stay motivated with rewards that celebrate your consistency and growth.",
    images: [goalsImg, achievementImg],
  },
];

function FeaturesDetails() {
  return (
    <section className="feature-details">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          id={feature.id}
          className={`detail-section ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="detail-text">
            <h2>{feature.title}</h2>
            <p>{feature.desc1}</p>
            <p>{feature.desc2}</p>
          </div>

          <div className="detail-image">
            {/* Single image */}
            {feature.image && (
            <img src={feature.image} alt={feature.title} />
            )}

            {/* Multiple images */}
            {feature.images && (
            <div className="multi-image">
                {feature.images.map((img, i) => (
                <img key={i} src={img} alt="feature" />
                ))}
            </div>
            )}

            {/* No image */}
            {!feature.image && !feature.images && (
            <div className="no-image-box">
                <p>🔗 Connect with your wearable devices</p>
            </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeaturesDetails;