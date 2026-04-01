import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">

        <h2>Everything You Need for a Healthier Life</h2>

        <p className="features-subtitle">
            Comprehensive health tracking and management tools designed
            to empower your wellness journey.
        </p>

        <div className="features-grid">

            <div className="feature-card"
                onClick={() => {
                document.getElementById("activity").scrollIntoView({
                behavior: "smooth"
                    });
                }}
            >
            <div className="icon blue">📈</div>
            <h3>Track Health Metrics</h3>
            <p>
                Monitor your daily activity, nutrition, and health vitals
                with precision tracking technology
            </p>
            </div>

            <div className="feature-card"
            onClick={() => {
            document.getElementById("chatbot").scrollIntoView({
            behavior: "smooth"
                });
            }}
            >
            <div className="icon red">🤖</div>
            <h3>AI Chatbot</h3>
            <p>
                Get instant health advice, reminders, 
                and personalized recommendations anytime.
            </p>
            </div>

            <div className="feature-card"
            onClick={() => {
            document.getElementById("hospital").scrollIntoView({
            behavior: "smooth"
                });
            }}
            >
            <div className="icon purple">📍</div>
            <h3>Locate Nearest Hospital</h3>
            <p>
                Quickly find nearby hospitals and healthcare
                facilities during emergencies.
            </p>
            </div>

            <div className="feature-card"
            onClick={() => {
            document.getElementById("doctor").scrollIntoView({
            behavior: "smooth"
                });
            }}
            >
            <div className="icon blue">💬</div>
            <h3>Connect with Healthcare Provider</h3>
            <p>
                Consult doctors and receive professional recommendations 
                based on your health data.
            </p>
            </div>

            <div className="feature-card"
            onClick={() => {
            document.getElementById("biomarker").scrollIntoView({
            behavior: "smooth"
                });
            }}
            >
            <div className="icon grey">⌚</div>
            <h3>Connect with Biomarker Devices</h3>
            <p>
                Sync with wearable devices to track real-time health data 
                such as heart rate, activity, and vital signs.
            </p>
            </div>

            <div className="feature-card"
            onClick={() => {
            document.getElementById("goals").scrollIntoView({
            behavior: "smooth"
                });
            }}
            >
            <div className="icon yellow">🏆</div>
            <h3>Set Goals and Achievements</h3>
            <p>
                Define your health goals and celebrate milestones with
                personalized achievements and rewards.
            </p>
            </div>

        </div>

    </section>
  );
}

export default Features;