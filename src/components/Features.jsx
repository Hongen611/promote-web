import "./Features.css";

function Features() {
  return (
    <section className="features">

        <h2>Everything You Need for a Healthier Life</h2>

        <p className="features-subtitle">
            Comprehensive health tracking and management tools designed
            to empower your wellness journey.
        </p>

        <div className="features-grid">

            <div className="feature-card">
            <div className="icon blue">📈</div>
            <h3>Activity Tracking</h3>
            <p>
                Monitor your daily steps, distance, and calories burned
                with precision tracking technology.
            </p>
            </div>

            <div className="feature-card">
            <div className="icon red">❤️</div>
            <h3>Heart Rate Monitor</h3>
            <p>
                Track your heart rate in real-time and get insights into
                your cardiovascular health.
            </p>
            </div>

            <div className="feature-card">
            <div className="icon purple">🌙</div>
            <h3>Sleep Analysis</h3>
            <p>
                Understand your sleep patterns and get personalized
                recommendations for better rest.
            </p>
            </div>

            <div className="feature-card">
            <div className="icon green">🥗</div>
            <h3>Nutrition Tracking</h3>
            <p>
                Log meals and track nutritional intake to maintain a
                balanced and healthy diet.
            </p>
            </div>

            <div className="feature-card">
            <div className="icon blue">💬</div>
            <h3>Health Chat</h3>
            <p>
                Communicate with healthcare professionals and receive
                personalized advice.
            </p>
            </div>

            <div className="feature-card">
            <div className="icon teal">🩺</div>
            <h3>Medical Support</h3>
            <p>
                Access professional medical resources and connect with
                nearby healthcare providers.
            </p>
            </div>

        </div>

    </section>
  );
}

export default Features;